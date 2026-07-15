"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

export default function GlobalNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-40 w-full transition-all duration-300
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/60"
            : "bg-white border-b border-transparent"
        }
      `}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-9 h-9 rounded-lg bg-green-600 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Aatral360</span>
              <span className="hidden sm:inline text-slate-300 font-normal">|</span>
              <span className="text-xs sm:text-xl font-semibold sm:font-bold text-slate-500 sm:text-slate-900 tracking-tight">The Good Physio Hub</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors">
              About Us
            </Link>
            <Link href="/#pillars" className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors">
              Our Pillars
            </Link>
            <Link href="/#philosophy" className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors">
              Philosophy
            </Link>
            <Link href="/#strength" className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors">
              Strength & Performance
            </Link>
            <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center">
            <Link
              href="/physiotherapy/appointment"
              className="btn-primary py-2.5! px-5! text-sm! shrink-0 flex items-center gap-1"
            >
              <span className="hidden sm:inline">Book Consultation</span>
              <span className="sm:hidden">Book</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
