import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditVideoForm from "./EditVideoForm";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditVideoPage({ params }: Props) {
  const { id } = await params;
  
  const video = await prisma.video.findUnique({
    where: { id },
  });

  if (!video) {
    notFound();
  }

  return <EditVideoForm video={video} />;
}
