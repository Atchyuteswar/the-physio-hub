"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Our Specialities", href: "/#specialities" },
  { label: "Videos", href: "/videos" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Philosophy", href: "/#philosophy" },
  { label: "Contact Us", href: "/contact" },
];

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
    <>
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
        <div className="container mx-auto px-3 sm:px-6">
          <div className="h-16 sm:h-20 flex items-center justify-between gap-2">
            {/* Logo & Brand Name */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link href="/" className="relative w-10 h-10 sm:w-14 sm:h-14 shrink-0 block">
                <Image
                  src="/images/aatral-360-logo-trans.png"
                  alt="Aatral360 Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 leading-tight">
                <Link href="/" className="flex items-center gap-2 group shrink-0">
                  <span className="text-base sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    Aatral360
                  </span>
                </Link>
                <span className="hidden sm:inline text-slate-300 font-normal">
                  |
                </span>
                <Link
                  href="/physiotherapy"
                  className="flex items-center gap-2 group shrink-0"
                >
                  <span className="text-[11px] sm:text-xl font-semibold sm:font-bold text-slate-500 sm:text-slate-900 tracking-tight">
                    Good Physio Hub
                  </span>
                </Link>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs xl:text-sm font-semibold text-slate-600 hover:text-green-600 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-1.5 sm:gap-4 shrink-0">
              <Link
                href="/physiotherapy/appointment"
                className="bg-[#00A859] hover:bg-[#00924d] text-white font-bold px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm shrink-0 flex items-center gap-1 shadow-sm shadow-emerald-600/20 transition-all hover:scale-[1.02]"
              >
                <span className="hidden sm:inline">Book Consultation</span>
                <span className="sm:hidden">Book</span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>

              {/* Mobile Menu Trigger (Pure CSS Approach) */}
              <div className="lg:hidden flex items-center relative z-50">
                <label
                  htmlFor="global-mobile-menu"
                  className="p-2 -mr-2 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer touch-manipulation block"
                  aria-label="Open mobile menu"
                >
                  <Menu className="w-6 h-6 text-slate-800" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* PURE CSS MOBILE MENU MAGIC */}
      <div className="lg:hidden">
        {/* The hidden checkbox that holds the Open/Close state natively in the browser */}
        <input
          type="checkbox"
          id="global-mobile-menu"
          className="hidden peer"
        />

        {/* Mobile Overlay (fades in when checkbox is checked) */}
        <div className="fixed inset-0 z-90 bg-slate-900/40 backdrop-blur-sm opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-opacity duration-300">
          <label
            htmlFor="global-mobile-menu"
            className="absolute inset-0 w-full h-full cursor-pointer block"
            aria-label="Close menu overlay"
          ></label>
        </div>

        {/* Mobile Drawer (slides in from right when checkbox is checked) */}
        <div className="fixed top-0 -right-full peer-checked:right-0 z-100 h-dvh w-[85vw] max-w-[320px] bg-white shadow-2xl flex flex-col transition-all duration-300 ease-out overflow-y-auto">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-100 shrink-0">
            <span className="text-lg font-bold text-slate-900">Menu</span>
            <label
              htmlFor="global-mobile-menu"
              className="p-3 -mr-2 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer touch-manipulation block"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-slate-700" />
            </label>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-medium transition-colors text-slate-700 hover:bg-slate-50"
              >
                {item.label}
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </nav>

          {/* Drawer Footer CTA */}
          <div className="p-5 border-t border-slate-100 shrink-0 bg-slate-50">
            <Link
              href="/physiotherapy/appointment"
              className="btn-primary w-full text-center py-3! text-base!"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
