import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditTestimonialForm from "./EditTestimonialForm";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditTestimonialPage({ params }: Props) {
  const { id } = await params;
  
  const testimonial = await prisma.testimonial.findUnique({
    where: { id },
  });

  if (!testimonial) {
    notFound();
  }

  return <EditTestimonialForm testimonial={testimonial} />;
}
