"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Phone } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FaqAccordion from "@/components/landing/FaqAccordion";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { locationPage } from "@/content/locationPage";
import { getAllTreatments } from "@/content/treatments";
import {
  buildContactUrl,
  trackBookAppointmentClick,
  trackPhoneClick,
} from "@/lib/analytics";

export default function LocationPageContent() {
  const treatments = getAllTreatments();
  const {
    hero,
    about,
    services,
    directions,
    map,
    photos,
    faq,
    cta,
  } = locationPage;

  return (
    <>
      <section className="contact-page-hero">
        <ScrollReveal y={24} className="contact-page-hero-inner">
          <span className="contact-page-eyebrow">{hero.eyebrow}</span>
          <h1 className="contact-page-hero-title">{hero.title}</h1>
          <p className="contact-page-hero-lead">{hero.subtitle}</p>
        </ScrollReveal>
      </section>

      <section className="location-page-section">
        <div className="location-page-inner">
          <ScrollReveal y={24}>
            <span className="contact-page-eyebrow">{about.eyebrow}</span>
            <h2 className="location-page-title">{about.title}</h2>
            <p className="location-page-lead">{about.body}</p>
            <Link href={about.ctaHref} className="location-page-link">
              {about.ctaLabel}
              <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="location-page-section location-page-section--muted">
        <div className="location-page-inner">
          <ScrollReveal y={24}>
            <span className="contact-page-eyebrow">{services.eyebrow}</span>
            <h2 className="location-page-title">{services.title}</h2>
            <p className="location-page-lead">{services.subtitle}</p>
          </ScrollReveal>
          <ScrollReveal y={20} className="location-page-services-grid">
            {treatments.map((treatment) => (
              <Link
                key={treatment.slug}
                href={`/treatments/${treatment.slug}`}
                className="location-page-service-card"
              >
                <p className="location-page-service-category">{treatment.category}</p>
                <h3 className="location-page-service-title">{treatment.title}</h3>
                <p className="location-page-service-desc">{treatment.description}</p>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="location-page-section">
        <div className="location-page-inner">
          <ScrollReveal y={24}>
            <span className="contact-page-eyebrow">{directions.eyebrow}</span>
            <h2 className="location-page-title">{directions.title}</h2>
            <p className="location-page-lead">{directions.subtitle}</p>
          </ScrollReveal>
          <ScrollReveal y={20} className="location-page-landmarks-grid">
            <div className="location-page-landmarks-card">
              <h3 className="location-page-landmarks-heading">Landmarks</h3>
              <ul className="location-page-landmarks-list">
                {directions.landmarks.map((item) => (
                  <li key={item}>
                    <MapPin className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="location-page-landmarks-card">
              <h3 className="location-page-landmarks-heading">Nearby Areas We Serve</h3>
              <ul className="location-page-landmarks-list location-page-landmarks-list--inline">
                {directions.nearbyAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="contact-page-map-section">
        <ScrollReveal y={24}>
          <div className="contact-page-map-layout">
            <div className="contact-page-map-frame">
              <iframe
                src={map.embedUrl}
                title={map.title}
                className="contact-page-map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="contact-page-map-card">
              <h3 className="contact-page-map-card-title">{map.hospital}</h3>
              <p className="contact-page-map-card-body">{map.address}</p>
              <a
                href={directions.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-page-btn-outline inline-flex cursor-pointer items-center gap-2"
              >
                <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                {directions.directionsLabel}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="location-page-section location-page-section--muted">
        <div className="location-page-inner">
          <ScrollReveal y={24}>
            <span className="contact-page-eyebrow">{photos.eyebrow}</span>
            <h2 className="location-page-title">{photos.title}</h2>
          </ScrollReveal>
          <ScrollReveal y={20} className="location-page-photos-grid">
            {photos.items.map((photo) => (
              <div key={photo.src} className="location-page-photo-card">
                <OptimizedImage
                  src={photo.src}
                  alt={photo.alt}
                  width={640}
                  height={480}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                  wrapperClassName="location-page-photo-wrap"
                />
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="location-page-section">
        <div className="location-page-inner">
          <ScrollReveal y={24}>
            <span className="contact-page-eyebrow">{faq.eyebrow}</span>
            <h2 className="location-page-title">{faq.title}</h2>
          </ScrollReveal>
          <ScrollReveal y={16} className="mt-6">
            <FaqAccordion items={[...faq.items]} />
          </ScrollReveal>
        </div>
      </section>

      <section className="location-page-cta-section">
        <ScrollReveal y={24}>
          <div className="location-page-cta">
            <h2 className="location-page-cta-title">{cta.title}</h2>
            <p className="location-page-cta-lead">{cta.subtitle}</p>
            <div className="location-page-cta-actions">
              <Link
                href={buildContactUrl("location_page")}
                className="contact-page-btn-primary cursor-pointer"
                onClick={() =>
                  trackBookAppointmentClick({
                    ctaLocation: "location_page_cta",
                    destination: buildContactUrl("location_page"),
                    sourcePage: "/madinaguda-hyderabad",
                  })
                }
              >
                <Calendar className="h-4 w-4 shrink-0" aria-hidden />
                {cta.primaryCta}
              </Link>
              <a
                href={cta.secondaryHref}
                className="contact-page-btn-outline cursor-pointer"
                onClick={() =>
                  trackPhoneClick({
                    ctaLocation: "location_page_cta",
                    sourcePage: "/madinaguda-hyderabad",
                  })
                }
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden />
                {cta.secondaryCta}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
