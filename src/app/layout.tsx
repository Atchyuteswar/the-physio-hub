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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://aatral360.com"
  ),
  title: {
    default: "Aatral360 — Evidence-Based Physiotherapy & Rehabilitation",
    template: "%s | Aatral360",
  },
  description:
    "Professional physiotherapy and rehabilitation services in Hyderabad. Personalized treatment plans for pain management, sports injuries, post-surgical recovery, and functional rehabilitation at KPHB.",
  keywords: [
    "physiotherapy",
    "rehabilitation",
    "pain management",
    "sports injury",
    "physical therapy",
    "Aatral360",
    "physiotherapy in Hyderabad",
    "physiotherapy KPHB",
    "sports physiotherapy Hyderabad",
    "musculoskeletal rehabilitation",
    "post surgical rehabilitation",
    "chronic pain treatment",
    "evidence based physiotherapy",
    "Dr Sarath Kumar physiotherapist",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aatral360 — Evidence-Based Physiotherapy & Rehabilitation",
    description:
      "Professional physiotherapy and rehabilitation services focused on recovery, mobility, and long-term wellness in Hyderabad.",
    url: "https://aatral360.com",
    siteName: "Aatral360",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aatral360 — Evidence-Based Physiotherapy & Rehabilitation",
    description:
      "Professional physiotherapy and rehabilitation services in Hyderabad.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://aatral360.com/#organization",
        name: "Aatral360",
        description:
          "Evidence-based physiotherapy and rehabilitation clinic in Hyderabad specializing in sports injuries, musculoskeletal pain, post-surgical recovery, and chronic pain management.",
        image: "https://aatral360.com/og-image.jpg",
        url: "https://aatral360.com",
        telephone: "+918838086426",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Plot No. 500, Flat no. 502, 5th floor, surya arcade 9th phase road, Venkataramana Colony, Gokul plots, K P H B Phase 9",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500085",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 17.4875,
          longitude: 78.3953,
        },
        areaServed: [
          {
            "@type": "City",
            name: "Hyderabad",
          },
          {
            "@type": "State",
            name: "Telangana",
          },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "07:00",
            closes: "22:00",
          },
        ],
        medicalSpecialty: [
          "Physiotherapy",
          "Sports Medicine",
          "Musculoskeletal Rehabilitation",
          "Neurological Rehabilitation",
          "Post-Operative Rehabilitation",
          "Chronic Pain Management",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Physiotherapy Services",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Musculoskeletal Rehabilitation",
            },
            {
              "@type": "OfferCatalog",
              name: "Sports Injury Rehabilitation",
            },
            {
              "@type": "OfferCatalog",
              name: "Post-Operative Rehabilitation",
            },
            {
              "@type": "OfferCatalog",
              name: "Chronic Pain Rehabilitation",
            },
            {
              "@type": "OfferCatalog",
              name: "Neurological Rehabilitation",
            },
            {
              "@type": "OfferCatalog",
              name: "Women's Health Physiotherapy",
            },
          ],
        },
        founder: {
          "@type": "Person",
          name: "Dr. Sarath Kumar N",
          jobTitle: "Founder & Lead Physiotherapist",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://aatral360.com/#website",
        url: "https://aatral360.com",
        name: "Aatral360",
        publisher: {
          "@id": "https://aatral360.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://aatral360.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
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