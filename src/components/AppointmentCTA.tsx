import Link from "next/link";
import { CalendarCheck, ArrowRight } from "lucide-react";

export default function AppointmentCTA() {
  return (
    <section className="relative bg-linear-to-r from-green-600 to-green-700 py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/2" />

      <div className="container relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6">
          <CalendarCheck className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ready to Start Your Recovery?
        </h2>

        <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
          Book a consultation with our physiotherapy team and take the first step
          towards a pain-free, active life.
        </p>

        <Link
          href="/appointment"
          className="
            mt-8 inline-flex items-center gap-2
            bg-white text-green-700 font-semibold
            px-8 py-4 rounded-xl
            hover:bg-green-50 transition-all duration-200
            hover:shadow-lg hover:shadow-green-900/20
          "
        >
          Book Appointment Now
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
