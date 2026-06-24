import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const lead = await prisma.contactLead.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message,
      },
    });

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
