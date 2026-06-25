import { Shield, Target, Award, Stethoscope, HeartHandshake, TrendingUp } from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Shield,
      title: "Evidence-Based Care",
      description: "Our treatments are rooted in the latest scientific research and proven clinical methodologies.",
      features: ["Peer-reviewed protocols", "Advanced diagnostics", "Continuous education", "Outcome tracking"]
    },
    {
      icon: Target,
      title: "Personalized Plans",
      description: "No cookie-cutter approaches. We design custom rehabilitation plans tailored to your specific body and goals.",
      extendedText: "From your initial assessment to your final discharge, every exercise and manual therapy session is meticulously designed around your unique biomechanics, daily habits, and lifestyle requirements. We continuously adapt the plan as you progress."
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Work with highly qualified, specialized physiotherapists with years of clinical experience."
    },
    {
      icon: Stethoscope,
      title: "Modern Methods",
      description: "We utilize advanced equipment and cutting-edge techniques to accelerate your healing process."
    },
    {
      icon: HeartHandshake,
      title: "Pain Management",
      description: "Compassionate, effective strategies to reduce acute and chronic pain safely without heavy reliance on medication."
    },
    {
      icon: TrendingUp,
      title: "Long-Term Recovery",
      description: "We focus on building strength and resilience to prevent future injuries, not just treating the symptoms.",
      stats: [
        { label: "Patient Satisfaction", value: "98%" },
        { label: "Successful Discharges", value: "2.5k+" },
        { label: "Recurrence Rate", value: "<5%" }
      ]
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge">Why Choose Us</span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900">
            Setting the Standard in Rehabilitation
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            We are dedicated to providing the highest quality of care, combining clinical expertise with a genuine commitment to your recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {reasons.map((reason, idx) => {
            const bentoClasses = [
              "md:col-span-2 lg:col-span-2 lg:row-span-1 bg-gradient-to-r from-green-50 to-white", // 0
              "md:col-span-1 lg:col-span-1 lg:row-span-2 bg-gradient-to-b from-slate-50 to-white", // 1
              "md:col-span-1 lg:col-span-1 lg:row-span-1 bg-white", // 2
              "md:col-span-1 lg:col-span-1 lg:row-span-1 bg-white", // 3
              "md:col-span-1 lg:col-span-1 lg:row-span-1 bg-white", // 4
              "md:col-span-2 lg:col-span-2 lg:row-span-1 bg-gradient-to-r from-green-50/50 to-white", // 5
            ];

            return (
              <div 
                key={idx} 
                className={`p-8 rounded-3xl border border-slate-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300 flex flex-col ${bentoClasses[idx]}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6 shrink-0">
                  <reason.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>

                {reason.extendedText && (
                  <p className="text-slate-500 text-sm mt-4 leading-relaxed border-t border-slate-100 pt-4 grow">
                    {reason.extendedText}
                  </p>
                )}
                
                {reason.features && (
                  <ul className="mt-auto pt-6 grid grid-cols-2 gap-3">
                    {reason.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                )}
                
                {reason.stats && (
                  <div className="mt-auto pt-6 flex flex-wrap gap-4 sm:gap-8">
                    {reason.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                        <div className="text-sm font-medium text-slate-500 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
