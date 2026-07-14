import { BookOpen, Activity, Brain, Users, LineChart, Target, Shield, HeartHandshake } from "lucide-react";

const reasons = [
  {
    title: "Evidence-Based Care",
    description: "Every treatment protocol is grounded in the latest clinical research and proven medical science.",
    icon: BookOpen,
  },
  {
    title: "Movement First Approach",
    description: "We prioritize active recovery and functional movement over passive, temporary fixes.",
    icon: Activity,
  },
  {
    title: "Clinical Reasoning",
    description: "Expert diagnostic skills to identify the root cause, not just treat the superficial symptoms.",
    icon: Brain,
  },
  {
    title: "Individualized Programs",
    description: "Tailored rehabilitation strategies designed specifically for your body, goals, and lifestyle.",
    icon: Target,
  },
  {
    title: "Modern Rehabilitation",
    description: "Utilizing advanced equipment and progressive methodologies for optimal recovery.",
    icon: Shield,
  },
  {
    title: "Integrated Performance Care",
    description: "Bridging the gap between clinical rehabilitation and high-level athletic performance.",
    icon: Users,
  },
  {
    title: "Continuous Progress Tracking",
    description: "Data-driven approach to monitor your recovery and adjust treatments for maximum efficacy.",
    icon: LineChart,
  },
  {
    title: "Collaborative Healthcare",
    description: "Working alongside your medical team to provide comprehensive, well-rounded support.",
    icon: HeartHandshake,
  },
];

export default function WhyAatral360() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100" id="why-choose-us">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-3 rounded-full bg-green-100/80 text-green-700 font-semibold text-sm tracking-wider uppercase mb-6 border border-green-200">
            Why Aatral360
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            The Standard of Excellence
          </h2>
          <p className="text-lg text-slate-600">
            We are committed to delivering premium healthcare experiences that empower you to take control of your movement and recovery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-green-200 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors">
                <reason.icon className="w-7 h-7 text-slate-700 group-hover:text-green-600 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">
                {reason.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
