"use client";

import { useMemo } from "react";
import {
  articleMatchesKnowledgeFilter,
  getKnowledgeHubArticles,
  type KnowledgeFilter,
} from "@/content/knowledgeHub";
import { useMessages } from "@/i18n/LanguageProvider";

export function useKnowledgeArticles() {
  const { knowledge } = useMessages();

  return useMemo(
    () =>
      getKnowledgeHubArticles().map((meta, i) => ({
        ...meta,
        title: knowledge.articles[i]?.title ?? meta.title,
        desc: knowledge.articles[i]?.desc ?? meta.desc,
        category: knowledge.articles[i]?.category ?? meta.category,
      })),
    [knowledge.articles],
  );
}

export function filterKnowledgeArticles<T extends { category: string; topics?: readonly string[] }>(
  articles: T[],
  filter: KnowledgeFilter,
): T[] {
  return articles.filter((article) => articleMatchesKnowledgeFilter(article, filter));
}
