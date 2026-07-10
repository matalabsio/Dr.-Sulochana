import { articles } from "@/content/articles";
import type { VideoCategory } from "@/content/videos/catalog";

export type KnowledgeFilter =
  | "All"
  | "Pregnancy"
  | "Fertility"
  | "Childcare"
  | "Women's Health";

export const knowledgeFilters: readonly KnowledgeFilter[] = [
  "All",
  "Pregnancy",
  "Fertility",
  "Childcare",
  "Women's Health",
] as const;

const knowledgeArticleFlags: Record<
  string,
  { featured?: boolean; expertReviewed?: boolean; featuredLabel?: string | null }
> = {
  "confirmation-of-pregnancy": {
    featured: true,
    expertReviewed: true,
  },
  "investigations-during-pregnancy": { expertReviewed: true },
  "safe-medication-in-pregnancy": { expertReviewed: true },
  "abdominal-pain-during-pregnancy": { expertReviewed: true },
  "vomiting-during-pregnancy": { expertReviewed: true },
  "family-planning-contraception": { expertReviewed: true },
  "when-to-seek-fertility-care": { expertReviewed: true },
};

export function getKnowledgeHubArticles() {
  return articles.map((article) => {
    const flags = knowledgeArticleFlags[article.slug] ?? {};
    return {
      slug: article.slug,
      title: article.title,
      desc: article.description,
      category: article.category,
      time: article.readTime,
      author: article.author,
      image: article.image,
      featured: flags.featured ?? false,
      expertReviewed: flags.expertReviewed ?? true,
      featuredLabel: flags.featuredLabel ?? null,
    };
  });
}

/** Maps Knowledge Centre tab labels to article categories */
export function articleMatchesKnowledgeFilter(
  articleCategory: string,
  filter: KnowledgeFilter,
): boolean {
  if (filter === "All") return true;
  if (filter === "Childcare") return false;
  return articleCategory === filter;
}

/** Maps Knowledge Centre tab labels to video catalog categories */
export function videoMatchesKnowledgeFilter(
  videoCategory: VideoCategory,
  filter: KnowledgeFilter,
): boolean {
  if (filter === "All") return true;
  if (filter === "Pregnancy") return videoCategory === "Pregnancy";
  if (filter === "Fertility") {
    return videoCategory === "Fertility" || videoCategory === "IVF" || videoCategory === "PCOS";
  }
  if (filter === "Women's Health") return videoCategory === "Women's Health";
  return false;
}
