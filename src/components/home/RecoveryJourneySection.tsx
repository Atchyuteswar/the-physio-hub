import { ClipboardList, Stethoscope, Activity, HeartPulse, Trophy } from "lucide-react";

export default function RecoveryJourneySection() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Assessment",
      description: "Thorough evaluation of your movement, history, and goals."
    },
    {
      icon: Stethoscope,
      title: "Diagnosis",
      description: "Identifying the exact root cause of your pain or limitation."
    },
    {
      icon: Activity,
      title: "Treatment",
      description: "Evidence-based therapy, manual techniques, and exercises."
    },
    {
      icon: HeartPulse,
      title: "Recovery",
      description: "Regaining mobility, strength, and confidence."
    },
    {
      icon: Trophy,
      title: "Performance",
      description: "Optimizing function for long-term health and activity."
    }
  ];

  return (
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
              <div key={idx} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center mb-6 relative z-10 group-hover:bg-green-600 group-hover:border-green-100 transition-all duration-300 shadow-xl shadow-slate-200/50">
                  <step.icon className="w-10 h-10 text-green-600 group-hover:text-white transition-colors duration-300" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm border-2 border-white group-hover:bg-white group-hover:text-green-600 transition-colors">
                    {idx + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
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
