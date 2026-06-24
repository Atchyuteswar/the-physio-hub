"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowLeft, Loader2, Save, Star } from "lucide-react";
import Link from "next/link";

export default function NewTestimonialPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    content: "",
    rating: 5,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name || !form.content) {
      toast.error("Name and content are required.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Testimonial created successfully!");
        router.push("/admin/testimonials");
        router.refresh();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to create testimonial.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl">
      <Link
        href="/admin/testimonials"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Testimonials
      </Link>

      <div className="card-static p-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Add Testimonial</h1>
        <p className="text-sm text-slate-500 mb-8">
          Add a new patient review to be displayed on the public website.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="admin-label">
              Patient Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              placeholder="e.g. Sarah Jenkins"
              className="admin-input"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="admin-label">
              Review Content <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              placeholder="The patient's review..."
              className="admin-input min-h-[120px] resize-y"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="admin-label">Rating</label>
            <div className="flex items-center gap-1.5 mt-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setForm({ ...form, rating: star })}
                  className="p-0.5"
                >
                  <Star
                    className={`w-7 h-7 transition ${
                      star <= form.rating
                        ? "text-amber-400 fill-amber-400 scale-110"
                        : "text-slate-200 hover:text-amber-300"
                    }`}
                  />
                </button>
              ))}
              <span className="text-sm font-medium text-slate-500 ml-2">
                {form.rating} out of 5
              </span>
            </div>
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
                  Save Testimonial
                </>
              )}
            </button>

            <Link
              href="/admin/testimonials"
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
