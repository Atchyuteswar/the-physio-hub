"use client";

import { useState } from "react";
import { toast } from "sonner";
import { services } from "@/data/services";
import {
  CalendarCheck,
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  Loader2,
} from "lucide-react";

export default function AppointmentPage() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name || !form.phone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Appointment request submitted successfully!");
        setForm({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
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
          <span className="badge">Book Now</span>
          <h1>Book an Appointment</h1>
          <p>
            Schedule a consultation with our physiotherapy team and take the
            first step towards recovery.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card-static p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                    <CalendarCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Appointment Request
                    </h2>
                    <p className="text-sm text-slate-500">
                      Fill in the form below and we&apos;ll get back to you
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="admin-label">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        className="admin-input"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="admin-label">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="Your phone number"
                        className="admin-input"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="admin-label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      className="admin-input"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="admin-label">
                      Select Service
                    </label>
                    <select
                      id="service"
                      className="admin-input"
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                    >
                      <option value="">Choose a service</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="admin-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell us about your condition or any questions you have..."
                      className="admin-input h-32 resize-none"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full md:w-auto"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Request
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="card-static p-7">
                <h3 className="font-bold text-lg text-slate-900 mb-5">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Phone
                      </p>
                      <p className="text-sm text-slate-500">
                        Contact via form
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Email
                      </p>
                      <p className="text-sm text-slate-500">
                        info@thephysiohub.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Working Hours
                      </p>
                      <p className="text-sm text-slate-500">
                        Mon – Sat: 9 AM – 7 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Location
                      </p>
                      <p className="text-sm text-slate-500">
                        The Physio Hub Clinic
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-static p-7 bg-green-50 border-green-200/50">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Quick Response
                </h3>
                <p className="text-sm text-slate-600">
                  We typically respond to appointment requests within 24 hours.
                  For urgent inquiries, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}