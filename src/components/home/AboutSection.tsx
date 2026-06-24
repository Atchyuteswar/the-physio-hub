import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const benefits = [
    "Comprehensive Assessment & Accurate Diagnosis",
    "Evidence-Based Treatment Protocols",
    "State-of-the-art Rehabilitation Facilities",
    "Focus on Long-Term Wellness & Prevention",
  ];

  return (
    <section className="section bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Grid */}
          <div className="relative">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-50 rounded-full -z-10" />
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <Image 
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop" 
                    alt="Clinic Facility"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <Image 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
                    alt="Rehabilitation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <Image 
                    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2047&auto=format&fit=crop" 
                    alt="Therapy Session"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-square rounded-2xl bg-green-600 p-8 flex flex-col justify-center items-center text-center shadow-lg text-white">
                  <p className="text-4xl font-bold mb-2">10+</p>
                  <p className="text-sm font-medium uppercase tracking-wider opacity-90">Years of Clinical Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:pl-8">
            <span className="badge">About The Clinic</span>
            
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Why Patients Choose <br/>
              <span className="text-green-600">The Physio Hub</span>
            </h2>

            <div className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                At The Physio Hub, we believe that effective rehabilitation goes beyond treating the immediate symptoms. We look at the body as a whole to uncover the root cause of your discomfort and movement limitations.
              </p>
              <p>
                Our team of dedicated professionals utilizes modern, evidence-based practices to create highly personalized treatment plans. Whether you are an elite athlete aiming to return to sport, an office worker suffering from chronic back pain, or recovering from surgery, we are committed to helping you regain your quality of life.
              </p>
            </div>

            <ul className="mt-10 space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-medium text-slate-800">{benefit}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
