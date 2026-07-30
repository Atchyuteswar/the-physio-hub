import type { Metadata } from "next";
import ContactSection from "@/components/landing/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aatral360 physiotherapy clinic in Hyderabad. Book an appointment, ask questions, or visit us at KPHB Phase 9. Call +91 8838086426.",
  keywords: [
    "contact Aatral360",
    "physiotherapy appointment Hyderabad",
    "book physiotherapy KPHB",
    "Aatral360 phone number",
    "physiotherapy clinic near me",
  ],
  openGraph: {
    title: "Contact Us | Aatral360",
    description:
      "Get in touch with Aatral360 physiotherapy clinic in Hyderabad. Book an appointment or visit us at KPHB Phase 9.",
    url: "https://aatral360.com/contact",
    siteName: "Aatral360",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center pt-8 pb-16">
      <div className="w-full">
        <ContactSection />
      </div>
    </main>
  );
}
