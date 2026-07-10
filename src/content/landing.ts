import {
  Calendar,
  ClipboardList,
  FlaskConical,
  Heart,
  HeartHandshake,
  Microscope,
  Pill,
  Scan,
  Stethoscope,
  TestTube,
  Users,
  Wallet,
} from "lucide-react";
import { doctor } from "@/content/doctor";
import { getKnowledgeHubArticles } from "@/content/knowledgeHub";
import { images } from "@/content/images";
import { YOUTUBE_CHANNEL_SEARCH } from "@/content/videos";

export const aboutIntro = {
  eyebrow: "About Us",
  title: "Your Path to Parenthood Begins With Trusted Care",
  subtitle:
    "Expert fertility support, advanced treatments, and compassionate guidance — from your first consultation through every milestone of your journey.",
  journeysLabel: "Parenthood Journeys",
  storiesCta: "Read Stories",
} as const;

export const landingCounterStats = [
  { value: doctor.yearsExperience, label: "Years Experience", highlight: true },
  { value: "10,000+", label: "Families Served", highlight: false },
  { value: "98%", label: "Patient Satisfaction", highlight: false },
  { value: "4", label: "Core Specialties", highlight: false },
] as const;

/** @deprecated Use landingCounterStats */
export const landingStats = landingCounterStats;

export const landingSuccessRate = {
  value: "98%",
  label: "Patient Satisfaction",
} as const;

export const landingPartners = [
  "Hyderabad OBGYN Network",
  "Fertility Care Alliance",
  "Women's Health India",
  "Madinaguda Medical Assoc.",
  "IVF Support Partners",
] as const;

/** Unified trust / about storytelling section */
export const trustStory = {
  mission: {
    badge: "About",
    title: "Meet Dr. Sulochana Mortha",
    subtitle: doctor.bio.aboutLead,
    primaryCta: "Learn More About Dr. Sulochana",
    primaryHref: "/about",
    secondaryCta: "Explore Services",
    secondaryHref: "/services",
  },
  trustCards: [
    {
      icon: "users" as const,
      value: doctor.yearsExperience,
      label: "Years Experience",
      sub: null,
    },
    {
      icon: "users" as const,
      value: "10,000+",
      label: "Families Served",
      sub: null,
    },
    {
      icon: "award" as const,
      value: "98%",
      label: "Patient Satisfaction",
      sub: null,
    },
  ],
  pillars: [
    {
      title: "Experienced Specialist",
      desc: "Over 30 years of expertise in women's healthcare, pregnancy management, and fertility treatment.",
      icon: Stethoscope,
    },
    {
      title: "Patient-Centered Approach",
      desc: "Every treatment plan is tailored to your unique health goals and medical needs.",
      icon: HeartHandshake,
    },
    {
      title: "Advanced Clinical Care",
      desc: "Modern diagnostic methods and evidence-based treatment protocols.",
      icon: FlaskConical,
    },
  ],
  about: {
    badge: "Doctor Philosophy",
    title: doctor.philosophy.title,
    body: `${doctor.bio.aboutDetail} "${doctor.philosophy.quote}" ${doctor.philosophy.attribution}`,
    experienceValue: doctor.yearsExperience,
    experienceLabel: "Years Experience",
  },
  expertise: [
    {
      title: "Affordable Healthcare",
      desc: "Quality healthcare services designed to remain accessible to every family.",
      icon: Wallet,
    },
    {
      title: "Continuous Support",
      desc: "Dedicated guidance throughout fertility, pregnancy, and postnatal care.",
      icon: HeartHandshake,
    },
    {
      title: "Trusted by Families",
      desc: "Thousands of women and families have trusted us with their healthcare journey.",
      icon: Users,
    },
  ],
  metrics: [
    { value: 30, suffix: "+", label: "Years Experience", numeric: true },
    { value: 10000, suffix: "+", label: "Families Served", numeric: true },
    { value: 98, suffix: "%", label: "Patient Satisfaction", numeric: true },
    { value: 4, suffix: "", label: "Core Specialties", numeric: true },
  ],
  partners: {
    title: "Trusted & Recognized By Leading Healthcare Organizations",
    items: landingPartners,
  },
} as const;

export const landingPillars = [
  {
    title: "Expert Fertility Specialists",
    desc: "Decades of OBGYN and IVF expertise under one roof in Madinaguda.",
    icon: Stethoscope,
  },
  {
    title: "Personalized Treatment Plans",
    desc: "Care tailored to your medical history, timeline, and family goals.",
    icon: ClipboardList,
  },
  {
    title: "Continuous Care & Support",
    desc: "Guidance from first consultation through pregnancy and beyond.",
    icon: HeartHandshake,
  },
] as const;

