import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Props {
  params: Promise<{ id: string }>;
}

export async function PATCH(req: Request, { params }: Props) {
  try {
    const { id } = await params;
    const body = await req.json();

    const appointment = await prisma.appointment.update({
      where: { id },
      data: {
        status: body.status,
      },
    });

    return NextResponse.json(appointment);
  } catch (error) {
    console.error("Appointment Update Error:", error);
    return NextResponse.json(
      { error: "Failed to update appointment status" },
      { status: 500 }
    );
  }
}
