import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
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
  HeartHandshake,
  Dumbbell,
  Building2,
} from "lucide-react";

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
  HeartHandshake,
  Dumbbell,
  Building2,
};

const ServiceCard = ({ service }: { service: (typeof services)[0] }) => {
  const Icon = iconMap[service.icon] || Activity;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="shrink-0 w-[85vw] sm:w-[380px] group/card relative bg-white p-8 rounded-3xl border border-slate-100 hover:border-green-200 shadow-sm hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-300 flex flex-col min-h-[380px] overflow-hidden z-10"
    >
      <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover/card:bg-green-600 transition-colors duration-300 shrink-0">
        <Icon className="w-8 h-8 text-slate-700 group-hover/card:text-white transition-colors duration-300" />
      </div>

      <h3 className="font-bold text-xl text-slate-900 group-hover/card:text-green-700 transition-colors mb-3">
        {service.title}
      </h3>

      <p className="text-slate-600 leading-relaxed mb-8 grow">
        {service.description}
      </p>

      <div className="mt-auto flex items-center gap-2 text-green-600 font-semibold group-hover/card:text-green-700 transition-colors">
        <span>Learn More</span>
        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center group-hover/card:bg-green-100 transition-colors">
          <ChevronRight className="w-4 h-4 group-hover/card:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default function ServicesSection() {
  return (
    <section className="section bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="container">
        <SectionHeading
          badge="Our Specializations"
          title="Complete Movement Health & Performance Solutions"
          subtitle="Evidence-based treatments tailored to your lifestyle, goals, and performance needs."
        />

        <div className="relative mt-16 pb-8 group flex w-full">
          {/* Track 1 */}
          <div className="flex shrink-0 gap-6 px-3 animate-marquee group-hover:[animation-play-state:paused]">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          {/* Track 2 (Duplicate for seamless loop) */}
          <div
            className="flex shrink-0 gap-6 px-3 animate-marquee group-hover:[animation-play-state:paused]"
            aria-hidden="true"
          >
            {services.map((service) => (
              <ServiceCard key={`${service.slug}-dup`} service={service} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/services" className="btn-primary">
            View Full Service Details
          </Link>
        </div>
      </div>
    </section>
  );
}
