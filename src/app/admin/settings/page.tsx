"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Loader2, Save, MapPin, Phone, Mail, Link as LinkIcon } from "lucide-react";

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [form, setForm] = useState({
    address: "",
    phone: "",
    email: "",
    facebookUrl: "",
    instagramUrl: "",
  });

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await fetch("/api/settings");
        if (res.ok) {
          const data = await res.json();
          setForm({
            address: data.address || "",
            phone: data.phone || "",
            email: data.email || "",
            facebookUrl: data.facebookUrl || "",
            instagramUrl: data.instagramUrl || "",
          });
        }
      } catch {
        console.error("Failed to load settings");
      } finally {
        setFetching(false);
      }
    }
    fetchSettings();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Settings saved successfully!");
      } else {
        toast.error("Failed to save settings.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (fetching) {
    return (
      <div className="flex items-center justify-center p-24">
        <Loader2 className="w-8 h-8 animate-spin text-green-600" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Clinic Settings</h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage your clinic&apos;s contact information and social media links.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Information */}
        <div className="card-static p-6 md:p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="address" className="admin-label flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                Physical Address
              </label>
              <textarea
                id="address"
                placeholder="123 Health Avenue, Cityville, ST 12345"
                className="admin-input min-h-[80px]"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="admin-label flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-400" />
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="admin-input"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="admin-label flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400" />
                  Public Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="hello@thephysiohub.com"
                  className="admin-input"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="card-static p-6 md:p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Social Media</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="facebook" className="admin-label flex items-center gap-2">
                <LinkIcon className="w-4 h-4 text-slate-400" />
                Facebook URL
              </label>
              <input
                id="facebook"
                type="url"
                placeholder="https://facebook.com/thephysiohub"
                className="admin-input"
                value={form.facebookUrl}
                onChange={(e) => setForm({ ...form, facebookUrl: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="instagram" className="admin-label flex items-center gap-2">
                <LinkIcon className="w-4 h-4 text-slate-400" />
                Instagram URL
              </label>
              <input
                id="instagram"
                type="url"
                placeholder="https://instagram.com/thephysiohub"
                className="admin-input"
                value={form.instagramUrl}
                onChange={(e) => setForm({ ...form, instagramUrl: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Save Settings
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
