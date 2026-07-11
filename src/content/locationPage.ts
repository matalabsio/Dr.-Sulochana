import { contactPage } from "@/content/contact";
import { doctor } from "@/content/doctor";
import { footerContent } from "@/content/landing";
import { images } from "@/content/images";

export const locationPage = {
  hero: {
    eyebrow: "Our Madinaguda Clinic",
    title: "Dr. Sulochana's Hospital — Madinaguda, Hyderabad",
    subtitle:
      "Dr Sulochana Hospital Madinaguda is a trusted gynecologist and IVF fertility clinic serving families across Hyderabad, Hafeezpet, and Ramakrishna Nagar. Led by Dr. Sulochana Mortha with over 40 years of experience in women's healthcare, pregnancy care, and fertility treatment.",
  },
  about: {
    eyebrow: "About Our Location",
    title: "Women's Healthcare at Dr. Sulochana's Hospital, Madinaguda",
    body:
      "Dr. Sulochana's Hospital, Madinaguda, Hyderabad has provided women's healthcare, fertility treatment, and pregnancy care for over 40 years. Also known as Sulochana Hospital, our Madinaguda centre brings together gynecology consultation, IVF and IUI planning, high-risk pregnancy care, PCOS management, and compassionate counselling under one roof.",
    ctaLabel: "Learn About Dr. Sulochana Mortha",
    ctaHref: "/about",
  },
  services: {
    eyebrow: "Services at Madinaguda",
    title: "Gynecologist & Fertility Services in Madinaguda",
    subtitle:
      "From your first gynecology visit to advanced fertility care and pregnancy support, our Madinaguda hospital offers comprehensive women's health services.",
  },
  directions: {
    eyebrow: "Find Us",
    title: "Landmarks & Directions",
    subtitle:
      "Our hospital is easy to reach from Hafeezpet, Miyapur, and central Hyderabad via the Madinaguda main road.",
    landmarks: [
      "Deepti Bus Stop, Madinaguda",
      "Near Swagath Grand Hotel",
      "Kalyan Tulasiram Chambers, 3rd Floor",
      "Close to Hafeezpet and Ramakrishna Nagar",
    ] as const,
    nearbyAreas: ["Hafeezpet", "Miyapur", "Ramakrishna Nagar", "Kukatpally"] as const,
    directionsLabel: contactPage.visit.directionsLabel,
    directionsHref: contactPage.visit.directionsHref,
  },
  map: {
    title: "Visit Dr. Sulochana's Hospital on Google Maps",
    hospital: doctor.hospital,
    address: doctor.address.full,
    embedUrl: contactPage.visit.mapEmbedUrl,
  },
  photos: {
    eyebrow: "Our Clinic",
    title: "Dr. Sulochana's Hospital, Madinaguda",
    items: [
      {
        src: images.heroLocal,
        alt: "Compassionate fertility and pregnancy care at Dr. Sulochana's Hospital, Madinaguda, Hyderabad",
      },
      {
        src: images.trustCouple,
        alt: "Families supported at Dr Sulochana Hospital Madinaguda — gynecologist and IVF clinic in Hyderabad",
      },
      {
        src: images.motherhood,
        alt: "Pregnancy and women's healthcare at Sulochana Hospital, Madinaguda",
      },
    ] as const,
  },
  faq: {
    eyebrow: "Location FAQs",
    title: "Frequently Asked Questions",
    items: [
      {
        q: "Is Sulochana Hospital the same as Dr. Sulochana's Hospital in Madinaguda?",
        a: "Yes — both names refer to Dr. Sulochana's Hospital at Kalyan Tulasiram Chambers, Deepti Bus Stop, Madinaguda, Hyderabad.",
      },
      {
        q: "How do I reach the hospital from Hafeezpet?",
        a: "The hospital is a short drive from Hafeezpet via Madinaguda main road. Look for Deepti Bus Stop and Swagath Grand Hotel — our clinic is on the 3rd floor of Kalyan Tulasiram Chambers.",
      },
      {
        q: "What services are available at the Madinaguda location?",
        a: "We offer gynecology consultation, fertility assessment, IUI and IVF planning, pregnancy care, high-risk obstetric care, PCOS management, and related women's health services.",
      },
      {
        q: "Who is the lead doctor at Dr Sulochana Hospital Madinaguda?",
        a: "Dr. Sulochana Mortha is the Chief Consultant Gynaecologist — an experienced obstetrician, gynecologist, and infertility specialist with over 40 years of clinical practice.",
      },
      {
        q: "How do I book an appointment at the Madinaguda clinic?",
        a: "Call us at +91 98498 61089, use the appointment form on our contact page, or visit the hospital during working hours.",
      },
    ] as const,
  },
  cta: {
    title: "Book Your Consultation at Madinaguda",
    subtitle:
      "Schedule a gynecologist or fertility consultation at Dr. Sulochana's Hospital, Madinaguda, Hyderabad.",
    primaryCta: "Book Appointment",
    primaryHref: "/contact",
    secondaryCta: "Call Now",
    secondaryHref: footerContent.contact.phoneHref,
  },
} as const;
