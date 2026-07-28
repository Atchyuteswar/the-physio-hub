import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ChevronRight, Send } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/physiotherapy" },
  { label: "About Us", href: "/physiotherapy/about" },
  { label: "Book Appointment", href: "/physiotherapy/appointment" },
  { label: "Patient Testimonials", href: "/testimonials" },
  { label: "Our Team", href: "/physiotherapy/team" },
  { label: "Gallery", href: "/gallery" },
];

const serviceLinks = [
  { label: "Physiotherapy", href: "/physiotherapy" },
  { label: "Strength & Conditioning", href: "/strength-and-conditioning" },
  { label: "Nutrition & Wellness", href: "/nutrition-services" },
  { label: "Yoga & Pilates", href: "/yoga-and-pilates" },
  {
    label: "Musculoskeletal Rehab",
    href: "/physiotherapy/services/musculoskeletal-rehabilitation",
  },
  {
    label: "Sports Injury Rehab",
    href: "/physiotherapy/services/sports-injury-rehabilitation",
  },
  {
    label: "Post-Operative Rehab",
    href: "/physiotherapy/services/post-operative-rehabilitation",
  },
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-green-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Footer */}
      <div className="container py-20 relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Contact Column */}
          <div className="lg:col-span-4 pr-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-6 group"
            >
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/images/aatral-360-logo-trans.png"
                  alt="Aatral360 Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                Aatral360 <span className="text-slate-700 font-normal">|</span>{" "}
                <span>Good Physio Hub</span>
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
                <a
                  href="https://www.google.com/maps/place/Good+Physio+Hub/data=!4m7!3m6!1s0x3bcb936a8dc9b1f7:0xc792c255ec9e1588!8m2!3d17.4889439!4d78.3804162!16s%2Fg%2F11mzg2yvjw!19sChIJ97HJjWqTyzsRiBWe7FXCksc?authuser=0&hl=en&rclk=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 text-sm leading-relaxed hover:text-green-500 transition-colors"
                >
                  Plot No. 500, Flat no. 502, <br />
                  5th floor, surya arcade 9th phase road, <br />
                  Venkataramana Colony, Gokul plots, <br />K P H B Phase 9,
                  Hyderabad, Telangana 500085
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-slate-400 text-sm">+91 88380 86426</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-slate-400 text-sm">
                  goodphysiohub@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <Clock className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  Mon – Sun: 7:00 AM – 10:00 PM <br />
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/goodphysiohub?igsh=MWRwbmFxbWszczdxaA%3D%3D&utm_source=qr"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@GoodPhysioHub"
                aria-label="Youtube"
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
                    <svg
                      className="w-3.5 h-3.5 text-red-500 opacity-70 group-hover:opacity-100 transition-opacity"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                      <polygon
                        fill="#fff"
                        points="9.545,15.568 15.818,12 9.545,8.432"
                      />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Find Us
            </h3>
            <div className="w-full h-32 bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
              {/* Replace with actual Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.321798369931!2d78.37783357597147!3d17.489998183416174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb936a8dc9b1f7%3A0xc792c255ec9e1588!2sGood%20Physio%20Hub!5e0!3m2!1sen!2sin!4v1716162387123!5m2!1sen!2sin"
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
            <p>© {new Date().getFullYear()} Aatral360. All Rights Reserved.</p>
            <p className="hidden md:block text-slate-700">•</p>
            <p className="flex items-center gap-2">
              Powered by
              <Link
                href="https://www.srikalpavriksha.com/skcw"
                target="_blank"
                className="text-slate-400 hover:text-white"
              >
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
