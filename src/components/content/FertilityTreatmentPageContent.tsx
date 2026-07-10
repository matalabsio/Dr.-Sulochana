"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  Heart,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import ContentCTA from "@/components/content/ContentCTA";
import ContentFaq from "@/components/content/ContentFaq";
import RelatedContent from "@/components/content/RelatedContent";
import FloatingIllustration from "@/components/landing/FloatingIllustration";
import { LoveFlowFloatingHearts } from "@/components/landing/LoveFlowDecor";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { doctor } from "@/content/doctor";
import { images } from "@/content/images";
import type { TreatmentContent } from "@/content/types";
import {
  buildContactUrl,
  trackBookAppointmentClick,
} from "@/lib/analytics";

const sectionIcons = [Users, Heart, Award, Calendar] as const;

type FertilityTreatmentPageContentProps = {
  treatment: TreatmentContent;
};

export default function FertilityTreatmentPageContent({
  treatment,
}: FertilityTreatmentPageContentProps) {
  const sourcePage = `/treatments/${treatment.slug}`;
  const bookHref = buildContactUrl(sourcePage);

  return (
    <article className="fertility-treatment-page">
      <section className="fertility-treatment-hero" aria-labelledby="fertility-treatment-heading">
        <LoveFlowFloatingHearts density="dense" className="fertility-treatment-hero-hearts" />

        <div className="relative z-10 mx-auto max-w-container px-4 sm:px-6 lg:px-12">
          <Link href="/services" className="fertility-treatment-back-link cursor-pointer">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to Services
          </Link>

          <div className="fertility-treatment-hero-grid">
            <div className="fertility-treatment-hero-copy">
              <span className="fertility-treatment-eyebrow">
                <Sparkles className="h-3 w-3 opacity-70" strokeWidth={2} aria-hidden />
                {treatment.category}
              </span>
              <h1 id="fertility-treatment-heading" className="fertility-treatment-title">
                {treatment.title}
              </h1>
              <p className="fertility-treatment-lead">{treatment.description}</p>

              <div className="fertility-treatment-trust-row">
                <span className="fertility-treatment-trust-pill">
                  <Stethoscope className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                  {doctor.yearsExperience} Years Experience
                </span>
                <span className="fertility-treatment-trust-pill">
                  <Heart className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                  Compassionate Care
                </span>
              </div>

              <div className="fertility-treatment-hero-actions">
                <Link
                  href={bookHref}
                  className="fertility-treatment-btn-primary cursor-pointer"
                  onClick={() =>
                    trackBookAppointmentClick({
                      ctaLocation: "fertility_treatment_hero",
                      destination: bookHref,
                      sourcePage,
                    })
                  }
                >
                  <Calendar className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                  Book Fertility Consultation
                </Link>
                <Link
                  href="/testimonials"
                  className="fertility-treatment-btn-outline cursor-pointer"
                >
                  Success Stories
                  <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                </Link>
              </div>
            </div>

            <div className="fertility-treatment-visual">
              <div className="fertility-treatment-visual-glow" aria-hidden />
              <div className="fertility-treatment-visual-frame">
                <OptimizedImage
                  src={treatment.heroImage}
                  alt={treatment.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 480px"
                  className="object-contain object-center p-4 sm:p-6"
                  wrapperClassName="!absolute !inset-0 !bg-transparent"
                />
              </div>
              <FloatingIllustration
                src={images.heroAccentMeditation}
                width={100}
                height={100}
                orb
                interactive={false}
                className="fertility-treatment-orb fertility-treatment-orb--accent"
                sizes="100px"
                delay={0.15}
              />
              <FloatingIllustration
                src={images.trustCouple}
                width={100}
                height={100}
                orb
                interactive={false}
                className="fertility-treatment-orb fertility-treatment-orb--primary"
                sizes="100px"
                delay={0.25}
              />
              <div
                className="fertility-treatment-experience-badge"
                role="img"
                aria-label={`${doctor.yearsExperience} years experience`}
              >
                <span className="fertility-treatment-experience-value">{doctor.yearsExperience}</span>
                <span className="fertility-treatment-experience-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fertility-treatment-sections" aria-label="Treatment overview">
        <LoveFlowFloatingHearts className="fertility-treatment-sections-hearts" />
        <div className="relative z-10 mx-auto max-w-container px-4 sm:px-6 lg:px-12">
          <div className="fertility-treatment-sections-grid">
            {treatment.sections.map((section, index) => {
              const Icon = sectionIcons[index] ?? Heart;
              return (
                <article key={section.title} className="fertility-treatment-section-card">
                  <span className="fertility-treatment-section-icon" aria-hidden>
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="fertility-treatment-section-body">
                    <h2 className="fertility-treatment-section-title">{section.title}</h2>
                    <p className="fertility-treatment-section-text">{section.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div className="fertility-treatment-lower mx-auto max-w-container px-4 sm:px-6 lg:px-12">
        <ContentFaq faqs={treatment.faqs} title="Fertility Treatment FAQs" />
        <RelatedContent
          relatedArticles={treatment.relatedArticles}
          relatedTreatments={treatment.relatedTreatments}
          relatedVideos={treatment.relatedVideos}
        />
        <ContentCTA
          sourcePage={sourcePage}
          title="Book Your Fertility Consultation Today"
          subtitle="Schedule a confidential appointment at Dr. Sulochana's Hospital, Madinaguda."
          variant="article"
        />
      </div>
    </article>
  );
}