export const landingTrustBullets = [
  {
    title: "Decades of Combined Medical Expertise",
    desc: `${doctor.name} brings ${doctor.yearsExperienceShort} of obstetrics, gynecology, and infertility care.`,
    icon: Microscope,
  },
  {
    title: "Empowering Parenthood Through Science",
    desc: "Evidence-based IVF, IUI, evaluations, and high-risk pregnancy support with clear communication.",
    icon: FlaskConical,
  },
] as const;

export const landingFacilities = [
  { label: "Ultrasound", href: "/services", icon: Scan },
  { label: "Fertility Lab", href: "/services#conception", icon: Microscope },
  { label: "Pharmacy", href: "/services", icon: Pill },
  { label: "Blood Work", href: "/services", icon: TestTube },
  { label: "Reception", href: "/contact", icon: HeartHandshake },
] as const;

export const journeySection = {
  badge: "How It Works",
  title: "Your Care Journey",
  subtitle:
    "A clear, supportive path from your first consultation through personalized treatment and ongoing follow-up care.",
  steps: [
    {
      step: 1,
      title: "Schedule Your Consultation",
      desc: "Book an appointment at your convenience.",
      icon: Calendar,
    },
    {
      step: 2,
      title: "Comprehensive Evaluation",
      desc: "Discuss your concerns and undergo necessary assessments.",
      icon: Stethoscope,
    },
    {
      step: 3,
      title: "Personalized Care Plan",
      desc: "Receive a treatment strategy tailored to your needs.",
      icon: ClipboardList,
    },
    {
      step: 4,
      title: "Ongoing Support",
      desc: "Benefit from continuous guidance and follow-up care.",
      icon: HeartHandshake,
    },
  ],
} as const;

/** @deprecated Use journeySection.steps */
export const landingSteps = journeySection.steps;

export const servicesSection = {
  badge: "Services",
  title: "Comprehensive Care for Women & Families",
  subtitle:
    "Expert care across fertility, pregnancy, women's health, and pediatrics — tailored to support you and your family at every stage.",
  viewAllHref: "/services",
  viewAllLabel: "View All Services",
  trustBadges: [
    "30+ Years Experience",
    "10,000+ Families Served",
    "98% Patient Satisfaction",
    "4 Core Specialties",
  ],
} as const;

export const landingSolutions = [
  {
    title: "Fertility",
    headline: "Fertility & Conception Care",
    desc: "Personalized fertility assessments, counseling, and reproductive health support.",
    href: "/services#conception",
    image: images.conception.art,
    featured: false,
  },
  {
    title: "Pregnancy",
    headline: "Pregnancy Care",
    desc: "Prenatal consultations, routine monitoring, high-risk pregnancy management, and childbirth preparation.",
    href: "/services",
    image: images.motherhood,
    featured: true,
  },
  {
    title: "Women's Health",
    headline: "Women's Health",
    desc: "Comprehensive gynecology consultations, preventive screenings, menstrual health, and menopausal care.",
    href: "/services",
    image: images.knowledge.bio,
    featured: false,
  },

] as const;

export const testimonialsSection = {
  badge: "Patient Success Stories",
  title: "Real Stories. Real Families. Real Hope.",
  subtitle:
    "Discover how expert care, advanced fertility treatments, and compassionate support have helped families achieve their dreams of parenthood.",
  featuredStories: [
    {
      names: "Emily & James",
      quote:
        "After six years of uncertainty, our IVF journey gave us the greatest gift of all.",
      cta: "Read Full Story",
      image: images.landing.testimonialFeature,
      href: "/testimonials",
      imageAlt: "Happy family celebrating their fertility journey",
    },
    {
      names: "Priya & Arjun",
      quote:
        "From our first consultation to holding our daughter, every step felt personal and supported.",
      cta: "Read Full Story",
      image: images.trustCouple,
      href: "/testimonials",
      imageAlt: "Couple sharing their parenthood journey",
    },
    {
      names: "Meera & Raj",
      quote:
        "The team's patience and expertise turned years of hope into the family we dreamed of.",
      cta: "Read Full Story",
      image: images.motherhood,
      href: "/testimonials",
      imageAlt: "Parents with their newborn after fertility treatment",
    },
  ],
} as const;

export const testimonialMetrics = [
  { value: 10000, suffix: "+", label: "Families Supported", display: "10,000+" },
  { value: 4.9, suffix: "", label: "Average Rating", display: "4.9/5" },
  { value: 98, suffix: "%", label: "Patient Satisfaction", display: "98%" },
  { value: 20000, suffix: "+", label: "Healthy Babies Born", display: "20,000+" },
] as const;

