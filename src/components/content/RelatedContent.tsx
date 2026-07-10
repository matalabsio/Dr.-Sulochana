import Link from "next/link";
import { ArrowRight, BookOpen, Play, Stethoscope } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { getArticleBySlug } from "@/content/articles";
import { getTreatmentBySlug } from "@/content/treatments";
import { getVideoBySlug } from "@/content/videos";

type RelatedContentProps = {
  relatedArticles?: readonly string[];
  relatedTreatments?: readonly string[];
  relatedVideos?: readonly string[];
  variant?: "default" | "article";
};

export default function RelatedContent({
  relatedArticles = [],
  relatedTreatments = [],
  relatedVideos = [],
  variant = "default",
}: RelatedContentProps) {
  const articles = relatedArticles
    .map((slug) => getArticleBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const treatments = relatedTreatments
    .map((slug) => getTreatmentBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const videos = relatedVideos
    .map((slug) => getVideoBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  if (articles.length === 0 && treatments.length === 0 && videos.length === 0) {
    return null;
  }

  const isArticle = variant === "article";

  if (isArticle) {
    return (
      <section className="article-related" aria-labelledby="content-related-heading">
        <div className="article-section-head">
          <span className="article-section-eyebrow">Continue reading</span>
          <h2 id="content-related-heading" className="article-section-title">
            Related resources
          </h2>
          <p className="article-section-desc">
            Explore treatments, guides, and expert videos connected to this topic.
          </p>
        </div>

        <div className="article-related-grid">
          {treatments.map((item) => (
            <Link
              key={item.slug}
              href={`/treatments/${item.slug}`}
              className="article-related-card group"
            >
              <div className="article-related-card-media">
                <OptimizedImage
                  src={item.heroImage}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className="article-related-card-badge">
                  <Stethoscope className="h-3 w-3" aria-hidden />
                  Treatment
                </span>
              </div>
              <div className="article-related-card-body">
                <h3 className="article-related-card-title">{item.title}</h3>
                <span className="article-related-card-cta">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}

          {articles.map((item) => (
            <Link key={item.slug} href={`/blog/${item.slug}`} className="article-related-card group">
              <div className="article-related-card-media">
                <OptimizedImage
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className="article-related-card-badge">
                  <BookOpen className="h-3 w-3" aria-hidden />
                  Article
                </span>
              </div>
              <div className="article-related-card-body">
                <h3 className="article-related-card-title">{item.title}</h3>
                <span className="article-related-card-cta">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}

          {videos.map((item) => (
            <Link key={item.slug} href={`/videos/${item.slug}`} className="article-related-card group">
              <div className="article-related-card-media">
                <OptimizedImage
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className="article-related-card-badge">
                  <Play className="h-3 w-3" aria-hidden />
                  Video
                </span>
              </div>
              <div className="article-related-card-body">
                <h3 className="article-related-card-title">{item.title}</h3>
                <span className="article-related-card-cta">
                  Watch video
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="content-related" aria-labelledby="content-related-heading">
      <h2 id="content-related-heading" className="content-section-title">
        Related Resources
      </h2>
      <div className="content-related-grid">
        {treatments.length > 0 ? (
          <div className="content-related-group">
            <h3 className="content-related-label">Treatments</h3>
            <ul className="content-related-list">
              {treatments.map((item) => (
                <li key={item.slug}>
                  <Link href={`/treatments/${item.slug}`} className="content-related-link">
                    {item.title}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {articles.length > 0 ? (
          <div className="content-related-group">
            <h3 className="content-related-label">Articles</h3>
            <ul className="content-related-list">
              {articles.map((item) => (
                <li key={item.slug}>
                  <Link href={`/blog/${item.slug}`} className="content-related-link">
                    {item.title}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {videos.length > 0 ? (
          <div className="content-related-group">
            <h3 className="content-related-label">Videos</h3>
            <ul className="content-related-list">
              {videos.map((item) => (
                <li key={item.slug}>
                  <Link href={`/videos/${item.slug}`} className="content-related-link">
                    {item.title}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
