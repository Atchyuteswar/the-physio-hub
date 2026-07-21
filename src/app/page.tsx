import { prisma } from "@/lib/prisma";
import type { Testimonial, Video } from "@prisma/client";

// New Landing Components
import LandingHero from "@/components/landing/LandingHero";
import WhoWeAre from "@/components/landing/WhoWeAre";
import ThreePillars from "@/components/landing/ThreePillars";
import OurPhilosophy from "@/components/landing/OurPhilosophy";
import WhyAatral360 from "@/components/landing/WhyAatral360";
import ResearchEducation from "@/components/landing/ResearchEducation";

// Home Components
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import VideosSection from "@/components/home/VideosSection";

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
      <LandingHero />

      {/* 2. About The Clinic */}
      <AboutSection />

      {/* 3. Who We Are */}
      <WhoWeAre />

      {/* 4. Three Pillars */}
      <ThreePillars />

      {/* 5. Our Philosophy */}
      <OurPhilosophy />

      {/* 6. Why Aatral360 */}
      <WhyAatral360 />

      {/* 7. Research & Education */}
      <ResearchEducation />

      {/* 8. Patient Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* 9. Educational Videos */}
      <VideosSection videos={videos} />
    </main>
  );
}