/** Slides for AnimatedTestimonials (portrait + quote) */
export const animatedTestimonialSlides = [
  {
    quote:
      "We finally became parents. The support and expert care we received was life-changing. Grateful to the whole team.",
    name: "Sophia M.",
    designation: "IVF Treatment · Hyderabad",
    src: images.landing.specialist2,
  },
  {
    quote:
      "Dr. Sulochana's team explained everything clearly and never rushed us. Compassionate care at every step.",
    name: "Priyanjali S.",
    designation: "Fertility Consultation · Madinaguda",
    src: images.landing.specialist3,
  },
  {
    quote:
      "After years of trying elsewhere, we found a personalized plan that worked. Our miracle baby is here.",
    name: "Meera K.",
    designation: "IVF Treatment · Hyderabad",
    src: images.motherhood,
  },
  {
    quote:
      "The clinic made a stressful journey feel hopeful and supported. Warm, skilled, and reassuring.",
    name: "Ananya R.",
    designation: "IUI Treatment · Telangana",
    src: images.landing.specialist4,
  },
] as const;

export const landingTestimonials = [
  {
    quote: "We finally became parents.",
    detail:
      "The support and expertise we received changed our lives forever.",
    name: "Sophia M.",
    treatment: "IVF Treatment",
    location: "Hyderabad",
    stars: 5,
  },
  {
    quote: "Compassionate care at every step.",
    detail:
      "Dr. Sulochana's team explained everything clearly and never rushed us.",
    name: "Priyanjali S.",
    treatment: "Fertility Consultation",
    location: "Madinaguda",
    stars: 5,
  },
  {
    quote: "Our miracle baby is here.",
    detail:
      "After years of trying elsewhere, we found a personalized plan that worked.",
    name: "Meera K.",
    treatment: "IVF Treatment",
    location: "Hyderabad",
    stars: 5,
  },
  {
    quote: "Warm, skilled, and reassuring.",
    detail:
      "The clinic made a stressful journey feel hopeful and supported.",
    name: "Ananya R.",
    treatment: "IUI Treatment",
    location: "Telangana",
    stars: 5,
  },
] as const;

export const videoTestimonials = [
  {
    name: "Rachel & David",
    journey: "IVF Success Story",
    thumbnail: images.motherhood,
    href: "/testimonials",
  },
  {
    name: "Priya & Arjun",
    journey: "First-Time Parents",
    thumbnail: images.landing.family,
    href: "/testimonials",
  },
  {
    name: "Lisa M.",
    journey: "Egg Freezing Journey",
    thumbnail: images.clinic,
    href: "/testimonials",
  },
] as const;

/** Homepage Knowledge Centre — Figma section bg: #FAF7FA → #F8F6F1 */
export const knowledgeSection = {
  badge: "Knowledge Centre",
  title: "Expert Health Information for Every Stage of Life",
  subtitle:
    "Stay informed with trusted medical guidance on fertility, pregnancy, women's health, newborn care, and preventive healthcare.",
  viewAllHref: "/knowledge",
  viewAllLabel: "View All",
} as const;

/** Homepage Knowledge Centre cards — omit fertility evaluation article (Figma shows 6 cards). */
export const landingBlogArticles = getKnowledgeHubArticles().filter(
  (article) => article.slug !== "when-to-seek-fertility-care",
);

export const newsletterSection = {
  title: "Stay Informed on Your Fertility Journey",
  subtitle:
    "Receive expert fertility advice, treatment updates, and family planning resources directly to your inbox.",
  placeholder: "Enter your email",
  button: "Subscribe",
} as const;

export const preFooterCta = {
  title: "Start Your Healthcare Journey Today",
  subtitle:
    "Whether you're planning a family, expecting a baby, seeking fertility guidance, or looking for expert women's healthcare, we're here to help.",
  primaryCta: "Book Appointment",
  secondaryCta: "Call Now",
  primaryHref: "/contact",
  secondaryHref: "tel:+919849861089",
} as const;

