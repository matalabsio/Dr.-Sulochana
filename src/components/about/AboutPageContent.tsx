"use client";

import Link from "next/link";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { images } from "@/content/images";
import {
  ArrowUpRight,
  Award,
  ClipboardList,
  Clock,
  ExternalLink,
  GraduationCap,
  Globe,
  IndianRupee,
  MapPin,
  Phone,
  Play,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { aboutClinicLocations } from "@/content/aboutPage";
import { doctor } from "@/content/doctor";
import { medicalPortalsSection, publicMediaSection, type MediaLinkItem } from "@/content/media";
import { useMessages } from "@/i18n/LanguageProvider";

type CredentialKey =
  | "specializations"
  | "education"
  | "experience"
  | "commonReasons"
  | "registrations";

const credentialIcons: Record<CredentialKey, typeof Stethoscope> = {
  specializations: Stethoscope,
  education: GraduationCap,
  experience: Sparkles,
  commonReasons: Award,
  registrations: ClipboardList,
};

function MediaLinkIcon({ kind }: { kind: MediaLinkItem["kind"] }) {
  const cls = "h-5 w-5 shrink-0";
  if (kind === "youtube") return <Play className={cls} strokeWidth={1.75} aria-hidden />;
  if (kind === "instagram") return <Globe className={cls} strokeWidth={1.75} aria-hidden />;
  return <ExternalLink className={cls} strokeWidth={1.75} aria-hidden />;
}

function MediaLinkCard({ title, description, href, source, kind }: MediaLinkItem) {
  const isExternal = href.startsWith("http");
  const content = (
    <>
      <div className="about-media-card-head">
        <div className="about-media-card-icon">
          <MediaLinkIcon kind={kind} />
        </div>
        <ArrowUpRight className="about-media-card-arrow h-4 w-4" aria-hidden />
      </div>
      <h3 className="about-media-card-title">{title}</h3>
      <p className="about-media-card-desc">{description}</p>
      <p className="about-media-card-source">{source}</p>
    </>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="about-media-card">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="about-media-card">
      {content}
    </Link>
  );
}

function MediaLinksSection({
  eyebrow,
  title,
  subtitle,
  items,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: readonly MediaLinkItem[];
}) {
  return (
    <section className="about-section about-section--tint">
      <ScrollReveal y={28} duration={0.75}>
        <div className="about-section-inner">
          <div className="about-section-head">
            <span className="about-eyebrow">{eyebrow}</span>
            <h2 className="about-section-title">{title}</h2>
            <p className="about-section-desc">{subtitle}</p>
          </div>
          <div className="about-media-grid">
            {items.map((item) => (
              <MediaLinkCard key={`${item.kind}-${item.href}`} {...item} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function CredentialCard({ credentialKey, title, items }: { credentialKey: CredentialKey; title: string; items: readonly string[] }) {
  const Icon = credentialIcons[credentialKey];

  return (
    <article className="about-credential-card">
      <div className="about-credential-card-head">
        <div className="about-credential-card-icon">
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </div>
        <h3 className="about-credential-card-title">{title}</h3>
      </div>
      <ul className="about-credential-card-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

const credentialOrder: CredentialKey[] = [
  "specializations",
  "education",
  "experience",
  "commonReasons",
  "registrations",
];

function ClinicLocationsSection({
  eyebrow,
  title,
  subtitle,
  feeLabel,
  timingLabel,
  phoneLabel,
  bookOnline,
  directions,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  feeLabel: string;
  timingLabel: string;
  phoneLabel: string;
  bookOnline: string;
  directions: string;
}) {
  return (
    <section className="about-section about-section--white">
      <ScrollReveal y={28} duration={0.75}>
        <div className="about-section-inner">
          <div className="about-section-head">
            <span className="about-eyebrow">{eyebrow}</span>
            <h2 className="about-section-title">{title}</h2>
            <p className="about-section-desc">{subtitle}</p>
          </div>
          <div className="about-locations-grid">
            {aboutClinicLocations.map((location) => (
              <article key={location.id} className="about-clinic-location-card">
                <h3 className="about-clinic-location-title">{location.name}</h3>
                <p className="about-clinic-location-address">
                  <MapPin className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  <span>{location.address}</span>
                </p>
                <dl className="about-clinic-location-details">
                  <div>
                    <IndianRupee className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                    <div>
                      <dt>{feeLabel}</dt>
                      <dd>{location.fee}</dd>
                    </div>
                  </div>
                  <div>
                    <Clock className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                    <div>
                      <dt>{timingLabel}</dt>
                      <dd>{location.timing}</dd>
                    </div>
                  </div>
                  {location.phone && location.phoneHref ? (
                    <div>
                      <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                      <div>
                        <dt>{phoneLabel}</dt>
                        <dd>
                          <a href={location.phoneHref}>{location.phone}</a>
                        </dd>
                      </div>
                    </div>
                  ) : null}
                </dl>
                <div className="about-clinic-location-actions">
                  {location.mapsHref ? (
                    <a
                      href={location.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-btn-outline"
                    >
                      {directions}
                    </a>
                  ) : null}
                  {location.bookingHref ? (
                    <a
                      href={location.bookingHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-btn-primary"
                    >
                      {bookOnline}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default function AboutPageContent() {
  const { aboutPage: t } = useMessages();

  const publicMedia = {
    eyebrow: t.publicMedia.eyebrow,
    title: t.publicMedia.title,
    subtitle: t.publicMedia.subtitle,
    items: publicMediaSection.items.map((item, i) => {
      const copy = t.publicMedia.items[i];
      return {
        ...item,
        title: copy?.title ?? item.title,
        description: copy?.description ?? item.description,
        source: copy?.source ?? item.source,
      };
    }),
  };

  const medicalPortals = {
    eyebrow: t.medicalPortals.eyebrow,
    title: t.medicalPortals.title,
    subtitle: t.medicalPortals.subtitle,
    items: medicalPortalsSection.items.map((item, i) => {
      const copy = t.medicalPortals.items[i];
      return {
        ...item,
        title: copy?.title ?? item.title,
        description: copy?.description ?? item.description,
        source: copy?.source ?? item.source,
      };
    }),
  };

  return (
    <article className="about-page">
      <section className="about-hero">
        <ScrollReveal y={28} duration={0.75}>
          <div className="about-hero-inner">
            <h1 className="about-hero-title">{t.heroTitle}</h1>
            <blockquote className="about-philosophy-quote">
              <p>&ldquo;{t.philosophy.quote}&rdquo;</p>
              <footer>{t.philosophy.attribution}</footer>
            </blockquote>
            <div className="about-hero-body">
              <p>{t.aboutLead}</p>
              <p>{t.aboutDetail}</p>
              <p className="about-hero-note">{t.appointmentNote}</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="about-section about-section--tint">
        <ScrollReveal y={28} duration={0.75}>
          <div className="about-section-inner">
            <div className="about-section-head">
              <span className="about-eyebrow">{t.milestones.eyebrow}</span>
              <h2 className="about-section-title">{t.milestones.title}</h2>
            </div>
            <ol className="about-milestones-list">
              {t.milestones.items.map((item, index) => (
                <li key={item.title} className="about-milestone-item">
                  <span className="about-milestone-index" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="about-milestone-title">{item.title}</h3>
                    <p className="about-milestone-desc">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>
      </section>

      <section className="about-section about-section--tint-strong">
        <ScrollReveal y={32} duration={0.8}>
          <div className="about-section-inner">
            <div className="about-credentials-panel">
              <div className="about-credentials-grid">
                {credentialOrder.map((key) => (
                  <CredentialCard
                    key={key}
                    credentialKey={key}
                    title={t.credentials[key]}
                    items={t.credentials.items[key]}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <ClinicLocationsSection {...t.clinicLocations} />

      <section className="about-section about-section--tint">
        <div className="about-section-inner about-clinic-split">
          <ScrollReveal y={32} duration={0.8}>
            <div className="about-clinic-copy">
              <h2 className="about-section-title">{t.clinic.sectionTitle}</h2>
              <p>{t.clinic.body}</p>
              <p>
                <span className="about-clinic-location-label">{t.clinic.locationLabel}</span>{" "}
                {doctor.address.full}
              </p>
              <p>{t.clinic.callToBook}</p>
              <div className="about-clinic-copy-actions">
                <Link href="/contact" className="about-btn-primary about-btn-primary--lg">
                  {t.clinic.bookAppointment}
                </Link>
                <a href="tel:+919849861089" aria-label={t.clinic.callAriaLabel} className="about-btn-icon">
                  <Phone className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal y={40} duration={0.85} delay={0.08}>
            <div className="about-clinic-visual">
              <OptimizedImage
                src={images.clinic}
                alt={t.clinic.imageAlt}
                fill
                sizes="(max-width: 1024px) 90vw, 399px"
                className="object-contain object-center"
                wrapperClassName="absolute inset-0 bg-transparent"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <MediaLinksSection {...publicMedia} />
      <MediaLinksSection {...medicalPortals} />
    </article>
  );
}
