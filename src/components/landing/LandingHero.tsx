import Link from "next/link";
import { ChevronRight, MapPin, Star, Users, ShieldCheck, ClipboardList, Dumbbell, Leaf, UserCheck } from "lucide-react";
import Image from "next/image";

// Custom WhatsApp SVG Icon
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

// Google 'G' Logo SVG
function GoogleGIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  );
}

// Practo Wordmark SVG Logo
function PractoLogo({ className = "w-16 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 18V6H13.5C15.9853 6 18 8.01472 18 10.5C18 12.9853 15.9853 15 13.5 15H9.5V18H6ZM9.5 12H13.2C14.0284 12 14.7 11.3284 14.7 10.5C14.7 9.67157 14.0284 9 13.2 9H9.5V12Z" fill="#184292" />
      <path d="M22 18V9H25V10.4C25.7 9.5 26.8 9 28 9C30.2 9 31.5 10.8 31.5 13.5V18H28.5V13.8C28.5 12.3 27.6 11.5 26.5 11.5C25.3 11.5 24.5 12.4 24.5 13.8V18H22Z" fill="#184292" />
      <path d="M34 14C34 11.2 35.8 9 38.5 9C40.5 9 41.7 10 42.3 11.2L39.8 12.5C39.4 11.8 38.9 11.4 38.2 11.4C37.1 11.4 36.3 12.4 36.3 14C36.3 15.6 37.1 16.6 38.2 16.6C39 16.6 39.5 16.1 40 15.4L42.5 16.6C41.7 18 40.3 19 38.5 19C35.8 19 34 16.8 34 14Z" fill="#184292" />
      <path d="M46 15.2V11.5H44V9H46V6.5H49V9H52V11.5H49V14.8C49 15.6 49.4 16 50.2 16C50.8 16 51.4 15.8 51.8 15.5L52.5 17.8C51.8 18.3 50.7 18.6 49.5 18.6C47.2 18.6 46 17.3 46 15.2Z" fill="#184292" />
      <path d="M54 14C54 11.2 56 9 59 9C62 9 64 11.2 64 14C64 16.8 62 19 59 19C56 19 54 16.8 54 14ZM61.2 14C61.2 12.4 60.3 11.4 59 11.4C57.7 11.4 56.8 12.4 56.8 14C56.8 15.6 57.7 16.6 59 16.6C60.3 16.6 61.2 15.6 61.2 14Z" fill="#184292" />
      <circle cx="68" cy="16.5" r="2.5" fill="#28A745" />
    </svg>
  );
}

// Specialty Icons (Green Line Art)
function BackPainIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M9 5h6M8 10h8M9 15h6M10 19h4" />
      <circle cx="12" cy="5" r="1.5" className="fill-emerald-400/20" />
      <circle cx="12" cy="10" r="1.5" className="fill-emerald-400/20" />
      <circle cx="12" cy="15" r="1.5" className="fill-emerald-400/20" />
    </svg>
  );
}

function NeckPainIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="12" cy="7" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      <path strokeLinecap="round" d="M10 11h4" />
    </svg>
  );
}

function KneePainIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h10v5L14 13v8h-4v-8L7 8V3z" />
      <circle cx="12" cy="11" r="2" stroke="currentColor" className="fill-emerald-400/30" />
    </svg>
  );
}

function SportsInjuryIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="14" cy="5" r="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21l3-6 4 2 4-6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 11l5-2 4 4 5-2" />
    </svg>
  );
}

function RehabIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="12" cy="6" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v7M9 12h6M8 21h8" />
    </svg>
  );
}

