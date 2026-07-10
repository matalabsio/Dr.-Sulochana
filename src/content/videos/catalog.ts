/**
 * Master catalog of Dr. Sulochana YouTube appearances.
 * Source: Ferty9 channel + HMTV (Kiriti Mortha, June 2025).
 *
 * All site video pages are built from this list.
 * Page URLs: /videos/[slug]
 */

export type VideoSource = "Ferty9 Channel on YouTube" | "HMTV on YouTube";

export type VideoCategory = "Fertility" | "IVF" | "PCOS" | "Pregnancy" | "Women's Health";

export type VideoCatalogEntry = {
  slug: string;
  youtubeId: string;
  title: string;
  description: string;
  category: VideoCategory;
  source: VideoSource;
  /** Shown on About page media section */
  featuredOnAbout?: boolean;
  /** Curated list on /knowledge (verified Dr. Sulochana appearances) */
  featuredOnKnowledge?: boolean;
};

/** Full YouTube search for Dr. Sulochana on Ferty9 */
export const YOUTUBE_CHANNEL_SEARCH =
  "https://www.youtube.com/results?search_query=dr+sulochana+ivf+ferty9";

export function youtubeWatchUrl(youtubeId: string): string {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

export function youtubeThumbnailUrl(youtubeId: string): string {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}

export function videoPagePath(slug: string): string {
  return `/videos/${slug}`;
}

export const videoCatalog: readonly VideoCatalogEntry[] = [
  {
    slug: "infertility-public-awareness",
    youtubeId: "r7n67cv78w8",
    title: "Infertility Public Awareness Segment",
    description:
      "Archive feature addressing foundational queries on female fertility and when to seek specialist care.",
    category: "Fertility",
    source: "HMTV on YouTube",
    featuredOnAbout: true,
    featuredOnKnowledge: true,
  },
  {
    slug: "understanding-ivf-treatment",
    youtubeId: "Udktf2FRfv0",
    title: "Understanding IVF Treatment",
    description:
      "How IVF works, who it helps, and what to expect at each stage of in-vitro fertilization treatment.",
    category: "IVF",
    source: "Ferty9 Channel on YouTube",
    featuredOnAbout: false,
  },
  {
    slug: "ivf-process-and-procedure",
    youtubeId: "4lNCMeTL3o0",
    title: "IVF Process and Procedure",
    description:
      "Step-by-step overview of the IVF journey — stimulation, retrieval, fertilization, and embryo transfer.",
    category: "IVF",
    source: "Ferty9 Channel on YouTube",
    featuredOnAbout: true,
    featuredOnKnowledge: true,
  },
  {
    slug: "when-to-see-a-fertility-specialist",
    youtubeId: "gAShq0_7MiE",
    title: "When to See a Fertility Specialist",
    description:
      "Guidance on the right time to consult a fertility specialist and what to expect at your first visit.",
    category: "Fertility",
    source: "Ferty9 Channel on YouTube",
    featuredOnKnowledge: true,
  },
  {
    slug: "causes-of-infertility-in-women",
    youtubeId: "e0J5TezFj2k",
    title: "Causes of Infertility in Women",
    description:
      "Common medical reasons for difficulty conceiving and how specialists evaluate female infertility.",
    category: "Fertility",
    source: "Ferty9 Channel on YouTube",
    featuredOnKnowledge: true,
  },
  {
    slug: "iui-treatment-explained",
    youtubeId: "BYzhgGa2xb8",
    title: "IUI Treatment Explained",
    description:
      "Understanding intrauterine insemination (IUI) — who it helps, how it works, and success factors.",
    category: "Fertility",
    source: "Ferty9 Channel on YouTube",
    featuredOnKnowledge: true,
  },
  {
    slug: "pcod-diagnostics-and-management",
    youtubeId: "D3xRHuzrWyc",
    title: "PCOD Diagnostics and Management",
    description:
      "Early-stage medical solutions for PCOD/PCOS, ovarian health, and when to seek specialist care.",
    category: "PCOS",
    source: "Ferty9 Channel on YouTube",
    featuredOnAbout: true,
    featuredOnKnowledge: true,
  },
  {
    slug: "pcos-and-fertility",
    youtubeId: "Kun9UVmE3zQ",
    title: "PCOS and Fertility",
    description:
      "How polycystic ovary syndrome affects conception and treatment options for women trying to conceive.",
    category: "PCOS",
    source: "Ferty9 Channel on YouTube",
    featuredOnKnowledge: true,
  },
  {
    slug: "egg-quality-and-ivf-success",
    youtubeId: "XW5qxtnWkwk",
    title: "Egg Quality and IVF Success",
    description:
      "Factors that influence egg quality, ovarian reserve, and how they relate to IVF outcomes.",
    category: "IVF",
    source: "Ferty9 Channel on YouTube",
  },
  {
    slug: "failed-ivf-what-next",
    youtubeId: "QQwnwoaYIlY",
    title: "Failed IVF — What to Do Next",
    description:
      "Counselling after an unsuccessful IVF cycle — reviewing options, investigations, and next steps.",
    category: "IVF",
    source: "Ferty9 Channel on YouTube",
  },
  {
    slug: "male-factor-infertility",
    youtubeId: "WIqfRNhDVL4",
    title: "Male Factor Infertility",
    description:
      "How semen analysis and male reproductive health fit into a couple's fertility evaluation.",
    category: "Fertility",
    source: "Ferty9 Channel on YouTube",
  },
  {
    slug: "pregnancy-after-ivf",
    youtubeId: "6nTH5gGg_kg",
    title: "Pregnancy After IVF",
    description:
      "What to expect after a positive pregnancy test following IVF — early monitoring and prenatal care.",
    category: "Pregnancy",
    source: "Ferty9 Channel on YouTube",
    featuredOnKnowledge: true,
  },
  {
    slug: "high-risk-pregnancy-care",
    youtubeId: "h-GICuvyTMw",
    title: "High-Risk Pregnancy Care",
    description:
      "When a pregnancy needs closer monitoring and how obstetric teams support high-risk mothers.",
    category: "Pregnancy",
    source: "Ferty9 Channel on YouTube",
    featuredOnKnowledge: true,
  },
  {
    slug: "prenatal-care-essentials",
    youtubeId: "2oJ1nUdAQ58",
    title: "Prenatal Care Essentials",
    description:
      "Key antenatal visits, screenings, and lifestyle guidance for a healthy pregnancy journey.",
    category: "Pregnancy",
    source: "Ferty9 Channel on YouTube",
    featuredOnKnowledge: true,
  },
  {
    slug: "womens-health-and-wellness",
    youtubeId: "gWx-ngBOcgE",
    title: "Women's Health and Wellness",
    description:
      "General gynecology, preventive care, and common women's health concerns explained clearly.",
    category: "Women's Health",
    source: "Ferty9 Channel on YouTube",
    featuredOnKnowledge: true,
  },
] as const;

export function getCatalogEntryBySlug(slug: string): VideoCatalogEntry | undefined {
  return videoCatalog.find((entry) => entry.slug === slug);
}

export function getCatalogEntryByYoutubeId(youtubeId: string): VideoCatalogEntry | undefined {
  return videoCatalog.find((entry) => entry.youtubeId === youtubeId);
}

export function getFeaturedAboutVideos(): VideoCatalogEntry[] {
  return videoCatalog.filter((entry) => entry.featuredOnAbout);
}

export function getKnowledgeHubVideoEntries(): VideoCatalogEntry[] {
  return videoCatalog.filter((entry) => entry.featuredOnKnowledge);
}

export function getAllCatalogSlugs(): string[] {
  return videoCatalog.map((entry) => entry.slug);
}
