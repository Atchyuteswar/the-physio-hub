import Link from "next/link";
import { ArrowRight, Calendar, Star } from "lucide-react";
import Image from "next/image";

const highlights = [
  "Evidence-Based Care",
  "Personalized Rehabilitation",
  "Multidisciplinary Team",
  "Performance-Focused",
];

export default function LandingHero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] py-12 lg:py-16 overflow-hidden bg-slate-50 border-b border-slate-100 flex items-center">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-100/60 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <span className="inline-block py-1.5 px-3 rounded-full bg-green-100/80 text-green-700 font-semibold text-sm tracking-wider uppercase mb-6 border border-green-200">
              Complete Movement Health
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-slate-900">
              Restore Movement. Build Resilience.{" "}
              <span className="text-green-600">Empower Lifelong Performance.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              Personalized, evidence-based care integrating physiotherapy,
              rehabilitation, strength & conditioning, nutrition, and wellness to
              help you move better, recover stronger, and perform at your best.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-green-600/20"
              >
                <Calendar className="w-5 h-5" />
                Book Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold px-8 py-4 rounded-xl transition-all shadow-sm group"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                  <Star className="w-4 h-4 fill-green-500 text-green-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-md xl:max-w-lg mx-auto lg:mx-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/5 sm:aspect-3/2 lg:aspect-square transform transition-transform hover:scale-[1.02] duration-500">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop"
                alt="A real therapist assessing a patient"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 items-center gap-4 hidden sm:flex hover:-translate-y-1 transition-transform duration-300 cursor-default">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-green-600 fill-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">4.9/5</p>
                <p className="text-sm font-medium text-slate-500">Patient Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
