"use client";

import { useMemo } from "react";
import { footerContent } from "@/content/landing";
import { useMessages } from "@/i18n/LanguageProvider";

export function useLocalizedFooter() {
  const { footer: t, nav, common } = useMessages();

  return useMemo(() => {
    const base = footerContent;
    return {
      ...base,
      mission: t.mission,
      bookCta: common.bookAppointment,
      contactTitle: t.contact,
      copyrightSuffix: t.copyright,
      contact: {
        ...base.contact,
        emergency: t.emergency,
        hours: t.hours,
      },
      trustBadges: base.trustBadges.map((badge, i) => ({
        ...badge,
        label: t.trustBadges[i] ?? badge.label,
      })),
      nav: {
        company: base.nav.company.map((link) => {
          if (link.name === "About") return { ...link, name: t.about };
          if (link.name === "Success Stories") return { ...link, name: t.successStories };
          if (link.name === "Careers") return { ...link, name: t.careers };
          if (link.name === "Contact") return { ...link, name: t.contact };
          return link;
        }),
        resources: base.nav.resources.map((link) => {
          if (link.name === "Blogs") return { ...link, name: t.blogs };
          if (link.name === "Expert Videos") return { ...link, name: t.expertVideos };
          if (link.name === "Knowledge Center") return { ...link, name: nav.knowledgeCenter };
          if (link.name === "Practo Reviews") return { ...link, name: t.practoReviews };
          if (link.name === "Skedoc Profile") return { ...link, name: t.skedocProfile };
          if (link.name === "FAQs") return { ...link, name: t.faqs };
          return link;
        }),
        services: base.nav.services.map((link) => {
          if (link.name === "Fertility Treatment") return { ...link, name: t.fertilityConception };
          if (link.name === "Pregnancy Care") return { ...link, name: t.pregnancyCare };
          if (link.name === "PCOS Management") return { ...link, name: t.pcosManagement };
          if (link.name === "Gynecology Consultation") return { ...link, name: t.gynecologyConsultation };
          return link;
        }),
        legal: base.nav.legal.map((link) => {
          if (link.name === "Privacy Policy") return { ...link, name: t.privacyPolicy };
          if (link.name === "Terms") return { ...link, name: t.terms };
          if (link.name === "Accessibility") return { ...link, name: t.accessibility };
          return link;
        }),
      },
      groupTitles: {
        company: t.company,
        resources: t.resources,
        services: t.services,
        legal: t.legal,
      },
    };
  }, [t, common]);
}
