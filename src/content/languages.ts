export const siteLanguages = [
  { code: "te", label: "తె", ariaLabel: "Telugu" },
  { code: "en", label: "EN", ariaLabel: "English" },
  { code: "hi", label: "हि", ariaLabel: "Hindi" },
] as const;

export type SiteLanguageCode = (typeof siteLanguages)[number]["code"];

export const defaultLanguage: SiteLanguageCode = "en";

export const languageStorageKey = "drsulochana-language";
