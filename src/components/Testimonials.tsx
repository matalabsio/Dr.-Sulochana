"use client";

import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { testimonialsSection as testimonialsBase } from "@/content/landing";
import { useMessages } from "@/i18n/LanguageProvider";

/** Landing home — Patient Success Stories (3-card grid) */
export default function Testimonials() {
  const { testimonials } = useMessages();
  const cards = testimonialsBase.cards.map((card, i) => ({
    ...card,
    name: testimonials.cards[i]?.name ?? card.name,
    location: testimonials.cards[i]?.location ?? card.location,
    treatment: testimonials.cards[i]?.treatment ?? card.treatment,
    quote: testimonials.cards[i]?.quote ?? card.quote,
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
            <span className="success-stories-eyebrow">{testimonials.badge}</span>
            <h2 id="testimonials-heading" className="success-stories-title">
              {testimonials.title}
            </h2>
            <p className="success-stories-lead">{testimonials.subtitle}</p>
          </header>
        </ScrollReveal>

        <ScrollReveal
          y={28}
          duration={0.85}
          staggerSelector="[data-success-story-card]"
          stagger={0.1}
        >
          <div className="success-stories-cards">
            {cards.map((card) => (
              <article
                key={card.name}
                data-success-story-card
                className="success-stories-card"
              >
                <Quote className="success-stories-card-icon" strokeWidth={1.75} aria-hidden />
                <blockquote className="success-stories-card-quote">
                  <p>{card.quote}</p>
                </blockquote>
                <footer className="success-stories-card-footer">
                  <p className="success-stories-card-name">{card.name}</p>
                  <p className="success-stories-card-meta">
                    <span>{card.location}</span>
                    <span className="success-stories-card-meta-sep" aria-hidden>
                      ·
                    </span>
                    <span>{card.treatment}</span>
                  </p>
                </footer>
              </article>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal y={16} className="success-stories-footer">
          <Link href={testimonialsBase.viewAllHref} className="success-stories-view-all">
            {testimonials.viewAllStories}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
