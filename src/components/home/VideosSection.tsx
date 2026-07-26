"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import type { Video } from "@prisma/client";

function getYoutubeId(url: string) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?v=))([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
}

export default function VideosSection({ videos }: { videos: Video[] }) {
  if (!videos || videos.length === 0) return null;

  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="badge">Educational Hub</span>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900">
              Expert Advice & Exercises
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Explore our library of guided exercises, posture tips, and rehabilitation insights.
            </p>
          </div>
          <Link href="/videos" className="btn-outline shrink-0 hidden md:inline-flex">
            View All Videos
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => {
            const videoId = getYoutubeId(video.youtubeUrl);

            return (
              <a
                key={video.id}
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-slate-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-green-200"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Play className="w-6 h-6 text-green-600 ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-6 grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2 grow">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="mt-3 text-slate-600 text-sm line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  )}
                  <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-green-600">
                    Watch Video <Play className="w-4 h-4" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/videos" className="btn-outline w-full justify-center">
            View All Videos
          </Link>
        </div>
      </div>
    </section>
  );
}
