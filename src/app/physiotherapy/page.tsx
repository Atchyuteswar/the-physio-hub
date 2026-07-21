import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import RecoveryJourneySection from "@/components/home/RecoveryJourneySection";
import AppointmentCtaSection from "@/components/home/AppointmentCtaSection";
import FaqSection from "@/components/home/FaqSection";

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