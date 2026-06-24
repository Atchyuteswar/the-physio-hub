import Link from "next/link";
import { ChevronRight, CheckCircle2, Users, Activity } from "lucide-react";


export default function HeroSection() {
  return (
    <section className="relative bg-slate-50 pt-16 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-50 rounded-full translate-x-1/3 -translate-y-1/4 opacity-70 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-100/50 rounded-full -translate-x-1/3 translate-y-1/3 opacity-50 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
              <span className="text-sm font-semibold text-slate-700 tracking-wide uppercase">
                Evidence-Based Physiotherapy
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold text-slate-900 leading-[1.1] tracking-tight animate-fade-in-up">
              Restore Movement.
              <br />
              <span className="text-green-600">Reduce Pain.</span>
              <br />
              Rebuild Confidence.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed animate-fade-in-up delay-100 max-w-xl">
              Personalized physiotherapy and rehabilitation programs designed to help you recover faster, move better, and live pain-free.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
              <Link href="/appointment" className="btn-primary py-3.5 px-8 text-base shadow-lg shadow-green-600/20 hover:shadow-green-600/30">
                Book Appointment
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="btn-outline py-3.5 px-8 text-base bg-white border-slate-300 hover:bg-slate-50">
                Explore Services
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200/60 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up delay-300">
              {[
                "Personalized Care",
                "Evidence-Based Treatment",
                "Recovery Focused"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image / Graphics */}
          <div className="relative animate-fade-in lg:ml-auto">
            <div className="relative w-full max-w-lg mx-auto aspect-5/4 min-h-[500px] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
              <img 
                src="/images/home-ill.jpg"
                alt="Physiotherapy Treatment"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Floating Card 1 */}
            <div className="absolute top-12 -left-8 md:-left-12 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 leading-none">500+</p>
                <p className="text-sm font-medium text-slate-500 mt-1">Patients Helped</p>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-24 -right-4 md:-right-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow delay-500">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                <Activity className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <p className="text-base font-bold text-slate-900 leading-tight">Expert<br/>Rehabilitation</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
