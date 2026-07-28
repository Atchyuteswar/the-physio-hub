import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CheckCircle2, Users, Activity } from "lucide-react";


export default function HeroSection() {
  return (
    <section className="relative bg-slate-50 pt-20 pb-24 lg:pt-24 lg:pb-32 overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/bhuvi treating patient.png"
          alt="Physiotherapy Treatment Background"
          fill
          className="object-cover object-right md:object-center opacity-25"
          priority
        />
        {/* Soft overlay gradient to ensure high readability of text on the left */}
        <div className="absolute inset-0 bg-slate-50/30" />
      </div>

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

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-slate-900 leading-[1.1] tracking-tight animate-fade-in-up">
              Movement freedom through 
              <br />
              <span className="text-green-600">Active Recovery.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed animate-fade-in-up delay-100 max-w-xl">
              <strong>Personalized evidence-based care that restores movement, builds resilience, and empowers you to perform at your best</strong>.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200 w-full sm:w-auto">
              <Link href="/physiotherapy/appointment" className="btn-primary py-3.5 px-5 sm:px-8 text-base shadow-lg shadow-green-600/20 hover:shadow-green-600/30 w-full sm:w-auto">
                Book Appointment
                <ChevronRight className="w-5 h-5 shrink-0" />
              </Link>
              <Link href="/physiotherapy/services" className="btn-outline py-3.5 px-5 sm:px-8 text-base bg-white border-slate-300 hover:bg-slate-50 w-full sm:w-auto">
                Explore Services
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200/60 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up delay-300">
              {[
                "Personalized Care",
                "Evidence-Based Treatment",
                "Performance Focused"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image / Graphics */}
          <div className="relative animate-fade-in lg:ml-auto mt-12 lg:mt-0 w-full max-w-lg lg:max-w-xl mx-auto min-h-[300px] lg:min-h-[400px]">
            
            {/* Floating Card 1 */}
            <div className="absolute top-4 sm:top-12 left-4 md:-left-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 items-center gap-4 flex animate-bounce-slow">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 leading-none">2000+</p>
                <p className="text-sm font-medium text-slate-500 mt-1">Patients Helped</p>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-8 sm:bottom-20 right-4 md:-right-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 items-center gap-4 flex animate-bounce-slow delay-500">
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
