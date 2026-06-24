import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { unlink } from "fs/promises";
import path from "path";
import { existsSync } from "fs";

interface Props {
  params: Promise<{ id: string }>;
}

export async function PATCH(req: Request, { params }: Props) {
  try {
    const { id } = await params;
    const body = await req.json();

    const image = await prisma.gallery.update({
      where: { id },
      data: {
        caption: body.caption || null,
      },
    });

    return NextResponse.json(image);
  } catch (error) {
    console.error("Gallery Update Error:", error);
    return NextResponse.json(
      { error: "Failed to update gallery image" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, { params }: Props) {
  try {
    const { id } = await params;

    // Fetch the image first to get the imageUrl
    const image = await prisma.gallery.findUnique({
      where: { id },
    });

    if (!image) {
      return NextResponse.json(
        { error: "Image not found" },
        { status: 404 }
      );
    }

    // Delete from database
    await prisma.gallery.delete({
      where: { id },
    });

    // Attempt to delete physical file if it's a local upload
    if (image.imageUrl.startsWith("/uploads/gallery/")) {
      const filename = image.imageUrl.replace("/uploads/gallery/", "");
      const filePath = path.join(process.cwd(), "public", "uploads", "gallery", filename);
      
      if (existsSync(filePath)) {
        await unlink(filePath);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Gallery Delete Error:", error);
    return NextResponse.json(
      { error: "Failed to delete gallery image" },
      { status: 500 }
    );
  }
}
