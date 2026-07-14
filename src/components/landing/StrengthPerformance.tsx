import Image from "next/image";
import { Dumbbell, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StrengthPerformance() {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative" id="strength">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-900/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-6">
              <Dumbbell className="w-4 h-4 text-green-500" />
              <span className="text-sm font-semibold text-green-500 tracking-wide uppercase">
                Strength & Performance
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Bridge the Gap Between <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-green-600">
                Rehab and High Performance
              </span>
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              We believe that true recovery extends beyond being pain-free. Our strength and performance programs are designed to rebuild your physical capacity, enhance your athletic potential, and make your body resilient against future injuries.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Sport-Specific Conditioning",
                "Load Management Strategies",
                "Biomechanics Optimization",
                "Injury Prevention Protocols"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300">
                  <div className="w-6 h-6 rounded-full bg-green-900/30 flex items-center justify-center shrink-0 border border-green-800">
                    <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/physiotherapy/appointment"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-green-900/20 group"
            >
              Start Training
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image Side */}
          <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/5 sm:aspect-4/3 lg:aspect-4/5 border border-slate-800">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop"
                alt="Athlete performing strength training"
                fill
                className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
