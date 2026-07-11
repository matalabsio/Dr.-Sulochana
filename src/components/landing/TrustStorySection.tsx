"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  Award,
  ArrowRight,
  Calendar,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { trustStory as trustStoryBase } from "@/content/landing";
import { useMessages } from "@/i18n/LanguageProvider";

const trustCardIcons = {
  users: Users,
  award: Award,
} as const;

export default function TrustStorySection() {
  const { trustStory: t, common } = useMessages();
  const metricLabels = [
    common.yearsExperience,
    common.familiesServed,
    common.patientSatisfaction,
  ];

  const { mission, trustCards, pillars } = useMemo(
    () => ({
      ...trustStoryBase,
      mission: {
        ...trustStoryBase.mission,
        badge: t.missionBadge,
        title: t.missionTitle,
        credentials: t.missionCredentials,
        subtitle: t.missionSubtitle,
        primaryCta: t.missionPrimaryCta,
        secondaryCta: t.missionSecondaryCta,
      },
      trustCards: trustStoryBase.trustCards.map((card, i) => ({
        ...card,
        label: metricLabels[i] ?? card.label,
      })),
      pillars: trustStoryBase.pillars.map((pillar, i) => ({
        ...pillar,
        title: t.pillars[i]?.title ?? pillar.title,
        desc: t.pillars[i]?.desc ?? pillar.desc,
      })),
    }),
    [t, metricLabels],
  );

  return (
    <div className="trust-story" aria-label="About us and trust">
      <section
        id="about"
        className="trust-mission trust-about-section relative scroll-mt-[var(--nav-height)] px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-12"
      >
        <div className="relative z-10 mx-auto max-w-container">
          <ScrollReveal y={24}>
            <header className="trust-about-header">
              <span className="trust-about-eyebrow">{mission.badge}</span>
              <h2 className="trust-about-title">{mission.title}</h2>
              <p className="trust-about-credentials">{mission.credentials}</p>
            </header>
          </ScrollReveal>

          <ScrollReveal y={28} duration={0.85} className="mt-8 sm:mt-10 lg:mt-12">
            <div className="trust-about-grid">
              <div className="trust-about-visual">
                <div
                  className="trust-about-photo-frame"
                  role="img"
                  aria-label="Portrait of Dr. Sulochana Mortha"
                />
              </div>

              <div className="trust-about-copy">
                <p className="trust-about-body">{mission.subtitle}</p>
                <div className="trust-mission-actions">
                  <Link href={mission.primaryHref} className="trust-btn-dark">
                    <Calendar className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                    {mission.primaryCta}
                  </Link>
                  <Link href={mission.secondaryHref} className="trust-btn-outline">
                    {mission.secondaryCta}
                    <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            y={20}
            duration={0.8}
            staggerSelector="[data-trust-card]"
            stagger={0.08}
            className="mt-8 sm:mt-10"
          >
            <div className="trust-mission-cards">
              {trustCards.map((card) => {
                const Icon = trustCardIcons[card.icon];
                return (
                  <article
                    key={card.label}
                    data-trust-card
                    className="trust-stat-card"
                  >
                    <span className="trust-stat-card-icon" aria-hidden>
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <div className="trust-stat-card-content">
                      <p className="trust-stat-card-value">{card.value}</p>
                      <p className="trust-stat-card-label">{card.label}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal
            staggerSelector="[data-pillar-card]"
            stagger={0.07}
            y={20}
            duration={0.8}
            className="mt-8 sm:mt-10"
          >
            <div className="trust-pillar-band">
              <div className="trust-pillar-row">
                {pillars.map(({ title, desc, icon: Icon }) => (
                  <article key={title} data-pillar-card className="trust-pillar-modern">
                    <span className="trust-pillar-modern-icon">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <h3 className="trust-pillar-modern-title">{title}</h3>
                      <p className="trust-pillar-modern-desc">{desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
