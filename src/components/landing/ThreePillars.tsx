import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const pillars = [{
    title: "Physiotherapy",
    subtitle: "The Good Physio Hub",
    description: "Movement freedom through active recovery.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=400",
    link: "/physiotherapy",
    linkText: "Explore",
    comingSoon: false,
  },
  {
    title: "Strength & Conditioning",
    description: "Build strength, resilience, and athletic performance.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400",
    link: "/strength-and-conditioning",
    linkText: "Explore",
    comingSoon: false,
  },
  {
    title: "Nutrition & Wellness",
    description: "Fuel recovery. Support lifelong health.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400",
    link: "/nutrition-services",
    linkText: "Explore",
    comingSoon: false,
  },
  {
    title: "Yoga & Pilates",
    description: "Move Better. Feel Stronger. Live Healthier.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400",
    link: "/yoga-and-pilates",
    linkText: "Explore",
    comingSoon: false,
  },
];

export default function ThreePillars() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100" id="pillars">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Pillars
          </h2>
          <p className="text-lg text-slate-600">
            A comprehensive approach to your health, integrating key disciplines to ensure you achieve your best possible outcomes.
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:snap-none md:pb-0 max-w-7xl mx-auto scrollbar-hide">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="w-[85vw] sm:w-[350px] shrink-0 md:w-auto md:shrink bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden group flex flex-col snap-center"
            >
              {/* Coming Soon Badge */}
              {pillar.comingSoon && (
                <div className="absolute top-6 right-6 bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-full border border-slate-200 uppercase tracking-wide">
                  Coming Soon
                </div>
              )}

              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
                <Image src={pillar.image} alt={pillar.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-1">{pillar.title}</h3>
              {pillar.subtitle && (
                <p className="text-sm font-semibold text-green-600 mb-4">{pillar.subtitle}</p>
              )}
              <p className={`text-slate-600 leading-relaxed flex-1 ${!pillar.subtitle ? 'mt-3 mb-8' : 'mb-8'}`}>
                {pillar.description}
              </p>

              <Link
                href={pillar.link}
                className={`inline-flex items-center gap-2 font-bold transition-colors ${
                  pillar.comingSoon ? "text-slate-500 hover:text-slate-700" : "text-green-600 hover:text-green-700"
                }`}
              >
                {pillar.linkText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-green-50/0 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
