"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Globe } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import KnowledgeArticleCard from "@/components/knowledge/KnowledgeArticleCard";
import KnowledgeFilterBar from "@/components/knowledge/KnowledgeFilterBar";
import {
  filterKnowledgeArticles,
  useKnowledgeArticles,
} from "@/components/knowledge/useKnowledgeArticles";
import NewsletterBlock from "@/components/landing/NewsletterBlock";
import { knowledgeSection } from "@/content/landing";
import type { KnowledgeFilter } from "@/content/knowledgeHub";
import { knowledgeFilters } from "@/content/knowledgeHub";
import { useMessages } from "@/i18n/LanguageProvider";

const LANDING_ARTICLE_LIMIT = 3;

export default function Knowledge() {
  const { knowledge, common } = useMessages();
  const articles = useKnowledgeArticles();
  const [activeFilter, setActiveFilter] = useState<KnowledgeFilter>("All");

  const filterLabels = useMemo(
    () =>
      knowledgeFilters.map((filterId) => ({
        id: filterId,
        label: knowledge.filterLabels[filterId],
      })),
    [knowledge.filterLabels],
  );

  const visibleArticles = useMemo(
    () => filterKnowledgeArticles(articles, activeFilter).slice(0, LANDING_ARTICLE_LIMIT),
    [articles, activeFilter],
  );

  return (
    <section
      id="resources"
      className="knowledge-section scroll-mt-[var(--nav-height)] px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-12"
      aria-labelledby="knowledge-heading"
    >
      <div className="knowledge-section-shell mx-auto">
        <p className="knowledge-section-top-label">{knowledge.sectionLabel}</p>

        <div className="knowledge-hub-panel">
          <ScrollReveal y={20}>
            <header className="knowledge-hub-header">
              <div className="knowledge-hub-header-copy">
                <div className="knowledge-hub-eyebrow-row">
                  <span className="knowledge-hub-eyebrow">{knowledge.badge}</span>
                  <span className="knowledge-hub-eyebrow-line" aria-hidden />
                </div>
                <h2 id="knowledge-heading" className="knowledge-hub-title">
                  {knowledge.title}
                </h2>
                <p className="knowledge-hub-lead">{knowledge.subtitle}</p>
              </div>

              <div className="knowledge-hub-filters-wrap">
                <KnowledgeFilterBar
                  filters={filterLabels}
                  activeFilter={activeFilter}
                  onFilterChange={setActiveFilter}
                />
              </div>
            </header>
          </ScrollReveal>

          <ScrollReveal
            y={24}
            staggerSelector="[data-knowledge-hub-card]"
            stagger={0.08}
            key={activeFilter}
          >
            <div className="knowledge-hub-grid knowledge-hub-grid--landing" role="tabpanel">
              {visibleArticles.map((article) => (
                <div key={article.slug} data-knowledge-hub-card>
                  <KnowledgeArticleCard
                    article={article}
                    readArticleLabel={common.readArticle}
                    variant="landing"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="knowledge-hub-footer-bar">
            <p className="knowledge-hub-languages">
              <Globe className="knowledge-hub-languages-icon" strokeWidth={1.75} aria-hidden />
              <span>
                {knowledge.languagesNote}{" "}
                <strong>{knowledge.languagesHighlight}</strong>
              </span>
            </p>
            <Link href={knowledgeSection.viewAllHref} className="knowledge-hub-view-all-btn">
              {knowledge.viewAllArticles}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="knowledge-section-newsletter">
          <NewsletterBlock />
        </div>
      </div>
    </section>
  );
}