export default function LandingHero() {
  const specialties = [
    { label: "Back Pain", icon: BackPainIcon },
    { label: "Neck Pain", icon: NeckPainIcon },
    { label: "Knee Pain", icon: KneePainIcon },
    { label: "Sports Injuries", icon: SportsInjuryIcon },
    { label: "Post Surgery Rehab", icon: RehabIcon },
  ];

  const usps = [
    { title: "Expert Physiotherapists", icon: UserCheck },
    { title: "Personalized Treatment Plans", icon: ClipboardList },
    { title: "Advanced Rehab Techniques", icon: Dumbbell },
    { title: "Holistic & Evidence-Based Approach", icon: Leaf },
  ];

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      {/* HERO MAIN SECTION */}
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-24">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/PT HOME PAGE.png"
            alt="Aatral360 Facility Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 max-w-2xl">
              {/* Location Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs sm:text-sm font-semibold backdrop-blur-md mb-6 shadow-sm">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>KPHB, Hyderabad</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6 text-white">
                Restore Movement.
                <br />
                Build Resilience.
                <br />
                <span className="text-[#00E676] drop-shadow-sm">
                  Empower Lifelong Performance.
                </span>
              </h1>

              {/* Specialties Icon Shortcut Bar */}
              <div className="py-3 border-y border-slate-800/80 my-6">
                <div className="grid grid-cols-5 gap-1 sm:gap-2 items-center py-1">
                  {specialties.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center justify-between">
                        <div className="flex flex-col items-center text-center group cursor-pointer w-full">
                          <div className="p-2 sm:p-2.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <span className="text-[10px] sm:text-xs font-semibold text-slate-200 mt-2 text-center leading-tight group-hover:text-emerald-400 transition-colors">
                            {item.label}
                          </span>
                        </div>

                        {idx < specialties.length - 1 && (
                          <div className="hidden sm:block h-8 w-px bg-slate-800 shrink-0" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8 lg:mb-0">
                <Link
                  href="/physiotherapy/appointment"
                  className="inline-flex items-center justify-center gap-2 bg-[#00A859] hover:bg-[#00924d] text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-600/25 group text-sm sm:text-base"
                >
                  Book Appointment Today
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://wa.me/918838086426?text=Hi%20Aatral360%20Good%20Physio%20Hub,%20I%20would%20like%20to%20talk%20to%20an%20expert."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-slate-900/90 hover:bg-slate-800 text-white font-semibold px-6 py-3.5 rounded-xl border border-slate-700/80 transition-all text-sm sm:text-base shadow-sm"
                >
                  Talk to Our Expert
                  <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Right Side Image Frame */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0 block">
              <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden border-2 border-amber-500/40 shadow-2xl bg-slate-900 aspect-4/3 sm:aspect-4/3 lg:aspect-4/5 max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/images/HOME PAGE POP UP IMAGE REPLACEMENT.png"
                  alt="Physiotherapy treatment at Aatral360 Good Physio Hub"
                  fill
                  className="object-cover object-top sm:object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FLOATING TRUST & SOCIAL PROOF CARD */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-12 -mt-8 sm:-mt-12 mb-10">
        <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100 text-slate-900">
          
          {/* Item 1: Practo Reviews */}
          <div className="flex items-center gap-4 pt-2 md:pt-0 md:px-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 leading-none mb-1">
                236
              </div>
              <div className="text-xs font-semibold text-slate-600 leading-tight">
                100% Positive Reviews
              </div>
              <div className="flex items-center gap-1 mt-1 text-xs text-slate-500 font-medium">
                <span>on Practo</span>
                <Image
                  src="/images/practo.png"
                  alt="Practo Logo"
                  width={60}
                  height={20}
                  className="h-4 w-auto object-contain inline-block ml-1"
                />
              </div>
            </div>
          </div>

          {/* Item 2: Google Reviews */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md">
              <Star className="w-7 h-7 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-slate-900 leading-none">5.0</span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-xs font-semibold text-slate-600 leading-tight mt-1">
                140+ Google Reviews
              </div>
              <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-500 font-medium">
                <span>Rated 5.0</span>
                <GoogleGIcon className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Item 3: Expert Care & Trusted Results */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 leading-snug">
                Expert Care.
                <br />
                Trusted Results.
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                Your Health is Our Priority.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* DARK GREEN FEATURE RIBBON */}
      <section className="bg-[#0B4D34] text-white py-4 border-t border-emerald-800/50 shadow-inner">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-emerald-700/60">
            {usps.map((usp, idx) => {
              const Icon = usp.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-2.5 px-3 py-2 text-center sm:text-left"
                >
                  <Icon className="w-5 h-5 text-emerald-300 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold tracking-tight text-emerald-50">
                    {usp.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
