"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowLeft, Loader2, Upload, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function UploadGalleryPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];
    if (selected) {
      if (!selected.type.startsWith("image/")) {
        toast.error("Please select an image file.");
        return;
      }
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!file) {
      toast.error("Please select an image to upload.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);
    if (caption) {
      formData.append("caption", caption);
    }

    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        body: formData, // No Content-Type header; fetch sets it automatically for FormData
      });

      if (res.ok) {
        toast.success("Image uploaded successfully!");
        router.push("/admin/gallery");
        router.refresh();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to upload image.");
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

      <div className="card-static p-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Upload Image</h1>
        <p className="text-sm text-slate-500 mb-8">
          Upload a new image to your clinic&apos;s public gallery.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="admin-label">Image File <span className="text-red-500">*</span></label>
            
            <div className="mt-2 flex justify-center rounded-xl border-2 border-dashed border-slate-300 px-6 py-10 bg-slate-50 hover:bg-slate-100 transition relative">
              <div className="text-center">
                {preview ? (
                  <div className="mx-auto w-48 aspect-square relative rounded-lg overflow-hidden border border-slate-200 mb-4 bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={preview} alt="Preview" className="object-cover w-full h-full" />
                  </div>
                ) : (
                  <ImageIcon className="mx-auto h-12 w-12 text-slate-300" aria-hidden="true" />
                )}
                
                <div className="mt-4 flex text-sm leading-6 text-slate-600 justify-center">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-green-600 focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 hover:text-green-500"
                  >
                    <span>{preview ? "Change image" : "Upload a file"}</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </label>
                  {!preview && <p className="pl-1">or drag and drop</p>}
                </div>
                {!preview && <p className="text-xs leading-5 text-slate-500 mt-2">PNG, JPG, WEBP up to 10MB</p>}
              </div>
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
              disabled={loading || !file}
              className="btn-primary text-sm!"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  Upload Image
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
