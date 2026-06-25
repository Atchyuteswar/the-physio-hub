import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Plus, ImageOff, Edit2 } from "lucide-react";
import DeleteGalleryButton from "./DeleteGalleryButton";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function AdminGalleryPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1"));
  const take = 12; // 4 columns * 3 rows
  const skip = (currentPage - 1) * take;

  const [images, total] = await Promise.all([
    prisma.gallery.findMany({
      orderBy: { createdAt: "desc" },
      take,
      skip,
    }),
    prisma.gallery.count(),
  ]);

  const totalPages = Math.ceil(total / take);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Gallery</h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage clinic gallery images
          </p>
        </div>

        <Link
          href="/admin/gallery/new"
          className="btn-primary text-sm! py-2.5! px-4!"
        >
          <Plus className="w-4 h-4" />
          Upload Image
        </Link>
      </div>

      {/* Gallery Grid */}
      {images.length === 0 ? (
        <div className="card-static p-12 text-center">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
            <ImageOff className="w-7 h-7 text-slate-400" />
          </div>
          <p className="text-slate-500 font-medium">No images yet</p>
          <p className="text-sm text-slate-400 mt-1">
            Click &quot;Upload Image&quot; to get started
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="card-static overflow-hidden group relative"
            >
              <div className="aspect-square bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.imageUrl}
                  alt={image.caption || "Gallery"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Action Overlays */}
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 touch-visible transition">
                <Link
                  href={`/admin/gallery/${image.id}/edit`}
                  className="p-2 rounded-lg bg-white/90 text-slate-700 hover:text-blue-600 hover:bg-white transition shadow-lg"
                  title="Edit Caption"
                >
                  <Edit2 className="w-4 h-4" />
                </Link>
                <DeleteGalleryButton id={image.id} />
              </div>

              {image.caption && (
                <div className="p-3 bg-white border-t border-slate-100">
                  <p className="text-xs text-slate-600 truncate font-medium">
                    {image.caption}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4">
          <p className="text-sm text-slate-500">
            Showing {skip + 1} to {Math.min(skip + take, total)} of {total} images
          </p>
          <div className="flex items-center gap-2">
            {currentPage > 1 && (
              <Link
                href={`/admin/gallery?page=${currentPage - 1}`}
                className="btn-outline text-sm! py-1.5! px-3!"
              >
                Previous
              </Link>
            )}
            {currentPage < totalPages && (
              <Link
                href={`/admin/gallery?page=${currentPage + 1}`}
                className="btn-outline text-sm! py-1.5! px-3!"
              >
                Next
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}