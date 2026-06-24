import { Users, Award, TrendingUp, BookOpen } from "lucide-react";

const stats = [
  {
    number: "500+",
    label: "Patients Treated",
    icon: Users,
  },
  {
    number: "10+",
    label: "Years Experience",
    icon: Award,
  },
  {
    number: "95%",
    label: "Recovery Success",
    icon: TrendingUp,
  },
  {
    number: "9",
    label: "Specialized Programs",
    icon: BookOpen,
  },
];

export default function StatsSection() {
  return (
    <section className="relative bg-linear-to-br from-green-600 via-green-700 to-green-800 py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-4">
                  <Icon className="w-7 h-7 text-green-200" />
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-white">
                  {stat.number}
                </h3>

                <p className="mt-2 text-green-100 font-medium text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}