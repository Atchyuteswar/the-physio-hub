import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Heart,
  Shield,
  Users,
  Target,
  Sparkles,
} from "lucide-react";
import AppointmentCTA from "@/components/AppointmentCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about The Physio Hub — our mission, values, and commitment to evidence-based physiotherapy and rehabilitation.",
};

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description:
      "Every treatment plan is built around your individual needs, goals, and lifestyle to ensure the best possible outcomes.",
  },
  {
    icon: Shield,
    title: "Evidence-Based Practice",
    description:
      "We rely on the latest research and proven clinical methods to guide every aspect of your rehabilitation journey.",
  },
  {
    icon: Target,
    title: "Goal-Oriented Approach",
    description:
      "Clear, measurable goals are set from day one so you can track your progress and stay motivated throughout recovery.",
  },
  {
    icon: Sparkles,
    title: "Continuous Learning",
    description:
      "Our team stays updated with the latest techniques, research, and certifications to deliver cutting-edge care.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-white border-b border-slate-100">
        <div className="container page-header">
          <span className="badge">About Us</span>
          <h1>Our Mission & Vision</h1>
          <p>
            Dedicated to restoring movement, reducing pain, and rebuilding
            confidence through evidence-based physiotherapy.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge mb-4">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Transforming Lives Through Movement
              </h2>

              <p className="mt-6 text-slate-500 leading-relaxed">
                The Physio Hub was founded with a simple yet powerful mission: to
                make expert physiotherapy accessible and effective for everyone.
                We believe that movement is medicine, and that every individual
                deserves a personalized path to recovery.
              </p>

              <p className="mt-4 text-slate-500 leading-relaxed">
                Our clinic combines years of clinical experience with the latest
                evidence-based techniques to deliver rehabilitation programs that
                truly work. From post-surgical recovery to chronic pain
                management, we&apos;re here to help you move better and live
                better.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl bg-green-50">
                  <p className="text-3xl font-bold text-green-600">10+</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Years Experience
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl bg-green-50">
                  <p className="text-3xl font-bold text-green-600">500+</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Patients Treated
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full aspect-square rounded-2xl bg-linear-to-br from-green-50 to-green-100 flex items-center justify-center border border-green-200/50">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-green-200/50 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-green-600" />
                </div>
                <p className="text-green-600 font-medium text-sm">
                  Clinic Photo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center">
            <span className="badge">Our Values</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              What Drives Us
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              These core values guide every interaction and treatment decision at
              The Physio Hub.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {values.map((value) => (
              <div
                key={value.title}
                className="card-static p-7 text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-green-50 mb-5">
                  <value.icon className="w-7 h-7 text-green-600" />
                </div>

                <h3 className="font-bold text-lg text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge">Our Philosophy</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Evidence Meets Empathy
            </h2>

            <p className="mt-6 text-slate-500 leading-relaxed text-lg">
              We believe the best outcomes come from combining rigorous clinical
              evidence with genuine empathy and understanding. Every patient who
              walks through our doors is treated as an individual, with unique
              needs, challenges, and goals.
            </p>

            <p className="mt-4 text-slate-500 leading-relaxed text-lg">
              Our approach is collaborative — we work with you, not just on you.
              Education is a key part of our process, empowering you with the
              knowledge and tools to maintain your progress long after your
              sessions end.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <Link href="/appointment" className="btn-primary">
                Start Your Journey
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="btn-outline">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <AppointmentCTA />
    </>
  );
}
