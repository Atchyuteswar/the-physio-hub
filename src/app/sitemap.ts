import { MetadataRoute } from "next";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL from environment variable or fallback for local development
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://aatral360.com";

  // Homepage — highest priority
  const homepageRoute = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1,
  };

  // Core service pages — high priority
  const coreServiceRoutes = [
    "/physiotherapy",
    "/physiotherapy/services",
    "/physiotherapy/appointment",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Key informational pages — medium-high priority
  const informationalRoutes = [
    "/about",
    "/physiotherapy/about",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Content & pillar pages — medium priority
  const contentRoutes = [
    "/videos",
    "/gallery",
    "/testimonials",
    "/nutrition-services",
    "/strength-and-conditioning",
    "/yoga-and-pilates",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Legal pages — low priority, rarely change
  const legalRoutes = [
    "/privacy-policy",
    "/terms-of-service",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  // Dynamic service detail routes — high priority
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/physiotherapy/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    homepageRoute,
    ...coreServiceRoutes,
    ...informationalRoutes,
    ...contentRoutes,
    ...legalRoutes,
    ...serviceRoutes,
  ];
}
