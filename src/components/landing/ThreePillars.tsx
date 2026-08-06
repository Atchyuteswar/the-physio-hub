"use client";

import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const pillars = [
  {
    title: "Physiotherapy",
    subtitle: "Good Physio Hub",
    description: "Movement freedom through active recovery.",
    image: "/images/PHYSIO-square.PNG",
    link: "/physiotherapy",
    linkText: "Explore",
    comingSoon: false,
  },
  {
    title: "Strength & Conditioning",
    description: "Build strength, resilience, and athletic performance.",
    image: "/images/strength and cond square.png",
    link: "/strength-and-conditioning",
    linkText: "Explore",
    comingSoon: false,
  },
  {
    title: "Nutrition & Wellness",
    description: "Fuel recovery. Support lifelong health.",
    image: "/images/nutrition 1.png",
    link: "/nutrition-services",
    linkText: "Explore",
    comingSoon: false,
  },
  {
    title: "Yoga & Pilates",
    description: "Move Better. Feel Stronger. Live Healthier.",
    image: "/images/pilates 1.png",
    link: "/yoga-and-pilates",
    linkText: "Explore",
    comingSoon: false,
  },
];

export default function ThreePillars() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pillars.length);
    }, 4000); // Move slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % pillars.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + pillars.length) % pillars.length);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100" id="specialities">
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
            Our Specialities
          </h2>
          <p className="text-lg text-slate-600">
            A comprehensive approach to your health, integrating key disciplines to ensure you achieve your best possible outcomes.
          </p>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden group flex flex-col"
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

        {/* Mobile View: Carousel */}
        <div className="md:hidden relative max-w-sm mx-auto px-4">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                width: `${pillars.length * 100}%`,
                transform: `translateX(-${(activeIndex * 100) / pillars.length}%)` 
              }}
            >
              {pillars.map((pillar, index) => (
                <div 
                  key={index} 
                  style={{ width: `${100 / pillars.length}%` }} 
                  className="shrink-0 px-2"
                >
                  <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden flex flex-col min-h-115 group">
                    {/* Coming Soon Badge */}
                    {pillar.comingSoon && (
                      <div className="absolute top-6 right-6 bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-full border border-slate-200 uppercase tracking-wide z-10">
                        Coming Soon
                      </div>
                    )}

                    <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
                      <Image src={pillar.image} alt={pillar.title} fill className="object-cover" />
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
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-green-600 z-10 active:scale-95 transition-transform"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-green-600 z-10 active:scale-95 transition-transform"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {pillars.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-green-600 w-6" : "bg-slate-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
