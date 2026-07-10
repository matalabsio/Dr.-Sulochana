import type { SiteLanguageCode } from "@/content/languages";
import type { SiteMessages } from "@/i18n/types";
import { en } from "./en";
import { hi } from "./hi";
import { te } from "./te";

const messagesByLocale: Record<SiteLanguageCode, SiteMessages> = {
  en,
  hi,
  te,
};

export function getMessages(locale: SiteLanguageCode): SiteMessages {
  return messagesByLocale[locale] ?? en;
}
