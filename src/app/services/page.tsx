import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { services } from "@/data/services";
import {
  Activity,
  HeartPulse,
  Stethoscope,
  Zap,
  RotateCcw,
  Footprints,
  Bone,
  GraduationCap,
  Video,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive physiotherapy services including musculoskeletal conditioning, pain management, sports injury rehabilitation, and more.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  HeartPulse,
  Stethoscope,
  Zap,
  RotateCcw,
  Footprints,
  Bone,
  GraduationCap,
  Video,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-white border-b border-slate-100">
        <div className="container page-header">
          <span className="badge">Our Services</span>
          <h1>Specialized Rehabilitation Programs</h1>
          <p>
            Comprehensive physiotherapy services designed for recovery,
            performance, and long-term health.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Activity;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="card group p-8"
                >
                  <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-5 group-hover:bg-green-100 transition">
                    <Icon className="w-7 h-7 text-green-600" />
                  </div>

                  <h2 className="font-bold text-xl text-slate-900 group-hover:text-green-700 transition">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1 text-green-600 text-sm font-medium">
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}