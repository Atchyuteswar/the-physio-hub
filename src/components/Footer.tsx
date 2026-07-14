import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Activity,
  Send
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/physiotherapy" },
  { label: "About Us", href: "/physiotherapy/about" },
  { label: "Book Appointment", href: "/physiotherapy/appointment" },
  { label: "Patient Testimonials", href: "/physiotherapy/testimonials" },
  { label: "Our Team", href: "/physiotherapy/team" },
  { label: "Gallery", href: "/physiotherapy/gallery" },
];

const serviceLinks = [
  { label: "Physiotherapy", href: "/physiotherapy" },
  { label: "Strength & Conditioning", href: "#" },
  { label: "Nutrition & Wellness", href: "#" },
  { label: "Musculoskeletal Rehab", href: "/physiotherapy/services/musculoskeletal-rehabilitation" },
  { label: "Sports Injury Rehab", href: "/physiotherapy/services/sports-injury-rehabilitation" },
  { label: "Post-Operative Rehab", href: "/physiotherapy/services/post-operative-rehabilitation" },
];

const researchLinks = [
  { label: "Latest Blogs", href: "#" },
  { label: "Clinical Tips", href: "#" },
  { label: "Videos", href: "#" },
  { label: "Guides", href: "#" },
  { label: "Webinars", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      {/* Premium Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Footer */}
      <div className="container py-20 relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Contact Column */}
          <div className="lg:col-span-4 pr-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-6 group"
            >
              <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center group-hover:bg-green-500 transition-colors shadow-lg shadow-green-600/20">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Aatral360
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              We are a premium physiotherapy and rehabilitation clinic dedicated
              to evidence-based recovery, functional mobility, and your
              long-term physical wellness.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  123 Healthcare Ave, <br />
                  Medical District, 10001
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-slate-400 text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-slate-400 text-sm">info@aatral360.com</span>
              </li>
              <li className="flex items-start gap-3 group">
                <Clock className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  Mon – Sat: 9:00 AM – 7:00 PM <br />
                  Sun: Closed
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="#"
                aria-label="Youtube"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/><polygon fill="#0F172A" points="9.545,15.568 15.818,12 9.545,8.432"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
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
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.label}>
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

          {/* Research & Education */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Research & Education
            </h3>
            <ul className="space-y-4">
              {researchLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <svg className="w-3.5 h-3.5 text-red-500 opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/><polygon fill="#fff" points="9.545,15.568 15.818,12 9.545,8.432"/></svg>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Map */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Newsletter
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to get the latest clinical tips and updates.
            </p>
            <form className="mb-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-green-500 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-green-600 hover:bg-green-500 rounded-md text-white transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>

            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Find Us
            </h3>
            <div className="w-full h-32 bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
              {/* Replace with actual Google Maps iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.252799981!2d-74.14448744577884!3d40.69763123336691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/60 relative z-10">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-6 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-slate-500 text-sm font-medium">
            <p>
              © {new Date().getFullYear()} Aatral360. All Rights Reserved.
            </p>
            <p className="hidden md:block text-slate-700">•</p>
            <p className="flex items-center gap-2">
              Powered by
              <Link href="https://www.srikalpavriksha.com/skcw" target="_blank" className="text-slate-400 hover:text-white">
                SKCW
              </Link>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
