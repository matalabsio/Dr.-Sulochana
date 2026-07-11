import { doctor } from "@/content/doctor";
import { footerContent } from "@/content/landing";

export const contactPage = {
  hero: {
    eyebrow: "Contact Us",
    title: "We're Here to Support Your Journey",
    subtitle:
      "Whether you're seeking fertility treatment, planning a pregnancy, or looking for expert women's healthcare, our team is ready to help. Reach out to schedule a consultation or ask any questions about our services.",
  },
  form: {
    title: "Book an Appointment",
    subtitle: "Fill in your details below. We save your request and open WhatsApp so you can confirm your appointment with our team.",
    submitLabel: "Book via WhatsApp",
    successTitle: "Appointment request received",
    successMessage:
      "Thank you for reaching out. Our care team will contact you shortly to confirm your appointment.",
    successCta: "Submit another request",
    consultationTypes: [
      "IVF Consultation",
      "Fertility Assessment",
      "Pregnancy Care",
      "Gynecology Consultation",
      "Other",
    ] as const,
  },
  visit: {
    title: "Visit Our Hospital",
    hospital: doctor.hospital,
    address: `${doctor.address.area}, ${doctor.address.city}, India`,
    directionsLabel: "Get Directions",
    directionsHref:
      "https://www.google.com/maps/place/Sulochana+Hospital/@17.4936856,78.3375544,17z",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.28956195692!2d78.33755437540552!3d17.493685583411704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9261c0000001%3A0x955b94395b5c658a!2sSulochana%20Hospital!5e0!3m2!1sen!2sin!4v1780182857628!5m2!1sen!2sin",
    hoursTitle: "Working Hours",
    hours: [
      "Monday – Saturday: 7:00 AM – 7:30 PM",
      "Sunday: 7:00 AM – 4:30 PM",
    ] as const,
  },
  contactInfo: {
    title: "Contact Information",
    phone: "+91 98498 61089",
    phoneDisplay: footerContent.contact.phone,
    phoneHref: footerContent.contact.phoneHref,
    email: "care@drsulochana.com",
    emailHref: "mailto:care@drsulochana.com",
    website: "www.drsulochana.online",
    websiteHref: "https://www.drsulochana.online",
  },
  trust: {
    title: "Why Patients Trust Us",
    items: [
      "Experienced IVF & Fertility Specialists",
      "Personalized Treatment Plans",
      "Advanced Reproductive Technology",
      "Compassionate Women's Healthcare",
      "Transparent Guidance & Support",
    ] as const,
  },
  emergency: {
    title: "Emergency & Patient Support",
    body: "For urgent medical concerns, please call our support team directly. If you are experiencing a medical emergency, seek immediate medical assistance or visit the nearest emergency facility.",
    phoneHref: footerContent.contact.phoneHref,
    phoneLabel: footerContent.contact.phone,
  },
  faq: {
    eyebrow: "Common Questions",
    title: "Frequently Asked Questions",
    items: [
      {
        q: "Is Sulochana Hospital the same as Dr. Sulochana's Hospital in Madinaguda?",
        a: "Yes — both names refer to our hospital at Kalyan Tulasiram Chambers, Deepti Bus Stop, Madinaguda, Hyderabad.",
      },
      {
        q: "How do I book my first consultation?",
        a: "Fill in the appointment form on our contact page — it opens WhatsApp with your details. You can also call us or visit the hospital directly.",
      },
      {
        q: "Do I need a referral for fertility treatment?",
        a: "No. You can directly schedule a fertility assessment with our specialists.",
      },
      {
        q: "Are online consultations available?",
        a: "Yes, teleconsultation options are available for eligible patients.",
      },
      {
        q: "What should I bring for my first visit?",
        a: "Please bring previous medical records, test reports, prescriptions, and identification documents if available.",
      },
    ] as const,
  },
  closingCta: {
    title: "Ready to Take the Next Step?",
    subtitle:
      "Your path to better health and parenthood starts with a conversation. Schedule your consultation today and let our experts guide you with care and confidence.",
    primaryCta: "Book Appointment",
    primaryHref: "#appointment-form",
    secondaryCta: "Call Now",
    secondaryHref: footerContent.contact.phoneHref,
  },
} as const;
