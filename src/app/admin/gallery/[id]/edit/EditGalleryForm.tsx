"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowLeft, Loader2, Save } from "lucide-react";
import Link from "next/link";
import { Gallery } from "@prisma/client";

export default function EditGalleryForm({ image }: { image: Gallery }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [caption, setCaption] = useState(image.caption || "");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`/api/gallery/${image.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ caption }),
      });

      if (res.ok) {
        toast.success("Caption updated successfully!");
        router.push("/admin/gallery");
        router.refresh();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to update caption.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl">
      {/* Back Link */}
      <Link
        href="/admin/gallery"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Gallery
      </Link>

      <div className="card-static p-5 sm:p-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Edit Image Caption</h1>
        <p className="text-sm text-slate-500 mb-8">
          Update the caption for this gallery image. The image file itself cannot be changed.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="admin-label mb-2">Image Preview</label>
            <div className="w-48 aspect-square relative rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.imageUrl} alt="Preview" className="object-cover w-full h-full" />
            </div>
          </div>

          <div>
            <label htmlFor="caption" className="admin-label">
              Caption (Optional)
            </label>
            <input
              id="caption"
              placeholder="E.g., Our new state-of-the-art rehabilitation room"
              className="admin-input"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              maxLength={100}
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary text-sm!"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Changes
                </>
              )}
            </button>

            <Link
              href="/admin/gallery"
              className="btn-outline text-sm!"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
