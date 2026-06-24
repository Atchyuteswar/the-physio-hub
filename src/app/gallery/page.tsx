import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { ImageOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our clinic gallery — photos of The Physio Hub facility, treatments, and patient recovery journeys.",
};

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export const revalidate = 3600;

export default async function GalleryPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1"));
  const take = 15; // 15 images per page for a nice masonry flow
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
    <>
      {/* Page Header */}
      <section className="bg-white border-b border-slate-100">
        <div className="container page-header">
          <span className="badge">Our Gallery</span>
          <h1>Clinic Gallery</h1>
          <p>
            Take a look at our clinic, facilities, and the work we do every day
            to help patients recover.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section bg-slate-50 min-h-screen">
        <div className="container max-w-6xl">
          {images.length === 0 ? (
            <div className="card-static p-16 text-center max-w-lg mx-auto bg-white">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-5">
                <ImageOff className="w-8 h-8 text-slate-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                No Images Yet
              </h2>
              <p className="text-slate-500 mt-2">
                Gallery images will appear here once they are uploaded.
              </p>
            </div>
          ) : (
            <>
              {/* Responsive Masonry Grid using CSS Columns */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="card break-inside-avoid overflow-hidden group bg-white hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden bg-slate-100">
                      <Image
                        src={image.imageUrl}
                        alt={image.caption || "Gallery image"}
                        width={800}
                        height={800}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>

                    {image.caption && (
                      <div className="p-4 border-t border-slate-50">
                        <p className="text-sm text-slate-600 font-medium">
                          {image.caption}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-16 flex items-center justify-center gap-2">
                  {currentPage > 1 && (
                    <Link
                      href={`/gallery?page=${currentPage - 1}`}
                      className="btn-outline bg-white"
                    >
                      Previous
                    </Link>
                  )}
                  <span className="text-sm font-medium text-slate-500 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-xs">
                    Page {currentPage} of {totalPages}
                  </span>
                  {currentPage < totalPages && (
                    <Link
                      href={`/gallery?page=${currentPage + 1}`}
                      className="btn-outline bg-white"
                    >
                      Next
                    </Link>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
