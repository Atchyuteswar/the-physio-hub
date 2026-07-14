import { PlayCircle, FileText, Video, BookOpen, Lightbulb, ArrowRight } from "lucide-react";

const resources = [
  {
    title: "Latest Blogs",
    description: "Read our articles on injury prevention and movement health.",
    icon: FileText,
    link: "#",
  },
  {
    title: "Clinical Tips",
    description: "Actionable advice from our expert physiotherapy team.",
    icon: Lightbulb,
    link: "#",
  },
  {
    title: "Educational Videos",
    description: "Watch demonstrations of key exercises and techniques.",
    icon: Video,
    link: "#",
  },
  {
    title: "Recovery Guides",
    description: "Comprehensive PDF guides for specific conditions.",
    icon: BookOpen,
    link: "#",
  },
  {
    title: "Webinars",
    description: "Join our live sessions on advanced movement science.",
    icon: PlayCircle,
    link: "#",
  },
];

export default function ResearchEducation() {
  return (
    <section className="py-24 bg-white border-t border-slate-100" id="research">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-3 rounded-full bg-blue-100/80 text-blue-700 font-semibold text-sm tracking-wider uppercase mb-6 border border-blue-200">
            Knowledge is Power
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Research & Education
          </h2>
          <p className="text-lg text-slate-600">
            We believe an educated patient is an empowered patient. Explore our free resources to learn more about your body and how to optimize it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <resource.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                {resource.title}
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                {resource.description}
              </p>
              <span className="mt-auto text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Access <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
