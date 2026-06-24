"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Message sent successfully! We'll be in touch soon.");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to send message.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-white border-b border-slate-100">
        <div className="container page-header">
          <span className="badge">Get in Touch</span>
          <h1>Contact Us</h1>
          <p>
            Have a question or need to get in touch? We&apos;re here to help. Send us
            a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="section bg-slate-50 min-h-screen">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Clinic Information
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Location
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        123 Health Avenue
                        <br />
                        Medical District
                        <br />
                        Cityville, ST 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Phone
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Email
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        hello@thephysiohub.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Hours
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        Mon - Fri: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-static bg-green-50 border-green-100 p-6">
                <h3 className="font-bold text-green-900 mb-2">
                  Need an Appointment?
                </h3>
                <p className="text-green-800 text-sm mb-4 leading-relaxed">
                  If you are ready to start your recovery journey, please use
                  our dedicated appointment booking form.
                </p>
                <a
                  href="/appointment"
                  className="btn-primary w-full justify-center"
                >
                  Book Appointment
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card-static p-8 md:p-10 bg-white">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="admin-label">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        required
                        placeholder="John Doe"
                        className="admin-input"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="admin-label">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="admin-input"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="admin-label">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="admin-input"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="admin-label">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      placeholder="How can we help you today?"
                      className="admin-input min-h-[160px] resize-y"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4!"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
