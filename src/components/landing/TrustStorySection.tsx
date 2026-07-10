"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  Award,
  ArrowRight,
  Calendar,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import BrandLogo from "@/components/brand/BrandLogo";
import HeroCountUp from "@/components/hero/HeroCountUp";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { images } from "@/content/images";
import { trustStory as trustStoryBase } from "@/content/landing";
import { useMessages } from "@/i18n/LanguageProvider";

const trustCardIcons = {
  users: Users,
  star: Star,
  award: Award,
} as const;

function TrustStoryBackground() {
  return (
    <div className="trust-story-bg" aria-hidden>
      <div className="trust-story-mesh trust-story-mesh-1" />
      <div className="trust-story-mesh trust-story-mesh-2" />
      <div className="trust-story-mesh trust-story-mesh-3" />
    </div>
  );
}

export default function TrustStorySection() {
  const { trustStory: t, common } = useMessages();
  const metricLabels = [
    common.yearsExperience,
    common.familiesServed,
    common.patientSatisfaction,
    common.coreSpecialties,
  ];

  const { mission, trustCards, pillars, about, expertise, metrics, partners } = useMemo(
    () => ({
      ...trustStoryBase,
      mission: {
        ...trustStoryBase.mission,
        badge: t.missionBadge,
        title: t.missionTitle,
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
      about: {
        ...trustStoryBase.about,
        badge: t.aboutBadge,
        title: t.aboutTitle,
        body: t.aboutBody,
        experienceLabel: common.yearsExperience,
      },
      expertise: trustStoryBase.expertise.map((item, i) => ({
        ...item,
        title: t.expertise[i]?.title ?? item.title,
        desc: t.expertise[i]?.desc ?? item.desc,
      })),
      metrics: trustStoryBase.metrics.map((metric, i) => ({
        ...metric,
        label: metricLabels[i] ?? metric.label,
      })),
      partners: {
        ...trustStoryBase.partners,
        title: t.partnersTitle,
      },
    }),
    [t, common, metricLabels],
  );

  return (
    <div className="trust-story" aria-label="About us and trust">
      {/* Figma: About — Meet Dr. Sulochana Mortha */}
      <section
        id="about"
        className="trust-mission relative scroll-mt-[var(--nav-height)] px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-12"
      >
        <TrustStoryBackground />
        <div className="relative z-10 mx-auto max-w-container">
          <div className="trust-mission-panel">
            <ScrollReveal
              y={32}
              duration={0.85}
              staggerSelector="[data-trust-card]"
              stagger={0.08}
            >
              <div className="trust-mission-grid">
                <div className="trust-mission-copy">
                  <span className="trust-mission-eyebrow">
                    <Sparkles className="h-3 w-3 opacity-70" strokeWidth={2} aria-hidden />
                    {mission.badge}
                  </span>
                  <h2 className="trust-mission-title">{mission.title}</h2>
                  <p className="trust-mission-lead">{mission.subtitle}</p>
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
                          <Icon className="h-4 w-4" strokeWidth={2} />
                        </span>
                        <p className="trust-stat-card-value">{card.value}</p>
                        <p className="trust-stat-card-label">{card.label}</p>
                        {card.sub ? (
                          <p className="trust-stat-card-sub">{card.sub}</p>
                        ) : null}
                      </article>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal
              staggerSelector="[data-pillar-card]"
              stagger={0.07}
              y={20}
              duration={0.8}
              className="mt-6 sm:mt-8"
            >
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Figma: Doctor Philosophy */}
      <section
        id="philosophy"
        className="trust-philosophy-section relative scroll-mt-[var(--nav-height)] px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24 lg:px-12"
      >
        <div className="relative z-10 mx-auto max-w-container">
          <ScrollReveal y={32} duration={0.95}>
            <div className="trust-about-grid">
              <div className="trust-visual-wrap order-1 w-full min-w-0">
                <div className="trust-image-glow" aria-hidden />
                <div className="trust-image-frame trust-image-frame--philosophy">
                  <OptimizedImage
                    src={images.trustCouple}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 92vw, 50vw"
                    className="object-contain object-center"
                    wrapperClassName="!absolute !inset-0 !bg-transparent"
                  />
                </div>
                <div
                  className="trust-experience-badge"
                  data-trust-card
                  role="img"
                  aria-label={`${about.experienceValue} ${about.experienceLabel}`}
                >
                  <span className="trust-experience-value">{about.experienceValue}</span>
                  <span className="trust-experience-label">{about.experienceLabel}</span>
                </div>
              </div>

              <div className="trust-about-copy order-2 w-full min-w-0">
                <span className="trust-story-badge trust-philosophy-badge">{about.badge}</span>
                <h2 className="trust-story-heading trust-philosophy-heading">{about.title}</h2>
                <p className="trust-story-body trust-philosophy-body">{about.body}</p>

                <ScrollReveal
                  staggerSelector="[data-expertise-card]"
                  stagger={0.08}
                  y={20}
                  duration={0.8}
                >
                  <div className="trust-expertise-grid">
                    {expertise.map(({ title, desc, icon: Icon }) => (
                      <article
                        key={title}
                        data-expertise-card
                        className="trust-expertise-card group"
                      >
                        <span className="trust-expertise-icon">
                          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                        </span>
                        <div>
                          <h3 className="trust-expertise-title">{title}</h3>
                          <p className="trust-expertise-desc">{desc}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Figma: Performance metrics strip */}
      <section
        className="trust-story-metrics relative px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-12"
        aria-label="Performance metrics"
      >
        <div className="relative z-10 mx-auto max-w-container">
          <div className="trust-metrics-panel">
            <ScrollReveal
              staggerSelector="[data-metric]"
              stagger={0.08}
              y={28}
              duration={0.85}
            >
              <div className="trust-metrics-grid">
                {metrics.map((metric) => (
                  <div key={metric.label} data-metric className="trust-metric-cell">
                    <p className="trust-metric-value">
                      {metric.numeric ? (
                        <HeroCountUp value={metric.value} suffix={metric.suffix} />
                      ) : (
                        <>
                          {metric.value}
                          {metric.suffix}
                        </>
                      )}
                    </p>
                    <p className="trust-metric-label">{metric.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Figma: Trusted partners — #5B2D8E → #46216F → #2A1045 */}
      <section
        className="trust-story-partners relative"
        aria-label="Trusted partners"
      >
        <div className="trust-partners-inner relative z-10 mx-auto max-w-container px-4 sm:px-6 lg:px-12">
          <ScrollReveal y={24} duration={0.85}>
            <div className="trust-partners-top">
              <div className="trust-partners-brand">
                <BrandLogo
                  variant="onDark"
                  className="trust-partners-logo"
                />
              </div>
              <h3 className="trust-partners-heading">
                {partners.title}
              </h3>
            </div>
          </ScrollReveal>
          <ScrollReveal
            staggerSelector="[data-partner]"
            stagger={0.06}
            y={16}
            duration={0.75}
          >
            <div className="trust-partners-row">
              {partners.items.map((name) => (
                <span key={name} data-partner className="trust-partner-logo">
                  {name}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
