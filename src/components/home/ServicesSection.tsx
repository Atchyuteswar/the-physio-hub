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
  PersonStanding,
  Brain,
  Ribbon,
  Ear,
  Hand,
  Baby,
  Accessibility,
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
  PersonStanding,
  Brain,
  Ribbon,
  Ear,
  Hand,
  Baby,
  Accessibility,
};

import Image from "next/image";

const serviceImages: Record<string, string> = {
  "musculoskeletal-rehabilitation": "/images/our-services/musculoskeletal-rehabilitation.png",
  "chronic-pain-rehabilitation": "/images/our-services/chronic-pain-rehabilitation.png",
  "sports-injury-rehabilitation": "/images/our-services/sports-injury-rehabilitation.png",
  "post-operative-rehabilitation": "/images/our-services/post-operative-rehabilitation.jpg",
  "neurological-rehabilitation": "/images/our-services/neurological-rehabilitation.png",
  "womens-health-physiotherapy": "/images/our-services/womens-health-physiotherapy.png",
  "oncology-rehabilitation": "/images/our-services/oncology-rehabilitation.png",
  "corporate-health-wellness": "/images/our-services/corporate-health-wellness-programs.png",
  "vertigo-physiotherapy": "/images/our-services/vertigo-vestibular-rehabilitation.png",
  "lymphedema-physiotherapy": "/images/our-services/lymphedema-management.jpg",
};

const ServiceCard = ({ service }: { service: (typeof services)[0] }) => {
  const Icon = iconMap[service.icon] || Activity;
  const imageUrl = serviceImages[service.slug] || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800";

  return (
    <Link
      href={`/physiotherapy/services/${service.slug}`}
      className="shrink-0 w-[85vw] sm:w-95 group/card relative bg-white rounded-3xl border border-slate-100 hover:border-green-200 shadow-sm hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-300 flex flex-col min-h-115 overflow-hidden z-10"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover/card:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="font-bold text-xl text-slate-900 group-hover/card:text-green-700 transition-colors mb-3">
          {service.title}
        </h3>

        <p className="text-slate-600 leading-relaxed mb-6 grow line-clamp-3">
          {service.description}
        </p>

        <div className="mt-auto flex items-center gap-2 text-green-600 font-semibold group-hover/card:text-green-700 transition-colors">
          <span>Learn More</span>
          <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center group-hover/card:bg-green-100 transition-colors">
            <ChevronRight className="w-4 h-4 group-hover/card:translate-x-0.5 transition-transform" />
          </div>
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
          <Link href="/physiotherapy/services" className="btn-primary">
            View Full Service Details
          </Link>
        </div>
      </div>
    </section>
  );
}
