import {
  BadgeCheck,
  BookOpen,
  Calendar,
  Clock,
  Stethoscope,
} from "lucide-react";
import ContentCTA from "@/components/content/ContentCTA";
import ContentFaq from "@/components/content/ContentFaq";
import RelatedContent from "@/components/content/RelatedContent";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { doctor } from "@/content/doctor";
import type { ArticleContent } from "@/content/types";

type ArticlePageContentProps = {
  article: ArticleContent;
};

function formatPublishedDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArticlePageContent({ article }: ArticlePageContentProps) {
  const sourcePage = `/blog/${article.slug}`;
  const publishedLabel = formatPublishedDate(article.publishedAt);

  return (
    <article className="article-page">
      <div className="article-page-bg" aria-hidden />

      <div className="article-page-shell mx-auto max-w-container px-4 sm:px-6 lg:px-12">
        <Breadcrumbs
          className="mb-4"
          items={[
            { name: "Home", path: "/" },
            { name: "Knowledge Centre", path: "/knowledge" },
            { name: article.title, path: sourcePage },
          ]}
        />

        <header className="article-hero">
          <div className="article-hero-grid">
            <div className="article-hero-copy">
              <span className="article-category-pill">
                <BookOpen className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                {article.category}
              </span>
              <h1 className="article-title">{article.title}</h1>
              <p className="article-lead">{article.description}</p>

              <div className="article-meta-bar">
                <div className="article-meta-item">
                  <Stethoscope className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} aria-hidden />
                  <span>{article.author}</span>
                </div>
                <div className="article-meta-item">
                  <Clock className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} aria-hidden />
                  <span>{article.readTime}</span>
                </div>
                <div className="article-meta-item">
                  <Calendar className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} aria-hidden />
                  <time dateTime={article.publishedAt}>{publishedLabel}</time>
                </div>
                <div className="article-meta-item article-meta-item--reviewed">
                  <BadgeCheck className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                  <span>Expert reviewed</span>
                </div>
              </div>
            </div>

            <div className="article-hero-visual">
              <div className="article-hero-frame">
                <OptimizedImage
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-contain"
                />
              </div>
              <div className="article-hero-accent" aria-hidden />
            </div>
          </div>
        </header>

        <div className="article-layout">
          <div className="article-main">
            <aside className="article-callout lg:hidden" aria-label="Clinical guidance note">
              <p>
                This guide is for general education. Always consult{" "}
                <strong>{doctor.nameFormal}</strong> before starting or changing any medication
                during pregnancy.
              </p>
            </aside>

            <div id="article-prose" className="article-prose">
              {article.body.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className={index === 0 ? "article-prose-lead" : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <ContentFaq
              faqs={article.faqs}
              title="Common questions"
              variant="article"
              idPrefix={`${article.slug}-faq`}
            />
          </div>

          <aside className="article-sidebar" aria-label="Article tools">
            <div className="article-sidebar-stack">
              <div className="article-sidebar-card article-sidebar-card--author">
                <div className="article-sidebar-author-icon" aria-hidden>
                  <Stethoscope className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="article-sidebar-label">Reviewed by</p>
                  <p className="article-sidebar-author-name">{doctor.nameFormal}</p>
                  <p className="article-sidebar-author-role">
                    Obstetrician, Gynaecologist &amp; Infertility Specialist
                  </p>
                </div>
              </div>

              <div className="article-sidebar-card article-sidebar-card--note">
                <p className="article-sidebar-label">Clinical note</p>
                <p className="article-sidebar-note">
                  Individual care plans vary. Book a consultation for advice tailored to your
                  pregnancy stage and medical history.
                </p>
              </div>

              {article.faqs.length > 0 ? (
                <nav className="article-sidebar-card" aria-label="On this page">
                  <p className="article-sidebar-label">On this page</p>
                  <ol className="article-toc">
                    <li>
                      <a href="#article-prose">Overview</a>
                    </li>
                    <li>
                      <a href="#article-faq">Common questions</a>
                    </li>
                    {article.faqs.map((faq, index) => (
                      <li key={faq.q}>
                        <a href={`#${article.slug}-faq-${index}`}>{faq.q}</a>
                      </li>
                    ))}
                  </ol>
                </nav>
              ) : null}

              <ContentCTA
                sourcePage={sourcePage}
                variant="sidebar"
                title="Need personalised advice?"
                subtitle="Book a consultation at Madinaguda or Jubilee Hills."
              />
            </div>
          </aside>
        </div>

        <RelatedContent
          relatedArticles={article.relatedArticles}
          relatedTreatments={article.relatedTreatments}
          relatedVideos={article.relatedVideos}
          variant="article"
        />

        <ContentCTA sourcePage={sourcePage} variant="article" />
      </div>
    </article>
  );
}
