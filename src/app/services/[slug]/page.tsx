import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { ChevronRight, ArrowLeft, CalendarCheck } from "lucide-react";
import {
  Activity,
  HeartPulse,
  Stethoscope,
  Zap,
  RotateCcw,
  Footprints,
  Bone,
  GraduationCap,
  Video,
  HeartHandshake,
  Dumbbell,
  Building2,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  HeartPulse,
  Stethoscope,
  Zap,
  RotateCcw,
  Footprints,
  Bone,
  GraduationCap,
  Video,
  HeartHandshake,
  Dumbbell,
  Building2,
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Activity;

  const relatedServices = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-slate-100">
        <div className="container py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link
              href="/"
              className="hover:text-green-600 transition"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link
              href="/services"
              className="hover:text-green-600 transition"
            >
              Services
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900 font-medium">
              {service.title}
            </span>
          </nav>

          <div className="flex items-start gap-4 sm:gap-5">
            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center shrink-0">
              <Icon className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                {service.title}
              </h1>
              {service.subtitle && (
                <p className="mt-1 text-lg text-green-600 font-semibold">
                  {service.subtitle}
                </p>
              )}
              <p className="mt-2 text-lg text-slate-500">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="card-static p-8 md:p-10">
                
                {/* 1. About / Long Description */}
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {service.longDescription ? "Overview" : "About This Service"}
                </h2>
                <div className="prose prose-slate max-w-none">
                  {service.longDescription ? (
                    service.longDescription.map((para, i) => (
                      <p key={i} className="text-slate-600 leading-relaxed mb-4">
                        {para}
                      </p>
                    ))
                  ) : (
                    <p className="text-slate-600 leading-relaxed">
                      {service.description} Our experienced physiotherapy team
                      uses evidence-based techniques and personalized treatment
                      plans to help you achieve your recovery goals.
                    </p>
                  )}
                </div>

                {/* 2. Approach Sections */}
                {service.approachSections && (
                  <div className="mt-10">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Rehabilitation Approach</h2>
                    <div className="space-y-8">
                      {service.approachSections.map((section, i) => (
                        <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                          <h3 className="text-lg font-bold text-slate-900 mb-3">{section.title}</h3>
                          {section.description && (
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">{section.description}</p>
                          )}
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
                )}

                {/* 3. Conditions Treated / Who Can Benefit */}
                {service.conditionsTreated && (
                  <div className="mt-10">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Who Can Benefit?</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.conditionsTreated.map((condition, i) => (
                        <span key={i} className="px-3 py-1.5 bg-green-50 text-green-700 text-sm font-medium rounded-full border border-green-100">
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Target Audience */}
                {service.targetAudience && (
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
                )}

                {/* 5. Recovery Timeline */}
                {service.recoveryTimeline && (
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
                    {service.timelineNote && (
                      <p className="mt-3 text-xs text-slate-500 italic">{service.timelineNote}</p>
                    )}
                  </div>
                )}

                {/* 6. Process / What to Expect */}
                <h3 className="text-xl font-bold text-slate-900 mt-12 mb-6">
                  {service.process ? "Our 3-Step Process" : "What to Expect"}
                </h3>
                
                {service.process ? (
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
                ) : (
                  <ul className="space-y-3">
                    {[
                      "Comprehensive initial assessment and evaluation",
                      "Personalized treatment plan tailored to your specific needs",
                      "Evidence-based therapeutic techniques and exercises",
                      "Regular progress tracking and plan adjustments",
                      "Home exercise programs for continued improvement",
                      "Education on injury prevention and self-management",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-600">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                          <ChevronRight className="w-3 h-3 text-green-600" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* 7. The Aatral360 Difference */}
                {service.differenceText && (
                  <div className="mt-12 pt-8 border-t border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">The Aatral360 Difference</h3>
                    <p className="text-slate-600 leading-relaxed bg-green-50/50 p-6 rounded-xl border border-green-100">
                      {service.differenceText}
                    </p>
                  </div>
                )}

                {/* 8. FAQs */}
                {service.faqs && (
                  <div className="mt-12 pt-8 border-t border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      {service.faqs.map((faq, i) => (
                        <details key={i} className="group bg-slate-50 rounded-lg border border-slate-100 open:bg-white open:border-green-100 open:shadow-sm transition-all duration-200">
                          <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-slate-900">
                            {faq.question}
                            <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-green-100 flex items-center justify-center shrink-0 transition-colors">
                              <ChevronRight className="w-4 h-4 text-slate-600 group-open:text-green-600 group-open:rotate-90 transition-transform" />
                            </span>
                          </summary>
                          <div className="px-4 pb-4 pt-1 text-slate-600 text-sm leading-relaxed">
                            {faq.answer}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Book CTA Card */}
              <div className="card-static p-7 bg-green-50 border-green-200/50">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                  <CalendarCheck className="w-6 h-6 text-green-600" />
                </div>

                <h3 className="font-bold text-lg text-slate-900">
                  Book This Service
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Ready to begin? Schedule your consultation and start your
                  recovery journey today.
                </p>

                <Link
                  href="/appointment"
                  className="btn-primary w-full mt-5 text-sm!"
                >
                  Book Appointment
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related Services */}
              <div className="card-static p-7">
                <h3 className="font-bold text-lg text-slate-900 mb-4">
                  Related Services
                </h3>

                <div className="space-y-3">
                  {relatedServices.map((s) => {
                    const SIcon = iconMap[s.icon] || Activity;
                    return (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                          <SIcon className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-700 group-hover:text-green-600 transition">
                          {s.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-green-600 transition text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}