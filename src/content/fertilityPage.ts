import { images } from "@/content/images";

/** Locale-independent URLs, images, and anchors for /services#conception */
export const fertilityPageLinks = {
  primaryHref: "/contact",
  phoneHref: "tel:+919849861089",
  phoneDisplay: "098498 61089",
  madinaguda: {
    mapsHref:
      "https://www.google.com/maps/place/Sulochana+Hospital/@17.4936856,78.3375544,17z",
    lybrateHref:
      "https://www.lybrate.com/hyderabad/clinic/dr-sulochana-s-hospital-hafeezpet",
  },
  jubileeHills: {
    phoneHref: "tel:+919063440211",
    phoneDisplay: "+91 90634 40211",
    phoneAltHref: "tel:+919966022254",
    phoneAltDisplay: "+91 99660 22254",
    medibuddyHref:
      "https://www.medibuddy.in/doctor-consultations/hyderabad/gynecology/dr-sulochana-mortha-310624",
  },
} as const;

export const fertilityTreatmentCards = [
  {
    id: "evaluation",
    image: images.conception.fertilityEval,
    imageAlt: "Initial fertility evaluation consultation",
  },
  {
    id: "iui",
    image: images.conception.preconception,
    imageAlt: "Intrauterine insemination care",
  },
  {
    id: "ivf-icsi",
    image: images.conception.art,
    imageAlt: "IVF and ICSI laboratory treatment",
  },
  {
    id: "egg-freezing",
    image: images.conception.preservation,
    imageAlt: "Egg freezing and fertility preservation",
  },
] as const;

export const fertilityKnowledgeArticles = [
  {
    image: images.knowledge.ivf,
    href: "/videos/ivf-process-and-procedure",
    time: "Video",
  },
  {
    image: images.knowledge.nutrition,
    href: "/videos/pcod-diagnostics-and-management",
    time: "Video",
  },
  {
    image: images.conception.knowledge1,
    href: "/blog/family-planning-contraception",
    time: "8 min read",
  },
] as const;
