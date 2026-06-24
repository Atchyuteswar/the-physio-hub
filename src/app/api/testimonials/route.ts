import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(testimonials);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const testimonial = await prisma.testimonial.create({
      data: {
        name: body.name,
        content: body.content,
        rating: body.rating || 5,
      },
    });

    return NextResponse.json(testimonial);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create testimonial" },
      { status: 500 }
    );
  }
}
