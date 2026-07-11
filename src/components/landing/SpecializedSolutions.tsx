"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { landingSolutions, servicesSection } from "@/content/landing";
import { useMessages } from "@/i18n/LanguageProvider";

export default function SpecializedSolutions() {
  const { services, common } = useMessages();
  const { viewAllHref } = servicesSection;

  return (
    <section
      className="services-section px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-12"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-container">
        <ScrollReveal y={24} duration={0.8}>
          <header className="services-header">
            <span className="services-eyebrow">{services.badge}</span>
            <h2 id="services-heading" className="services-title">
              {services.title}
            </h2>
            <p className="services-lead">{services.subtitle}</p>
          </header>
        </ScrollReveal>

        <ScrollReveal y={24} duration={0.85} className="mt-8 sm:mt-10">
          <div className="services-lavender-panel">
            <div className="services-panel-top">
              <Link href={viewAllHref} className="services-view-all">
                {services.viewAllLabel}
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
              </Link>
            </div>

            <ul className="services-card-grid" role="list">
              {landingSolutions.map(({ href, icon }, i) => {
                const card = services.cards[i];
                if (!card) return null;
                return (
                  <li key={card.headline} role="listitem" className="min-h-0">
                    <Link href={href} data-service-card className="service-card-figma group">
                      <div className="service-card-figma-icon-wrap">
                        <Image
                          src={icon}
                          alt=""
                          width={52}
                          height={52}
                          className="service-card-figma-icon"
                          aria-hidden
                        />
                      </div>
                      <div className="service-card-figma-body">
                        <h3 className="service-card-figma-title">{card.headline}</h3>
                        <p className="service-card-figma-desc">{card.desc}</p>
                        <span className="service-card-figma-cta">
                          {common.learnMoreLink}
                          <ArrowRight
                            className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                            aria-hidden
                          />
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
