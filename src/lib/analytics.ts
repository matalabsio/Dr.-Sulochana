declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

function getPagePath(): string {
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}

export function trackBookAppointmentClick(payload: {
  ctaLocation: string;
  destination: string;
  sourcePage?: string;
}) {
  trackEvent("book_appointment_click", {
    page_path: payload.sourcePage ?? getPagePath(),
    cta_location: payload.ctaLocation,
    destination: payload.destination,
  });
}

export function trackWhatsAppClick(payload: {
  ctaLocation: string;
  sourcePage?: string;
}) {
  trackEvent("whatsapp_click", {
    page_path: payload.sourcePage ?? getPagePath(),
    cta_location: payload.ctaLocation,
  });
}

export function trackPhoneClick(payload: {
  ctaLocation: string;
  sourcePage?: string;
}) {
  trackEvent("phone_click", {
    page_path: payload.sourcePage ?? getPagePath(),
    cta_location: payload.ctaLocation,
  });
}

export function trackAppointmentSubmitted(payload: {
  consultationType: string;
  locale: string;
  source: string;
  sourcePage?: string;
}) {
  trackEvent("generate_lead", {
    event_category: "appointment",
    event_label: payload.consultationType,
    locale: payload.locale,
    source: payload.source,
    source_page: payload.sourcePage ?? getPagePath(),
  });

  trackEvent("appointment_submitted", {
    consultation_type: payload.consultationType,
    locale: payload.locale,
    source: payload.source,
    source_page: payload.sourcePage ?? getPagePath(),
  });

  trackEvent("appointment_request", {
    consultation_type: payload.consultationType,
    locale: payload.locale,
    source: payload.source,
    source_page: payload.sourcePage ?? getPagePath(),
  });
}

/** @deprecated Use trackAppointmentSubmitted */
export function trackAppointmentLead(payload: {
  consultationType: string;
  locale: string;
  source: string;
  sourcePage?: string;
}) {
  trackAppointmentSubmitted(payload);
}

export function buildContactUrl(sourcePage: string): string {
  const params = new URLSearchParams({ source: sourcePage });
  return `/contact?${params.toString()}#appointment-form`;
}
