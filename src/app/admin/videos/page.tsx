import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Plus, ExternalLink, Video, Search, Edit2 } from "lucide-react";
import DeleteVideoButton from "./DeleteVideoButton";

interface Props {
  searchParams: Promise<{ q?: string; page?: string }>;
}

export default async function VideosPage({ searchParams }: Props) {
  const { q, page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1"));
  const take = 10;
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Videos</h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage educational video content
          </p>
        </div>

        <Link
          href="/admin/videos/new"
          className="btn-primary text-sm! py-2.5! px-4!"
        >
          <Plus className="w-4 h-4" />
          Add Video
        </Link>
      </div>

      {/* Search Bar */}
      <form method="GET" action="/admin/videos" className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder="Search videos by title..."
          className="admin-input pl-10! py-2! text-sm"
        />
      </form>

      {/* Table */}
      <div className="card-static overflow-hidden">
        {videos.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <Video className="w-7 h-7 text-slate-400" />
            </div>
            <p className="text-slate-500 font-medium">
              {q ? "No videos matched your search" : "No videos yet"}
            </p>
            {!q && (
              <p className="text-sm text-slate-400 mt-1">
                Click &quot;Add Video&quot; to get started
              </p>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>YouTube URL</th>
                  <th>Date</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {videos.map((video) => (
                  <tr key={video.id}>
                    <td className="font-medium text-slate-900">
                      {video.title}
                    </td>
                    <td>
                      <a
                        href={video.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-green-600 hover:text-green-700 text-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Open
                      </a>
                    </td>
                    <td className="text-slate-500">
                      {new Date(video.createdAt).toLocaleDateString()}
                    </td>
                    <td className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/videos/${video.id}/edit`}
                          className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition"
                          title="Edit video"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        <DeleteVideoButton id={video.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing {skip + 1} to {Math.min(skip + take, total)} of {total} videos
          </p>
          <div className="flex items-center gap-2">
            {currentPage > 1 && (
              <Link
                href={`/admin/videos?page=${currentPage - 1}${q ? `&q=${q}` : ""}`}
                className="btn-outline text-sm! py-1.5! px-3!"
              >
                Previous
              </Link>
            )}
            {currentPage < totalPages && (
              <Link
                href={`/admin/videos?page=${currentPage + 1}${q ? `&q=${q}` : ""}`}
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
