import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Award,
  Brain,
  BookOpen,
  Calendar,
  ClipboardCheck,
  Dna,
  Dumbbell,
  HeartHandshake,
  HeartPulse,
  Laptop,
  LineChart,
  MessageCircleQuestion,
  PhoneCall,
  Shield,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  Trophy,
  ClipboardList,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Premium Physiotherapy & Rehabilitation Services | The Physio Hub",
  description:
    "Comprehensive evidence-based physiotherapy, sports rehabilitation, and chronic pain management. Book your personalized treatment program at The Physio Hub today.",
  openGraph: {
    title: "Premium Physiotherapy & Rehabilitation Services | The Physio Hub",
    description:
      "Comprehensive evidence-based physiotherapy, sports rehabilitation, and chronic pain management.",
    url: "https://thephysiohub.com/services",
    siteName: "The Physio Hub",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalSpecialty",
  name: "Physiotherapy Services",
  provider: {
    "@type": "MedicalOrganization",
    name: "The Physio Hub",
    url: "https://thephysiohub.com",
  },
  description:
    "Evidence-based physiotherapy, sports injury conditioning, post-surgical rehabilitation, and movement retraining.",
};

const services = [
  {
    id: "musculoskeletal-conditioning",
    title: "Musculoskeletal Conditioning",
    description:
      "Assessment and treatment of muscle, joint, tendon, ligament, and movement-related disorders. Focus on pain reduction, improved mobility, and functional recovery.",
    benefits: ["Pain Reduction", "Restored Mobility", "Joint Stability"],
    icon: Dna,
  },
  {
    id: "sports-injury-conditioning",
    title: "Sports Injury Conditioning",
    description:
      "Specialized rehabilitation programs for athletes and active individuals recovering from sports-related injuries.",
    benefits: [
      "Performance Recovery",
      "Injury Prevention",
      "Sport-Specific Training",
    ],
    icon: Activity,
  },
  {
    id: "post-surgical-re-conditioning",
    title: "Post-Surgical Reconditioning",
    description:
      "Structured recovery programs after orthopedic and surgical procedures to restore strength, movement, and confidence.",
    benefits: ["Safe Mobilization", "Tissue Healing", "Strength Restoration"],
    icon: Stethoscope,
  },
  {
    id: "chronic-pain-management",
    title: "Chronic Pain Management",
    description:
      "Evidence-based strategies to manage long-standing pain conditions and improve quality of life.",
    benefits: [
      "Pain Modulation",
      "Lifestyle Adaptation",
      "Nervous System Desensitization",
    ],
    icon: HeartPulse,
  },
  {
    id: "movement-retraining-motor-control",
    title: "Movement Retraining & Motor Control",
    description:
      "Corrective movement programs designed to improve body mechanics, coordination, stability, and efficiency.",
    benefits: [
      "Biomechanical Correction",
      "Enhanced Coordination",
      "Postural Alignment",
    ],
    icon: LineChart,
  },
  {
    id: "return-to-activity",
    title: "Return To Activity Rehabilitation",
    description:
      "Progressive rehabilitation designed to safely return patients to work, sports, fitness, and daily activities.",
    benefits: ["Functional Capacity", "Work Conditioning", "Safe Progression"],
    icon: Dumbbell,
  },
  {
    id: "spine-care-functional-rehabilitation",
    title: "Spine Care & Functional Rehabilitation",
    description:
      "Assessment and rehabilitation of neck, back, and spine-related conditions using evidence-based treatment methods.",
    benefits: ["Core Stability", "Spinal Mobility", "Postural Endurance"],
    icon: Shield,
  },
  {
    id: "clinical-workshops",
    title: "Clinical Workshops",
    description:
      "Educational workshops focused on injury prevention, movement health, rehabilitation awareness, and wellness.",
    benefits: [
      "Hands-On Learning",
      "Preventative Strategies",
      "Group Education",
    ],
    icon: Users,
  },
  {
    id: "professional-webinars",
    title: "Professional Webinars",
    description:
      "Online educational sessions covering rehabilitation, physiotherapy, recovery strategies, and injury prevention.",
    benefits: ["Remote Access", "Expert Insights", "Interactive Q&A"],
    icon: Laptop,
  },
];

const conditions = [
  "Neck Pain",
  "Back Pain",
  "Sports Injuries",
  "Joint Pain",
  "Post-Surgical Recovery",
  "Mobility Issues",
  "Chronic Pain",
  "Muscle Injuries",
  "Shoulder Conditions",
  "Knee Conditions",
];

const steps = [
  {
    icon: ClipboardList,
    title: "Assessment",
    description: "Thorough evaluation of your movement, history, and goals.",
  },
  {
    icon: Stethoscope,
    title: "Diagnosis",
    description: "Identifying the exact root cause of your pain or limitation.",
  },
  {
    icon: Activity,
    title: "Treatment",
    description: "Evidence-based therapy, manual techniques, and exercises.",
  },
  {
    icon: HeartPulse,
    title: "Recovery",
    description: "Regaining mobility, strength, and confidence.",
  },
  {
    icon: Trophy,
    title: "Performance",
    description: "Optimizing function for long-term health and activity.",
  },
];

