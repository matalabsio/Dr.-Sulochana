import { articles } from "@/content/articles";
import type { VideoCategory } from "@/content/videos/catalog";

export type KnowledgeFilter =
  | "All"
  | "IVF"
  | "IUI"
  | "PCOS"
  | "Pregnancy"
  | "Women's Health";

export const knowledgeFilters: readonly KnowledgeFilter[] = [
  "All",
  "IVF",
  "IUI",
  "PCOS",
  "Pregnancy",
  "Women's Health",
] as const;

const knowledgeArticleFlags: Record<
  string,
  {
    featured?: boolean;
    expertReviewed?: boolean;
    featuredLabel?: string | null;
    topics?: readonly KnowledgeFilter[];
  }
> = {
  "confirmation-of-pregnancy": {
    featured: true,
    expertReviewed: true,
    topics: ["Pregnancy"],
  },
  "investigations-during-pregnancy": {
    expertReviewed: true,
    topics: ["Pregnancy"],
  },
  "safe-medication-in-pregnancy": {
    expertReviewed: true,
    topics: ["Pregnancy"],
  },
  "abdominal-pain-during-pregnancy": {
    expertReviewed: true,
    topics: ["Pregnancy"],
  },
  "vomiting-during-pregnancy": {
    expertReviewed: true,
    topics: ["Pregnancy"],
  },
  "family-planning-contraception": {
    expertReviewed: true,
    topics: ["Women's Health"],
  },
  "when-to-seek-fertility-care": {
    expertReviewed: true,
    topics: ["IVF", "IUI", "PCOS"],
  },
};

export function getKnowledgeHubArticles() {
  return articles.map((article) => {
    const flags = knowledgeArticleFlags[article.slug] ?? {};
    return {
      slug: article.slug,
      title: article.title,
      desc: article.description,
      category: article.category,
      topics: flags.topics ?? [article.category as KnowledgeFilter],
      time: article.readTime,
      author: article.author,
      image: article.image,
      publishedAt: article.publishedAt,
      featured: flags.featured ?? false,
      expertReviewed: flags.expertReviewed ?? true,
      featuredLabel: flags.featuredLabel ?? null,
    };
  });
}

export function formatKnowledgeArticleDate(
  publishedAt: string,
  locale = "en-IN",
): string {
  return new Date(publishedAt).toLocaleDateString(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/** Maps Knowledge Centre filter pills to articles */
export function articleMatchesKnowledgeFilter(
  article: { category: string; topics?: readonly string[] },
  filter: KnowledgeFilter,
): boolean {
  if (filter === "All") return true;
  if (filter === "Pregnancy") {
    return article.category === "Pregnancy" || article.topics?.includes("Pregnancy") === true;
  }
  if (filter === "Women's Health") {
    return article.category === "Women's Health" || article.topics?.includes("Women's Health") === true;
  }
  return article.topics?.includes(filter) === true;
}

/** Maps Knowledge Centre tab labels to video catalog categories */
export function videoMatchesKnowledgeFilter(
  videoCategory: VideoCategory,
  filter: KnowledgeFilter,
): boolean {
  if (filter === "All") return true;
  if (filter === "Pregnancy") return videoCategory === "Pregnancy";
  if (filter === "IVF") return videoCategory === "IVF" || videoCategory === "Fertility";
  if (filter === "IUI") return videoCategory === "Fertility";
  if (filter === "PCOS") return videoCategory === "PCOS";
  if (filter === "Women's Health") return videoCategory === "Women's Health";
  return false;
}
