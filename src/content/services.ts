import { images } from "@/content/images";
import { servicesSection } from "@/content/landing";

export const servicesPageHero = {
  eyebrow: "Treatments & Services",
  title: "Comprehensive Fertility & Conception Care",
  titleAccent: "Conception Care",
  subtitle:
    "From your first fertility evaluation through IVF, preservation, and preconception planning — expert reproductive care with compassion at every step.",
  primaryCta: "Book Consultation",
  primaryHref: "/contact",
  secondaryCta: "Call Clinic",
  secondaryHref: "tel:+919849861089",
} as const;

export const servicesPageIntro =
  "At Dr. Sulochana's Hospital, our conception services support you through every step of your fertility journey. We combine clinical expertise with compassionate care to help you build the family you dream of.";

export type ConceptionService = {
  id: string;
  step: string;
  title: string;
  description: string;
  highlights: readonly string[];
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
};

export const conceptionServices: ConceptionService[] = [
  {
    id: "fertility-evaluations",
    step: "01",
    title: "Fertility Evaluations",
    description:
      "Comprehensive hormonal, ultrasound, and clinical assessments to understand your reproductive health. We create a clear, personalized roadmap before any treatment begins.",
    highlights: ["Hormonal profiling", "Ultrasound imaging", "Personalized care plan"],
    image: images.conception.fertilityEval,
    imageAlt: "Doctor consulting with a patient about fertility",
    imagePosition: "left",
  },
  {
    id: "art",
    step: "02",
    title: "Assisted Reproductive Technologies (ART)",
    description:
      "Evidence-based IVF, IUI, and ICSI protocols supported by modern embryology practices. Our team guides you through stimulation, retrieval, and transfer with transparency at every stage.",
    highlights: ["IVF & ICSI", "IUI protocols", "Embryology lab support"],
    image: images.conception.art,
    imageAlt: "Ultrasound imaging during fertility care",
    imagePosition: "right",
  },
  {
    id: "donor-services",
    step: "03",
    title: "Donor Services",
    description:
      "Ethical, confidential guidance on donor eggs, sperm, and related options when medically appropriate. We help you understand choices, timelines, and legal considerations with clarity.",
    highlights: ["Confidential counselling", "Ethical guidance", "Clear timelines"],
    image: images.conception.donor,
    imageAlt: "Specialist providing fertility counselling",
    imagePosition: "left",
  },
  {
    id: "preservation",
    step: "04",
    title: "Fertility Preservation",
    description:
      "Egg and embryo freezing for medical, personal, or oncofertility needs. We discuss candidacy, protocols, storage, and future use so you can plan with confidence.",
    highlights: ["Egg freezing", "Embryo storage", "Future planning"],
    image: images.conception.preservation,
    imageAlt: "Laboratory fertility preservation equipment",
    imagePosition: "right",
  },
  {
    id: "preconception",
    step: "05",
    title: "Preconception Counselling",
    description:
      "Lifestyle, nutrition, and medical optimisation before you conceive. Ideal for couples planning pregnancy or preparing for ART — so you start your journey in the best possible health.",
    highlights: ["Nutrition guidance", "Lifestyle planning", "Medical optimisation"],
    image: images.conception.preconception,
    imageAlt: "Couple in supportive fertility care setting",
    imagePosition: "left",
  },
];

export const servicesKnowledgeArticles = [
  {
    title: "Understanding Your Fertility Health",
    desc: "Key factors that influence fertility and practical steps you can take before treatment.",
    category: "Fertility Health",
    time: "5 min read",
    image: images.knowledge.ivf,
    href: "/knowledge",
  },
  {
    title: "The Role of Nutrition in Fertility",
    desc: "How diet and supplements support preconception and treatment outcomes.",
    category: "Wellness",
    time: "6 min read",
    image: images.knowledge.nutrition,
    href: "/knowledge",
  },
  {
    title: "Confirmation of Pregnancy",
    desc: "Early tests, scans, and what to expect in your first trimester visit.",
    category: "Pregnancy",
    time: "4 min read",
    image: images.conception.knowledge1,
    href: "/knowledge",
  },
];

export const servicesReviews = [
  {
    name: "Naman Taira",
    time: "1 year ago",
    text: "Dr. Sulochana takes time to explain every step. Her calm approach made our fertility journey much less stressful. Highly recommend the clinic.",
  },
  {
    name: "Priyanjali S.",
    time: "2 years ago",
    text: "After years of trying elsewhere, we found clear answers and a plan that worked. The team is professional, kind, and always available for questions.",
  },
  {
    name: "Meera K.",
    time: "8 months ago",
    text: "Excellent care from consultation through treatment. The hospital feels welcoming and the doctors genuinely listen. We are grateful for their support.",
  },
];

export const servicesMidCta = {
  eyebrow: "Start your journey",
  title: "Ready for a Private Fertility Consultation?",
  subtitle:
    "Meet our specialists at Madinaguda. We'll review your history, answer your questions, and outline a care plan tailored to you.",
  primaryCta: "Book Consultation",
  primaryHref: "/contact",
  phoneHref: "tel:+919849861089",
} as const;

export const servicesTrustBadges = servicesSection.trustBadges;
