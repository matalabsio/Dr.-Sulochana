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
    badge: "About Us",
    title: "Meet Dr. Sulochana Mortha",
    credentials: "MBBS · MD · DGO",
    subtitle: doctor.bio.aboutLead,
    primaryCta: "Her Qualification & Experience",
    primaryHref: "/about",
    secondaryCta: "Explore Treatments",
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
      title: "40 Years of Fertility Practice",
      desc: "Deep expertise in IVF, IUI, ICSI, PCOS, and high-risk pregnancy — built over four decades of clinical practice in Hyderabad.",
      icon: Stethoscope,
    },
    {
      title: "Treatment Plans in Your Language",
      desc: "Every step of your fertility journey explained clearly in Telugu, Hindi, or English. No confusion, no jargon.",
      icon: HeartHandshake,
    },
    {
      title: "IVF · IUI · ICSI Under One Roof",
      desc: "Complete fertility care from initial evaluation to advanced assisted reproduction — all at our Madinaguda clinic.",
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
    { value: 40, suffix: "+", label: "Years Experience", numeric: true },
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
      title: "Book Your First Visit",
      desc: "Book an appointment at your convenience. Your first call is free.",
      icon: Calendar,
    },
    {
      step: 2,
      title: "Fertility Evaluation",
      desc: "Discuss your concerns and undergo necessary assessments.",
      icon: Stethoscope,
    },
    {
      step: 3,
      title: "Personalised Treatment Plan",
      desc: "Receive a treatment strategy tailored to your needs.",
      icon: ClipboardList,
    },
    {
      step: 4,
      title: "Your Procedure",
      desc: "Undergo your planned fertility or pregnancy procedure with expert clinical care.",
      icon: Heart,
    },
    {
      step: 5,
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
  title: "Fertility & Women's Health Treatments",
  subtitle:
    "IVF, IUI, ICSI, PCOS management, high-risk pregnancy, and complete women's healthcare — all at Dr. Sulochana's Hospital, Madinaguda.",
  viewAllHref: "/services",
  viewAllLabel: "View All Treatments",
  trustBadges: [
    "40+ Years Experience",
    "10,000+ Families Served",
    "98% Patient Satisfaction",
    "4 Core Specialties",
  ],
} as const;

export const landingSolutions = [
  {
    title: "IVF",
    headline: "IVF · IUI · ICSI Treatments",
    desc: "Comprehensive fertility evaluation and assisted reproduction — IVF, IUI, and ICSI — with personalised treatment plans for every couple.",
    href: "/treatments/fertility-treatment",
    icon: images.serviceIcons.ivf,
  },
  {
    title: "High-Risk Pregnancy",
    headline: "High-Risk Pregnancy Care",
    desc: "Specialised monitoring and management for high-risk pregnancies, from the first trimester through delivery.",
    href: "/treatments/high-risk-pregnancy",
    icon: images.serviceIcons.highRiskPregnancy,
  },
  {
    title: "PCOS",
    headline: "PCOS & Gynaecology",
    desc: "Diagnosis and treatment of PCOS, endometriosis, menstrual disorders, and all general gynaecology concerns.",
    href: "/treatments/pcos-management",
    icon: images.serviceIcons.pcos,
  },
  {
    title: "Newborn",
    headline: "Newborn & Paediatric Care",
    desc: "Neonatal care and paediatric consultations for your baby's health from birth.",
    href: "/services",
    icon: images.serviceIcons.newborn,
  },
] as const;

