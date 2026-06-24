import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const appointment =
      await prisma.appointment.create({
        data: {
          name: body.name,
          phone: body.phone,
          email: body.email,
          service: body.service,
          message: body.message,
        },
      });

    return NextResponse.json({
      success: true,
      appointment,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}