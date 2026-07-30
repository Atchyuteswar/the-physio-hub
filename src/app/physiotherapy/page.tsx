import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import RecoveryJourneySection from "@/components/home/RecoveryJourneySection";
import AppointmentCtaSection from "@/components/home/AppointmentCtaSection";
import FaqSection from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: "Physiotherapy Services — Expert Rehabilitation in Hyderabad",
  description:
    "Comprehensive evidence-based physiotherapy services in Hyderabad. Sports injury rehabilitation, musculoskeletal treatment, post-surgical recovery, chronic pain management, and more at Aatral360.",
  keywords: [
    "physiotherapy services Hyderabad",
    "sports injury treatment",
    "musculoskeletal rehabilitation",
    "post surgical recovery",
    "chronic pain physiotherapy",
    "evidence based physiotherapy",
  ],
  openGraph: {
    title: "Physiotherapy Services — Expert Rehabilitation in Hyderabad",
    description:
      "Comprehensive evidence-based physiotherapy services including sports injury rehabilitation, musculoskeletal treatment, and post-surgical recovery.",
    url: "https://aatral360.com/physiotherapy",
    siteName: "Aatral360",
    type: "website",
  },
  alternates: {
    canonical: "/physiotherapy",
  },
};

export const revalidate = 3600;

export default async function HomePage() {
  return (
    <main>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Services */}
      <ServicesSection />

      {/* 4. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 5. Recovery Journey */}
      <RecoveryJourneySection />

      {/* 6. Appointment CTA */}
      <AppointmentCtaSection />

      {/* 7. FAQ */}
      <FaqSection />
    </main>
  );
}