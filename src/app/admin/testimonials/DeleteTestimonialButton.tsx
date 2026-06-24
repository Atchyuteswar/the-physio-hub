"use client";

import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function DeleteTestimonialButton({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;

    try {
      const res = await fetch(`/api/testimonials/${id}`, { method: "DELETE" });
      
      if (res.ok) {
        toast.success("Testimonial deleted successfully");
        router.refresh();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to delete testimonial");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="p-2 rounded-lg text-slate-300 hover:text-red-600 hover:bg-red-50 transition"
      title="Delete testimonial"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}
