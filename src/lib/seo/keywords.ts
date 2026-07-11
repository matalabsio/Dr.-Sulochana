/** Target search intents — brand, local, and service clusters for on-page SEO */
export const brandNames = {
  primary: "Dr. Sulochana's Hospital",
  alternate: [
    "Dr Sulochana",
    "Sulochana Hospital",
    "Dr Sulochana Hospital Madinaguda",
    "Dr Sulochana's Hospital Madinaguda",
  ],
  location: "Madinaguda, Hyderabad",
  doctor: "Dr. Sulochana Mortha",
} as const;

export const keywordClusters = {
  brand: [
    "dr sulochana",
    "dr sulochana hospital madinaguda",
    "dr sulochana's hospital",
    "sulochana hospital",
    "sulochana hospital madinaguda",
  ],
  doctor: [
    "dr sulochana gynecologist hyderabad",
    "dr sulochana mortha",
    "best gynecologist hyderabad",
    "gynecologist in hyderabad",
    "lady gynecologist hyderabad",
    "obstetrician hyderabad",
  ],
  local: [
    "gynecologist madinaguda",
    "gynecologist hafeezpet",
    "gynecologist near me hyderabad",
    "pregnancy doctor hyderabad",
    "women's health doctor hyderabad",
    "fertility doctor hyderabad",
    "ivf doctor hyderabad",
  ],
  services: [
    "gynecology consultation hyderabad",
    "ivf treatment hyderabad",
    "pregnancy care hyderabad",
    "pcos treatment hyderabad",
    "infertility specialist hyderabad",
  ],
} as const;

export const pageSeo = {
  home: {
    title:
      "Dr. Sulochana's Hospital, Madinaguda | Dr. Sulochana Mortha – Gynecologist & IVF Specialist",
    description:
      "Dr. Sulochana's Hospital in Madinaguda, Hyderabad offers expert gynecology, fertility, IVF, pregnancy, PCOS, and women's healthcare under the care of Dr. Sulochana Mortha. Book your consultation today.",
  },
  location: {
    title: "Dr Sulochana Hospital Madinaguda | Gynecologist & IVF Clinic Hyderabad",
    description:
      "Visit Dr. Sulochana's Hospital in Madinaguda, Hyderabad — a trusted gynecologist and IVF fertility clinic led by Dr. Sulochana Mortha. Pregnancy care, PCOS, and women's health. Book your consultation.",
  },
  about: {
    title: "Dr. Sulochana Mortha — Gynecologist in Hyderabad",
    description:
      "About Dr. Sulochana Mortha, senior gynecologist and obstetrician at Dr. Sulochana's Hospital (Sulochana Hospital), Madinaguda, Hyderabad. 40+ years in fertility, pregnancy, and women's health.",
  },
  contact: {
    title: "Contact Dr. Sulochana's Hospital, Madinaguda",
    description:
      "Visit Sulochana Hospital, Madinaguda — book a gynecologist or fertility consultation in Hyderabad. Call +91 98498 61089, email, or schedule online.",
  },
  services: {
    title: "Fertility & Women's Health Services — Madinaguda",
    description:
      "IVF, IUI, pregnancy care, and gynecology at Dr. Sulochana's Hospital, Madinaguda, Hyderabad. Expert fertility and women's health specialists.",
  },
  specialists: {
    title: "Dr. Sulochana — Gynecologist & Fertility Specialist",
    description:
      "Meet Dr. Sulochana Mortha — gynecologist in Hyderabad leading Sulochana Hospital, Madinaguda. OBGYN, IVF, and pregnancy care with 40+ years of experience.",
  },
  knowledge: {
    title: "Women's Health & Fertility Knowledge Centre",
    description:
      "Expert articles and videos on pregnancy, IVF, PCOS, and gynecology from Dr. Sulochana's Hospital, Madinaguda, Hyderabad.",
  },
  testimonials: {
    title: "Patient Success Stories",
    description:
      "Read patient experiences at Dr. Sulochana's Hospital (Sulochana Hospital), Madinaguda — fertility, pregnancy, and gynecology care in Hyderabad.",
  },
} as const;
