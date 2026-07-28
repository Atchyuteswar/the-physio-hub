import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Building2,
  Database,
  Eye,
  Cookie,
  BarChart3,
  Share2,
  Lock,
  CalendarDays,
  UserCheck,
  Baby,
  ExternalLink,
  AlertTriangle,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Aatral360",
  description:
    "Privacy Policy for Aatral360. Learn how we collect, use, store, and protect your personal and health information.",
  openGraph: {
    title: "Privacy Policy | Aatral360",
    description:
      "Privacy Policy for Aatral360. Learn how we collect, use, store, and protect your personal and health information.",
    url: "https://aatral360.vercel.app/privacy-policy",
    siteName: "Aatral360",
    type: "website",
  },
};

const sections = [
  { id: "who-we-are", label: "1. Who We Are", icon: Building2 },
  { id: "information-we-collect", label: "2. Information We Collect", icon: Database },
  { id: "how-we-use-your-information", label: "3. How We Use Your Information", icon: Eye },
  { id: "cookies", label: "4. Cookies", icon: Cookie },
  { id: "google-analytics", label: "5. Google Analytics & Services", icon: BarChart3 },
  { id: "sharing-your-information", label: "6. Sharing Your Information", icon: Share2 },
  { id: "data-security", label: "7. Data Security", icon: Lock },
  { id: "data-retention", label: "8. Data Retention", icon: CalendarDays },
  { id: "your-rights", label: "9. Your Rights", icon: UserCheck },
  { id: "childrens-privacy", label: "10. Children's Privacy", icon: Baby },
  { id: "third-party-links", label: "11. Third-Party Links", icon: ExternalLink },
  { id: "medical-disclaimer", label: "12. Medical Disclaimer", icon: AlertTriangle },
  { id: "changes-to-policy", label: "13. Changes to This Policy", icon: RefreshCw },
  { id: "contact-us", label: "14. Contact Us", icon: Mail },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50/50">
      {/* Header / Hero Section */}
      <section className="relative py-16 md:py-24 bg-slate-900 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-87.5 bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container max-w-6xl relative z-10 px-4 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-xs font-semibold text-green-400 tracking-wider uppercase">
              Trust & Transparency
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-400 text-sm md:text-base font-medium">
            Effective Date: July 27, 2026
          </p>
          <div className="max-w-2xl mx-auto mt-6 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5 md:p-6 backdrop-blur-xs">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Welcome to Aatral360 (&ldquo;Aatral360&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). We are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or use our physiotherapy and rehabilitation services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="py-12 md:py-16">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            
            {/* Sticky Sidebar Navigation */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Table of Contents</span>
                </h3>
                <nav className="space-y-1">
                  {sections.map((sec) => {
                    const Icon = sec.icon;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 rounded-lg hover:text-green-600 hover:bg-green-50/50 transition-all font-medium group"
                      >
                        <Icon className="w-4 h-4 text-slate-400 group-hover:text-green-600 shrink-0" />
                        <span className="truncate">{sec.label.replace(/^\d+\.\s*/, '')}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Content Container */}
            <article className="lg:col-span-8 space-y-8">
              
              {/* Section 1 */}
              <section id="who-we-are" className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs scroll-mt-24 hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2.5 bg-green-50 rounded-xl text-green-600 shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">
                    1. Who We Are
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Aatral360 is a physiotherapy and movement health clinic providing evidence-based rehabilitation, strength & conditioning, nutrition & wellness services, sports rehabilitation, neurological rehabilitation, women&apos;s health physiotherapy, and related healthcare services.
                </p>
              </section>

              {/* Section 2 */}
              <section id="information-we-collect" className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs scroll-mt-24 hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2.5 bg-green-50 rounded-xl text-green-600 shrink-0">
                    <Database className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">
                    2. Information We Collect
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6">
                  Depending on how you interact with our website, we may collect different categories of information:
                </p>

                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-100">
                    <h3 className="font-bold text-slate-800 text-sm md:text-base mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-green-500 rounded-full" />
                      Personal Information
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-600 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>Full name</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>Mobile number</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>Email address</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>Age and gender (where applicable)</span>
                      </li>
                      <li className="flex items-center gap-2 md:col-span-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>Appointment details</span>
                      </li>
                      <li className="flex items-center gap-2 md:col-span-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>Information voluntarily provided through contact forms or consultation requests</span>
                      </li>
                    </ul>
                  </div>

                  {/* Health Information */}
                  <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-100">
                    <h3 className="font-bold text-slate-800 text-sm md:text-base mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-green-500 rounded-full" />
                      Health Information
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm mb-3">
                      If you request an appointment or consultation, you may choose to provide health-related information:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-600 text-sm mb-3">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>Symptoms</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>Injury details</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>Medical history</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>Previous treatments</span>
                      </li>
                      <li className="flex items-center gap-2 md:col-span-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>Other information relevant to your care</span>
                      </li>
                    </ul>
                    <p className="text-xs text-slate-500 italic">
                      Providing this information is voluntary but may be necessary for us to understand your enquiry.
                    </p>
                  </div>

                  {/* Technical Information */}
                  <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-100">
                    <h3 className="font-bold text-slate-800 text-sm md:text-base mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-green-500 rounded-full" />
                      Technical Information
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm mb-3">
                      When you visit our website, we may automatically collect:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-600 text-sm mb-3">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>IP address</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>Browser type</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>Device information</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>Operating system</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>Pages visited</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>Time spent on the website</span>
                      </li>
                      <li className="flex items-center gap-2 md:col-span-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>Referral source</span>
                      </li>
                    </ul>
                    <p className="text-xs text-slate-500 italic">
                      This information helps us improve our website and user experience.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="how-we-use-your-information" className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs scroll-mt-24 hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2.5 bg-green-50 rounded-xl text-green-600 shrink-0">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">
                    3. How We Use Your Information
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 text-sm">
                  {[
                    "Schedule and manage appointments",
                    "Respond to your enquiries",
                    "Provide physiotherapy and rehabilitation services",
                    "Improve our website and services",
                    "Communicate appointment confirmations and reminders",
                    "Send educational content or updates where you have provided consent",
                    "Comply with legal or regulatory obligations"
                  ].map((use, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-slate-50/50 rounded-lg p-3 border border-slate-100">
                      <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{use}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4 */}
              <section id="cookies" className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs scroll-mt-24 hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2.5 bg-green-50 rounded-xl text-green-600 shrink-0">
                    <Cookie className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">
                    4. Cookies
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                  Our website may use cookies and similar technologies to:
                </p>
                <ul className="space-y-2 mb-4 text-slate-600 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span>Improve website performance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span>Remember user preferences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span>Analyse website traffic</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span>Enhance user experience</span>
                  </li>
                </ul>
                <div className="bg-slate-50 border-l-4 border-green-500 p-4 rounded-r-xl">
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    You may disable cookies through your browser settings. Some website features may not function properly if cookies are disabled.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="google-analytics" className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs scroll-mt-24 hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2.5 bg-green-50 rounded-xl text-green-600 shrink-0">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">
                    5. Google Analytics and Similar Services
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                  We may use analytics services such as Google Analytics to understand how visitors use our website. These services collect anonymous usage information such as:
                </p>
                <div className="grid grid-cols-2 gap-3 text-slate-600 text-sm mb-4">
                  <div className="bg-slate-50 rounded-lg p-3 text-center border border-slate-100">Pages visited</div>
                  <div className="bg-slate-50 rounded-lg p-3 text-center border border-slate-100">Session duration</div>
                  <div className="bg-slate-50 rounded-lg p-3 text-center border border-slate-100">Device type</div>
                  <div className="bg-slate-50 rounded-lg p-3 text-center border border-slate-100">General geographic location</div>
                  <div className="bg-slate-50 rounded-lg p-3 text-center border border-slate-100 col-span-2">Website performance metrics</div>
                </div>
                <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-center">
                  <p className="text-xs md:text-sm font-semibold text-green-800">
                    These services do not identify you personally.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="sharing-your-information" className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs scroll-mt-24 hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2.5 bg-green-50 rounded-xl text-green-600 shrink-0">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">
                    6. Sharing Your Information
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                  We respect your privacy. <strong>We do not sell, rent, or trade your personal information.</strong>
                </p>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                  Your information may be shared only when necessary with:
                </p>
                <ul className="space-y-2 mb-4 text-slate-600 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span>Appointment scheduling platforms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span>Payment service providers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span>Secure cloud storage providers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span>Website hosting providers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span>Government or regulatory authorities when required by law</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-500 italic bg-slate-50 p-3 rounded-lg">
                  All third-party service providers are expected to protect your information appropriately.
                </p>
              </section>

              {/* Section 7 */}
              <section id="data-security" className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs scroll-mt-24 hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2.5 bg-green-50 rounded-xl text-green-600 shrink-0">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">
                    7. Data Security
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                  We take reasonable administrative, technical, and organisational measures to protect your information against:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-slate-600 text-sm mb-4">
                  {["Unauthorised access", "Loss", "Misuse", "Alteration", "Disclosure"].map((item, index) => (
                    <span key={index} className="bg-slate-50 rounded-lg p-2.5 text-center border border-slate-100 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                  <p className="text-xs text-amber-700 leading-relaxed">
                    However, no method of internet transmission or electronic storage is completely secure, and we cannot guarantee absolute security.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section id="data-retention" className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs scroll-mt-24 hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2.5 bg-green-50 rounded-xl text-green-600 shrink-0">
                    <CalendarDays className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">
                    8. Data Retention
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                  We retain personal information only for as long as necessary to:
                </p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span>Provide our services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span>Maintain clinical records where applicable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span>Meet legal and regulatory requirements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span>Resolve disputes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span>Enforce our agreements</span>
                  </li>
                </ul>
              </section>

              {/* Section 9 */}
              <section id="your-rights" className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs scroll-mt-24 hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2.5 bg-green-50 rounded-xl text-green-600 shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">
                    9. Your Rights
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                  Subject to applicable laws, you may request to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 text-sm mb-4">
                  {[
                    "Access your personal information",
                    "Correct inaccurate information",
                    "Update your information",
                    "Request deletion of your information where legally permissible",
                    "Withdraw consent for marketing communications"
                  ].map((right, index) => (
                    <div key={index} className="flex items-center gap-2.5 bg-slate-50 rounded-lg p-3 border border-slate-100">
                      <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                      <span>{right}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500">
                  To exercise these rights, please contact us using the details below.
                </p>
              </section>

              {/* Section 10 */}
              <section id="childrens-privacy" className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs scroll-mt-24 hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2.5 bg-green-50 rounded-xl text-green-600 shrink-0">
                    <Baby className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">
                    10. Children&apos;s Privacy
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Our services may be provided to children with the consent of a parent or legal guardian. We do not knowingly collect personal information directly from children without appropriate parental or guardian involvement.
                </p>
              </section>

              {/* Section 11 */}
              <section id="third-party-links" className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs scroll-mt-24 hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2.5 bg-green-50 rounded-xl text-green-600 shrink-0">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">
                    11. Third-Party Links
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Our website may contain links to third-party websites such as social media platforms, payment providers, or educational resources. We are not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies separately.
                </p>
              </section>

              {/* Section 12 */}
              <section id="medical-disclaimer" className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs scroll-mt-24 hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600 shrink-0">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">
                    12. Medical Disclaimer
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    Information provided on this website is intended for general educational purposes only.
                  </p>
                  <p className="font-medium text-slate-700 bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500">
                    It should not be considered medical advice and does not replace a professional consultation, diagnosis, or treatment. Always seek advice from a qualified healthcare professional regarding your medical condition.
                  </p>
                  <p className="text-xs text-slate-500 italic">
                    Submitting an enquiry or appointment request through this website does not establish a therapist–patient relationship until your consultation has been confirmed.
                  </p>
                </div>
              </section>

              {/* Section 13 */}
              <section id="changes-to-policy" className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs scroll-mt-24 hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2.5 bg-green-50 rounded-xl text-green-600 shrink-0">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">
                    13. Changes to This Privacy Policy
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  We may update this Privacy Policy from time to time. Any changes will be published on this page along with the updated effective date. Continued use of our website after such changes constitutes acceptance of the revised Privacy Policy.
                </p>
              </section>

              {/* Section 14 */}
              <section id="contact-us" className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs scroll-mt-24 hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2.5 bg-green-50 rounded-xl text-green-600 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">
                    14. Contact Us
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6">
                  If you have any questions regarding this Privacy Policy or the handling of your personal information, please contact us:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Address */}
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-start gap-4 md:col-span-2">
                    <div className="p-2 bg-green-100 rounded-xl text-green-700 shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">Clinic Address</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Aatral360<br />
                        Plot No. 500, Flat no. 502, 5th floor, Surya Arcade,<br />
                        9th Phase Road, Venkataramana Colony, Gokul Plots,<br />
                        KPHB Phase 9, Hyderabad, Telangana 500085
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <a
                    href="mailto:goodphysiohub@gmail.com"
                    className="bg-slate-50 hover:bg-green-50/50 hover:border-green-500/30 transition-all rounded-2xl p-5 border border-slate-100 flex items-start gap-4 group"
                  >
                    <div className="p-2 bg-green-100 rounded-xl text-green-700 shrink-0 mt-0.5 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-slate-800 text-sm mb-1">Email Address</h4>
                      <p className="text-slate-600 text-sm truncate font-medium group-hover:text-green-700 transition-colors">
                        goodphysiohub@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:8838086426"
                    className="bg-slate-50 hover:bg-green-50/50 hover:border-green-500/30 transition-all rounded-2xl p-5 border border-slate-100 flex items-start gap-4 group"
                  >
                    <div className="p-2 bg-green-100 rounded-xl text-green-700 shrink-0 mt-0.5 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">Phone Number</h4>
                      <p className="text-slate-600 text-sm font-medium group-hover:text-green-700 transition-colors">
                        +91 88380 86426
                      </p>
                    </div>
                  </a>

                  {/* Website */}
                  <Link
                    href="https://aatral360.vercel.app"
                    target="_blank"
                    className="bg-slate-50 hover:bg-green-50/50 hover:border-green-500/30 transition-all rounded-2xl p-5 border border-slate-100 flex items-start gap-4 group md:col-span-2"
                  >
                    <div className="p-2 bg-green-100 rounded-xl text-green-700 shrink-0 mt-0.5 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">Official Website</h4>
                      <p className="text-slate-600 text-sm font-medium group-hover:text-green-700 transition-colors flex items-center gap-1">
                        https://aatral360.vercel.app
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </p>
                    </div>
                  </Link>
                </div>
              </section>

            </article>

          </div>
        </div>
      </section>
    </main>
  );
}
