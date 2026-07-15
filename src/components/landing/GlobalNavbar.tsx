"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Our Pillars", href: "/#pillars" },
  { label: "Philosophy", href: "/#philosophy" },
  { label: "Strength & Performance", href: "/#strength" },
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
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Link
                href="/physiotherapy/appointment"
                className="btn-primary py-2.5! px-4! sm:px-5! text-sm! shrink-0 flex items-center gap-1"
              >
                <span className="hidden sm:inline">Book Consultation</span>
                <span className="sm:hidden">Book</span>
                <ChevronRight className="w-4 h-4" />
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
        <input type="checkbox" id="global-mobile-menu" className="hidden peer" />

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
