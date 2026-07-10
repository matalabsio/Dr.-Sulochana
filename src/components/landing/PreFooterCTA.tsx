"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { preFooterCta } from "@/content/landing";
import { useMessages } from "@/i18n/LanguageProvider";
import {
  buildContactUrl,
  trackBookAppointmentClick,
  trackPhoneClick,
} from "@/lib/analytics";

export default function PreFooterCTA() {
  const { preFooter } = useMessages();
  const { secondaryHref } = preFooterCta;
  const bookHref = buildContactUrl("homepage-pre-footer");

  return (
    <section
      className="conversion-journey-cta-section px-4 py-10 sm:px-6 sm:py-12 lg:px-12"
      aria-labelledby="journey-cta-heading"
    >
      <ScrollReveal y={24}>
        <div className="conversion-journey-cta mx-auto">
          <div className="conversion-journey-cta-content">
            <p className="conversion-journey-cta-eyebrow">{preFooter.eyebrow}</p>
            <h2 id="journey-cta-heading" className="conversion-journey-cta-title">
              {preFooter.title}
            </h2>
            <p className="conversion-journey-cta-lead">{preFooter.subtitle}</p>
            <div className="conversion-journey-cta-actions">
              <Link
                href={bookHref}
                className="conversion-journey-btn-primary cursor-pointer"
                onClick={() =>
                  trackBookAppointmentClick({
                    ctaLocation: "pre_footer_cta",
                    destination: bookHref,
                    sourcePage: "/",
                  })
                }
              >
                <Calendar className="h-4 w-4 shrink-0" strokeWidth={1.33} aria-hidden />
                {preFooter.primaryCta}
              </Link>
              <a
                href={secondaryHref}
                className="conversion-journey-btn-secondary cursor-pointer"
                onClick={() =>
                  trackPhoneClick({
                    ctaLocation: "pre_footer_cta",
                    sourcePage: "/",
                  })
                }
              >
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.33} aria-hidden />
                {preFooter.secondaryCta}
                <ArrowRight className="h-4 w-4 shrink-0 opacity-80" strokeWidth={1.33} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
