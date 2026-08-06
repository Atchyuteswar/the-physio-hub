import Image from "next/image";
import Link from "next/link";
import { Camera, ArrowRight } from "lucide-react";
import type { Gallery } from "@prisma/client";

export default function GalleryPreviewSection({ images }: { images: Gallery[] }) {
  if (!images || images.length === 0) return null;

  return (
    <section className="py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
              <Camera className="w-4 h-4 text-green-600" />
              <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">Gallery</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Inside Our <br />
              <span className="text-green-600">Clinic & Facility</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="btn-outline shrink-0 inline-flex items-center gap-2"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.slice(0, 6).map((image, idx) => (
            <div
              key={image.id}
              className={`relative group rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 ${
                idx === 0 ? "md:row-span-2 md:col-span-1" : ""
              }`}
            >
              <div className={`relative ${idx === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-square"}`}>
                <Image
                  src={image.imageUrl}
                  alt={image.caption || "Gallery image"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300" />
              </div>

              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
