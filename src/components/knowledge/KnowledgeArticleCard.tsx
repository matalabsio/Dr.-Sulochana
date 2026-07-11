"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { formatKnowledgeArticleDate } from "@/content/knowledgeHub";

export type KnowledgeArticleCardData = {
  slug: string;
  title: string;
  desc: string;
  category: string;
  time: string;
  author: string;
  image: string;
  publishedAt: string;
};

type KnowledgeArticleCardProps = {
  article: KnowledgeArticleCardData;
  readArticleLabel: string;
  dateLocale?: string;
  variant?: "default" | "landing";
};

export default function KnowledgeArticleCard({
  article,
  readArticleLabel,
  dateLocale = "en-IN",
  variant = "default",
}: KnowledgeArticleCardProps) {
  const formattedDate = formatKnowledgeArticleDate(article.publishedAt, dateLocale);
  const isLanding = variant === "landing";

  return (
    <article
      className={`knowledge-hub-card group${isLanding ? " knowledge-hub-card--landing" : ""}`}
    >
      <Link href={`/blog/${article.slug}`} className="knowledge-hub-card-link">
        <div className="knowledge-hub-card-media">
          <OptimizedImage
            src={article.image}
            alt={article.title}
            fill
            sizes={isLanding ? "(max-width: 767px) 100vw, 33vw" : "(max-width: 767px) 100vw, 379px"}
            className={`object-center transition-transform duration-300 group-hover:scale-[1.02] ${
              isLanding ? "object-contain" : "object-cover"
            }`}
            wrapperClassName="!absolute !inset-0"
          />
        </div>
        <div className="knowledge-hub-card-body">
          <div className="knowledge-hub-card-meta">
            <span className="knowledge-hub-card-tag">{article.category}</span>
            <span className="knowledge-hub-card-date">
              {formattedDate} · {article.time}
            </span>
          </div>
          <h3 className="knowledge-hub-card-title">{article.title}</h3>
          <p className="knowledge-hub-card-desc">{article.desc}</p>
          <p className="knowledge-hub-card-author">{article.author}</p>
          <span className="knowledge-hub-card-cta">
            {readArticleLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
