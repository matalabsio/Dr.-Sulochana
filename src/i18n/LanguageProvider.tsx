"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLanguage,
  languageStorageKey,
  type SiteLanguageCode,
} from "@/content/languages";
import { getMessages } from "@/i18n/messages";
import type { SiteMessages } from "@/i18n/types";

type LanguageContextValue = {
  locale: SiteLanguageCode;
  messages: SiteMessages;
  setLocale: (locale: SiteLanguageCode) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLocale(): SiteLanguageCode {
  if (typeof window === "undefined") return defaultLanguage;
  const stored = window.localStorage.getItem(languageStorageKey);
  if (stored === "en" || stored === "hi" || stored === "te") return stored;
  return defaultLanguage;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<SiteLanguageCode>(defaultLanguage);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLocaleState(readStoredLocale());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const root = document.documentElement;
    root.lang = locale;
    root.dataset.locale = locale;
    root.classList.remove("locale-en", "locale-hi", "locale-te");
    root.classList.add(`locale-${locale}`);
    window.localStorage.setItem(languageStorageKey, locale);
  }, [locale, hydrated]);

  const setLocale = useCallback((next: SiteLanguageCode) => {
    setLocaleState(next);
  }, []);

  const messages = useMemo(() => getMessages(locale), [locale]);

  const value = useMemo(
    () => ({ locale, messages, setLocale }),
    [locale, messages, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useSiteLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useSiteLanguage must be used within LanguageProvider");
  }
  return ctx;
}

export function useMessages() {
  return useSiteLanguage().messages;
}
