import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Award,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Dna,
  HeartHandshake,
  LineChart,
  Microscope,
  PhoneCall,
  Shield,
  Stethoscope,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Aatral360 | Dr. Sarath Kumar N, PT",
  description:
    "Learn about Aatral360, founded by Dr. Sarath Kumar N, PT. We offer premium, evidence-based physiotherapy specializing in sports injuries and musculoskeletal pain.",
  openGraph: {
    title: "About Aatral360 | Dr. Sarath Kumar N, PT",
    description:
      "Premium, evidence-based physiotherapy clinic specializing in sports injuries, musculoskeletal pain, and long-term functional recovery.",
    url: "https://aatral360.com/about",
    siteName: "Aatral360",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Aatral360",
  "url": "https://aatral360.com",
  "logo": "https://aatral360.com/logo.png",
  "founder": {
    "@type": "Person",
    "name": "Dr. Sarath Kumar N",
    "jobTitle": "Founder & Lead Physiotherapist",
    "honorificPrefix": "Dr.",
    "honorificSuffix": "PT, MPT – Sports"
  },
  "medicalSpecialty": [
    "Physiotherapy",
    "Sports Medicine",
    "Musculoskeletal Disorders",
    "Post-Surgical Rehabilitation"
  ],
  "description": "Modern physiotherapy and rehabilitation clinic focused on evidence-based care and root-cause treatment.",
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* SECTION 1: Hero Section */}
      <section className="relative pt-20 pb-20 sm:pt-32 sm:pb-32 lg:pt-48 lg:pb-48 overflow-hidden flex items-center min-h-[50vh] sm:min-h-[70vh]">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
            <div className="text-center">
              <Users className="w-16 h-16 md:w-24 md:h-24 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-400 font-medium text-lg md:text-xl">Large Founder/Clinic Image Placeholder</p>
            </div>
          </div>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/80 md:bg-linear-to-r md:from-white/95 md:to-white/30" />
          <Image 
            src="/images/about-ill.jpg"
            alt="Aatral360 Clinic and Founder"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/80 md:bg-linear-to-r md:from-white/25 md:to-white/25" />
         
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100/80 border border-green-200 mb-6 backdrop-blur-sm">
              <Activity className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-700 tracking-wide uppercase">
                About Our Clinic
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Helping People <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-500">Move Better</span>, Recover Stronger, and Live Pain-Free.
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-2xl font-medium">
              Evidence-based physiotherapy and rehabilitation designed around long-term recovery and functional outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Story */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Our Story: A Commitment to <span className="text-green-600">Patient-Centered</span> Care
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Aatral360 was established with a singular, driving purpose: to elevate the standard of physiotherapy by shifting the focus from temporary symptom management to sustainable, long-term recovery. 
                </p>
                <p>
                  We recognized a profound need in the community for clinical care that addresses the <strong>root causes</strong> of movement dysfunction and pain. Too often, patients are rushed through treatments that only offer fleeting relief. We wanted to create a sanctuary of healing where every patient is heard, rigorously assessed, and comprehensively treated.
                </p>
                <p>
                  Today, Aatral360 stands as a modern rehabilitation center where evidence-based science meets compassionate human connection. We don&apos;t just treat injuries; we treat the individual, empowering you to reclaim your active lifestyle with confidence.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-slate-900/80 via-slate-900/20 to-transparent md:from-slate-900/60 md:via-transparent rounded-3xl transform rotate-3 scale-105 -z-10" />
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                <QuoteIcon className="w-12 h-12 text-green-200 mb-6" />
                <p className="text-2xl font-medium text-slate-800 leading-snug italic">
                  &quot;Our mission goes beyond alleviating pain. We are here to rebuild resilience, restore function, and educate our patients so they can take control of their own physical health.&quot;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-bold text-xl">SK</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">Dr. Sarath Kumar N</p>
                    <p className="text-slate-500 font-medium">Founder &amp; Lead Physiotherapist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Meet The Founder */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-green-600 font-bold tracking-wider uppercase text-sm">Clinical Leadership</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">Meet The Founder</h2>
          </div>

          <div className="bg-white rounded-4xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="grid lg:grid-cols-12 max-w-none">
              {/* Photo Side */}
              <div className="lg:col-span-5 relative bg-slate-100 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-500 font-medium">Dr. Sarath Kumar N Photo</p>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-7 p-10 md:p-16 lg:p-20">
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Dr. Sarath Kumar N, <span className="text-green-600">PT</span></h3>
                  <p className="text-xl font-medium text-slate-500">Founder &amp; Lead Physiotherapist</p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
                      <Award className="w-5 h-5 text-green-600" />
                      Qualifications &amp; Experience
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span><strong>Master of Sports Physiotherapy</strong> (MPT – Sports)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span><strong>9+ Years</strong> of dedicated clinical experience</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
                      <Microscope className="w-5 h-5 text-green-600" />
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Sports Injury Rehabilitation", "Musculoskeletal Physiotherapy", "Post-Surgical Rehabilitation", "Spine Conditions", "Peripheral Joint Conditions", "Movement Analysis", "Corrective Exercise Therapy"].map((exp) => (
                        <span key={exp} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
                      <HeartHandshake className="w-5 h-5 text-green-600" />
                      Professional Philosophy
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      Dr. Sarath firmly believes in evidence-based assessment, personalized treatment planning, and patient education. His approach focuses on uncovering and treating the biomechanical root causes of pain rather than offering temporary symptom relief, ensuring patients achieve sustainable, long-term functional outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-10 md:p-14 rounded-3xl border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl group-hover:bg-green-100/50 transition-colors duration-500" />
              <Target className="w-12 h-12 text-green-600 mb-8 relative z-10" />
              <h3 className="text-3xl font-bold text-slate-900 mb-6 relative z-10">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed relative z-10">
                To transform lives by integrating rehabilitation, movement, performance, and wellness into one personalized, evidence-based approach that helps every individual achieve lifelong health and confidence.
              </p>
            </div>

            <div className="bg-slate-50 p-10 md:p-14 rounded-3xl border border-slate-100 relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl group-hover:bg-green-100/50 transition-colors duration-500" />
              <SparklesIcon className="w-12 h-12 text-green-600 mb-8 relative z-10" />
              <h3 className="text-3xl font-bold text-slate-900 mb-6 relative z-10">Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 relative z-10">
                To redefine healthcare by becoming the world's most trusted destination for movement, rehabilitation, and human performance—where science, compassion, and innovation empower people to live without limitations.
              </p>
              <ul className="space-y-3 relative z-10">
                {["Ethical Practice", "Evidence-Based Rehabilitation", "Patient Education", "Long-Term Outcomes"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Clinical Areas of Expertise */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Clinical Areas of Expertise</h2>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive, evidence-based treatments tailored to address complex physical challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Sports Rehabilitation", desc: "Advanced protocols to return athletes safely to peak performance.", icon: Activity },
              { title: "Musculoskeletal Physiotherapy", desc: "Expert management of muscle, joint, and soft tissue disorders.", icon: Dna },
              { title: "Post-Surgical Recovery", desc: "Structured rehabilitation to restore mobility and strength after surgery.", icon: Stethoscope },
              { title: "Spine Rehabilitation", desc: "Targeted care for complex cervical, thoracic, and lumbar conditions.", icon: Shield },
              { title: "Movement Retraining", desc: "Correcting faulty biomechanics to prevent chronic injury recurrence.", icon: LineChart },
              { title: "Corrective Exercise", desc: "Prescriptive, functional exercises tailored to your specific deficits.", icon: ClipboardCheck },
            ].map((area, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-green-300 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-tr from-green-600 to-green-400 flex items-center justify-center text-white mb-6 shadow-lg shadow-green-600/20">
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Why Patients Trust Us */}
      <section className="py-24 bg-white border-t border-slate-200/60">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Patients Trust Us</h2>
            <p className="mt-4 text-lg text-slate-600">
              The pillars of our practice that ensure you receive exceptional care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Evidence-Based Care", desc: "Protocols validated by the latest medical research." },
              { title: "Personalized Treatment", desc: "Individualized care plans, no generic routines." },
              { title: "Patient Education", desc: "Understanding your body is the first step to healing." },
              { title: "Ethical Practice", desc: "Transparent, honest, and patient-first clinical decisions." },
              { title: "Modern Rehabilitation", desc: "Integrating advanced therapeutic modalities." },
              { title: "Long-Term Recovery Focus", desc: "Building lasting strength and preventing recurrence." },
            ].map((trust, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5 transition-all">
                <CheckCircle2 className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{trust.title}</h3>
                <p className="text-slate-600">{trust.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Statistics Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "9+", label: "Years Experience" },
              { value: "Hundreds", label: "of Patients Supported" },
              { value: "100%", label: "Evidence-Based Care" },
              { value: "15+", label: "Specialized Programs" },
            ].map((stat, i) => (
              <div key={i} className={`text-center ${i > 0 ? 'lg:border-l lg:border-slate-200 lg:pl-8' : ''}`}>
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Appointment CTA */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container max-w-4xl">
          <div className="bg-slate-50 rounded-4xl p-10 md:p-16 text-center border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Start Your Recovery Journey Today
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                Don&apos;t let pain or mobility issues dictate your life. Schedule an assessment with Dr. Sarath Kumar N and take the first step toward lasting recovery.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/physiotherapy/appointment" 
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-green-600/20"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
                <a 
                  href="tel:+1234567890" 
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-bold px-8 py-4 rounded-xl transition-colors"
                >
                  <PhoneCall className="w-5 h-5 text-green-600" />
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Simple icons not available in lucide-react directly
function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}
