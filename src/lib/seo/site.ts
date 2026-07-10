import { contactPage } from "@/content/contact";
import { doctor } from "@/content/doctor";
import { images } from "@/content/images";

const DEFAULT_SITE_URL = contactPage.contactInfo.websiteHref;

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    return configured.replace(/\/$/, "");
  }
  return DEFAULT_SITE_URL;
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}

export const siteConfig = {
  name: doctor.hospital,
  shortName: "Dr. Sulochana's Hospital",
  description:
    "Expert fertility, IVF, pregnancy care, and gynecology at Dr. Sulochana's Hospital, Madinaguda, Hyderabad.",
  defaultOgImage: images.pregnantCouple,
  locale: "en_IN",
  phone: contactPage.contactInfo.phone,
  phoneHref: contactPage.contactInfo.phoneHref,
  email: contactPage.contactInfo.email,
  address: doctor.address.full,
} as const;
