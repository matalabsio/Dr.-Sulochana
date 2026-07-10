"use client";

import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { contactPage } from "@/content/contact";
import {
  buildContactUrl,
  trackBookAppointmentClick,
  trackPhoneClick,
  trackWhatsAppClick,
} from "@/lib/analytics";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "919849861089";

type ContentCTAProps = {
  sourcePage: string;
  title?: string;
  subtitle?: string;
  variant?: "default" | "article" | "sidebar";
};

export default function ContentCTA({
  sourcePage,
  title = "Ready to Book Your Consultation?",
  subtitle = "Speak with our care team at Dr. Sulochana's Hospital, Madinaguda, Hyderabad.",
  variant = "default",
}: ContentCTAProps) {
  const contactUrl = buildContactUrl(sourcePage);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello, I would like to book an appointment at Dr. Sulochana's Hospital.",
  )}`;

  const trackBook = () =>
    trackBookAppointmentClick({
      ctaLocation: variant === "sidebar" ? "article_sidebar_cta" : "content_cta",
      destination: contactUrl,
      sourcePage,
    });

  const trackWa = () =>
    trackWhatsAppClick({
      ctaLocation: variant === "sidebar" ? "article_sidebar_cta" : "content_cta",
      sourcePage,
    });

  const trackCall = () =>
    trackPhoneClick({
      ctaLocation: variant === "sidebar" ? "article_sidebar_cta" : "content_cta",
      sourcePage,
    });

  if (variant === "sidebar") {
    return (
      <div className="article-sidebar-card article-sidebar-card--cta">
        <h2 className="article-sidebar-cta-title">{title}</h2>
        <p className="article-sidebar-cta-desc">{subtitle}</p>
        <div className="article-sidebar-cta-actions">
          <Link
            href={contactUrl}
            className="article-sidebar-cta-btn article-sidebar-cta-btn--primary"
            onClick={trackBook}
          >
            <Calendar className="h-4 w-4 shrink-0" aria-hidden />
            Book appointment
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="article-sidebar-cta-btn article-sidebar-cta-btn--whatsapp"
            onClick={trackWa}
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            WhatsApp
          </a>
        </div>
      </div>
    );
  }

  if (variant === "article") {
    return (
      <section className="article-cta-banner" aria-labelledby="content-cta-heading">
        <div className="article-cta-banner-inner">
          <div className="article-cta-banner-copy">
            <h2 id="content-cta-heading" className="article-cta-banner-title">
              {title}
            </h2>
            <p className="article-cta-banner-subtitle">{subtitle}</p>
          </div>
          <div className="article-cta-banner-actions">
            <Link
              href={contactUrl}
              className="article-cta-banner-btn article-cta-banner-btn--primary"
              onClick={trackBook}
            >
              <Calendar className="h-4 w-4 shrink-0" aria-hidden />
              Book Appointment
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="article-cta-banner-btn article-cta-banner-btn--whatsapp"
              onClick={trackWa}
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              WhatsApp
            </a>
            <a
              href={contactPage.contactInfo.phoneHref}
              className="article-cta-banner-btn article-cta-banner-btn--secondary"
              onClick={trackCall}
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              Call Now
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="content-cta" aria-labelledby="content-cta-heading">
      <h2 id="content-cta-heading" className="content-cta-title">
        {title}
      </h2>
      <p className="content-cta-subtitle">{subtitle}</p>
      <div className="content-cta-actions">
        <Link
          href={contactUrl}
          className="content-cta-btn content-cta-btn--primary"
          onClick={trackBook}
        >
          <Calendar className="h-4 w-4 shrink-0" aria-hidden />
          Book Appointment
        </Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="content-cta-btn content-cta-btn--whatsapp"
          onClick={trackWa}
        >
          <WhatsAppIcon className="h-4 w-4 shrink-0" />
          WhatsApp
        </a>
        <a
          href={contactPage.contactInfo.phoneHref}
          className="content-cta-btn content-cta-btn--secondary"
          onClick={trackCall}
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden />
          Call Now
        </a>
      </div>
    </section>
  );
}
