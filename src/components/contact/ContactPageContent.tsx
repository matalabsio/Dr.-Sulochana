"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FaqAccordion from "@/components/landing/FaqAccordion";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { contactPage as contactPageBase } from "@/content/contact";
import { doctor } from "@/content/doctor";
import { useMessages, useSiteLanguage } from "@/i18n/LanguageProvider";
import { trackAppointmentSubmitted, trackPhoneClick } from "@/lib/analytics";
import type { AppointmentPayload } from "@/lib/appointments/types";
import { getWhatsAppAppointmentUrl } from "@/lib/appointments/whatsapp";

type FormData = {
  name: string;
  phone: string;
  email: string;
  consultationType: string;
  preferredDate: string;
  message: string;
};

function emptyForm(consultationType: string): FormData {
  return {
    name: "",
    phone: "",
    email: "",
    consultationType,
    preferredDate: "",
    message: "",
  };
}

export default function ContactPageContent() {
  const searchParams = useSearchParams();
  const sourcePage = searchParams.get("source") ?? "/contact";
  const { contact: t, common } = useMessages();
  const { locale } = useSiteLanguage();

  const contactPage = useMemo(
    () => ({
      ...contactPageBase,
      hero: {
        ...contactPageBase.hero,
        eyebrow: t.heroEyebrow,
        title: t.heroTitle,
        subtitle: t.heroSubtitle,
      },
      form: {
        ...contactPageBase.form,
        title: t.formTitle,
        subtitle: t.formSubtitle,
        submitLabel: t.formSubmitLabel,
        whatsAppHint: t.formWhatsAppHint,
        nameLabel: t.formNameLabel,
        phoneLabel: t.formPhoneLabel,
        emailLabel: t.formEmailLabel,
        typeLabel: t.formTypeLabel,
        dateLabel: t.formDateLabel,
        messageLabel: t.formMessageLabel,
        namePlaceholder: t.formNamePlaceholder,
        phonePlaceholder: t.formPhonePlaceholder,
        emailPlaceholder: t.formEmailPlaceholder,
        messagePlaceholder: t.formMessagePlaceholder,
        successTitle: t.formSuccessTitle,
        successMessage: t.formSuccessMessage,
        successCta: common.submitAnotherRequest,
        consultationTypes: t.consultationTypes,
      },
      visit: {
        ...contactPageBase.visit,
        title: t.visitTitle,
        directionsLabel: t.directionsLabel,
        hoursTitle: t.hoursTitle,
        hours: t.hours,
      },
      contactInfo: {
        ...contactPageBase.contactInfo,
        title: t.contactInfoTitle,
      },
      trust: {
        ...contactPageBase.trust,
        title: t.trustTitle,
        items: t.trustItems,
      },
      emergency: {
        ...contactPageBase.emergency,
        title: t.emergencyTitle,
        body: t.emergencyBody,
      },
      faq: {
        ...contactPageBase.faq,
        eyebrow: t.faqEyebrow,
        title: t.faqTitle,
        items: t.faqs,
      },
      closingCta: {
        ...contactPageBase.closingCta,
        title: t.closingTitle,
        subtitle: t.closingSubtitle,
        primaryCta: common.bookAppointment,
        secondaryCta: common.callNow,
      },
    }),
    [t, common],
  );

  const [formData, setFormData] = useState<FormData>(() =>
    emptyForm(contactPage.form.consultationTypes[0]),
  );

  useEffect(() => {
    const defaultType = contactPage.form.consultationTypes[0];
    setFormData((prev) =>
      contactPage.form.consultationTypes.includes(prev.consultationType)
        ? prev
        : { ...prev, consultationType: defaultType },
    );
  }, [locale, contactPage.form.consultationTypes]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload: AppointmentPayload = {
      ...formData,
      locale,
      source: "contact-page",
      sourcePage,
    };

    try {
      await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Continue to WhatsApp even if sheet logging fails
    }

    trackAppointmentSubmitted({
      consultationType: payload.consultationType,
      locale: payload.locale,
      source: payload.source,
      sourcePage: payload.sourcePage,
    });

    window.open(getWhatsAppAppointmentUrl(payload), "_blank", "noopener,noreferrer");

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(emptyForm(contactPage.form.consultationTypes[0]));
  };

  const { hero, form, visit, contactInfo, trust, emergency, faq, closingCta } = contactPage;

  return (
    <>
      {/* Hero */}
      <section className="contact-page-hero">
        <ScrollReveal y={24} className="contact-page-hero-inner">
          <span className="contact-page-eyebrow">{hero.eyebrow}</span>
          <h1 className="contact-page-hero-title">{hero.title}</h1>
          <p className="contact-page-hero-lead">{hero.subtitle}</p>
        </ScrollReveal>
      </section>

      {/* Form + sidebar */}
      <section className="contact-page-main-section">
        <div className="contact-page-split">
          <ScrollReveal y={28} className="min-w-0">
            <div id="appointment-form" className="contact-page-form-panel scroll-mt-[calc(var(--nav-height)+1rem)]">
              <div className="contact-page-form-header">
                <span className="contact-page-form-eyebrow">
                  <Calendar className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                  {form.title}
                </span>
                <p className="contact-page-form-lead">{form.subtitle}</p>
                <p className="contact-page-form-whatsapp-hint">{form.whatsAppHint}</p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="contact-page-form-success"
                  >
                    <div className="contact-page-form-success-icon">
                      <CheckCircle2 className="h-10 w-10" strokeWidth={1.75} aria-hidden />
                    </div>
                    <h2 className="contact-page-form-success-title">{form.successTitle}</h2>
                    <p className="contact-page-form-success-message">{form.successMessage}</p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="contact-page-btn-outline cursor-pointer"
                    >
                      {form.successCta}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="contact-page-form"
                  >
                    <div className="contact-page-form-grid">
                      <div className="contact-page-field">
                        <label htmlFor="contact-name">
                          {form.nameLabel} <span className="text-[#5B2D8E]">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={form.namePlaceholder}
                          className="contact-page-input"
                        />
                      </div>
                      <div className="contact-page-field">
                        <label htmlFor="contact-phone">
                          {form.phoneLabel} <span className="text-[#5B2D8E]">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={form.phonePlaceholder}
                          className="contact-page-input"
                        />
                      </div>
                      <div className="contact-page-field contact-page-field--full">
                        <label htmlFor="contact-email">
                          {form.emailLabel} <span className="text-[#5B2D8E]">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={form.emailPlaceholder}
                          className="contact-page-input"
                        />
                      </div>
                      <div className="contact-page-field">
                        <label htmlFor="contact-type">{form.typeLabel}</label>
                        <select
                          id="contact-type"
                          name="consultationType"
                          value={formData.consultationType}
                          onChange={handleChange}
                          className="contact-page-input contact-page-select"
                        >
                          {form.consultationTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="contact-page-field">
                        <label htmlFor="contact-date">{form.dateLabel}</label>
                        <input
                          id="contact-date"
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="contact-page-input"
                        />
                      </div>
                      <div className="contact-page-field contact-page-field--full">
                        <label htmlFor="contact-message">{form.messageLabel}</label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={form.messagePlaceholder}
                          className="contact-page-input contact-page-textarea"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="contact-page-btn-whatsapp cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span className="inline-flex h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      ) : (
                        <>
                          <WhatsAppIcon className="h-5 w-5 shrink-0" />
                          {form.submitLabel}
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>

          <ScrollReveal y={28} staggerSelector="[data-contact-card]" stagger={0.08} className="contact-page-sidebar">
            <article data-contact-card className="contact-page-info-card">
              <div className="contact-page-info-card-icon">
                <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </div>
              <h2 className="contact-page-info-card-title">{visit.title}</h2>
              <p className="contact-page-info-card-heading">{visit.hospital}</p>
              <p className="contact-page-info-card-body">{visit.address}</p>
              <a
                href={visit.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-page-inline-link cursor-pointer"
              >
                {visit.directionsLabel}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </article>

            <article data-contact-card className="contact-page-info-card">
              <div className="contact-page-info-card-icon">
                <Clock className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </div>
              <h2 className="contact-page-info-card-title">{visit.hoursTitle}</h2>
              <ul className="contact-page-list">
                {visit.hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>

            <article data-contact-card className="contact-page-info-card">
              <div className="contact-page-info-card-icon">
                <Phone className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </div>
              <h2 className="contact-page-info-card-title">{contactInfo.title}</h2>
              <ul className="contact-page-detail-list">
                <li>
                  <Phone className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
                  <a
                    href={contactInfo.phoneHref}
                    className="contact-page-detail-link cursor-pointer"
                    onClick={() => trackPhoneClick({ ctaLocation: "contact_info", sourcePage })}
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li>
                  <Mail className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
                  <a href={contactInfo.emailHref} className="contact-page-detail-link cursor-pointer">
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <Globe className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
                  <a
                    href={contactInfo.websiteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-page-detail-link cursor-pointer"
                  >
                    {contactInfo.website}
                  </a>
                </li>
              </ul>
            </article>

            <article data-contact-card className="contact-page-info-card contact-page-info-card--trust">
              <div className="contact-page-info-card-icon">
                <Sparkles className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </div>
              <h2 className="contact-page-info-card-title">{trust.title}</h2>
              <ul className="contact-page-trust-list">
                {trust.items.map((item) => (
                  <li key={item}>
                    <Check className="h-4 w-4 shrink-0 text-[#6E3F73]" strokeWidth={2.5} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </ScrollReveal>
        </div>
      </section>

      {/* Emergency */}
      <section className="contact-page-emergency-wrap">
        <ScrollReveal y={20}>
          <div className="contact-page-emergency-banner">
            <div className="contact-page-emergency-copy">
              <span className="contact-page-emergency-icon" aria-hidden>
                <AlertCircle className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <div>
                <h2 className="contact-page-emergency-title">{emergency.title}</h2>
                <p className="contact-page-emergency-body">{emergency.body}</p>
              </div>
            </div>
            <a
              href={emergency.phoneHref}
              className="contact-page-btn-primary shrink-0 cursor-pointer"
              onClick={() => trackPhoneClick({ ctaLocation: "contact_emergency", sourcePage })}
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              Call {emergency.phoneLabel}
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Map */}
      <section className="contact-page-map-section">
        <ScrollReveal y={24}>
          <div className="contact-page-map-layout">
            <div className="contact-page-map-frame">
              <iframe
                src={visit.mapEmbedUrl}
                title={`${visit.hospital} location on Google Maps`}
                className="contact-page-map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="contact-page-map-card">
              <h3 className="contact-page-map-card-title">{visit.hospital}</h3>
              <p className="contact-page-map-card-body">{doctor.address.full}</p>
              <a
                href={visit.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-page-inline-link cursor-pointer"
              >
                {visit.directionsLabel}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="contact-page-faq scroll-mt-[var(--nav-height)]">
        <ScrollReveal y={24} className="contact-page-faq-header">
          <span className="contact-page-faq-eyebrow">{faq.eyebrow}</span>
          <h2 className="contact-page-faq-title">{faq.title}</h2>
        </ScrollReveal>
        <ScrollReveal y={20} className="contact-page-faq-accordion">
          <FaqAccordion items={faq.items} defaultOpen={0} />
        </ScrollReveal>
      </section>

      {/* Closing CTA */}
      <section className="contact-page-closing">
        <ScrollReveal y={20}>
          <div className="contact-page-closing-panel">
            <div className="contact-page-closing-mesh" aria-hidden />
            <div className="contact-page-closing-content">
              <h2 className="contact-page-closing-title">{closingCta.title}</h2>
              <p className="contact-page-closing-lead">{closingCta.subtitle}</p>
              <div className="contact-page-closing-actions">
                <Link href={closingCta.primaryHref} className="contact-page-btn-primary cursor-pointer">
                  <Calendar className="h-4 w-4 shrink-0" aria-hidden />
                  {closingCta.primaryCta}
                </Link>
                <a
                  href={closingCta.secondaryHref}
                  className="contact-page-btn-outline cursor-pointer"
                  onClick={() => trackPhoneClick({ ctaLocation: "contact_closing", sourcePage })}
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  {closingCta.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
