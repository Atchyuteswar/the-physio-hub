"use client";

import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function DeleteGalleryButton({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      const res = await fetch(`/api/gallery/${id}`, { method: "DELETE" });
      
      if (res.ok) {
        toast.success("Image deleted successfully");
        router.refresh();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to delete image");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition shadow-lg"
      title="Delete image"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}
