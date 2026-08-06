"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Calendar,
  MapPin,
  Mail,
  X,
  Send,
  Loader2,
  Sparkles,
  Clock,
} from "lucide-react";
import { toast } from "sonner";

const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

// Custom WhatsApp SVG for authentic icon look
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function FloatingContactBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const mounted = useIsMounted();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Physiotherapy Consultation",
    message: "",
  });

  const contactItems = [
    {
      id: "call",
      label: "Call Now",
      subLabel: "+91 88380 86426",
      icon: Phone,
      gradient: "bg-gradient-to-b from-lime-500 to-green-600",
      glowColor: "shadow-lime-500/20",
      href: "tel:+918838086426",
      isExternal: true,
      pulse: true,
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      subLabel: "Instant Support 24/7",
      icon: WhatsAppIcon,
      gradient: "bg-gradient-to-b from-emerald-500 to-teal-600",
      glowColor: "shadow-teal-500/20",
      href: "https://wa.me/918838086426?text=Hi%20Aatral360%20Good%20Physio%20Hub,%20I%20would%20like%20to%20inquire%20about%20your%20services.",
      isExternal: true,
      pulse: false,
    },
    {
      id: "appointment",
      label: "Book Now",
      subLabel: "Schedule Clinic Visit",
      icon: Calendar,
      gradient: "bg-gradient-to-b from-purple-600 to-indigo-600",
      glowColor: "shadow-purple-500/20",
      href: "/physiotherapy/appointment",
      isExternal: false,
    },
    {
      id: "directions",
      label: "Directions",
      subLabel: "KPHB Phase 9, Hyd",
      icon: MapPin,
      gradient: "bg-gradient-to-b from-slate-700 to-slate-900",
      glowColor: "shadow-slate-500/20",
      href: "https://www.google.com/maps/place/Good+Physio+Hub/data=!4m7!3m6!1s0x3bcb936a8dc9b1f7:0xc792c255ec9e1588!8m2!3d17.4889439!4d78.3804162!16s%2Fg%2F11mzg2yvjw!19sChIJ97HJjWqTyzsRiBWe7FXCksc?authuser=0&hl=en&rclk=1",
      isExternal: true,
    },
    {
      id: "email",
      label: "Email Us",
      subLabel: "goodphysiohub@gmail.com",
      icon: Mail,
      gradient: "bg-gradient-to-b from-amber-500 to-orange-600",
      glowColor: "shadow-orange-500/20",
      href: "mailto:goodphysiohub@gmail.com",
      isExternal: true,
    },
  ];

  async function handleEnquirySubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: "quick-enquiry@aatral360.com",
          message: `[Quick Enquiry - ${form.service}] ${form.message}`,
        }),
      });

      if (res.ok) {
        toast.success("Callback request sent! Our specialist will call you shortly.");
        setForm({ name: "", phone: "", service: "Physiotherapy Consultation", message: "" });
        setIsModalOpen(false);
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to send enquiry.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) return null;

  return (
    <>
      {/* Floating Side Dock Container */}
      <aside
        aria-label="Quick Contact Bar"
        className="fixed bottom-4 right-3 top-auto translate-y-0 md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:right-auto md:left-2 z-50 flex flex-col gap-2 select-none"
      >
        {contactItems.map((item) => {
          const Icon = item.icon;

          const buttonBody = (
            <motion.div
              whileHover={{ scale: 1.06, x: 4 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex flex-col items-center justify-center w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full sm:rounded-2xl ${item.gradient} text-white shadow-xl ${item.glowColor} border border-white/30 transition-all duration-200 cursor-pointer group p-0.5 sm:p-1`}
            >
              {/* Pulse effect for Call button */}
              {item.pulse && (
                <span className="absolute inset-0 rounded-full sm:rounded-2xl bg-lime-400/30 animate-ping pointer-events-none" />
              )}

              <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 drop-shadow-sm transition-transform duration-200 group-hover:scale-110" />
              <span className="hidden sm:block text-[10px] font-semibold tracking-tight text-white leading-tight text-center mt-0.5">
                {item.label}
              </span>
            </motion.div>
          );

          if (item.isExternal) {
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="focus:outline-none"
              >
                {buttonBody}
              </a>
            );
          }

          return (
            <Link
              key={item.id}
              href={item.href!}
              aria-label={item.label}
              className="focus:outline-none"
            >
              {buttonBody}
            </Link>
          );
        })}
      </aside>

      {/* Quick Callback Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-md overflow-hidden relative"
              role="dialog"
              aria-modal="true"
            >
              {/* Modal Banner */}
              <div className="bg-linear-to-br from-slate-950 via-slate-900 to-green-950 text-white p-6 relative overflow-hidden border-b border-slate-800">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-slate-800/80 focus:outline-none"
                  aria-label="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/20 text-green-400 font-semibold text-xs uppercase tracking-wider rounded-full border border-green-500/30">
                    <Sparkles className="w-3 h-3 text-green-400" />
                    Quick Callback
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock className="w-3 h-3" /> ~5 min response
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  Request a Free Callback
                </h3>
                <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                  Leave your contact details and our specialist team will call you back shortly.
                </p>
              </div>

              {/* Modal Form */}
              <form onSubmit={handleEnquirySubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:border-green-600 focus:ring-2 focus:ring-green-500/20 transition-all outline-none bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:border-green-600 focus:ring-2 focus:ring-green-500/20 transition-all outline-none bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:border-green-600 focus:ring-2 focus:ring-green-500/20 transition-all outline-none bg-slate-50/50"
                  >
                    <option value="Physiotherapy Consultation">Physiotherapy Consultation</option>
                    <option value="Sports Injury Rehabilitation">Sports Injury Rehabilitation</option>
                    <option value="Musculoskeletal Rehab">Musculoskeletal Rehabilitation</option>
                    <option value="Post-Operative Rehabilitation">Post-Operative Rehabilitation</option>
                    <option value="Strength & Conditioning">Strength & Conditioning</option>
                    <option value="Nutrition Services">Nutrition & Wellness</option>
                    <option value="Yoga & Pilates">Yoga & Pilates</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Describe your condition / note
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Lower back pain for 2 weeks..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:border-green-600 focus:ring-2 focus:ring-green-500/20 transition-all outline-none resize-none bg-slate-50/50"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-green-600/25 hover:shadow-green-600/40 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Request Callback Now
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
