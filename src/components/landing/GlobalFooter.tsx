import Link from "next/link";
import Image from "next/image";

export default function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 shrink-0">
              <Image
                src="/images/aatral-360-logo-trans.png"
                alt="Aatral360 Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                Aatral360 <span className="text-slate-700 font-normal">|</span> <span>The Good Physio Hub</span>
              </h3>
              <p className="text-slate-400 text-sm">Movement Health & Performance</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-400">
            <Link href="/physiotherapy" className="hover:text-green-500 transition-colors">
              Physiotherapy
            </Link>
            <Link href="/strength-and-conditioning" className="hover:text-green-500 transition-colors">
              Strength & Conditioning
            </Link>
            <Link href="/nutrition-services" className="hover:text-green-500 transition-colors">
              Nutrition & Wellness
            </Link>
            <Link href="/yoga-and-pilates" className="hover:text-green-500 transition-colors">
              Yoga & Pilates
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Aatral360. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
