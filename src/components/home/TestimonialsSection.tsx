"use client";

import { useRef } from "react";
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@prisma/client";

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const sliderRef = useRef<HTMLDivElement>(null);

  if (!testimonials || testimonials.length === 0) return null;

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative border-y border-slate-100">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-200 h-200 bg-green-50 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3 opacity-70" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
              <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">Patient Stories</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Real Results. <br />
              <span className="text-green-600">Lasting Recovery.</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-6 max-w-sm w-full">
            <p className="text-slate-600 text-lg leading-relaxed md:text-right">
              Don&apos;t just take our word for it. Hear from our patients who have successfully overcome pain and returned to what they love.
            </p>
            <div className="flex items-center gap-3 md:self-end">
              <button
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-slate-200 hover:border-green-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 hover:text-green-600 transition-all shadow-sm active:scale-95 cursor-pointer shrink-0"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-slate-200 hover:border-green-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 hover:text-green-600 transition-all shadow-sm active:scale-95 cursor-pointer shrink-0"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* CSS Scroll Snap Slider */}
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar scroll-smooth"
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="snap-center shrink-0 w-[85vw] md:w-96 h-100 bg-white p-8 md:p-10 rounded-4xl shadow-sm border border-slate-100 relative group hover:shadow-xl hover:border-green-200 transition-all duration-300 flex flex-col"
            >
              <Quote className="absolute top-8 right-8 w-16 h-16 text-slate-50 group-hover:text-green-50 transition-colors duration-300 z-0" />
              
              <div className="flex items-center gap-1 mb-6 relative z-10">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-slate-200"
                    }`}
                  />
                ))}
              </div>
              
              <div className="grow overflow-y-auto pr-2 mb-6 relative z-10 custom-scrollbar">
                <p className="text-slate-700 text-lg leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                    <span className="text-slate-900 font-bold text-lg">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Injecting scrollbar hiding styles here inline for component portability */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
          }
        `
      }} />
    </section>
  );
}
