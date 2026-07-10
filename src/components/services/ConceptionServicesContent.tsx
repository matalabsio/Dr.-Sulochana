"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Stethoscope,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { fertilityKnowledgeArticles, fertilityPageLinks, fertilityTreatmentCards } from "@/content/fertilityPage";
import { images } from "@/content/images";
import { useMessages } from "@/i18n/LanguageProvider";
import { HERO_SPRING, heroSpringItem, heroSpringStagger } from "@/lib/motion";

function ServicesHeroBackground() {
  return (
    <>
      <div className="premium-hero-blob premium-hero-blob-primary services-hero-blob" aria-hidden />
      <div className="premium-hero-blob premium-hero-blob-champagne services-hero-blob services-hero-blob--right" aria-hidden />
      <div className="premium-hero-grain services-hero-grain" aria-hidden />
    </>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5 text-amber-500" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} aria-hidden />
      ))}
    </div>
  );
}

export default function ConceptionServicesContent() {
  const { fertilityPage: t, common } = useMessages();
  const { hero, coreTreatments, framework, diagnosticCta, locations, listSection, midCta, knowledge, reviews, trustBadges } = t;
  const links = fertilityPageLinks;

  const reduced = useReducedMotion() ?? false;
  const motionProps = reduced
    ? { initial: false, animate: "show" }
    : { initial: "hidden", animate: "show" };

  const treatmentCards = [
    {
      ...fertilityTreatmentCards[0],
      branchLabel: null as string | null,
      title: coreTreatments.evaluationTitle,
      desc: coreTreatments.evaluationDesc,
      featured: true,
    },
    {
      ...fertilityTreatmentCards[1],
      branchLabel: coreTreatments.lowTechLabel,
      title: coreTreatments.iuiTitle,
      desc: coreTreatments.iuiDesc,
      featured: false,
    },
    {
      ...fertilityTreatmentCards[2],
      branchLabel: coreTreatments.highTechLabel,
      title: coreTreatments.ivfTitle,
      desc: `${coreTreatments.ivfDesc} ${coreTreatments.icsiNote}`,
      featured: false,
    },
    {
      ...fertilityTreatmentCards[3],
      branchLabel: coreTreatments.preservationLabel,
      title: coreTreatments.eggFreezingTitle,
      desc: coreTreatments.eggFreezingDesc,
      featured: false,
    },
  ];

  const anchorItems = [
    { href: "#core-treatments", label: coreTreatments.evaluationTitle.split(" ")[0] },
    { href: "#framework", label: framework.title },
    { href: "#locations", label: locations.eyebrow },
  ];

  return (
    <>
      <section
        id="conception"
        className="services-hero premium-hero premium-hero--minimal scroll-mt-[var(--nav-height)] px-4 pb-10 pt-[calc(var(--nav-height)+1.5rem)] sm:px-6 sm:pb-14 sm:pt-[calc(var(--nav-height)+2rem)] md:px-10 lg:px-12"
        aria-labelledby="services-hero-heading"
      >
        <ServicesHeroBackground />
        <div className="relative z-10 mx-auto max-w-container">
          <div className="services-hero-grid">
            <motion.div
              variants={reduced ? undefined : heroSpringStagger}
              {...motionProps}
              className="services-hero-copy"
            >
              <motion.span
                variants={reduced ? undefined : heroSpringItem}
                className="care-flow-eyebrow inline-flex"
              >
                <Stethoscope className="h-3 w-3 opacity-60" strokeWidth={2} aria-hidden />
                {hero.eyebrow}
              </motion.span>
              <motion.h1
                id="services-hero-heading"
                variants={reduced ? undefined : heroSpringItem}
                className="services-hero-title"
              >
                {hero.title}{" "}
                <span className="hero-headline-accent">{hero.titleAccent}</span>
              </motion.h1>
              <motion.p variants={reduced ? undefined : heroSpringItem} className="services-hero-lead">
                {hero.subtitle}
              </motion.p>
              <motion.p variants={reduced ? undefined : heroSpringItem} className="services-hero-intro">
                {hero.intro}
              </motion.p>

              <motion.div
                variants={reduced ? undefined : heroSpringItem}
                className="services-hero-actions"
              >
                <Link
                  href={links.primaryHref}
                  className="hero-btn-primary hero-btn-primary--minimal cursor-pointer gap-2"
                >
                  <Calendar className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                  {hero.primaryCta}
                </Link>
                <a href={links.phoneHref} className="hero-btn-outline cursor-pointer gap-2">
                  <Phone className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                  {hero.callCta}
                </a>
              </motion.div>

              <motion.nav
                variants={reduced ? undefined : heroSpringItem}
                className="services-anchor-nav"
                aria-label="Fertility page sections"
              >
                {anchorItems.map((item) => (
                  <a key={item.href} href={item.href} className="services-anchor-pill">
                    {item.label}
                  </a>
                ))}
              </motion.nav>
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduced ? { duration: 0 } : { ...HERO_SPRING, delay: 0.12 }}
              className="services-hero-art-col"
            >
              <div className="services-hero-art-wrap">
                <div className="services-hero-art-glow" aria-hidden />
                <div className="services-hero-art-frame">
                  <OptimizedImage
                    src={images.servicesHeroIllustration}
                    alt="Holistic fertility and conception care illustration"
                    width={520}
                    height={520}
                    priority
                    transparent
                    sizes="(max-width: 1024px) 88vw, 480px"
                    className="services-hero-art-img h-auto w-full"
                    wrapperClassName="relative w-full overflow-visible bg-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core treatments */}
      <section
        id="core-treatments"
        className="care-flow-section scroll-mt-[var(--nav-height)] px-4 pb-14 sm:px-6 sm:pb-20 md:pb-24 lg:px-12"
        aria-labelledby="core-treatments-heading"
      >
        <div className="mx-auto max-w-container">
          <div className="care-flow-panel care-flow-panel--services">
            <ScrollReveal y={24}>
              <header className="care-flow-header mb-8 sm:mb-10">
                <span className="care-flow-eyebrow">
                  <Sparkles className="h-3 w-3 opacity-60" strokeWidth={2} aria-hidden />
                  {coreTreatments.eyebrow}
                </span>
                <h2 id="core-treatments-heading" className="care-flow-title">
                  {coreTreatments.title}
                </h2>
              </header>
            </ScrollReveal>

            <ScrollReveal staggerSelector="[data-treatment-card]" stagger={0.08} y={24}>
              <div className="fertility-treatment-grid">
                {treatmentCards.map((card) => (
                  <article
                    key={card.id}
                    id={card.id}
                    data-treatment-card
                    className={`fertility-treatment-card ${card.featured ? "fertility-treatment-card--featured" : ""}`}
                  >
                    {card.branchLabel ? (
                      <span className="fertility-treatment-branch">{card.branchLabel}</span>
                    ) : null}
                    <div className="fertility-treatment-card-media">
                      <OptimizedImage
                        src={card.image}
                        alt={card.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-contain object-center"
                      />
                    </div>
                    <div className="fertility-treatment-card-body">
                      <h3 className="fertility-treatment-card-title">{card.title}</h3>
                      <p className="fertility-treatment-card-desc">{card.desc}</p>
                      <Link href={links.primaryHref} className="services-detail-cta group">
                        {listSection.bookConsultation}
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Treatment framework */}
      <section
        id="framework"
        className="fertility-framework-section scroll-mt-[var(--nav-height)] px-4 py-14 sm:px-6 sm:py-20 lg:px-12"
        aria-labelledby="framework-heading"
      >
        <div className="mx-auto max-w-container">
          <ScrollReveal y={24}>
            <header className="care-flow-header mb-10 text-center sm:mb-12">
              <span className="care-flow-eyebrow mx-auto">
                <Sparkles className="h-3 w-3 opacity-60" strokeWidth={2} aria-hidden />
                {framework.eyebrow}
              </span>
              <h2 id="framework-heading" className="care-flow-title">
                {framework.title}
              </h2>
            </header>
          </ScrollReveal>

          <ScrollReveal staggerSelector="[data-framework-step]" stagger={0.1} y={28}>
            <ol className="fertility-framework-steps">
              {framework.steps.map((step, i) => (
                <li key={step.title} data-framework-step className="fertility-framework-step">
                  <span className="fertility-framework-step-num" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="fertility-framework-step-title">{step.title}</h3>
                    <p className="fertility-framework-step-summary">{step.summary}</p>
                    <p className="fertility-framework-step-desc">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </ScrollReveal>

          <ScrollReveal y={20} className="mt-8">
            <div className="fertility-framework-notes">
              <p>{framework.transferNote}</p>
              <p>{framework.freezingNote}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal y={20} className="mt-10">
            <div className="fertility-diagnostic-cta">
              <p>{diagnosticCta.text}</p>
              <Link href={`${links.primaryHref}?topic=diagnostics`} className="fertility-diagnostic-link">
                {diagnosticCta.linkText}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Clinic locations */}
      <section
        id="locations"
        className="care-flow-section scroll-mt-[var(--nav-height)] px-4 pb-14 sm:px-6 sm:pb-20 lg:px-12"
        aria-labelledby="locations-heading"
      >
        <div className="mx-auto max-w-container">
          <ScrollReveal y={24}>
            <header className="care-flow-header mb-8 sm:mb-10">
              <span className="care-flow-eyebrow">
                <MapPin className="h-3 w-3 opacity-60" strokeWidth={2} aria-hidden />
                {locations.eyebrow}
              </span>
              <h2 id="locations-heading" className="care-flow-title">
                {locations.title}
              </h2>
              <p className="care-flow-lead care-flow-lead--left max-w-3xl">{locations.intro}</p>
            </header>
          </ScrollReveal>

          <ScrollReveal staggerSelector="[data-clinic-card]" stagger={0.1} y={28}>
            <div className="fertility-clinic-grid">
              <article data-clinic-card className="fertility-clinic-card">
                <h3 className="fertility-clinic-name">{locations.primaryClinic.name}</h3>
                <p className="fertility-clinic-tagline">{locations.primaryClinic.tagline}</p>
                <ul className="fertility-clinic-details" role="list">
                  <li>
                    <MapPin className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
                    {locations.primaryClinic.address}
                  </li>
                  <li>{locations.primaryClinic.fee}</li>
                  <li>{locations.primaryClinic.hours}</li>
                </ul>
                <div className="fertility-clinic-actions">
                  <a
                    href={links.madinaguda.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fertility-clinic-btn fertility-clinic-btn--outline"
                  >
                    {common.getDirections}
                  </a>
                  <a
                    href={links.madinaguda.lybrateHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fertility-clinic-btn fertility-clinic-btn--primary"
                  >
                    {locations.primaryClinic.bookingLabel}
                  </a>
                </div>
              </article>

              <article data-clinic-card className="fertility-clinic-card">
                <h3 className="fertility-clinic-name">{locations.secondaryClinic.name}</h3>
                <p className="fertility-clinic-tagline">{locations.secondaryClinic.tagline}</p>
                <ul className="fertility-clinic-details" role="list">
                  <li>
                    <Phone className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
                    <span>
                      <a href={links.jubileeHills.phoneHref} className="fertility-clinic-phone">
                        {links.jubileeHills.phoneDisplay}
                      </a>
                      {" · "}
                      <a href={links.jubileeHills.phoneAltHref} className="fertility-clinic-phone">
                        {links.jubileeHills.phoneAltDisplay}
                      </a>
                    </span>
                  </li>
                  <li>
                    <MapPin className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
                    {locations.secondaryClinic.address}
                  </li>
                  <li>{locations.secondaryClinic.fee}</li>
                  <li>{locations.secondaryClinic.hours}</li>
                </ul>
                <div className="fertility-clinic-actions">
                  <a href={links.jubileeHills.phoneHref} className="fertility-clinic-btn fertility-clinic-btn--outline">
                    <Phone className="h-4 w-4" aria-hidden />
                    {hero.callCta}
                  </a>
                  <a
                    href={links.jubileeHills.medibuddyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fertility-clinic-btn fertility-clinic-btn--primary"
                  >
                    {locations.secondaryClinic.bookingLabel}
                  </a>
                </div>
              </article>
            </div>
          </ScrollReveal>

          <ScrollReveal y={16} className="mt-8">
            <p className="fertility-locations-footer">{locations.footerQuestion}</p>
          </ScrollReveal>

          <ScrollReveal
            staggerSelector="[data-trust-badge]"
            stagger={0.05}
            y={16}
            duration={0.7}
            className="mt-10 sm:mt-12"
          >
            <ul className="services-trust-grid" role="list" aria-label="Care highlights">
              {trustBadges.map((item) => (
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
      </section>

      <section
        className="conversion-journey-cta-section px-4 py-10 sm:px-6 sm:py-12 lg:px-12"
        aria-labelledby="services-mid-cta-heading"
      >
        <ScrollReveal y={24}>
          <div className="conversion-journey-cta mx-auto max-w-container">
            <div className="conversion-journey-cta-mesh" aria-hidden />
            <div className="conversion-journey-cta-content">
              <p className="conversion-journey-cta-eyebrow">{midCta.eyebrow}</p>
              <h2 id="services-mid-cta-heading" className="conversion-journey-cta-title">
                {midCta.title}
              </h2>
              <p className="conversion-journey-cta-lead">{midCta.subtitle}</p>
              <div className="conversion-journey-cta-actions">
                <Link href={links.primaryHref} className="conversion-journey-btn-primary">
                  <Calendar className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                  {midCta.primaryCta}
                </Link>
                <a href={links.phoneHref} className="conversion-journey-btn-secondary">
                  <Phone className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                  {midCta.callCta}
                  <ArrowRight className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section
        id="knowledge"
        className="conversion-knowledge scroll-mt-[var(--nav-height)] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-12"
        aria-labelledby="services-knowledge-heading"
      >
        <div className="mx-auto max-w-container">
          <ScrollReveal y={24}>
            <header className="conversion-header mb-10 flex flex-col gap-4 sm:mb-12 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="conversion-eyebrow">
                  <BookOpen className="h-3 w-3 opacity-70" strokeWidth={2} aria-hidden />
                  {knowledge.eyebrow}
                </span>
                <h2 id="services-knowledge-heading" className="conversion-title">
                  {knowledge.title}
                </h2>
                <p className="conversion-lead max-w-2xl">{knowledge.subtitle}</p>
              </div>
              <Link href="/knowledge" className="conversion-link-all shrink-0">
                {knowledge.viewAll}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </header>
          </ScrollReveal>

          <ScrollReveal staggerSelector="[data-knowledge-card]" stagger={0.1} y={32}>
            <div className="services-knowledge-grid">
              {fertilityKnowledgeArticles.map((meta, i) => {
                const article = knowledge.articles[i];
                if (!article) return null;
                return (
                  <article key={article.title} data-knowledge-card className="knowledge-card group">
                    <Link href={meta.href} className="flex h-full flex-col">
                      <div className="knowledge-card-media">
                        <OptimizedImage
                          src={meta.image}
                          alt={article.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="knowledge-card-gradient" aria-hidden />
                        <div className="knowledge-card-badges">
                          <span className="knowledge-pill">{meta.time}</span>
                        </div>
                      </div>
                      <div className="knowledge-card-body">
                        <span className="knowledge-category">{article.category}</span>
                        <h3 className="knowledge-card-title">{article.title}</h3>
                        <p className="knowledge-card-desc">{article.desc}</p>
                        <span className="knowledge-cta">
                          {knowledge.readArticle}
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="testimonials"
        className="conversion-testimonials scroll-mt-[var(--nav-height)] px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-12"
        aria-labelledby="services-reviews-heading"
      >
        <div className="mx-auto max-w-container">
          <ScrollReveal y={24}>
            <header className="conversion-header mb-10 text-center sm:mb-12">
              <span className="conversion-eyebrow mx-auto">
                <Star className="h-3 w-3 opacity-70" strokeWidth={2} aria-hidden />
                {reviews.eyebrow}
              </span>
              <h2 id="services-reviews-heading" className="conversion-title">
                {reviews.title}
              </h2>
              <p className="conversion-lead mx-auto max-w-xl">{reviews.subtitle}</p>
            </header>
          </ScrollReveal>

          <ScrollReveal staggerSelector="[data-review-card]" stagger={0.1} y={32}>
            <div className="services-reviews-grid">
              {reviews.items.map((review) => (
                <article key={review.name} data-review-card className="services-review-card">
                  <div className="services-review-header">
                    <div className="services-review-avatar" aria-hidden>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="services-review-name">{review.name}</p>
                      <p className="services-review-time">{review.time}</p>
                    </div>
                  </div>
                  <StarRating />
                  <p className="services-review-text">&ldquo;{review.text}&rdquo;</p>
                </article>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal y={16} className="mt-8 text-center sm:mt-10">
            <Link href="/testimonials" className="conversion-link-all inline-flex items-center gap-1.5">
              {reviews.viewAll}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