export const footerContent = {
  brandName: "Dr. Sulochana Mortha",
  mission:
    "Dr. Sulochana is committed to delivering compassionate women's healthcare, fertility services, pregnancy care, and pediatric support for families across Hyderabad.",
  trustBadges: [
    { icon: "star" as const, label: "98% Patient Satisfaction" },
    { icon: "award" as const, label: "30+ Years Experience" },
    { icon: "families" as const, label: "10,000+ Families Served" },
  ],
  contact: {
    phone: "098498 61089",
    phoneHref: "tel:+919849861089",
    email: "care@drsulochana.com",
    emailHref: "mailto:care@drsulochana.com",
    emergency: "Emergency: 098498 61089",
    hours: ["Mon – Sat: 7:00am – 7:30pm", "Sun: 7:00am – 4:30pm"],
  },
  nav: {
    company: [
      { name: "About", href: "/about" },
      { name: "Success Stories", href: "/testimonials" },
      { name: "Careers", href: "/contact" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [
      { name: "Blogs", href: "/knowledge" },
      { name: "Expert Videos", href: "/knowledge#videos" },
      { name: "Knowledge Center", href: "/knowledge" },
      { name: "Practo Reviews", href: "https://www.practo.com/hyderabad/hospital/dr-sulochana-hospital-madinaguda/reviews" },
      { name: "Skedoc Profile", href: "https://www.skedoc.com/hyderabad/doctor/dr-m-sulochana-gynaecologist" },
      { name: "FAQs", href: "/contact#faq" },
    ],
    services: [
      { name: "Fertility Treatment", href: "/treatments/fertility-treatment" },
      { name: "Pregnancy Care", href: "/treatments/pregnancy-care" },
      { name: "PCOS Management", href: "/treatments/pcos-management" },
      { name: "Gynecology Consultation", href: "/treatments/gynecology-consultation" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/contact#privacy" },
      { name: "Terms", href: "/contact#terms" },
      { name: "Accessibility", href: "/contact#accessibility" },
    ],
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/p/DBtNliZq3K0/" },
    { label: "YouTube", href: YOUTUBE_CHANNEL_SEARCH },
  ],
} as const;

export const whyChooseSection = {
  eyebrow: "Why Choose Us",
  title: "Compassionate Care. Proven Experience. Personalized Treatment.",
} as const;

export const landingWhyChoose = [
  {
    title: "Experienced Specialist",
    desc: "Over 30 years of expertise in women's healthcare, pregnancy management, and fertility treatment.",
    icon: Stethoscope,
  },
  {
    title: "Patient-Centered Approach",
    desc: "Every treatment plan is tailored to your unique health goals and medical needs.",
    icon: HeartHandshake,
  },
  {
    title: "Advanced Clinical Care",
    desc: "Modern diagnostic methods and evidence-based treatment protocols.",
    icon: FlaskConical,
  },
  {
    title: "Affordable Healthcare",
    desc: "Quality healthcare services designed to remain accessible to every family.",
    icon: Wallet,
  },
  {
    title: "Continuous Support",
    desc: "Dedicated guidance throughout fertility, pregnancy, and postnatal care.",
    icon: Heart,
  },
  {
    title: "Trusted by Families",
    desc: "Thousands of women and families have trusted us with their healthcare journey.",
    icon: Users,
  },
] as const;

export const specialistsPage = {
  eyebrow: "Our Team",
  title: "Meet Our Fertility Specialists",
  subtitle:
    "Experienced OBGYN, IVF, and reproductive medicine experts dedicated to compassionate, personalized care at Madinaguda, Hyderabad.",
} as const;

export const landingSpecialists = [
  {
    name: doctor.name,
    specialty: "Gynecologist · IVF & High-Risk Pregnancy",
    imageKey: "specialist1" as const,
    isPlaceholder: false,
  },
  {
    name: "Dr. Diana Williams",
    specialty: "Embryologist",
    imageKey: "specialist2" as const,
    isPlaceholder: true,
  },
  {
    name: "Dr. Ryan Elliott",
    specialty: "Reproductive Endocrinology",
    imageKey: "specialist3" as const,
    isPlaceholder: true,
  },
  {
    name: "Dr. Elizabeth Yates",
    specialty: "Obstetrics & Prenatal Care",
    imageKey: "specialist4" as const,
    isPlaceholder: true,
  },
] as const;

export type SpecialistImageKey = (typeof landingSpecialists)[number]["imageKey"];

export function getSpecialistImage(key: SpecialistImageKey): string {
  return images.landing[key];
}

export const landingSocialProof = {
  count: "10k+",
  tagline: "A trusted partner in every patient's fertility journey",
  headline: "10,000+ families joined our fertility center",
  rating: "4.9",
  reviewCount: "10,000+ patient reviews",
} as const;

export const heroCopy = {
  trustBadge: "Trusted Women's Healthcare in Hyderabad",
  headline: "Trusted Women's Healthcare, Fertility & Pregnancy Care in Hyderabad",
  headlineAccent: ["Healthcare", "Hyderabad"],
  subtitle:
    "Personalized gynecology, fertility, pregnancy, and pediatric care backed by more than 30 years of clinical experience. Supporting women and families through every stage of life with compassionate, evidence-based healthcare.",
  primaryCta: "Book Appointment",
  secondaryCta: "Explore Services",
} as const;

export const heroMetrics = [
  { value: 35, suffix: "+", label: "Years Experience", display: "35+" },
  { value: 10000, suffix: "+", label: "Families Served", display: "10,000+" },
  { value: 98, suffix: "%", label: "Patient Satisfaction", display: "98%" },
  { value: 4, suffix: "", label: "Core Specialties", display: "4" },
] as const;

export const heroFloatingCards = [
  { icon: "calendar", title: "Same Week Appointments", delay: 0.5 },
  { icon: "star", title: "4.9 Patient Rating", delay: 0.65 },
  { icon: "stethoscope", title: "Personalized Care Plan", delay: 0.8 },
] as const;
