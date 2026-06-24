import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { existsSync } from "fs";

export async function GET() {
  const images = await prisma.gallery.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(images);
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File;
    const caption = formData.get("caption") as string | null;

    if (!file) {
      return NextResponse.json({ error: "Image file is required" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.name) || ".jpg";
    const filename = `${uniqueSuffix}${extension}`;

    // Ensure directory exists
    const uploadDir = path.join(process.cwd(), "public", "uploads", "gallery");
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Write file to public/uploads/gallery
    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    // Save to database with relative public URL
    const imageUrl = `/uploads/gallery/${filename}`;
    
    const image = await prisma.gallery.create({
      data: {
        imageUrl,
        caption: caption || null,
      },
    });

    return NextResponse.json(image);
  } catch (error) {
    console.error("Gallery Upload Error:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}