export const testimonialsSection = {
  badge: "Patient Success Stories",
  title: "Real Families. Real Babies. Real Hope.",
  subtitle:
    "Thousands of couples have walked into Dr. Sulochana's clinic with questions and walked out with their family complete. Here are some of their stories.",
  viewAllHref: "/testimonials",
  viewAllLabel: "View All Success Stories",
  cards: [
    {
      name: "Padmavathi R.",
      location: "Miyapur",
      treatment: "IVF",
      quote:
        "After two years of trying, Dr. Sulochana's team guided us through IVF with such patience. Our daughter was born in March 2025.",
    },
    {
      name: "Lakshmi S.",
      location: "Madinaguda",
      treatment: "IUI",
      quote: "[Real patient quote to be provided]",
    },
    {
      name: "Anitha M.",
      location: "Kondapur",
      treatment: "PCOS + IVF",
      quote: "[Real patient quote to be provided]",
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

/** Homepage Knowledge Centre — panel + filters + 3-card preview */
export const knowledgeSection = {
  badge: "Knowledge Centre",
  title: "Expert Articles on Fertility & Women's Health",
  subtitle:
    "Trusted medical information on IVF, IUI, PCOS, pregnancy, and women's health — written by Dr. Sulochana's team.",
  viewAllHref: "/knowledge",
  viewAllLabel: "View All Articles",
  landingArticleLimit: 3,
} as const;

/** All articles for Knowledge Centre (homepage filters + /knowledge page). */
export const landingBlogArticles = getKnowledgeHubArticles();

export const newsletterSection = {
  title: "Stay Informed on Your Fertility Journey",
  subtitle:
    "Receive expert fertility advice, treatment updates, and family planning resources directly to your inbox.",
  placeholder: "Enter your email",
  button: "Subscribe",
} as const;

export const preFooterCta = {
  eyebrow: "Take the next step",
  title: "Ready to Start Your Fertility Journey?",
  subtitle:
    "Whether you're exploring IVF for the first time or have questions about your fertility options, Dr. Sulochana's team is here with answers and a plan that works for you.",
  doctorName: doctor.name,
  bio: "Dr. Sulochana is committed to delivering compassionate women's healthcare, pregnancy care, and pediatric support for families across Hyderabad.",
  trustBadges: [
    { icon: "star" as const, label: "98% Patient Satisfaction" },
    { icon: "award" as const, label: "30+ Years Experience" },
    { icon: "families" as const, label: "10,000+ Families Served" },
  ],
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
    { icon: "award" as const, label: "40+ Years Experience" },
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
      { name: "Madinaguda Location", href: "/madinaguda-hyderabad" },
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
      { name: "High-Risk Pregnancy", href: "/treatments/high-risk-pregnancy" },
      { name: "Fibroids Treatment", href: "/treatments/fibroids" },
      { name: "Menopause Management", href: "/treatments/menopause" },
      { name: "Normal Delivery", href: "/treatments/normal-delivery" },
      { name: "C-Section Care", href: "/treatments/c-section" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms", href: "/terms" },
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
  title: "Compassionate Care. Proven Results. Affordable Prices.",
} as const;

export const landingWhyChoose = [
  {
    title: "IVF at Costs Every Family Can Afford",
    desc: "Transparent pricing, no hidden charges. Fertility treatment designed for middle-class families — not luxury clinics.",
    icon: Stethoscope,
  },
  {
    title: "40 Years of Fertility Expertise",
    desc: "One of Hyderabad\u2019s most experienced infertility specialists. Over 20,000 babies delivered across four decades of practice.",
    icon: HeartHandshake,
  },
  {
    title: "We Speak Your Language",
    desc: "Our team explains every step of your fertility journey in Telugu, Hindi, or English — no confusion, no medical jargon.",
    icon: FlaskConical,
  },
  {
    title: "Clear Treatment Costs from Day 1",
    desc: "You know exactly what your IVF, IUI, or ICSI treatment will cost before you begin. No surprise bills.",
    icon: Wallet,
  },
  {
    title: "IUI to IVF to ICSI — All Here",
    desc: "From basic fertility evaluation to advanced assisted reproduction, every treatment is available under one roof in Madinaguda.",
    icon: Heart,
  },
  {
    title: "High-Risk Pregnancy Specialists",
    desc: "If your pregnancy needs extra attention, Dr. Sulochana\u2019s team provides the specialised monitoring and care your family deserves.",
    icon: Users,
  },
] as const;

export const pricingSection = {
  ctaHref: "/contact",
  plans: [
    {
      id: "iui",
      featured: false,
      features: [
        "Consultation & Fertility Assessment",
        "Ovulation Monitoring",
        "IUI Procedure",
        "Follow-up Consultation",
      ],
    },
    {
      id: "ivf",
      featured: true,
      features: [
        "Consultation & Fertility Evaluation",
        "Controlled Ovarian Stimulation",
        "Egg Retrieval Procedure",
        "Embryo Culture & Transfer",
        "Follow-up Support",
      ],
    },
    {
      id: "icsi",
      featured: false,
      features: [
        "Complete ICSI Procedure",
        "Advanced Sperm Injection",
        "Embryo Culture & Transfer",
        "Fertility Specialist Follow-up",
      ],
    },
  ],
} as const;

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
    `Personalized gynecology, fertility, pregnancy, and pediatric care backed by ${doctor.yearsExperienceShort} of clinical experience. Supporting women and families through every stage of life with compassionate, evidence-based healthcare.`,
  primaryCta: "Book Appointment",
  secondaryCta: "Explore Services",
} as const;

export const heroMetrics = [
  {
    id: "experience",
    icon: "achievement",
    value: 40,
    suffix: "+",
    labelKey: "yearsExperience",
    variant: "featured",
  },
  {
    id: "babies",
    icon: "born",
    value: 20000,
    suffix: "+",
    labelKey: "babiesBorn",
    variant: "default",
  },
  {
    id: "satisfaction",
    icon: "satisfaction",
    value: 98,
    suffix: "%",
    labelKey: "patientSatisfaction",
    primarySuffixKey: "heroMetricPatient",
    variant: "default",
  },
  {
    id: "treatments",
    icon: "ivf",
    labelKey: "heroTreatments",
    variant: "static",
  },
] as const;

export const heroFloatingCards = [
  { icon: "calendar", title: "Same Week Appointments", delay: 0.5 },
  { icon: "star", title: "4.9 Patient Rating", delay: 0.65 },
  { icon: "stethoscope", title: "Personalized Care Plan", delay: 0.8 },
] as const;
