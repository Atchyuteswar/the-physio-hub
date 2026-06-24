import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Shield, Target, HeartHandshake, Star, Play } from "lucide-react";
import StatsSection from "@/components/StatsSection";
import ServicesPreview from "@/components/ServicesPreview";
import AppointmentCTA from "@/components/AppointmentCTA";
import SectionHeading from "@/components/SectionHeading";
import { prisma } from "@/lib/prisma";

function getYoutubeId(url: string) {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?v=))([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
}

export const revalidate = 3600;

import type { Testimonial, Video } from "@prisma/client";

export default async function HomePage() {
  let testimonials: Testimonial[] = [];
  let videos: Video[] = [];

  try {
    const data = await Promise.all([
      prisma.testimonial.findMany({
        orderBy: { createdAt: "desc" },
        take: 3,
      }),
      prisma.video.findMany({
        orderBy: { createdAt: "desc" },
        take: 3,
      })
    ]);
    testimonials = data[0];
    videos = data[1];
  } catch (error) {
    console.error("Database connection failed on home page:", error);
  }

  return (
    <>
      {/* ========== Hero Section ========== */}
      <section className="relative bg-white min-h-[90vh] flex items-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-green-50 rounded-full translate-x-1/3 opacity-60" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-50/50 rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="badge animate-fade-in">
              ✦ Evidence-Based Physiotherapy
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] animate-fade-in-up">
              Restore Movement.
              <br />
              <span className="text-green-600">Reduce Pain.</span>
              <br />
              Rebuild Confidence.
            </h1>

            <p className="mt-8 text-xl text-slate-500 max-w-xl leading-relaxed animate-fade-in-up delay-200">
              Personalized physiotherapy and rehabilitation programs designed to
              help you recover faster, move better, and perform at your best.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link href="/appointment" className="btn-primary">
                Book Appointment
                <ChevronRight className="w-5 h-5" />
              </Link>

              <Link href="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Stats ========== */}
      <StatsSection />

      {/* ========== Services Preview ========== */}
      <ServicesPreview />

      {/* ========== Why Choose Us ========== */}
      <section className="section bg-slate-50">
        <div className="container">
          <SectionHeading
            badge="Why Choose Us"
            title="Trusted Rehabilitation Excellence"
            subtitle="Comprehensive care designed around your recovery goals and long-term wellbeing."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {[
              {
                icon: Shield,
                title: "Expert Care",
                description:
                  "Personalized treatment plans developed using proven rehabilitation techniques by experienced physiotherapists.",
              },
              {
                icon: Target,
                title: "Modern Approach",
                description:
                  "Evidence-based physiotherapy programs focused on long-term recovery, prevention, and optimal performance.",
              },
              {
                icon: HeartHandshake,
                title: "Better Outcomes",
                description:
                  "Helping patients return to daily activities, sports, and professional life with renewed confidence and strength.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-static p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-green-50 mb-5">
                  <item.icon className="w-7 h-7 text-green-600" />
                </div>

                <h3 className="font-bold text-xl text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Doctor Section ========== */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              {/* Placeholder image area */}
              <div className="w-full aspect-4/5 rounded-2xl bg-linear-to-br from-green-50 to-green-100 flex items-center justify-center border border-green-200/50">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-green-200/50 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-green-600">👨‍⚕️</span>
                  </div>
                  <p className="text-green-600 font-medium text-sm">
                    Doctor Photo
                  </p>
                </div>
              </div>
            </div>

            <div>
              <span className="badge">Meet Our Specialist</span>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
                Expert Physiotherapy Care
              </h2>

              <p className="mt-6 text-slate-500 leading-relaxed">
                Our lead physiotherapist brings years of clinical experience in
                musculoskeletal rehabilitation, sports medicine, and chronic pain
                management.
              </p>

              <p className="mt-4 text-slate-500 leading-relaxed">
                With a commitment to evidence-based practice, every treatment
                plan is tailored to achieve the best possible outcomes for
                recovery and long-term wellness.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Certified Physiotherapist",
                  "Specialization in Sports Rehabilitation",
                  "10+ Years Clinical Experience",
                  "Evidence-Based Treatment Approach",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/appointment"
                className="btn-primary mt-8"
              >
                Book Consultation
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Testimonials Preview ========== */}
      {testimonials.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container">
            <SectionHeading
              badge="Testimonials"
              title="What Our Patients Say"
              subtitle="Real experiences from patients who've achieved their recovery goals with us."
            />

            <div className="grid md:grid-cols-3 gap-8 mt-14">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="card-static p-7"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-amber-400 fill-amber-400"
                            : "text-slate-200"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-slate-600 leading-relaxed text-sm line-clamp-4">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  <div className="mt-5 pt-5 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-700 font-semibold text-sm">
                          {testimonial.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-slate-900">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-slate-400">Patient</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/testimonials" className="btn-outline">
                View All Testimonials
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ========== Videos Preview ========== */}
      {videos.length > 0 && (
        <section className="section bg-white">
          <div className="container">
            <SectionHeading
              badge="Educational Content"
              title="Learn & Recover"
              subtitle="Watch our educational videos on physiotherapy, rehabilitation, and movement."
            />

            <div className="grid md:grid-cols-3 gap-8 mt-14">
              {videos.map((video) => {
                const videoId = getYoutubeId(video.youtubeUrl);

                return (
                  <a
                    key={video.id}
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                          <Play className="w-6 h-6 text-green-600 ml-0.5" />
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="font-semibold text-slate-900 line-clamp-1">
                        {video.title}
                      </h3>
                      {video.description && (
                        <p className="mt-2 text-sm text-slate-500 line-clamp-2">
                          {video.description}
                        </p>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="text-center mt-10">
              <Link href="/videos" className="btn-outline">
                View All Videos
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ========== Appointment CTA ========== */}
      <AppointmentCTA />
    </>
  );
}