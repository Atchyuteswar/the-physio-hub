import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Activity,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All Services", href: "/services" },
  { label: "Educational Videos", href: "/videos" },
  { label: "Patient Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  {
    label: "Musculoskeletal Conditioning",
    href: "/services/musculoskeletal-conditioning",
  },
  {
    label: "Chronic Pain Management",
    href: "/services/chronic-pain-management",
  },
  {
    label: "Post-Surgical Reconditioning",
    href: "/services/post-surgical-re-conditioning",
  },
  {
    label: "Sports Injury Conditioning",
    href: "/services/sports-injury-conditioning",
  },
  {
    label: "Movement Retraining",
    href: "/services/movement-retraining-motor-control",
  },
  {
    label: "Spine Care",
    href: "/services/spine-care-functional-rehabilitation",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      {/* Premium Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Footer */}
      <div className="container py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 pr-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-6 group"
            >
              <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center group-hover:bg-green-500 transition-colors shadow-lg shadow-green-600/20">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                The Physio Hub
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              We are a premium physiotherapy and rehabilitation clinic dedicated
              to evidence-based recovery, functional mobility, and your
              long-term physical wellness.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                  <polygon
                    fill="#0F172A"
                    points="9.545,15.568 15.818,12 9.545,8.432"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-green-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Clinical Services
            </h3>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-green-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-green-500 transition-colors">
                  <MapPin className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  123 Healthcare Ave, <br />
                  Medical District, 10001
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-green-500 transition-colors">
                  <Phone className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  (555) 123-4567
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-green-500 transition-colors">
                  <Mail className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  info@thephysiohub.com
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-green-500 transition-colors">
                  <Clock className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  Mon – Sat: <br />
                  9:00 AM – 7:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/60 relative z-10">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-slate-500 text-sm font-medium">
            <p>
              © {new Date().getFullYear()} The Physio Hub. All Rights Reserved.
            </p>
            <p className="hidden md:block text-slate-700">•</p>
            <p className="flex items-center gap-2">
              Powered by
              <Link href="https://www.srikalpavriksha.com/skcw" target="_blank">
                SKCW
              </Link>{" "}
              <img
                src="/images/sklogo.png"
                alt="sklogo"
                className="h-8 w-auto"
              />
            </p>
          </div>
          <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-8">
            <Link
              href="/privacy-policy"
              className="text-slate-500 hover:text-white text-sm font-medium transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-slate-500 hover:text-white text-sm font-medium transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/appointment"
              className="text-slate-500 hover:text-white text-sm font-medium transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
