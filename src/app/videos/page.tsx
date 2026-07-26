import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Play, VideoOff, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch educational videos on physiotherapy, rehabilitation, recovery, and movement from Aatral360.",
};

function getYoutubeId(url: string) {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?v=))([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
}

interface Props {
  searchParams: Promise<{ q?: string; page?: string }>;
}

export const revalidate = 3600;

export default async function VideosPage({ searchParams }: Props) {
  const { q, page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1"));
  const take = 9; // 3x3 grid
  const skip = (currentPage - 1) * take;

  const where = q ? { title: { contains: q, mode: "insensitive" as const } } : {};

  const [videos, total] = await Promise.all([
    prisma.video.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take,
      skip,
    }),
    prisma.video.count({ where }),
  ]);

  const totalPages = Math.ceil(total / take);

  return (
    <>
      {/* Page Header */}
      <section className="bg-white border-b border-slate-100">
        <div className="container page-header">
          <span className="badge">Educational Content</span>
          <h1>Educational Videos</h1>
          <p>
            Learn more about physiotherapy, rehabilitation, recovery, and
            movement through our educational content.
          </p>

          <form method="GET" action="/physiotherapy/videos" className="relative max-w-xl mx-auto mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Search videos by title..."
              className="w-full bg-slate-50 border border-slate-200 rounded-full py-3 pl-12 pr-4 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition"
            />
          </form>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="section">
        <div className="container">
          {videos.length === 0 ? (
            <div className="card-static p-16 text-center max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-5">
                <VideoOff className="w-8 h-8 text-slate-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                {q ? "No videos found" : "No Videos Yet"}
              </h2>
              <p className="text-slate-500 mt-2">
                {q ? "Try adjusting your search terms." : "Educational videos will appear here once they are published."}
              </p>
              {q && (
                <Link href="/physiotherapy/videos" className="btn-primary mt-6">
                  Clear Search
                </Link>
              )}
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video) => {
                  const videoId = getYoutubeId(video.youtubeUrl);

                  return (
                    <a
                      key={video.id}
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card group overflow-hidden flex flex-col"
                    >
                      {/* Thumbnail */}
                      <div className="relative h-52">
                        <Image
                          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                          alt={video.title}
                          fill
                          className="object-cover"
                        />
                        {/* Play Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                            <Play className="w-7 h-7 text-green-600 ml-1" />
                          </div>
                        </div>
                        {/* Duration badge style */}
                        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          YouTube
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h2 className="text-lg font-bold text-slate-900 group-hover:text-green-700 transition line-clamp-2">
                          {video.title}
                        </h2>

                        {video.description && (
                          <p className="text-slate-500 mt-3 text-sm leading-relaxed line-clamp-3 flex-1">
                            {video.description}
                          </p>
                        )}

                        <span className="mt-4 inline-flex items-center gap-2 text-green-600 text-sm font-medium">
                          <Play className="w-4 h-4" />
                          Watch Video
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  {currentPage > 1 && (
                    <Link
                      href={`/physiotherapy/videos?page=${currentPage - 1}${q ? `&q=${q}` : ""}`}
                      className="btn-outline"
                    >
                      Previous
                    </Link>
                  )}
                  <span className="text-sm font-medium text-slate-500 px-4 py-2 bg-slate-50 rounded-lg border border-slate-200">
                    Page {currentPage} of {totalPages}
                  </span>
                  {currentPage < totalPages && (
                    <Link
                      href={`/physiotherapy/videos?page=${currentPage + 1}${q ? `&q=${q}` : ""}`}
                      className="btn-outline"
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