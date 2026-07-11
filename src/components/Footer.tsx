"use client";

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { doctor } from "@/content/doctor";
import { useLocalizedFooter } from "@/i18n/useLocalizedFooter";
import { trackPhoneClick } from "@/lib/analytics";

function SocialIcon({ label }: { label: string }) {
  const common = "h-[18px] w-[18px]";
  switch (label) {
    case "Instagram":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case "Facebook":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13v-3c0-.6.4-1 1-1z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6 9H2v13h4V9zm2-6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM22 22h-4v-6.5c0-1.5-.5-2.5-2-2.5-1.1 0-1.7.7-2 1.7-.1.3-.1.7-.1 1.1V22h-4V9h4v2.2c.6-1 1.7-2.4 4-2.4 2.9 0 5 1.9 5 6V22z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C17.8 5 12 5 12 5s-5.8 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C6.2 19 12 19 12 19s5.8 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      );
    default:
      return null;
  }
}

function NavGroup({
  title,
  links,
}: {
  title: string;
  links: readonly { name: string; href: string }[];
}) {
  return (
    <div>
      <p className="premium-footer-nav-title">{title}</p>
      <ul className="premium-footer-nav-list">
        {links.map(({ name, href }) => (
          <li key={name}>
            {href.startsWith("http") ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-footer-link"
              >
                {name}
              </a>
            ) : (
              <Link href={href} className="premium-footer-link">
                {name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const {
    brandName,
    contact,
    nav,
    social,
    contactTitle,
    copyrightSuffix,
    groupTitles,
  } = useLocalizedFooter();

  return (
    <footer className="premium-footer site-footer">
      <div className="premium-footer-mesh" aria-hidden />
      <div className="premium-footer-watermark" aria-hidden>
        <span className="premium-footer-watermark-text">{brandName}</span>
      </div>

      {/* Upper — nav + contact */}
      <div className="premium-footer-upper relative z-10">
        <div className="mx-auto max-w-container px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="premium-footer-grid">
            <div className="premium-footer-nav-grid">
              <NavGroup title={groupTitles.company} links={nav.company} />
              <NavGroup title={groupTitles.resources} links={nav.resources} />
              <NavGroup title={groupTitles.services} links={nav.services} />
              <NavGroup title={groupTitles.legal} links={nav.legal} />
            </div>

            <div className="premium-footer-contact">
              <p className="premium-footer-nav-title">{contactTitle}</p>
              <ul className="premium-footer-contact-list">
                <li>
                  <Phone className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
                  <a
                    href={contact.phoneHref}
                    className="premium-footer-link"
                    onClick={() => trackPhoneClick({ ctaLocation: "footer" })}
                  >
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a href={contact.emailHref} className="premium-footer-link">
                    {contact.email}
                  </a>
                </li>
                <li className="premium-footer-contact-emergency">{contact.emergency}</li>
                <li className="flex gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-80" aria-hidden />
                  <span>{doctor.address.footer}</span>
                </li>
                {contact.hours.map((h) => (
                  <li key={h} className="premium-footer-hours">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Lower ~30% — copyright + social */}
      <div className="premium-footer-lower relative z-10">
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-5 px-4 py-6 sm:flex-row sm:px-6 md:px-10 lg:px-12">
          <p className="premium-footer-copy text-center sm:text-left">
            Copyright © 2010–2026 {brandName}. {copyrightSuffix}
          </p>
          <div className="flex items-center gap-2.5">
            {social.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="premium-footer-social"
              >
                <SocialIcon label={label} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
