"use client";

import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

// Client component for deleting a video
export default function DeleteVideoButton({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this video?")) return;

    await fetch(`/api/videos/${id}`, { method: "DELETE" });
    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
      title="Delete video"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}
