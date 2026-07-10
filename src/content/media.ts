import {
  getFeaturedAboutVideos,
  videoPagePath,
  type VideoSource,
} from "@/content/videos";
import { aboutProfessionalProfiles } from "@/content/aboutPage";

export type MediaLinkItem = {
  title: string;
  description: string;
  href: string;
  source: string;
  kind: "youtube" | "instagram" | "practo" | "skedoc" | "medibuddy" | "lybrate" | "gvk";
};

function youtubeMediaItem(entry: {
  title: string;
  description: string;
  slug: string;
  source: VideoSource;
}): MediaLinkItem {
  return {
    title: entry.title,
    description: entry.description,
    href: videoPagePath(entry.slug),
    source: entry.source,
    kind: "youtube",
  };
}

export const publicMediaSection = {
  eyebrow: "In the Media",
  title: "Public Awareness & Clinical Updates",
  subtitle:
    "Dr. Sulochana has conducted 50+ live television episodes on women's health across HMTV, T News, and TV5, and shares ongoing clinical guidance through verified health platforms.",
  items: [
    ...getFeaturedAboutVideos().map((video) => youtubeMediaItem(video)),
    {
      title: "GVK Health Hub — Instagram Feature",
      description:
        "Official facility introduction and clinical updates from GVK Health Hub on Instagram.",
      href: "https://www.instagram.com/p/DBtNliZq3K0/",
      source: "GVK Health Hub on Instagram",
      kind: "instagram",
    },
  ] satisfies readonly MediaLinkItem[],
} as const;

export const medicalPortalsSection = {
  eyebrow: "Official Profiles & Booking",
  title: "Verified Professional Profiles",
  subtitle:
    "Dr. Sulochana does not maintain personal Twitter/X or LinkedIn accounts. Use the verified profiles below for appointments, reviews, and official updates.",
  items: aboutProfessionalProfiles,
} as const;
