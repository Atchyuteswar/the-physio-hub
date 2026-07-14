import { ClipboardList, Stethoscope, Dumbbell, Zap, HeartPulse } from "lucide-react";

const timeline = [
  {
    title: "Assess",
    description: "Comprehensive evaluation to identify the root cause of your symptoms, movement compensations, and personal goals.",
    icon: ClipboardList,
  },
  {
    title: "Restore",
    description: "Targeted hands-on therapy and initial mobility work to reduce pain, calm the nervous system, and restore baseline movement.",
    icon: Stethoscope,
  },
  {
    title: "Rebuild",
    description: "Progressive loading and strengthening exercises to increase tissue capacity, resilience, and functional stability.",
    icon: Dumbbell,
  },
  {
    title: "Perform",
    description: "Advanced dynamic training tailored to your specific sport, occupation, or lifestyle demands, optimizing your movement efficiency.",
    icon: Zap,
  },
  {
    title: "Sustain",
    description: "Long-term education, wellness strategies, and self-management tools to ensure enduring health and prevent future injuries.",
    icon: HeartPulse,
  },
];

export default function OurPhilosophy() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="philosophy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block py-1.5 px-3 rounded-full bg-slate-100 text-slate-700 font-semibold text-sm tracking-wider uppercase mb-6 border border-slate-200">
            Our Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            The Aatral360 Pathway
          </h2>
          <p className="text-lg text-slate-600">
            A structured, continuous loop of care designed to not just heal your injury, but elevate your overall physical potential.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-slate-100 rounded-full" />
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-linear-to-r from-green-300 via-green-500 to-green-600 rounded-full origin-left scale-x-0 animate-[scaleX_2s_forwards]" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {timeline.map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Arrow connector for mobile */}
                {idx !== timeline.length - 1 && (
                  <div className="lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-green-200" />
                )}
                
                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center mb-6 relative z-10 group-hover:bg-green-600 group-hover:border-green-100 transition-all duration-500 shadow-xl shadow-slate-200/50 group-hover:scale-110 group-hover:-translate-y-2">
                  <step.icon className="w-10 h-10 text-green-600 group-hover:text-white transition-colors duration-500" />

                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm border-2 border-white shadow-md">
                    {idx + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
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
  );
}
