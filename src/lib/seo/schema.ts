import { aboutProfessionalProfiles } from "@/content/aboutPage";
import { doctor } from "@/content/doctor";
import { images } from "@/content/images";
import { YOUTUBE_CHANNEL_SEARCH } from "@/content/videos";
import { absoluteUrl, siteConfig } from "@/lib/seo/site";
import type { FaqItem } from "@/content/types";

const CLINIC_GEO = {
  latitude: 17.4936856,
  longitude: 78.3375544,
};

const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "19:30",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Sunday",
    opens: "07:00",
    closes: "16:30",
  },
];

const ORGANIZATION_SAME_AS = [
  ...aboutProfessionalProfiles.map((p) => p.href),
  YOUTUBE_CHANNEL_SEARCH,
  "https://www.instagram.com/p/DBtNliZq3K0/",
];

export type BreadcrumbCrumb = {
  name: string;
  path: string;
};

export function compactSchema(
  items: Array<Record<string, unknown> | null | undefined>,
): Record<string, unknown>[] {
  return items.filter((item): item is Record<string, unknown> => Boolean(item));
}

export function buildFaqSchema(faqs: readonly FaqItem[]) {
  if (faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function buildBreadcrumbSchema(crumbs: readonly BreadcrumbCrumb[]) {
  if (crumbs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: absoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.searchLogo),
        width: 512,
        height: 512,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteUrl("/knowledge")}?q={search_term_string}`,
      },
      "query-input": {
        "@type": "PropertyValueSpecification",
        valueRequired: true,
        valueName: "search_term_string",
      },
    },
  };
}

export function buildArticleSchema(input: {
  title: string;
  description: string;
  path: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    image: [absoluteUrl(input.image)],
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    author: {
      "@type": "Person",
      name: input.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.searchLogo),
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: absoluteUrl(input.path),
  };
}

export function buildVideoSchema(input: {
  title: string;
  description: string;
  path: string;
  youtubeId: string;
  publishedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: input.title,
    description: input.description,
    embedUrl: `https://www.youtube.com/embed/${input.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${input.youtubeId}`,
    uploadDate: input.publishedAt,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: absoluteUrl(input.path),
  };
}

export function buildMedicalWebPageSchema(input: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    lastReviewed: new Date().toISOString().split("T")[0],
    reviewedBy: {
      "@type": "Physician",
      name: doctor.name,
    },
  };
}

export function buildPhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    alternateName: ["Dr Sulochana", "Dr M Sulochana Mortha", "Dr Sulochana Mortha"],
    url: absoluteUrl("/about"),
    image: absoluteUrl(siteConfig.searchLogo),
    telephone: siteConfig.phone,
    medicalSpecialty: [...doctor.specialties],
    knowsAbout: [...doctor.specialties],
    sameAs: ORGANIZATION_SAME_AS,
    worksFor: {
      "@type": "MedicalClinic",
      name: siteConfig.name,
      url: absoluteUrl("/"),
    },
    alumniOf: doctor.qualifications.map((q) => ({
      "@type": "EducationalOrganization",
      name: q.split(" — ")[1] ?? q,
    })),
  };
}

export function buildMedicalClinicSchema(options?: { pagePath?: string }) {
  const pagePath = options?.pagePath ?? "/";

  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    name: siteConfig.name,
    alternateName: [...siteConfig.alternateNames],
    description: siteConfig.description,
    url: absoluteUrl(pagePath),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: absoluteUrl(images.pregnantCouple),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.searchLogo),
      width: 512,
      height: 512,
    },
    sameAs: ORGANIZATION_SAME_AS,
    areaServed: siteConfig.areaServed.map((place) => ({
      "@type": "Place",
      name: place,
    })),
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC_GEO.latitude,
      longitude: CLINIC_GEO.longitude,
    },
    openingHoursSpecification: OPENING_HOURS,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address.full,
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500049",
      addressCountry: "IN",
    },
    medicalSpecialty: [...doctor.specialties],
    employee: {
      "@type": "Physician",
      name: doctor.name,
      url: absoluteUrl("/about"),
      medicalSpecialty: [...doctor.specialties],
    },
  };
}
