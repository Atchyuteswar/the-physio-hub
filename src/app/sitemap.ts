import { MetadataRoute } from "next";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL from environment variable or fallback for local development
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://aatral360.com";

  // Core static routes
  const staticRoutes = [
    "",
    "/physiotherapy",
    "/physiotherapy/about",
    "/physiotherapy/services",
    "/physiotherapy/videos",
    "/physiotherapy/gallery",
    "/physiotherapy/testimonials",
    "/contact",
    "/physiotherapy/appointment",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/physiotherapy/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
