import type { MetadataRoute } from "next";
import { getAllArticleSlugs } from "@/content/articles";
import { getAllTreatmentSlugs } from "@/content/treatments";
import { getAllVideoSlugs } from "@/content/videos";
import { getSiteUrl } from "@/lib/seo/site";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/knowledge",
  "/services",
  "/specialists",
  "/testimonials",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.7,
  }));

  const articleEntries = getAllArticleSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const videoEntries = getAllVideoSlugs().map((slug) => ({
    url: `${baseUrl}/videos/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const treatmentEntries = getAllTreatmentSlugs().map((slug) => ({
    url: `${baseUrl}/treatments/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...treatmentEntries, ...articleEntries, ...videoEntries];
}
