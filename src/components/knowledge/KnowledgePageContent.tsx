"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ExternalLink, Globe, Play } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import KnowledgeArticleCard from "@/components/knowledge/KnowledgeArticleCard";
import KnowledgeFilterBar from "@/components/knowledge/KnowledgeFilterBar";
import {
  filterKnowledgeArticles,
  useKnowledgeArticles,
} from "@/components/knowledge/useKnowledgeArticles";
import NewsletterBlock from "@/components/landing/NewsletterBlock";
import OptimizedImage from "@/components/ui/OptimizedImage";
import type { KnowledgeFilter } from "@/content/knowledgeHub";
import { knowledgeFilters, videoMatchesKnowledgeFilter } from "@/content/knowledgeHub";
import type { VideoCategory } from "@/content/videos/catalog";
import { getKnowledgeHubVideos, YOUTUBE_CHANNEL_SEARCH } from "@/content/videos";
import { useMessages } from "@/i18n/LanguageProvider";

const knowledgeVideos = getKnowledgeHubVideos();

export default function KnowledgePageContent() {
  const { knowledge, knowledgePage: page, common } = useMessages();
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
    () => filterKnowledgeArticles(articles, activeFilter),
    [articles, activeFilter],
  );

  const visibleVideos = useMemo(
    () => knowledgeVideos.filter((video) => videoMatchesKnowledgeFilter(video.category as VideoCategory, activeFilter)),
    [activeFilter],
  );

  return (
    <>
      <p className="knowledge-section-top-label knowledge-page-top-label">{knowledge.sectionLabel}</p>

      <div className="knowledge-hub-panel knowledge-page-panel">
        <ScrollReveal y={20}>
          <header className="knowledge-hub-header">
            <div className="knowledge-hub-header-copy">
              <div className="knowledge-hub-eyebrow-row">
                <span className="knowledge-hub-eyebrow">{knowledge.badge}</span>
                <span className="knowledge-hub-eyebrow-line" aria-hidden />
              </div>
              <h1 className="knowledge-hub-title">{knowledge.title}</h1>
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
          className="knowledge-page-section"
        >
          <div className="knowledge-hub-grid knowledge-page-articles-grid" role="tabpanel">
            {visibleArticles.map((article) => (
              <div key={article.slug} data-knowledge-hub-card>
                <KnowledgeArticleCard
                  article={article}
                  readArticleLabel={common.readArticle}
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
        </div>
      </div>

      {visibleVideos.length > 0 ? (
        <section id="videos" className="knowledge-page-videos-section">
          <ScrollReveal y={28}>
            <header className="knowledge-page-videos-header">
              <div className="knowledge-page-videos-header-copy">
                <span className="knowledge-page-eyebrow">
                  <Play className="h-3 w-3 opacity-70" strokeWidth={2} aria-hidden />
                  {page.videos.eyebrow}
                </span>
                <h2 className="knowledge-page-videos-title">{page.videos.title}</h2>
                <p className="knowledge-page-videos-lead">{page.videos.subtitle}</p>
              </div>
              <a
                href={YOUTUBE_CHANNEL_SEARCH}
                target="_blank"
                rel="noopener noreferrer"
                className="knowledge-page-videos-link"
              >
                {page.videos.viewAllYoutube}
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </header>
            <div className="knowledge-page-videos-grid">
              {visibleVideos.map((video) => (
                <article key={video.slug} className="knowledge-hub-card group">
                  <Link href={`/videos/${video.slug}`} className="knowledge-hub-card-link">
                    <div className="knowledge-hub-card-media">
                      <OptimizedImage
                        src={video.image}
                        alt={video.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 379px"
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                        wrapperClassName="!absolute !inset-0"
                      />
                    </div>
                    <div className="knowledge-hub-card-body">
                      <div className="knowledge-hub-card-meta">
                        <span className="knowledge-hub-card-tag">{video.category}</span>
                      </div>
                      <h3 className="knowledge-hub-card-title">{video.title}</h3>
                      <p className="knowledge-hub-card-desc">{video.description}</p>
                      <p className="knowledge-hub-card-author">{video.author}</p>
                      <span className="knowledge-hub-card-cta">
                        {page.videos.watchCta}
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </section>
      ) : null}

      <div className="knowledge-page-newsletter">
        <NewsletterBlock />
      </div>
    </>
  );
}
