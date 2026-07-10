"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import NewsletterBlock from "@/components/landing/NewsletterBlock";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { knowledgeSection, landingBlogArticles } from "@/content/landing";
import { useMessages } from "@/i18n/LanguageProvider";

export default function Knowledge() {
  const { knowledge, common } = useMessages();
  const { viewAllHref } = knowledgeSection;

  return (
    <section
      id="resources"
      className="conversion-knowledge knowledge-section scroll-mt-[var(--nav-height)] px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-12"
      aria-labelledby="knowledge-heading"
    >
      <div className="knowledge-section-inner mx-auto">
        <ScrollReveal y={24}>
          <header className="knowledge-section-header">
            <div className="knowledge-section-header-copy">
              <span className="conversion-eyebrow">
                <BookOpen className="h-3 w-3" strokeWidth={2} aria-hidden />
                {knowledge.badge}
              </span>
              <h2 id="knowledge-heading" className="conversion-title">
                {knowledge.title}
              </h2>
              <p className="conversion-lead">{knowledge.subtitle}</p>
            </div>
            <Link href={viewAllHref} className="conversion-link-all knowledge-section-view-all">
              {common.viewAll}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </header>
        </ScrollReveal>

        <ScrollReveal staggerSelector="[data-knowledge-card]" stagger={0.08} y={28}>
          <div className="knowledge-section-grid">
            {landingBlogArticles.map((a, i) => {
              const localized = knowledge.articles[i];
              const title = localized?.title ?? a.title;
              const desc = localized?.desc ?? a.desc;
              const category = localized?.category ?? a.category;
              return (
                <article
                  key={title}
                  data-knowledge-card
                  className="knowledge-card knowledge-card--circle group"
                >
                  <Link href={`/blog/${a.slug}`} className="knowledge-card-link">
                    <div className="knowledge-card-media knowledge-card-media--circle">
                      <div className="knowledge-card-circle">
                        <div className="knowledge-card-circle-img">
                          <OptimizedImage
                            src={a.image}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 70vw, 266px"
                            className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
                            wrapperClassName="!absolute !inset-0 !bg-transparent"
                          />
                        </div>
                        <div className="knowledge-card-badges--circle">
                          <span className="knowledge-pill">{a.time}</span>
                          {a.expertReviewed ? (
                            <span className="knowledge-pill knowledge-pill--reviewed">
                              <BadgeCheck className="h-3 w-3 shrink-0" aria-hidden />
                              Expert reviewed
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="knowledge-card-body">
                      <span className="knowledge-category">{category}</span>
                      <h3 className="knowledge-card-title">{title}</h3>
                      <p className="knowledge-card-desc">{desc}</p>
                      <p className="knowledge-author">{a.author}</p>
                      <span className="knowledge-cta">
                        {common.readArticle}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="knowledge-section-newsletter">
          <NewsletterBlock />
        </div>
      </div>
    </section>
  );
}
