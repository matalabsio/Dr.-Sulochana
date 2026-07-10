"use client";

import Link from "next/link";
import { ArrowRight, Check, Stethoscope } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { landingSolutions, servicesSection } from "@/content/landing";
import { useMessages } from "@/i18n/LanguageProvider";

export default function SpecializedSolutions() {
  const { services, common } = useMessages();
  const { viewAllHref } = servicesSection;

  return (
    <section
      className="care-flow-section care-flow-section--services px-4 pb-14 sm:px-6 sm:pb-20 md:pb-24 lg:px-12"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-container">
        <div className="care-flow-panel care-flow-panel--services">
          <ScrollReveal y={24} duration={0.8}>
            <header className="care-flow-header care-flow-header--split">
              <div className="care-flow-header-copy">
                <span className="care-flow-eyebrow">
                  <Stethoscope className="h-3 w-3 opacity-60" strokeWidth={2} aria-hidden />
                  {services.badge}
                </span>
                <h2 id="services-heading" className="care-flow-title">
                  {services.title}
                </h2>
                <p className="care-flow-lead care-flow-lead--left">{services.subtitle}</p>
              </div>
              <Link href={viewAllHref} className="care-flow-link-btn">
                {services.viewAllLabel}
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
              </Link>
            </header>
          </ScrollReveal>

          <ScrollReveal
            staggerSelector="[data-service-card]"
            stagger={0.09}
            y={28}
            duration={0.8}
            className="mt-8 sm:mt-10"
          >
            <ul className="services-card-grid" role="list">
              {landingSolutions.map(({ href, image }, i) => {
                const card = services.cards[i];
                if (!card) return null;
                return (
                <li key={card.label} role="listitem" className="min-h-0">
                  <Link href={href} data-service-card className="service-card-modern group">
                    <div className="service-card-modern-media">
                      <OptimizedImage
                        src={image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                      <span className="service-card-modern-label">{card.label}</span>
                    </div>
                    <div className="service-card-modern-body">
                      <h3 className="service-card-modern-title">{card.headline}</h3>
                      <p className="service-card-modern-desc">{card.desc}</p>
                      <span className="service-card-modern-cta">
                        {common.learnMoreLink}
                        <ArrowRight
                          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </span>
                    </div>
                  </Link>
                </li>
                );
              })}
            </ul>
          </ScrollReveal>

          <ScrollReveal
            staggerSelector="[data-trust-badge]"
            stagger={0.05}
            y={16}
            duration={0.7}
            className="mt-8 sm:mt-10"
          >
            <ul className="services-trust-grid" role="list" aria-label="Care highlights">
              {services.trustBadges.map((item) => (
                <li key={item} role="listitem">
                  <span data-trust-badge className="services-trust-chip">
                    <Check className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2.5} aria-hidden />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
