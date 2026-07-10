import { doctor } from "@/content/doctor";
import { images } from "@/content/images";
import type { FaqItem, VideoContent } from "@/content/types";
import {
  type VideoCatalogEntry,
  type VideoCategory,
  getAllCatalogSlugs,
  getCatalogEntryBySlug,
  getFeaturedAboutVideos,
  getKnowledgeHubVideoEntries,
  videoCatalog,
  videoPagePath,
  youtubeThumbnailUrl,
  youtubeWatchUrl,
  YOUTUBE_CHANNEL_SEARCH,
} from "@/content/videos/catalog";
import { getVideoRichContent } from "@/content/videos/rich-content";

export {
  YOUTUBE_CHANNEL_SEARCH,
  getCatalogEntryBySlug,
  getFeaturedAboutVideos,
  videoCatalog,
  videoPagePath,
  youtubeThumbnailUrl,
  youtubeWatchUrl,
};

export type { VideoCatalogEntry, VideoCategory, VideoSource } from "@/content/videos/catalog";

const author = doctor.name;
const publishedAt = "2024-06-01";

const categoryImages: Record<VideoCategory, string> = {
  Fertility: images.articles.maternityIllustration,
  IVF: images.articles.clinicalVisit,
  PCOS: images.articles.womensReproductiveHealth,
  Pregnancy: images.articles.pregnancyConsultation,
  "Women's Health": images.articles.wellnessIllustration,
};

const categoryTreatments: Record<VideoCategory, string[]> = {
  Fertility: ["fertility-treatment", "gynecology-consultation"],
  IVF: ["fertility-treatment"],
  PCOS: ["pcos-management", "fertility-treatment"],
  Pregnancy: ["pregnancy-care", "high-risk-pregnancy"],
  "Women's Health": ["gynecology-consultation", "pcos-management"],
};

function defaultFaqs(category: VideoCategory): FaqItem[] {
  const bookCta =
    "Book a consultation at Dr. Sulochana's Hospital, Madinaguda, Hyderabad, to discuss your situation in detail.";

  const byCategory: Record<VideoCategory, FaqItem[]> = {
    Fertility: [
      {
        q: "When should we see a fertility doctor?",
        a: "After 12 months of trying, or 6 months if the woman is over 35, or sooner with known risk factors.",
      },
      {
        q: "Do both partners need testing?",
        a: "Yes. Male and female factors are evaluated together for an accurate treatment plan.",
      },
      { q: "How do I book an appointment after watching?", a: bookCta },
    ],
    IVF: [
      {
        q: "Who is a good candidate for IVF?",
        a: "Couples with tubal blockage, severe male factor, failed IUI, diminished ovarian reserve, or unexplained infertility after evaluation.",
      },
      {
        q: "How long does one IVF cycle take?",
        a: "Typically 4–6 weeks from stimulation start to embryo transfer, depending on your protocol.",
      },
      { q: "How do I book an appointment after watching?", a: bookCta },
    ],
    PCOS: [
      {
        q: "Can I get pregnant with PCOS?",
        a: "Many women with PCOS conceive with lifestyle changes, ovulation support, or fertility treatment.",
      },
      {
        q: "Is PCOS only diagnosed by ultrasound?",
        a: "No. Diagnosis combines symptoms, examination, blood tests, and ultrasound — not scan alone.",
      },
      { q: "How do I book an appointment after watching?", a: bookCta },
    ],
    Pregnancy: [
      {
        q: "When should I start antenatal visits?",
        a: "Schedule within the first 6–8 weeks of pregnancy, or earlier if you have symptoms or risk factors.",
      },
      {
        q: "What if my pregnancy is high-risk?",
        a: "Closer monitoring and specialist obstetric care help manage conditions such as hypertension or diabetes in pregnancy.",
      },
      { q: "How do I book an appointment after watching?", a: bookCta },
    ],
    "Women's Health": [
      {
        q: "How often should I have a gynecology check-up?",
        a: "Annual visits are recommended for most women, or sooner if you have symptoms.",
      },
      {
        q: "Can I get a second opinion?",
        a: "Yes. Bring previous records for an independent review of your care plan.",
      },
      { q: "How do I book an appointment after watching?", a: bookCta },
    ],
  };

  return byCategory[category];
}

function defaultRelatedVideos(entry: VideoCatalogEntry): string[] {
  return videoCatalog
    .filter((v) => v.slug !== entry.slug && v.category === entry.category)
    .slice(0, 3)
    .map((v) => v.slug);
}

function buildVideoContent(entry: VideoCatalogEntry): VideoContent {
  const rich = getVideoRichContent(entry.slug);
  const image = categoryImages[entry.category];

  const summary = rich?.summary ?? [
    entry.description,
    `In this segment, ${author} shares practical, evidence-based guidance on ${entry.category.toLowerCase()} for patients and families in Hyderabad.`,
    "Watch the video above for detailed explanations. If you have personal health concerns, a one-to-one consultation allows your doctor to review your history and recommend the right next steps.",
    `You can also explore more videos from our Knowledge Centre or book an appointment at Dr. Sulochana's Hospital, Madinaguda.`,
  ];

  return {
    slug: entry.slug,
    title: entry.title,
    description: entry.description,
    category: entry.category,
    youtubeId: entry.youtubeId,
    publishedAt,
    author,
    image,
    summary,
    faqs: rich?.faqs ?? defaultFaqs(entry.category),
    relatedArticles: rich?.relatedArticles ?? [],
    relatedTreatments: rich?.relatedTreatments ?? categoryTreatments[entry.category],
    relatedVideos: rich?.relatedVideos ?? defaultRelatedVideos(entry),
  };
}

const videos: VideoContent[] = videoCatalog.map(buildVideoContent);

export function getAllVideos(): VideoContent[] {
  return videos;
}

export function getKnowledgeHubVideos(): VideoContent[] {
  return getKnowledgeHubVideoEntries().map((entry) => {
    const content = buildVideoContent(entry);
    return {
      ...content,
      image: youtubeThumbnailUrl(entry.youtubeId),
    };
  });
}

export function getAllVideoSlugs(): string[] {
  return getAllCatalogSlugs();
}

export function getVideoBySlug(slug: string): VideoContent | undefined {
  return videos.find((video) => video.slug === slug);
}

export function getVideoByYoutubeId(youtubeId: string): VideoContent | undefined {
  const entry = videoCatalog.find((v) => v.youtubeId === youtubeId);
  return entry ? buildVideoContent(entry) : undefined;
}
