"use client";

import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import HeroCountUp from "@/components/hero/HeroCountUp";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { animatedTestimonialSlides } from "@/content/landing";
import {
  featuredStoriesData,
  testimonialMetricsData,
  videoTestimonialsData,
} from "@/content/testimonialsPage";
import { useMessages } from "@/i18n/LanguageProvider";

export default function TestimonialsFull() {
  const { testimonialsPage: t } = useMessages();

  const slides = animatedTestimonialSlides.map((slide, i) => ({
    ...slide,
    name: t.slides[i]?.name ?? slide.name,
    quote: t.slides[i]?.quote ?? slide.quote,
    designation: t.slides[i]?.designation ?? slide.designation,
  }));

  return (
    <>
      <ScrollReveal y={24}>
        <header className="success-stories-header testimonials-page-header">
          <span className="success-stories-eyebrow">
            <Sparkles className="h-3 w-3 opacity-70" strokeWidth={1} aria-hidden />
            {t.badge}
          </span>
          <h1 className="success-stories-title testimonials-page-title">{t.title}</h1>
          <p className="success-stories-lead testimonials-page-lead">{t.subtitle}</p>
        </header>
      </ScrollReveal>

      <ScrollReveal y={20} className="testimonials-page-section">
        <div className="testimonials-page-metrics">
          {testimonialMetricsData.map((m, i) => (
            <div key={m.display} className="testimonials-page-metric">
              <p className="testimonials-page-metric-value">
                <HeroCountUp
                  value={m.value}
                  suffix={m.suffix}
                  display={m.display}
                  className="tabular-nums"
                />
              </p>
              <p className="testimonials-page-metric-label">{t.metrics[i]}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal
        staggerSelector="[data-featured-story]"
        stagger={0.1}
        y={32}
        className="testimonials-page-section"
      >
        <div className="testimonials-page-featured">
          {featuredStoriesData.map((meta, i) => {
            const story = t.featuredStories[i];
            if (!story) return null;
            return (
              <article key={story.names} data-featured-story className="testimonials-page-featured-card group">
                <div className="testimonials-page-featured-round">
                  <OptimizedImage
                    src={meta.image}
                    alt={story.imageAlt}
                    fill
                    sizes="(max-width: 768px) 60vw, 240px"
                    className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    wrapperClassName="absolute inset-0"
                  />
                </div>
                <div className="testimonials-page-featured-content">
                  <p className="testimonials-page-featured-names">{story.names}</p>
                  <p className="testimonials-page-featured-quote">&ldquo;{story.quote}&rdquo;</p>
                  <Link href={meta.href} className="testimonials-page-featured-cta">
                    {story.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </ScrollReveal>

      <ScrollReveal y={32} delay={0.06} className="testimonials-page-section">
        <AnimatedTestimonials testimonials={slides} autoplay />
      </ScrollReveal>

      <ScrollReveal staggerSelector="[data-video-story]" stagger={0.08} y={28} className="testimonials-page-section testimonials-page-videos-section">
        <h2 className="testimonials-page-videos-title">{t.videoSectionTitle}</h2>
        <div className="testimonials-page-videos">
          {videoTestimonialsData.map((meta, i) => {
            const video = t.videos[i];
            if (!video) return null;
            return (
              <Link
                key={video.name}
                href={meta.href}
                data-video-story
                className="testimonials-page-video-card group"
              >
                <div className="testimonials-page-video-thumb">
                  <div className="testimonials-page-video-round">
                    <OptimizedImage
                      src={meta.thumbnail}
                      alt={t.featuredStories[i]?.imageAlt ?? video.journey}
                      fill
                      sizes="(max-width: 640px) 50vw, 200px"
                      className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      wrapperClassName="absolute inset-0"
                    />
                    <span className="testimonials-page-video-play" aria-hidden>
                      <Play className="h-5 w-5 fill-current" strokeWidth={0} />
                    </span>
                  </div>
                </div>
                <div className="testimonials-page-video-body">
                  <p className="testimonials-page-video-name">{video.name}</p>
                  <p className="testimonials-page-video-journey">{video.journey}</p>
                  <span className="testimonials-page-video-cta">
                    {t.watchStory}
                    <ArrowRight className="h-3.5 w-3.5 shrink-0" strokeWidth={1.17} aria-hidden />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </ScrollReveal>
    </>
  );
}
