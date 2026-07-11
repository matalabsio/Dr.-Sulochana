"use client";

import Link from "next/link";
import { ArrowRight, Award, Calendar, Heart, Phone, Star } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import BrandLogo from "@/components/brand/BrandLogo";
import { preFooterCta } from "@/content/landing";
import { useMessages } from "@/i18n/LanguageProvider";
import {
  buildContactUrl,
  trackBookAppointmentClick,
  trackPhoneClick,
} from "@/lib/analytics";

function TrustBadgeIcon({ icon }: { icon: "star" | "award" | "families" }) {
  const cls = "h-4 w-4 shrink-0 text-white";
  if (icon === "star") return <Star className={cls} fill="currentColor" strokeWidth={0} aria-hidden />;
  if (icon === "award") return <Award className={cls} strokeWidth={1.75} aria-hidden />;
  return <Heart className={cls} fill="currentColor" strokeWidth={0} aria-hidden />;
}

export default function PreFooterCTA() {
  const { preFooter } = useMessages();
  const { secondaryHref } = preFooterCta;
  const bookHref = buildContactUrl("homepage-pre-footer");

  return (
    <section
      className="conversion-journey-cta-section"
      aria-labelledby="journey-cta-heading"
    >
      <ScrollReveal y={24}>
        <div className="conversion-journey-cta mx-auto">
          <div className="conversion-journey-cta-layout">
            <div className="conversion-journey-cta-copy">
              <p className="conversion-journey-cta-eyebrow">{preFooter.eyebrow}</p>
              <h2 id="journey-cta-heading" className="conversion-journey-cta-title">
                {preFooter.title}
              </h2>
              <p className="conversion-journey-cta-lead">{preFooter.subtitle}</p>

              <div className="conversion-journey-cta-profile">
                <p className="conversion-journey-cta-doctor">{preFooter.doctorName}</p>
                <p className="conversion-journey-cta-bio">{preFooter.bio}</p>
              </div>
            </div>

            <div className="conversion-journey-cta-brand">
              <BrandLogo variant="onDark" className="brand-logo-img--pre-footer" priority={false} />
            </div>

            <ul className="conversion-journey-cta-badges">
              {preFooter.trustBadges.map((badge) => (
                <li key={badge.label} className="conversion-journey-cta-badge">
                  <TrustBadgeIcon icon={badge.icon} />
                  <span>{badge.label}</span>
                </li>
              ))}
            </ul>

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
