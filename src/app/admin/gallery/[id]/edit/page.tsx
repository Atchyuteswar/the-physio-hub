import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditGalleryForm from "./EditGalleryForm";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditGalleryPage({ params }: Props) {
  const { id } = await params;
  
  const image = await prisma.gallery.findUnique({
    where: { id },
  });

  if (!image) {
    notFound();
  }

  return <EditGalleryForm image={image} />;
}
