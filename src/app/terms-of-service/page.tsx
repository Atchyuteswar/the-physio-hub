import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Building2,
  UserCheck,
  AlertTriangle,
  Calendar,
  Video,
  AlertCircle,
  Lock,
  GraduationCap,
  CreditCard,
  Ban,
  ExternalLink,
  Shield,
  CloudLightning,
  MessageSquare,
  Globe,
  Mail,
  Phone,
  MapPin,
  RefreshCw
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Aatral360",
  description:
    "Terms of Service for Aatral360. Learn about our terms, rules, and guidelines for accessing and using our clinic's website and services.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service | Aatral360",
    description:
      "Terms of Service for Aatral360. Learn about our terms, rules, and guidelines.",
    url: "https://aatral360.com/terms-of-service",
    siteName: "Aatral360",
    type: "website",
  },
  alternates: {
    canonical: "/terms-of-service",
  },
};

const sections = [
  { id: "about-aatral", label: "1. About Aatral360", icon: Building2 },
  { id: "eligibility", label: "2. Eligibility", icon: UserCheck },
  { id: "medical-disclaimer", label: "3. Medical Disclaimer", icon: AlertTriangle },
  { id: "appointments", label: "4. Appointments", icon: Calendar },
  { id: "online-consultations", label: "5. Online Consultations", icon: Video },
  { id: "user-responsibilities", label: "6. User Responsibilities", icon: AlertCircle },
  { id: "intellectual-property", label: "7. Intellectual Property", icon: Lock },
  { id: "educational-resources", label: "8. Educational Resources", icon: GraduationCap },
  { id: "payments", label: "9. Payments", icon: CreditCard },
  { id: "limitation-of-liability", label: "10. Limitation of Liability", icon: Ban },
  { id: "third-party-links", label: "11. Third-Party Links", icon: ExternalLink },
  { id: "privacy", label: "12. Privacy", icon: Shield },
  { id: "website-availability", label: "13. Website Availability", icon: CloudLightning },
  { id: "user-submitted-content", label: "14. User-Submitted Content", icon: MessageSquare },
  { id: "governing-law", label: "15. Governing Law", icon: Globe },
  { id: "changes-to-terms", label: "16. Changes to These Terms", icon: RefreshCw },
  { id: "contact-us", label: "17. Contact Us", icon: Mail },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-50/50">
      {/* Header / Hero Section */}
      <section className="relative py-16 md:py-24 bg-slate-900 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-87.5 bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container max-w-6xl relative z-10 px-4 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <FileText className="w-4 h-4 text-green-400" />
            <span className="text-xs font-semibold text-green-400 tracking-wider uppercase">
              Terms & Conditions
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-slate-400 text-sm md:text-base font-medium">
            Effective Date: July 27, 2026
          </p>
          <div className="max-w-2xl mx-auto mt-6 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5 md:p-6 backdrop-blur-xs">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Welcome to <strong>Aatral360</strong> (&ldquo;Aatral360&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Aatral360 website and any services offered through it. By accessing or using our website, you agree to comply with these Terms. If you do not agree, please do not use our website or services.
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
                  <FileText className="w-4 h-4 text-green-600" />
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

            {/* Terms Content */}
            <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-10 shadow-xs space-y-12">
              
              {/* Section 1 */}
              <section id="about-aatral" className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 pb-2 border-b border-slate-100">
                  <Building2 className="w-5 h-5 text-green-600" />
                  <span>1. About Aatral360</span>
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    Aatral360 is a movement health and rehabilitation clinic offering evidence-based services including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Physiotherapy</li>
                    <li>Sports Injury Rehabilitation</li>
                    <li>Musculoskeletal Rehabilitation</li>
                    <li>Neurological Rehabilitation</li>
                    <li>Women&apos;s Health Physiotherapy</li>
                    <li>Strength & Conditioning</li>
                    <li>Nutrition & Wellness</li>
                    <li>Corporate Wellness Programs</li>
                    <li>Injury Prevention and Performance Services</li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section id="eligibility" className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 pb-2 border-b border-slate-100">
                  <UserCheck className="w-5 h-5 text-green-600" />
                  <span>2. Eligibility</span>
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>By using this website, you confirm that:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>You are at least 18 years of age, or you are using the website under the supervision of a parent or legal guardian.</li>
                    <li>The information you provide is accurate and complete.</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section id="medical-disclaimer" className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 pb-2 border-b border-slate-100">
                  <AlertTriangle className="w-5 h-5 text-green-600" />
                  <span>3. Medical Information Disclaimer</span>
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    The content available on this website, including articles, videos, exercise demonstrations, blogs, and educational resources, is provided solely for informational and educational purposes.
                  </p>
                  <p className="font-semibold text-slate-800">
                    It is NOT intended to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Replace professional medical advice</li>
                    <li>Diagnose any medical condition</li>
                    <li>Prescribe treatment</li>
                    <li>Replace an in-person assessment by a qualified healthcare professional</li>
                  </ul>
                  <p className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-amber-900 text-sm">
                    <strong>Important:</strong> Always consult a qualified healthcare provider before starting any exercise program or rehabilitation plan.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="appointments" className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 pb-2 border-b border-slate-100">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <span>4. Appointments</span>
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    Appointments requested through our website are considered <strong>requests only</strong> until they are confirmed by Aatral360.
                  </p>
                  <p>
                    Appointment availability may change based on therapist schedules, emergencies, or operational requirements. We reserve the right to reschedule or cancel appointments when necessary.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="online-consultations" className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 pb-2 border-b border-slate-100">
                  <Video className="w-5 h-5 text-green-600" />
                  <span>5. Online Consultations</span>
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>Where online consultations are offered:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>They are intended for appropriate clinical situations only.</li>
                    <li>Certain conditions may require an in-person assessment.</li>
                    <li>The therapist may recommend discontinuing the online consultation if it is not clinically appropriate.</li>
                  </ul>
                </div>
              </section>

              {/* Section 6 */}
              <section id="user-responsibilities" className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 pb-2 border-b border-slate-100">
                  <AlertCircle className="w-5 h-5 text-green-600" />
                  <span>6. User Responsibilities</span>
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>By using this website, you agree:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Not to provide false or misleading information.</li>
                    <li>Not to misuse the website.</li>
                    <li>Not to attempt unauthorized access to our systems.</li>
                    <li>Not to upload malicious software or harmful code.</li>
                    <li>Not to interfere with website functionality.</li>
                    <li>To use the website only for lawful purposes.</li>
                  </ul>
                </div>
              </section>

              {/* Section 7 */}
              <section id="intellectual-property" className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 pb-2 border-b border-slate-100">
                  <Lock className="w-5 h-5 text-green-600" />
                  <span>7. Intellectual Property</span>
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    Unless otherwise stated, all content on this website is owned by or licensed to Aatral360, including the logo, brand identity, text, articles, exercise illustrations, photographs, videos, graphics, icons, website design, and educational materials.
                  </p>
                  <p>
                    You may not copy, reproduce, distribute, modify, publish, or commercially exploit any content without prior written permission from Aatral360.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section id="educational-resources" className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 pb-2 border-b border-slate-100">
                  <GraduationCap className="w-5 h-5 text-green-600" />
                  <span>8. Educational Resources</span>
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    Any rehabilitation protocols, exercise programs, webinars, downloadable resources, or educational materials available on this website are intended solely for personal educational use.
                  </p>
                  <p>
                    They may not be reproduced, sold, redistributed, or used for commercial training without written authorization.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="payments" className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 pb-2 border-b border-slate-100">
                  <CreditCard className="w-5 h-5 text-green-600" />
                  <span>9. Payments</span>
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>If payments are accepted through the website:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Prices are displayed in Indian Rupees (₹) unless otherwise stated.</li>
                    <li>Payment is required according to the selected service.</li>
                    <li>Secure third-party payment providers may process transactions. Aatral360 does not store your complete payment card information.</li>
                  </ul>
                  <p>
                    Refunds and cancellations are governed by our separate Refund & Cancellation Policy.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="limitation-of-liability" className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 pb-2 border-b border-slate-100">
                  <Ban className="w-5 h-5 text-green-600" />
                  <span>10. Limitation of Liability</span>
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    While we strive to provide accurate and evidence-based information, Aatral360 does not guarantee that the website will always be error-free, uninterrupted, completely secure, or free from technical issues.
                  </p>
                  <p>
                    To the fullest extent permitted by law, Aatral360 shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of this website or reliance on its content.
                  </p>
                </div>
              </section>

              {/* Section 11 */}
              <section id="third-party-links" className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 pb-2 border-b border-slate-100">
                  <ExternalLink className="w-5 h-5 text-green-600" />
                  <span>11. Third-Party Links</span>
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    Our website may contain links to third-party websites, including social media platforms, payment providers, educational resources, or external services.
                  </p>
                  <p>
                    These websites operate independently, and Aatral360 is not responsible for their content, security, privacy practices, or availability.
                  </p>
                </div>
              </section>

              {/* Section 12 */}
              <section id="privacy" className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 pb-2 border-b border-slate-100">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>12. Privacy</span>
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    Your use of this website is also governed by our{" "}
                    <Link href="/privacy-policy" className="text-green-600 hover:text-green-700 font-semibold underline">
                      Privacy Policy
                    </Link>
                    , which explains how we collect, use, and protect your personal information.
                  </p>
                </div>
              </section>

              {/* Section 13 */}
              <section id="website-availability" className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 pb-2 border-b border-slate-100">
                  <CloudLightning className="w-5 h-5 text-green-600" />
                  <span>13. Website Availability</span>
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    We may update, modify, suspend, or discontinue any part of the website or its services at any time without prior notice.
                  </p>
                  <p>
                    We are not liable for temporary interruptions due to maintenance, technical issues, or circumstances beyond our control.
                  </p>
                </div>
              </section>

              {/* Section 14 */}
              <section id="user-submitted-content" className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 pb-2 border-b border-slate-100">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  <span>14. User-Submitted Content</span>
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    If you submit reviews, testimonials, comments, or other content through our website, you grant Aatral360 a non-exclusive, royalty-free right to use, display, reproduce, and publish such content for service improvement and promotional purposes, unless you request otherwise.
                  </p>
                  <p>
                    We reserve the right to remove any content that is unlawful, offensive, misleading, or violates these Terms.
                  </p>
                </div>
              </section>

              {/* Section 15 */}
              <section id="governing-law" className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 pb-2 border-b border-slate-100">
                  <Globe className="w-5 h-5 text-green-600" />
                  <span>15. Governing Law</span>
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    These Terms shall be governed by and interpreted in accordance with the laws of India.
                  </p>
                  <p>
                    Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the competent courts in <strong>Hyderabad, Telangana, India</strong>.
                  </p>
                </div>
              </section>

              {/* Section 16 */}
              <section id="changes-to-terms" className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 pb-2 border-b border-slate-100">
                  <RefreshCw className="w-5 h-5 text-green-600" />
                  <span>16. Changes to These Terms</span>
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    We may revise these Terms of Service from time to time. Updated versions will be published on this page with a revised Effective Date.
                  </p>
                  <p>
                    Continued use of the website after changes become effective constitutes acceptance of the revised Terms.
                  </p>
                </div>
              </section>

              {/* Section 17 */}
              <section id="contact-us" className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 pb-2 border-b border-slate-100">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span>17. Contact Us</span>
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-sm md:text-base">
                  <p>
                    For questions regarding these Terms of Service, please contact us at:
                  </p>
                  <div className="space-y-4 bg-slate-50 border border-slate-150 p-6 rounded-2xl">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Email</p>
                        <p className="text-slate-600 text-sm">goodphysiohub@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Phone</p>
                        <p className="text-slate-600 text-sm">+91 88380 86426</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Address</p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Plot No. 500, Flat no. 502, 5th floor, surya arcade 9th phase road, Venkataramana Colony, Gokul plots, K P H B Phase 9, Hyderabad, Telangana 500085
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
