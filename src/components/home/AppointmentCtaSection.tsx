import Link from "next/link";
import { PhoneCall, Calendar } from "lucide-react";

export default function AppointmentCtaSection() {
  return (
    <section className="section bg-white border-b border-slate-100">
      <div className="container">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-700 shadow-2xl relative overflow-hidden">
          {/* Abstract green accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-[80px]" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Start Your Recovery Journey Today
              </h2>
              <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                Don&apos;t let pain or mobility issues hold you back. Schedule an assessment with our expert team and receive a personalized roadmap to recovery.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white! font-bold px-6 py-4 rounded-xl transition-colors"
              >
                <PhoneCall className="w-5 h-5" />
                (555) 123-4567
              </a>
              <Link 
                href="/appointment" 
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white! font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-green-600/20"
              >
                <Calendar className="w-5 h-5" />
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
