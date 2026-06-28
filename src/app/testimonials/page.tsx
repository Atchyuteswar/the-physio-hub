import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Star, MessageSquareOff } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what our patients say about their recovery experience at Aatral360.",
};

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export const revalidate = 3600;

export default async function TestimonialsPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1"));
  const take = 9; // 3 columns x 3 rows
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
    <>
      {/* Page Header */}
      <section className="bg-white border-b border-slate-100">
        <div className="container page-header">
          <span className="badge">Patient Stories</span>
          <h1>What Our Patients Say</h1>
          <p>
            Real experiences from patients who have achieved their recovery
            goals with our physiotherapy team.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section bg-slate-50 min-h-screen">
        <div className="container max-w-6xl">
          {testimonials.length === 0 ? (
            <div className="card-static p-16 text-center max-w-lg mx-auto bg-white">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-5">
                <MessageSquareOff className="w-8 h-8 text-slate-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                No Testimonials Yet
              </h2>
              <p className="text-slate-500 mt-2">
                Patient testimonials will appear here once they are added.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="card-static p-7 hover:shadow-xl transition-all duration-300 bg-white"
                  >
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4.5 h-4.5 ${
                            i < testimonial.rating
                              ? "text-amber-400 fill-amber-400"
                              : "text-slate-200"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-slate-600 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="mt-6 pt-5 border-t border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">
                          <span className="text-green-700 font-bold text-sm">
                            {testimonial.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5">
                            Verified Patient
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-16 flex items-center justify-center gap-2">
                  {currentPage > 1 && (
                    <Link
                      href={`/testimonials?page=${currentPage - 1}`}
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
                      href={`/testimonials?page=${currentPage + 1}`}
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
