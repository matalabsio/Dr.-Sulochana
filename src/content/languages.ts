export const siteLanguages = [
  { code: "te", label: "TE", ariaLabel: "Telugu" },
  { code: "en", label: "EN", ariaLabel: "English" },
  { code: "hi", label: "HI", ariaLabel: "Hindi" },
] as const;

export type SiteLanguageCode = (typeof siteLanguages)[number]["code"];

export const defaultLanguage: SiteLanguageCode = "en";

export const languageStorageKey = "drsulochana-language";
