import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";
import ContentCTA from "@/components/content/ContentCTA";
import ContentFaq from "@/components/content/ContentFaq";
import RelatedContent from "@/components/content/RelatedContent";
import { youtubeWatchUrl } from "@/content/videos";
import type { VideoContent } from "@/content/types";

type VideoPageContentProps = {
  video: VideoContent;
};

export default function VideoPageContent({ video }: VideoPageContentProps) {
  const sourcePage = `/videos/${video.slug}`;

  return (
    <article className="content-page">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-12">
        <Link href="/knowledge" className="content-back-link">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to Knowledge Centre
        </Link>

        <header className="content-hero content-hero--video">
          <div className="content-hero-copy">
            <span className="content-eyebrow">
              <Play className="h-3 w-3" aria-hidden />
              {video.category}
            </span>
            <h1 className="content-title">{video.title}</h1>
            <p className="content-description">{video.description}</p>
            <p className="content-meta">Presented by {video.author}</p>
          </div>
        </header>

        <div className="content-video-embed">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <p className="content-video-youtube-link mb-8 text-sm">
          <a
            href={youtubeWatchUrl(video.youtubeId)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            Watch on YouTube
          </a>
        </p>

        <div className="content-body">
          <h2 className="content-section-title">Summary</h2>
          {video.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <ContentFaq faqs={video.faqs} />
        <RelatedContent
          relatedArticles={video.relatedArticles}
          relatedTreatments={video.relatedTreatments}
          relatedVideos={video.relatedVideos}
        />
        <ContentCTA sourcePage={sourcePage} />
      </div>
    </article>
  );
}
