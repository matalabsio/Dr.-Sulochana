"use client";

import { siteLanguages } from "@/content/languages";
import { useSiteLanguage } from "@/i18n/LanguageProvider";

type LanguageSwitcherProps = {
  variant?: "nav" | "nav-mobile" | "floating";
};

export default function LanguageSwitcher({ variant = "nav" }: LanguageSwitcherProps) {
  const { locale, setLocale } = useSiteLanguage();
  const isMobile = variant === "nav-mobile";
  const isFloating = variant === "floating";

  return (
    <div
      className={
        isFloating
          ? "language-switcher-floating"
          : isMobile
            ? "language-switcher-mobile"
            : "language-switcher-nav"
      }
      role="group"
      aria-label="Site language"
    >
      {siteLanguages.map(({ code, label, ariaLabel }) => {
        const isActive = locale === code;
        return (
          <button
            key={code}
            type="button"
            aria-label={ariaLabel}
            aria-pressed={isActive}
            onClick={() => setLocale(code)}
            className={`language-switcher-nav-btn cursor-pointer ${
              isActive ? "language-switcher-nav-btn--active" : ""
            } ${isMobile ? "language-switcher-nav-btn--mobile" : ""} ${isFloating ? "language-switcher-nav-btn--floating" : ""}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
