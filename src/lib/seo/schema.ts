import { doctor } from "@/content/doctor";
import { absoluteUrl, siteConfig } from "@/lib/seo/site";
import type { FaqItem } from "@/content/types";

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

export function buildArticleSchema(input: {
  title: string;
  description: string;
  path: string;
  image: string;
  publishedAt: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    image: [input.image],
    datePublished: input.publishedAt,
    author: {
      "@type": "Person",
      name: input.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.defaultOgImage,
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
    medicalSpecialty: [...doctor.specialties],
    knowsAbout: [...doctor.specialties],
    worksFor: {
      "@type": "MedicalClinic",
      name: siteConfig.name,
    },
    alumniOf: doctor.qualifications.map((q) => ({
      "@type": "EducationalOrganization",
      name: q.split(" — ")[1] ?? q,
    })),
  };
}

export function buildMedicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: siteConfig.name,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address.full,
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500049",
      addressCountry: "IN",
    },
    medicalSpecialty: [...doctor.specialties],
  };
}
