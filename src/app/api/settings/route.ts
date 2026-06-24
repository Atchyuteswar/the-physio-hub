import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const setting = await prisma.setting.findFirst();
    return NextResponse.json(setting || {});
  } catch (error) {
    console.error("Failed to fetch settings:", error);
    return NextResponse.json(
      { error: "Failed to fetch settings" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Check if a setting record already exists
    const existing = await prisma.setting.findFirst();

    if (existing) {
      // Update existing
      const updated = await prisma.setting.update({
        where: { id: existing.id },
        data: {
          address: body.address,
          phone: body.phone,
          email: body.email,
          facebookUrl: body.facebookUrl,
          instagramUrl: body.instagramUrl,
        },
      });
      return NextResponse.json({ success: true, setting: updated });
    } else {
      // Create new
      const created = await prisma.setting.create({
        data: {
          address: body.address,
          phone: body.phone,
          email: body.email,
          facebookUrl: body.facebookUrl,
          instagramUrl: body.instagramUrl,
        },
      });
      return NextResponse.json({ success: true, setting: created });
    }
  } catch (error) {
    console.error("Failed to update settings:", error);
    return NextResponse.json(
      { error: "Failed to update settings" },
      { status: 500 }
    );
  }
}
