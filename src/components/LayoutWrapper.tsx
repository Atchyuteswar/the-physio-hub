"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalNavbar from "@/components/landing/GlobalNavbar";
import GlobalFooter from "@/components/landing/GlobalFooter";
import FloatingContactBar from "@/components/FloatingContactBar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  // Use Global Header/Footer for the main landing pages
  const isGlobalRoute =
    pathname === "/" ||
    pathname === "/contact" ||
    pathname === "/about" ||
    pathname === "/privacy-policy" ||
    pathname === "/terms-of-service" ||
    pathname.startsWith("/gallery") ||
    pathname.startsWith("/videos") ||
    pathname.startsWith("/testimonials");

  if (isGlobalRoute) {
    return (
      <div className="flex flex-col min-h-screen">
        <GlobalNavbar />
        <main className="flex-1">{children}</main>
        <GlobalFooter />
        <FloatingContactBar />
      </div>
    );
  }

  const isPhysioRoute = pathname.startsWith("/physiotherapy");

  // Use the Physiotherapy-specific Header/Footer for physiotherapy routes
  if (isPhysioRoute) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContactBar />
      </div>
    );
  }

  // Fallback for any other root pages
  return (
    <>
      {children}
      <FloatingContactBar />
    </>
  );
}