const faqs = [
  {
    q: "How many sessions will I need?",
    a: "The number of sessions varies depending on your condition, its severity, and your goals. After your initial assessment, your physiotherapist will provide a customized treatment plan outlining the expected timeline and frequency of visits.",
  },
  {
    q: "Do I need a doctor's referral?",
    a: "No, you do not need a doctor's referral to see a physiotherapist. However, some insurance providers may require a referral for coverage. We recommend checking with your insurance company directly.",
  },
  {
    q: "Can physiotherapy help chronic pain?",
    a: "Absolutely. We use evidence-based pain neuroscience education, graded exposure, and movement therapy to help desensitize your nervous system and manage chronic pain conditions effectively.",
  },
  {
    q: "Can I return to sports after rehabilitation?",
    a: "Yes. Our sports injury conditioning and return-to-activity programs are specifically designed to bridge the gap between initial recovery and high-level athletic performance safely.",
  },
  {
    q: "What happens during the first consultation?",
    a: "Your first visit includes a comprehensive physical assessment, a detailed discussion of your medical history and goals, an initial diagnosis, and the start of your personalized treatment plan, which may include hands-on therapy and home exercises.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 z-0 opacity-50">
          {/* Abstract light background pattern */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-100/60 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-block py-1.5 px-3 rounded-full bg-green-100/80 text-green-700 font-semibold text-sm tracking-wider uppercase mb-6 border border-green-200">
            Clinical Excellence
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-slate-900">
            Comprehensive Physiotherapy &{" "}
            <span className="text-green-600">Rehabilitation Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-medium">
            Personalized treatment programs designed to help you recover, move
            better, and perform at your best.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-green-600/20"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: Services Overview */}
      <section className="py-20 bg-white border-b border-slate-100 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Raising the Standard of Care
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              At The Physio Hub, we don&apos;t just treat symptoms; we address
              the root cause. Our approach combines{" "}
              <strong>Evidence-Based Care</strong> with{" "}
              <strong>Personalized Programs</strong> to ensure{" "}
              <strong>Long-Term Recovery</strong>. We leverage modern clinical
              research and advanced rehabilitation methodologies to restore your
              functional capacity.
            </p>

            <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 text-green-600">
                  <ClipboardCheck className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900">Evidence-Based</h3>
                <p className="text-slate-500 text-sm mt-2">
                  Driven by latest clinical research.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 text-green-600">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900">Personalized</h3>
                <p className="text-slate-500 text-sm mt-2">
                  Tailored specifically to your goals.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 text-green-600">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900">Long-Term Recovery</h3>
                <p className="text-slate-500 text-sm mt-2">
                  Sustainable movement health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Premium Service Cards */}
      <section className="py-24 bg-slate-50" id="services">
        <div className="container max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Clinical Specialties
            </h2>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
              Comprehensive, specialized rehabilitation programs tailored to
              your specific pain, injury, and movement dysfunction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                href={`/services/${service.id}`}
                key={service.id}
                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300 flex items-start gap-5 relative overflow-hidden"
              >
                {/* Decorative Hover Background */}
                <div className="absolute inset-0 bg-linear-to-r from-green-50/0 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors duration-300 relative z-10">
                  <service.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div className="relative z-10 flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-green-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Conditions We Commonly Treat */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Conditions We Commonly Treat
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                From acute sports injuries to chronic movement disorders, our
                expert physiotherapists are equipped to handle a wide spectrum
                of physical conditions using advanced clinical protocols.
              </p>
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-green-600/20"
              >
                Get Assessed Today
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {conditions.map((condition, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 px-4 py-6 rounded-2xl border border-slate-100 text-center hover:bg-green-50 hover:border-green-200 transition-colors cursor-default"
                  >
                    <span className="font-bold text-slate-900">
                      {condition}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Our Treatment Process */}
      <section className="section bg-slate-50 border-y border-slate-100 overflow-hidden relative">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 mb-6">
              <span className="text-sm font-semibold text-green-700 tracking-wide uppercase">
                The Process
              </span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Your Clinical Recovery Journey
            </h2>
            <p className="text-slate-600 text-lg">
              A structured, proven pathway from pain to peak performance.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200" />
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-green-500 origin-left scale-x-0 transition-transform duration-1000 ease-out animate-[scaleX_2s_forwards]" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center mb-6 relative z-10 group-hover:bg-green-600 group-hover:border-green-100 transition-all duration-300 shadow-xl shadow-slate-200/50">
                    <step.icon className="w-10 h-10 text-green-600 group-hover:text-white transition-colors duration-300" />

                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm border-2 border-white group-hover:bg-white group-hover:text-green-600 transition-colors">
                      {idx + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Why Choose The Physio Hub */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why Choose The Physio Hub
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { title: "Evidence-Based Rehabilitation", icon: BookOpen },
              { title: "Personalized Care", icon: HeartHandshake },
              { title: "Expert Guidance", icon: Award },
              { title: "Functional Recovery", icon: Activity },
              { title: "Patient Education", icon: Brain },
              { title: "Long-Term Outcomes", icon: TrendingUp },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We prioritize rigorous clinical standards to deliver
                    reliable, effective, and lasting results for every patient.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <MessageCircleQuestion className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Final CTA */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container max-w-5xl">
          <div className="bg-slate-50 rounded-4xl p-10 md:p-16 text-center shadow-xl border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50/50 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Start Your Recovery Journey Today
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
                Book an appointment and take the first step toward better
                movement and long-term health.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-green-600/20"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold px-8 py-4 rounded-xl transition-all shadow-sm"
                >
                  <PhoneCall className="w-5 h-5 text-green-600" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
