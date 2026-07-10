"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { animatedTestimonialSlides } from "@/content/landing";
import { useMessages } from "@/i18n/LanguageProvider";

/** Landing home — Patient Success Stories (Figma) */
export default function Testimonials() {
  const { testimonials } = useMessages();
  const slides = animatedTestimonialSlides.map((slide, i) => ({
    ...slide,
    quote: testimonials.slides[i]?.quote ?? slide.quote,
    designation: testimonials.slides[i]?.designation ?? slide.designation,
  }));

  return (
    <section
      id="testimonials"
      className="success-stories-section scroll-mt-[var(--nav-height)] px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-12"
      aria-labelledby="testimonials-heading"
    >
      <div className="success-stories-inner">
        <ScrollReveal y={24}>
          <header className="success-stories-header">
            <span className="success-stories-eyebrow">
              <Sparkles className="h-3 w-3" strokeWidth={2} aria-hidden />
              {testimonials.badge}
            </span>
            <h2 id="testimonials-heading" className="success-stories-title">
              {testimonials.title}
            </h2>
            <p className="success-stories-lead">{testimonials.subtitle}</p>
          </header>
        </ScrollReveal>

        <ScrollReveal y={28}>
          <AnimatedTestimonials testimonials={slides} autoplay />
        </ScrollReveal>

        <ScrollReveal y={16} className="success-stories-footer">
          <Link href="/testimonials" className="success-stories-view-all">
            {testimonials.viewAllStories}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
