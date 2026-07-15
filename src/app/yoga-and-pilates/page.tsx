import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, CalendarCheck, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Yoga & Pilates",
  description: "Evidence-based programs tailored to improve movement quality, flexibility, strength, posture, balance, and overall well-being.",
};

export default function YogaAndPilatesPage() {
  const service = {
    title: "Yoga & Pilates (Coming Soon)",
    subtitle: "Move Better. Feel Stronger. Live Healthier.",
    description: "At Aatral360, our Yoga and Pilates programs are designed to improve movement quality, flexibility, strength, posture, balance, and overall well-being.",
    icon: HeartHandshake,
    longDescription: [
      "Whether your goal is recovering from an injury, managing spinal conditions, enhancing athletic performance, or improving your overall fitness, our evidence-based programs are tailored to your individual needs.",
      "Every program begins with a comprehensive movement assessment, allowing us to recommend the most appropriate approach based on your physical condition, goals, and lifestyle."
    ],
    approachSections: [
      {
        title: "Pilates Programs",
        description: "Build Strength from the Inside Out. Pilates is a low-impact exercise system that focuses on core stability, posture, breathing, flexibility, movement control, and muscular endurance. It improves the body's ability to move efficiently while reducing unnecessary strain on joints and soft tissues.",
        items: [
          "Core Strength & Stability",
          "Postural Correction",
          "Spinal Mobility",
          "Movement Control",
          "Balance & Coordination",
          "Flexibility & Mobility",
          "Functional Strength",
          "Breathing & Body Awareness"
        ]
      },
      {
        title: "Yoga Programs",
        description: "Balance the Body. Calm the Mind. Our Yoga programs combine movement, breathing, flexibility, balance, and relaxation techniques to improve physical health, mental well-being, and functional movement.",
        items: [
          "Flexibility & Mobility",
          "Postural Improvement",
          "Balance & Stability",
          "Controlled Breathing",
          "Stress Management",
          "Functional Movement",
          "Recovery & Relaxation",
          "Mind-Body Awareness"
        ]
      },
      {
        title: "Specialized Programs",
        description: "Our Yoga & Pilates services may include:",
        items: [
          "Beginner Yoga Programs",
          "Therapeutic Yoga",
          "Clinical Pilates",
          "Prenatal Yoga",
          "Postnatal Recovery Programs",
          "Spine Health Programs",
          "Posture Improvement Programs",
          "Mobility & Flexibility Programs",
          "Core Strength Programs",
          "Athletic Mobility & Recovery",
          "Sports Performance Mobility",
          "Healthy Ageing Programs",
          "Corporate Wellness Sessions",
          "Group Classes",
          "Individual Training Sessions"
        ]
      }
    ],
    targetAudience: [
      "Healthy individuals seeking fitness and wellness",
      "Office professionals",
      "Athletes and recreational sports participants",
      "Individuals recovering from musculoskeletal injuries",
      "People with chronic neck or back pain",
      "Individuals with posture-related problems",
      "Older adults",
      "Women during pregnancy and postpartum recovery",
      "Anyone looking to improve flexibility, movement quality, and overall health"
    ],
    recoveryTimeline: [
      { condition: "Beginner Programs", duration: "6–8 weeks" },
      { condition: "Clinical Pilates", duration: "8–12 weeks" },
      { condition: "Therapeutic Yoga", duration: "6–12 weeks" },
      { condition: "Spine Health Programs", duration: "8–12 weeks" },
      { condition: "Mobility Programs", duration: "Ongoing" },
      { condition: "Athletic Mobility Programs", duration: "Ongoing" }
    ],
    timelineNote: "Programs are individualized according to goals and health status.",
    differenceText: "Unlike conventional Yoga or Pilates studios, our programs begin with a physiotherapy-led movement assessment to identify mobility limitations, movement dysfunctions, and individual goals. By integrating evidence-based rehabilitation with Yoga and Pilates, we provide safe, personalized programs that not only improve flexibility and strength but also support recovery, prevent injuries, enhance athletic performance, and promote lifelong movement health.",
    process: [
      {
        title: "Comprehensive Movement Assessment",
        description: "Every participant undergoes an initial movement assessment before beginning the program to consider fitness level, mobility restrictions, and goals."
      },
      {
        title: "Individualized Progression",
        description: "Based on findings, we create an individualized progression that considers your medical history, injuries, and lifestyle demands."
      },
      {
        title: "Continuous Modification",
        description: "Programs are continuously modified as your movement capacity improves to ensure consistent progress."
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
            <span className="text-slate-900 font-medium">Yoga & Pilates</span>
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Programs</h2>
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
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Suitable For</h3>
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
                          <th className="text-left py-3 px-4 font-bold text-slate-900 bg-slate-50 rounded-tl-lg">Program</th>
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

                <h3 className="text-xl font-bold text-slate-900 mt-12 mb-6">Our Approach</h3>
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
                <p className="mt-2 text-sm text-slate-600">Our Yoga and Pilates services are launching soon. Check back later for appointments.</p>
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
