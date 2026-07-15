import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowLeft, CalendarCheck, Dumbbell } from "lucide-react";

export const metadata: Metadata = {
  title: "Strength & Conditioning",
  description: "Scientifically designed training programs to improve strength, movement quality, resilience, and physical performance.",
};

export default function StrengthAndConditioningPage() {
  const service = {
    title: "Strength & Conditioning",
    subtitle: "Build Strength. Enhance Performance. Reduce Injury Risk.",
    description: "Scientifically designed training programs to improve strength, movement quality, resilience, and physical performance.",
    icon: Dumbbell,
    longDescription: [
      "At Aatral360, Strength & Conditioning is more than lifting weights—it's a scientifically designed training system that improves strength, movement quality, resilience, and physical performance.",
      "Our programs are tailored for athletes, recreational sports participants, and active individuals who want to perform better, reduce injury risk, and build long-term physical capacity. Whether you're preparing for competition, returning after an injury, or simply looking to move and perform better in everyday life, every program is designed around your goals and physical demands."
    ],
    approachSections: [
      {
        title: "Comprehensive Performance Assessment",
        description: "Every program begins with a detailed assessment of:",
        items: [
          "Movement quality",
          "Mobility and flexibility",
          "Strength and muscular endurance",
          "Balance and coordination",
          "Power and explosiveness",
          "Speed and agility",
          "Sport-specific movement demands",
          "Previous injury history",
          "Training experience and goals"
        ]
      },
      {
        title: "Evidence-Based Performance Training",
        description: "Our programs may include:",
        items: [
          "Strength Training",
          "Power Development",
          "Plyometric Training",
          "Speed Development",
          "Acceleration & Deceleration Training",
          "Agility & Change-of-Direction Training",
          "Balance & Coordination Training",
          "Mobility & Flexibility Programs",
          "Core Stability Training",
          "Injury Prevention Programs",
          "Return-to-Sport Conditioning",
          "Sport-Specific Performance Training"
        ]
      }
    ],
    targetAudience: [
      "Competitive athletes",
      "Recreational athletes",
      "School and college athletes",
      "Runners and endurance athletes",
      "Racquet sport players (Badminton, Tennis, Pickleball)",
      "Cricket players",
      "Football players",
      "Volleyball and Basketball players",
      "Fitness enthusiasts",
      "Working professionals with active lifestyles",
      "Individuals returning to sport after injury"
    ],
    recoveryTimeline: [
      { condition: "General Strength Development", duration: "8–12 weeks" },
      { condition: "Injury Prevention", duration: "Ongoing" },
      { condition: "Performance Enhancement", duration: "12–24 weeks" },
      { condition: "Return-to-Sport Conditioning", duration: "8–16 weeks" },
      { condition: "Elite Performance Development", duration: "Individualized Long-Term Program" }
    ],
    timelineNote: "Performance is developed progressively through structured training rather than quick fixes.",
    differenceText: "At Aatral360, Strength & Conditioning is fully integrated with physiotherapy and rehabilitation. Our programs combine movement science, evidence-based exercise prescription, progressive overload, and sport-specific training to improve performance while minimizing injury risk. Whether your goal is returning to competition, excelling in your sport, or maintaining an active lifestyle, we help you build the strength, capacity, and confidence to perform at your best.",
    process: [
      {
        title: "Comprehensive Performance Assessment",
        description: "We assess movement quality, strength, mobility, balance, power, speed, and sport-specific demands."
      },
      {
        title: "Individualized Training Program",
        description: "Evidence-based strength, power, speed, and conditioning programs tailored to your goals and capacity."
      },
      {
        title: "Progressive Development & Monitoring",
        description: "Training loads are progressively adjusted according to your goals, recovery, and performance demands."
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
            <span className="text-slate-900 font-medium">{service.title}</span>
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Rehabilitation Approach</h2>
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
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Expected Recovery Timeline</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-3 px-4 font-bold text-slate-900 bg-slate-50 rounded-tl-lg">Condition</th>
                          <th className="text-left py-3 px-4 font-bold text-slate-900 bg-slate-50 rounded-tr-lg">Estimated Duration</th>
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
              <div className="card-static p-7 bg-green-50 border-green-200/50">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                  <CalendarCheck className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">Book This Service</h3>
                <p className="mt-2 text-sm text-slate-600">Ready to begin? Schedule your consultation and start your recovery journey today.</p>
                <Link href="/physiotherapy/appointment" className="btn-primary w-full mt-5 text-sm!">
                  Book Appointment <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
