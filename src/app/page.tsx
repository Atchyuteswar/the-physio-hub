// New Landing Components
import LandingHero from "@/components/landing/LandingHero";
import WhoWeAre from "@/components/landing/WhoWeAre";
import ThreePillars from "@/components/landing/ThreePillars";
import OurPhilosophy from "@/components/landing/OurPhilosophy";
import WhyAatral360 from "@/components/landing/WhyAatral360";
import StrengthPerformance from "@/components/landing/StrengthPerformance";
import ResearchEducation from "@/components/landing/ResearchEducation";

// No old components imported here anymore

export const revalidate = 3600;

export default async function HomePage() {
  return (
    <main>
      {/* 1. Hero */}
      <LandingHero />

      {/* 2. Who We Are */}
      <WhoWeAre />

      {/* 3. Three Pillars */}
      <ThreePillars />

      {/* 4. Our Philosophy */}
      <OurPhilosophy />

      {/* 5. Why Aatral360 */}
      <WhyAatral360 />

      {/* 6. Strength & Performance */}
      <StrengthPerformance />

      {/* 7. Research & Education */}
      <ResearchEducation />
    </main>
  );
}
