import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const admin = await prisma.admin.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!admin) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  const valid = await bcrypt.compare(
    body.password,
    admin.password
  );

  if (!valid) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = signToken({
    id: admin.id,
    email: admin.email,
  });

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set(
    "admin-token",
    token,
    {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    }
  );

  return response;
}