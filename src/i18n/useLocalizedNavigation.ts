"use client";

import { useMemo } from "react";
import { mainNavigation, type NavItem } from "@/content/navigation";
import { useMessages } from "@/i18n/LanguageProvider";

export function useLocalizedNavigation(): NavItem[] {
  const { nav } = useMessages();

  return useMemo(
    () =>
      mainNavigation.map((item) => {
        if (item.name === "Home") return { ...item, name: nav.home };
        if (item.name === "Success Stories") return { ...item, name: nav.successStories };
        if (item.name === "Contact") return { ...item, name: nav.contact };
        if (item.name === "Treatments") return { ...item, name: nav.treatments };
        if (item.name === "About") return { ...item, name: nav.about };
        if (item.name === "Resources" && item.children) {
          return {
            ...item,
            name: nav.resources,
            children: item.children.map((child) => {
              if (child.name === "Knowledge Center")
                return { ...child, name: nav.knowledgeCenter };
              return child;
            }),
          };
        }
        return item;
      }),
    [nav],
  );
}
