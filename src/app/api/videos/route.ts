import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const videos = await prisma.video.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(videos);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const video = await prisma.video.create({
      data: {
        title: body.title,
        description: body.description,
        youtubeUrl: body.youtubeUrl,
      },
    });

    if (
      !body.youtubeUrl.includes("youtube.com") &&
      !body.youtubeUrl.includes("youtu.be")
    ) {
      return NextResponse.json(
        {
          error: "Invalid YouTube URL",
        },
        {
          status: 400,
        },
      );
    }

    return NextResponse.json(video);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create video" },
      { status: 500 },
    );
  }
}
