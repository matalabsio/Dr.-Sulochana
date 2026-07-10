"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, BookOpen, ExternalLink, Play } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import NewsletterBlock from "@/components/landing/NewsletterBlock";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { knowledgeHubArticles } from "@/content/knowledgePage";
import { getKnowledgeHubVideos, YOUTUBE_CHANNEL_SEARCH } from "@/content/videos";
import { useMessages } from "@/i18n/LanguageProvider";

const knowledgeVideos = getKnowledgeHubVideos();

export default function KnowledgePageContent() {
  const { knowledgePage: page, common } = useMessages();

  const featuredMeta = knowledgeHubArticles[0];
  const featuredCopy = page.articles[0];
  const gridArticles = knowledgeHubArticles
    .map((meta, i) => ({ meta, copy: page.articles[i] }))
    .filter(({ copy }) => Boolean(copy))
    .slice(1);

  return (
    <>
      <ScrollReveal y={24}>
        <header className="knowledge-page-header">
          <span className="knowledge-page-eyebrow">
            <BookOpen className="h-3 w-3 opacity-70" strokeWidth={2} aria-hidden />
            {page.header.badge}
          </span>
          <h1 className="knowledge-page-title">{page.header.title}</h1>
          <p className="knowledge-page-lead">{page.header.subtitle}</p>
        </header>
      </ScrollReveal>

      {featuredCopy ? (
        <ScrollReveal y={28} className="knowledge-page-section">
          <Link
            href={`/blog/${featuredMeta.slug}`}
            className="knowledge-page-featured group block"
          >
            <div className="knowledge-page-featured-media">
              <OptimizedImage
                src={featuredMeta.image}
                alt={featuredCopy.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 642px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                wrapperClassName="absolute inset-0"
              />
              <div className="knowledge-page-featured-overlay" aria-hidden />
              <div className="knowledge-page-featured-badges">
                <span className="knowledge-pill knowledge-pill--featured">
                  {page.featured.badge}
                </span>
                <span className="knowledge-pill">{featuredMeta.time}</span>
                {featuredMeta.expertReviewed ? (
                  <span className="knowledge-pill knowledge-pill--reviewed">
                    <BadgeCheck className="h-3 w-3" aria-hidden />
                    {page.expertReviewed}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="knowledge-page-featured-body">
              <span className="knowledge-page-category">{featuredCopy.category}</span>
              <h2 className="knowledge-page-featured-title">{featuredCopy.title}</h2>
              <p className="knowledge-page-featured-desc">{featuredCopy.desc}</p>
              <div className="knowledge-page-featured-meta">
                <span>{featuredMeta.time}</span>
                <span className="knowledge-page-featured-dot" aria-hidden />
                <span>{page.featured.author}</span>
              </div>
              <span className="knowledge-page-featured-cta">
                {common.readArticle}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </ScrollReveal>
      ) : null}

      {gridArticles.length > 0 ? (
        <ScrollReveal
          staggerSelector="[data-knowledge-hub-card]"
          stagger={0.08}
          y={28}
          className="knowledge-page-section"
        >
          <div className="knowledge-page-grid">
            {gridArticles.map(({ meta, copy }) => {
              if (!copy) return null;
              return (
                <article
                  key={meta.slug}
                  data-knowledge-hub-card
                  className="knowledge-page-article-card group"
                >
                  <Link href={`/blog/${meta.slug}`} className="flex h-full flex-col">
                    <div className="knowledge-page-article-media">
                      <OptimizedImage
                        src={meta.image}
                        alt={copy.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 379px"
                        className="object-cover object-center transition-transform duration-600 group-hover:scale-[1.02]"
                        wrapperClassName="absolute inset-0"
                      />
                      <div className="knowledge-page-article-gradient" aria-hidden />
                      <div className="knowledge-page-article-badges">
                        {meta.featuredLabel ? (
                          <span className="knowledge-pill knowledge-pill--featured">
                            {meta.featuredLabel}
                          </span>
                        ) : null}
                        <span className="knowledge-pill">{meta.time}</span>
                        {meta.expertReviewed ? (
                          <span className="knowledge-pill knowledge-pill--reviewed">
                            <BadgeCheck className="h-3 w-3" aria-hidden />
                            {page.expertReviewed}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div className="knowledge-page-article-body">
                      <span className="knowledge-page-category">{copy.category}</span>
                      <h3 className="knowledge-page-article-title">{copy.title}</h3>
                      <p className="knowledge-page-article-desc">{copy.desc}</p>
                      <p className="knowledge-page-article-author">{meta.author}</p>
                      <span className="knowledge-page-card-cta">
                        {common.readArticle}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </ScrollReveal>
      ) : null}

      {knowledgeVideos.length > 0 ? (
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
              {knowledgeVideos.map((video) => (
                <article key={video.slug} className="knowledge-page-article-card group">
                  <Link href={`/videos/${video.slug}`} className="flex h-full flex-col">
                    <div className="knowledge-page-article-media">
                      <OptimizedImage
                        src={video.image}
                        alt={video.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 379px"
                        className="object-cover object-center transition-transform duration-600 group-hover:scale-[1.02]"
                        wrapperClassName="absolute inset-0"
                      />
                      <div className="knowledge-page-article-gradient" aria-hidden />
                      <div className="knowledge-page-article-badges">
                        <span className="knowledge-pill knowledge-pill--featured">
                          <Play className="h-3 w-3" aria-hidden />
                          {page.videos.badge}
                        </span>
                        <span className="knowledge-pill">{video.category}</span>
                      </div>
                    </div>
                    <div className="knowledge-page-article-body">
                      <span className="knowledge-page-category">{video.category}</span>
                      <h3 className="knowledge-page-article-title">{video.title}</h3>
                      <p className="knowledge-page-article-desc">{video.description}</p>
                      <p className="knowledge-page-article-author">{video.author}</p>
                      <span className="knowledge-page-card-cta">
                        {page.videos.watchCta}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
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
