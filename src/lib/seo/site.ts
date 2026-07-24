import { contactPage } from "@/content/contact";
import { doctor } from "@/content/doctor";
import { images } from "@/content/images";
import { brandNames, pageSeo } from "@/lib/seo/keywords";

export const SITE_URL = "https://www.drsulochana.online";

const DEPRECATED_SITE_URLS = new Set([
  "https://www.drsulochanahospital.com",
  "https://drsulochanahospital.com",
  "http://www.drsulochanahospital.com",
  "http://drsulochanahospital.com",
]);

function normalizeSiteUrl(url: string): string {
  return url.replace(/\/$/, "");
}

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) {
    return SITE_URL;
  }

  const normalized = normalizeSiteUrl(configured);
  if (DEPRECATED_SITE_URLS.has(normalized)) {
    return SITE_URL;
  }

  return normalized;
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}

export const siteConfig = {
  name: doctor.hospital,
  shortName: brandNames.primary,
  alternateNames: brandNames.alternate,
  description: pageSeo.home.description,
  defaultOgImage: images.pregnantCouple,
  /** Square brand mark for Google / Knowledge Graph logo */
  searchLogo: images.brand.searchLogo,
  locale: "en_IN",
  phone: contactPage.contactInfo.phone,
  phoneHref: contactPage.contactInfo.phoneHref,
  email: contactPage.contactInfo.email,
  address: doctor.address.full,
  areaServed: ["Hyderabad", "Madinaguda", "Hafeezpet", "Ramakrishna Nagar"],
} as const;
