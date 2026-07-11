"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useMessages } from "@/i18n/LanguageProvider";
import { buildContactUrl, trackBookAppointmentClick } from "@/lib/analytics";

export default function HonestPricing() {
  const { honestPricing } = useMessages();
  const bookHref = buildContactUrl("homepage_pricing");

  return (
    <section
      id="pricing"
      className="honest-pricing-section scroll-mt-[var(--nav-height)] px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-12"
      aria-labelledby="honest-pricing-heading"
    >
      <div className="honest-pricing-inner mx-auto max-w-container">
        <ScrollReveal y={24}>
          <header className="honest-pricing-header">
            <p className="honest-pricing-eyebrow">{honestPricing.eyebrow}</p>
            <h2 id="honest-pricing-heading" className="honest-pricing-title">
              {honestPricing.title}
            </h2>
            <p className="honest-pricing-lead">{honestPricing.subtitle}</p>
          </header>
        </ScrollReveal>

        <ScrollReveal
          y={28}
          duration={0.85}
          staggerSelector="[data-pricing-card]"
          stagger={0.1}
          className="mt-8 sm:mt-10"
        >
          <div className="honest-pricing-grid">
            {honestPricing.plans.map((plan) => {
              const isFeatured = plan.featured === true;
              const priceText = honestPricing.priceLabel.replace("{price}", plan.price);

              return (
                <article
                  key={plan.name}
                  data-pricing-card
                  className={`honest-pricing-card${isFeatured ? " honest-pricing-card--featured" : ""}`}
                >
                  <div className="honest-pricing-card-head">
                    <h3 className="honest-pricing-card-title">
                      {plan.name}
                      {plan.badge ? (
                        <span className="honest-pricing-card-badge">({plan.badge})</span>
                      ) : null}
                    </h3>
                    <p className="honest-pricing-card-price">{priceText}</p>
                  </div>

                  <ul className="honest-pricing-features" role="list">
                    {plan.features.map((feature) => (
                      <li key={feature} role="listitem" className="honest-pricing-feature">
                        <Check className="honest-pricing-feature-icon" strokeWidth={2.5} aria-hidden />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={bookHref}
                    className={
                      isFeatured
                        ? "honest-pricing-cta honest-pricing-cta--primary"
                        : "honest-pricing-cta honest-pricing-cta--outline"
                    }
                    onClick={() =>
                      trackBookAppointmentClick({
                        ctaLocation: "homepage_pricing",
                        destination: bookHref,
                        sourcePage: "/",
                      })
                    }
                  >
                    {honestPricing.ctaLabel}
                  </Link>
                </article>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal y={16} className="mt-8 sm:mt-10">
          <p className="honest-pricing-footnote">{honestPricing.footnote}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
