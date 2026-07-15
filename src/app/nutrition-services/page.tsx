import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, CalendarCheck, Apple } from "lucide-react";

export const metadata: Metadata = {
  title: "Nutrition Services",
  description: "Evidence-based nutrition services, delivered by qualified dietitians and sports nutrition professionals.",
};

export default function NutritionServicesPage() {
  const service = {
    title: "Nutrition Services (Coming Soon)",
    subtitle: "Fuel Recovery. Build Health. Optimize Performance.",
    description: "At Aatral360, we believe that rehabilitation doesn't end with exercise. Nutrition plays a vital role in tissue healing, muscle recovery, physical performance, body composition, and long-term health.",
    icon: Apple,
    longDescription: [
      "That's why we're expanding our multidisciplinary approach by introducing evidence-based nutrition services, delivered by qualified dietitians and sports nutrition professionals.",
      "Whether you're recovering from an injury, preparing for competition, improving your health, or working toward specific fitness goals, our nutrition programs will complement your rehabilitation and performance journey."
    ],
    approachSections: [
      {
        title: "Comprehensive Nutrition Assessment",
        description: "Every nutrition program will begin with an individualized assessment, including:",
        items: [
          "Medical and health history",
          "Body composition",
          "Dietary habits",
          "Lifestyle assessment",
          "Physical activity levels",
          "Training schedule",
          "Performance goals",
          "Recovery requirements"
        ]
      },
      {
        title: "Evidence-Based Nutrition Programs",
        description: "Our planned services will include:",
        items: [
          "Sports Nutrition",
          "Clinical Nutrition Support",
          "Injury Recovery Nutrition",
          "Weight Management",
          "Body Composition Optimization",
          "Muscle Gain & Strength Nutrition",
          "Fat Loss Programs",
          "Healthy Lifestyle Nutrition",
          "Nutrition for Active Ageing",
          "Performance Nutrition",
          "Hydration Strategies",
          "Competition Nutrition Planning"
        ]
      }
    ],
    targetAudience: [
      "Athletes and recreational sports participants",
      "Individuals recovering from injuries or surgery",
      "People undergoing physiotherapy rehabilitation",
      "Individuals seeking weight management",
      "Fitness enthusiasts",
      "Working professionals",
      "Older adults",
      "Individuals looking to improve overall health and wellness"
    ],
    recoveryTimeline: [
      { condition: "Healthy Lifestyle", duration: "Ongoing" },
      { condition: "Weight Management", duration: "8–16 weeks" },
      { condition: "Injury Recovery Nutrition", duration: "Throughout rehabilitation" },
      { condition: "Muscle Gain", duration: "12–24 weeks" },
      { condition: "Sports Performance Nutrition", duration: "Ongoing" },
      { condition: "Body Composition Programs", duration: "12–24 weeks" }
    ],
    timelineNote: "Regular follow-ups and progress reviews will ensure your nutrition plan evolves with your recovery, training, and lifestyle.",
    differenceText: "At Aatral360, nutrition will be fully integrated with physiotherapy, rehabilitation, strength & conditioning, and performance care. Rather than providing generic diet plans, our approach will focus on supporting tissue healing, improving recovery, optimizing body composition, enhancing physical performance, and promoting lifelong health through personalized, evidence-based nutrition strategies.",
    process: [
      {
        title: "Comprehensive Assessment",
        description: "We evaluate your medical history, dietary habits, training schedule, and recovery requirements."
      },
      {
        title: "Personalized Nutrition Strategy",
        description: "Based on the assessment, we develop a personalized nutrition strategy aligned with your health and performance objectives."
      },
      {
        title: "Follow-up & Progression",
        description: "Regular follow-ups and progress reviews ensure your nutrition plan evolves with your recovery and lifestyle."
      }
    ],
  };

  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="container py-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-green-600 transition">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900 font-medium">Nutrition Services</span>
          </nav>
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center shrink-0">
              <service.icon className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{service.title}</h1>
              <p className="mt-1 text-lg text-green-600 font-semibold">{service.subtitle}</p>
              <p className="mt-2 text-lg text-slate-500">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="card-static p-8 md:p-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Overview</h2>
                <div className="prose prose-slate max-w-none">
                  {service.longDescription.map((para, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed mb-4">{para}</p>
                  ))}
                </div>

                <div className="mt-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Nutrition Approach</h2>
                  <div className="space-y-8">
                    {service.approachSections.map((section, i) => (
                      <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                        <h3 className="text-lg font-bold text-slate-900 mb-3">{section.title}</h3>
                        {section.description && <p className="text-slate-600 text-sm leading-relaxed mb-4">{section.description}</p>}
                        <ul className="space-y-2">
                          {section.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-3 text-slate-600 text-sm">
                              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                                <ChevronRight className="w-3 h-3 text-green-600" />
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Who Can Benefit?</h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.targetAudience.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                          <ChevronRight className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Expected Program Duration</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-3 px-4 font-bold text-slate-900 bg-slate-50 rounded-tl-lg">Goal</th>
                          <th className="text-left py-3 px-4 font-bold text-slate-900 bg-slate-50 rounded-tr-lg">Recommended Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {service.recoveryTimeline.map((row, i) => (
                          <tr key={i} className="border-b border-slate-100 last:border-0">
                            <td className="py-3 px-4 text-slate-700">{row.condition}</td>
                            <td className="py-3 px-4 text-green-700 font-medium">{row.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3 text-xs text-slate-500 italic">{service.timelineNote}</p>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mt-12 mb-6">Our 3-Step Process</h3>
                <div className="space-y-6">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-700 font-bold border-4 border-white shadow-sm ring-1 ring-green-50">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">{step.title}</h4>
                        <p className="text-slate-600 mt-1 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">The Aatral360 Difference</h3>
                  <p className="text-slate-600 leading-relaxed bg-green-50/50 p-6 rounded-xl border border-green-100">
                    {service.differenceText}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-static p-7 bg-green-50 border-green-200/50 opacity-70">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                  <CalendarCheck className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">Coming Soon</h3>
                <p className="mt-2 text-sm text-slate-600">Our multidisciplinary nutrition services are currently under development and will soon become an integral part of the Aatral360 ecosystem.</p>
                <button className="btn-primary w-full mt-5 text-sm! opacity-50 cursor-not-allowed">
                  Book Appointment <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
