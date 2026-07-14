import Link from "next/link";
import { services } from "@/data/services";
import { ChevronRight, ArrowRight } from "lucide-react";
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
import SectionHeading from "./SectionHeading";

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

export default function ServicesPreview() {
  const previewServices = services.slice(0, 6);

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          badge="Our Services"
          title="Specialized Rehabilitation Programs"
          subtitle="Comprehensive physiotherapy programs designed for recovery, performance, and long-term health."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {previewServices.map((service) => {
            const Icon = iconMap[service.icon] || Activity;

            return (
              <Link
                key={service.slug}
                href={`/physiotherapy/services/${service.slug}`}
                className="card group p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>

                <h3 className="font-semibold text-lg text-slate-900 group-hover:text-green-700 transition">
                  {service.title}
                </h3>

                <p className="mt-2 text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-green-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/physiotherapy/services"
            className="btn-outline inline-flex items-center gap-2"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}