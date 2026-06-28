import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import LayoutWrapper from "@/components/LayoutWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#16A34A",
};

export const metadata: Metadata = {
  title: {
    default: "Aatral360 — Evidence-Based Physiotherapy & Rehabilitation",
    template: "%s | Aatral360",
  },
  description:
    "Professional physiotherapy and rehabilitation services. Personalized treatment plans for pain management, sports injuries, post-surgical recovery, and functional rehabilitation.",
  keywords: [
    "physiotherapy",
    "rehabilitation",
    "pain management",
    "sports injury",
    "physical therapy",
    "Aatral360",
  ],
  openGraph: {
    title: "Aatral360 — Evidence-Based Physiotherapy & Rehabilitation",
    description:
      "Professional physiotherapy and rehabilitation services focused on recovery, mobility, and long-term wellness.",
    url: "https://aatral360.com",
    siteName: "Aatral360",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aatral360 — Evidence-Based Physiotherapy & Rehabilitation",
    description: "Professional physiotherapy and rehabilitation services.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aatral360",
    image: "https://aatral360.com/og-image.jpg",
    url: "https://aatral360.com",
    telephone: "+15551234567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Health Avenue",
      addressLocality: "Cityville",
      addressRegion: "ST",
      postalCode: "12345",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={inter.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            style: {
              fontFamily: "Inter, system-ui, sans-serif",
            },
          }}
        />
      </body>
    </html>
  );
}