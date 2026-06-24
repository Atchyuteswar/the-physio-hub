"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { 
  Menu, X, ChevronRight, ChevronDown,
  Activity, HeartPulse, Stethoscope, Zap, RotateCcw, Footprints, Bone, GraduationCap, Video 
} from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  HeartPulse,
  Stethoscope,
  Zap,
  RotateCcw,
  Footprints,
  Bone,
  GraduationCap,
  Video,
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Videos", href: "/videos" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force close the pure CSS menu when navigating to a new page
  useEffect(() => {
    const checkbox = document.getElementById("mobile-menu-toggle") as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }, [pathname]);

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
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight hidden sm:block">
                The Physio Hub
              </span>
              <span className="text-lg font-bold text-slate-900 tracking-tight sm:hidden">
                Physio Hub
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                if (item.label === "Services") {
                  return (
                    <div key={item.href} className="group relative">
                      <Link
                        href={item.href}
                        className={`
                          flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                          ${
                            isActive
                              ? "text-green-700 bg-green-50"
                              : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                          }
                        `}
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-200" />
                      </Link>

                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[600px] z-50">
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 grid grid-cols-2 gap-2 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white">
                          {services.map((service) => {
                            const Icon = iconMap[service.icon] || Activity;
                            return (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/link"
                              >
                                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0 group-hover/link:bg-green-100 transition-colors">
                                  <Icon className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-slate-900 group-hover/link:text-green-700 transition-colors">
                                    {service.title}
                                  </div>
                                  <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                    {service.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${
                        isActive
                          ? "text-green-700 bg-green-50"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/appointment"
                className="btn-primary py-2.5! px-5! text-sm! shrink-0"
              >
                Book Appointment
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Trigger (Pure CSS Approach) */}
            <div className="lg:hidden flex items-center relative z-50">
              <label
                htmlFor="mobile-menu-toggle"
                className="p-3 -mr-2 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer touch-manipulation block"
                aria-label="Open mobile menu"
              >
                <Menu className="w-7 h-7 text-slate-800" />
              </label>
            </div>
          </div>
        </div>
      </header>

      {/* PURE CSS MOBILE MENU MAGIC */}
      <div className="lg:hidden">
        {/* The hidden checkbox that holds the Open/Close state natively in the browser */}
        <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />

        {/* Mobile Overlay (fades in when checkbox is checked) */}
        <div className="fixed inset-0 z-90 bg-slate-900/40 backdrop-blur-sm opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-opacity duration-300">
          <label 
            htmlFor="mobile-menu-toggle" 
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
              htmlFor="mobile-menu-toggle"
              className="p-3 -mr-2 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer touch-manipulation block"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-slate-700" />
            </label>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-medium transition-colors
                    ${
                      isActive
                        ? "text-green-700 bg-green-50"
                        : "text-slate-700 hover:bg-slate-50"
                    }
                  `}
                >
                  {item.label}
                  <ChevronRight className={`w-4 h-4 ${isActive ? "text-green-500" : "text-slate-400"}`} />
                </Link>
              );
            })}
          </nav>

          {/* Drawer Footer CTA */}
          <div className="p-5 border-t border-slate-100 shrink-0 bg-slate-50">
            <Link
              href="/appointment"
              className="btn-primary w-full text-center py-3! text-base!"
            >
              Book Appointment
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}