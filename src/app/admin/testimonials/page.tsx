import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Plus, MessageSquareOff, Star, Edit2 } from "lucide-react";
import DeleteTestimonialButton from "./DeleteTestimonialButton";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function AdminTestimonialsPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1"));
  const take = 12;
  const skip = (currentPage - 1) * take;

  const [testimonials, total] = await Promise.all([
    prisma.testimonial.findMany({
      orderBy: { createdAt: "desc" },
      take,
      skip,
    }),
    prisma.testimonial.count(),
  ]);

  const totalPages = Math.ceil(total / take);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Testimonials</h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage patient testimonials
          </p>
        </div>

        <Link
          href="/admin/testimonials/new"
          className="btn-primary text-sm! py-2.5! px-4!"
        >
          <Plus className="w-4 h-4" />
          Add Testimonial
        </Link>
      </div>

      {/* Testimonials Grid */}
      {testimonials.length === 0 ? (
        <div className="card-static p-12 text-center">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
            <MessageSquareOff className="w-7 h-7 text-slate-400" />
          </div>
          <p className="text-slate-500 font-medium">No testimonials yet</p>
          <p className="text-sm text-slate-400 mt-1">
            Click &quot;Add Testimonial&quot; to get started
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="card-static p-5 relative group flex flex-col"
            >
              {/* Action buttons overlay */}
              <div className="absolute top-3 right-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                <Link
                  href={`/admin/testimonials/${item.id}/edit`}
                  className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition"
                  title="Edit testimonial"
                >
                  <Edit2 className="w-4 h-4" />
                </Link>
                <DeleteTestimonialButton id={item.id} />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < item.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-slate-200"
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm text-slate-600 line-clamp-4 flex-1">
                &ldquo;{item.content}&rdquo;
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-700 font-bold text-xs">
                    {item.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium text-slate-900">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-4">
          <p className="text-sm text-slate-500">
            Showing {skip + 1} to {Math.min(skip + take, total)} of {total} testimonials
          </p>
          <div className="flex items-center gap-2">
            {currentPage > 1 && (
              <Link
                href={`/admin/testimonials?page=${currentPage - 1}`}
                className="btn-outline text-sm! py-1.5! px-3!"
              >
                Previous
              </Link>
            )}
            {currentPage < totalPages && (
              <Link
                href={`/admin/testimonials?page=${currentPage + 1}`}
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