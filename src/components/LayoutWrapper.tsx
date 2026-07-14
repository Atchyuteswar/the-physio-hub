"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalNavbar from "@/components/landing/GlobalNavbar";
import GlobalFooter from "@/components/landing/GlobalFooter";

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

  // Use Global Header/Footer for the main landing page
  if (pathname === "/") {
    return (
      <div className="flex flex-col min-h-screen">
        <GlobalNavbar />
        <main className="flex-1">{children}</main>
        <GlobalFooter />
      </div>
    );
  }

  // Use the Physiotherapy-specific Header/Footer for everything else (since all other routes belong to the physio silo)
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}