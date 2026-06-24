"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowLeft, Loader2, Save } from "lucide-react";
import Link from "next/link";
import { Video } from "@prisma/client";

export default function EditVideoForm({ video }: { video: Video }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: video.title,
    description: video.description || "",
    youtubeUrl: video.youtubeUrl,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.title || !form.youtubeUrl) {
      toast.error("Title and YouTube URL are required.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/videos/${video.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Video updated successfully!");
        router.push("/admin/videos");
        router.refresh();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to update video.");
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
        href="/admin/videos"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Videos
      </Link>

      <div className="card-static p-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Edit Video</h1>
        <p className="text-sm text-slate-500 mb-8">
          Update the details for this educational video
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="title" className="admin-label">
              Video Title <span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              placeholder="Enter video title"
              className="admin-input"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="admin-label">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Short description of the video"
              maxLength={200}
              className="admin-input h-28 resize-none"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
            <p className="text-xs text-slate-400 mt-1">
              {form.description.length}/200 characters
            </p>
          </div>

          <div>
            <label htmlFor="youtubeUrl" className="admin-label">
              YouTube URL <span className="text-red-500">*</span>
            </label>
            <input
              id="youtubeUrl"
              placeholder="https://www.youtube.com/watch?v=..."
              className="admin-input"
              value={form.youtubeUrl}
              onChange={(e) =>
                setForm({ ...form, youtubeUrl: e.target.value })
              }
              required
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
              href="/admin/videos"
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
