import { prisma } from "@/lib/prisma";
import type { Testimonial, Video } from "@prisma/client";

import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import RecoveryJourneySection from "@/components/home/RecoveryJourneySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import VideosSection from "@/components/home/VideosSection";
import AppointmentCtaSection from "@/components/home/AppointmentCtaSection";
import FaqSection from "@/components/home/FaqSection";

export const revalidate = 3600;

export default async function HomePage() {
  let testimonials: Testimonial[] = [];
  let videos: Video[] = [];

  try {
    const data = await Promise.all([
      prisma.testimonial.findMany({
        orderBy: { createdAt: "desc" },
        take: 6, // Fetch a few more for the slider
      }),
      prisma.video.findMany({
        orderBy: { createdAt: "desc" },
        take: 3,
      })
    ]);
    testimonials = data[0];
    videos = data[1];
  } catch (error) {
    console.error("Database connection failed on home page:", error);
  }

  return (
    <main>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. About The Clinic */}
      <AboutSection />

      {/* 4. Services */}
      <ServicesSection />

      {/* 5. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 6. Recovery Journey */}
      <RecoveryJourneySection />

      {/* 7. Patient Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* 8. Educational Videos */}
      <VideosSection videos={videos} />

      {/* 9. Appointment CTA */}
      <AppointmentCtaSection />

      {/* 10. FAQ */}
      <FaqSection />
    </main>
  );
}