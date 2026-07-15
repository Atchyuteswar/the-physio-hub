import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="who-we-are">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Background Blob */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-4/3">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1600&auto=format&fit=crop"
                  alt="Modern professional clinic"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Floating Info Box */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden sm:block z-10 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Certified Experts</h4>
                  <p className="text-sm text-slate-500">Dedicated to your care</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="max-w-2xl relative z-10">
            <span className="inline-block py-1.5 px-3 rounded-full bg-green-50 text-green-700 font-semibold text-sm tracking-wider uppercase mb-6 border border-green-100">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Beyond Recovery. <br />
              <span className="text-green-600 relative inline-block">
                Built for Better Performance.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-green-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Aatral360 is a comprehensive movement health and performance center that integrates physiotherapy, strength & conditioning, nutrition, and wellness into one personalized system of care. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether recovering from injury, managing pain, improving fitness, or striving for athletic performance, our approach is designed to help you move confidently and perform for life.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-slate-900 text-lg mb-1">Modern Facility</h4>
                <p className="text-slate-500 text-sm">State-of-the-art equipment for optimal rehabilitation.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-slate-900 text-lg mb-1">Holistic Approach</h4>
                <p className="text-slate-500 text-sm">Addressing the root cause, not just the symptoms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
