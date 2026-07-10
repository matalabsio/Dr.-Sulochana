import type { MediaLinkItem } from "@/content/media";
import { fertilityPageLinks } from "@/content/fertilityPage";

export type ClinicLocation = {
  id: string;
  name: string;
  address: string;
  fee: string;
  timing: string;
  phone?: string;
  phoneHref?: string;
  mapsHref?: string;
  bookingHref?: string;
};

export const aboutClinicLocations: readonly ClinicLocation[] = [
  {
    id: "madinaguda",
    name: "Dr. Sulochana's Hospital — Madinaguda",
    address:
      "3rd Floor, Kalyan Tulasiram Chambers, Deepti Bus Stop, near Swagath Grand Hotel, Madinaguda, Hyderabad, Telangana",
    fee: "₹400 – ₹500",
    timing: "Mon – Sat: 2:00 PM onwards",
    phone: "098498 61089",
    phoneHref: fertilityPageLinks.phoneHref,
    mapsHref: fertilityPageLinks.madinaguda.mapsHref,
    bookingHref: fertilityPageLinks.madinaguda.lybrateHref,
  },
  {
    id: "jubilee-hills",
    name: "GVK Health Hub — Jubilee Hills",
    address:
      "Plot No. 65, Road No. 1, Park View Enclave, adjacent to Metro Pillar C1585, Jubilee Hills, Hyderabad, Telangana",
    fee: "₹500",
    timing: "By prior appointment (recommended)",
    phone: "+91 99660 22254",
    phoneHref: fertilityPageLinks.jubileeHills.phoneAltHref,
    bookingHref: fertilityPageLinks.jubileeHills.medibuddyHref,
  },
] as const;

/** Verified booking profiles and official digital presence */
export const aboutProfessionalProfiles: readonly MediaLinkItem[] = [
  {
    title: "GVK Health Hub — Doctor Profile",
    description:
      "Official doctor profile at GVK Health Hub, Jubilee Hills, with clinic overview and booking information.",
    href: "https://www.gvkhealthhub.com/doctors/dr-sulochana-1",
    source: "GVK Health Hub",
    kind: "gvk",
  },
  {
    title: "Instagram — Facility Introduction",
    description:
      "Official introductory feature on GVK Health Hub's Instagram highlighting Dr. Sulochana's clinical work.",
    href: "https://www.instagram.com/p/DBtNliZq3K0/",
    source: "GVK Health Hub on Instagram",
    kind: "instagram",
  },
  {
    title: "Practo — Doctor Profile",
    description:
      "Verified patient case histories, testimonials, and consultation details on Practo.",
    href: "https://www.practo.com/hyderabad/doctor/dr-m-sulochana-radiologist",
    source: "Practo",
    kind: "practo",
  },
  {
    title: "Practo — Hospital Reviews",
    description:
      "Patient feedback on maternal care, clinic timings, and experiences at Madinaguda.",
    href: "https://www.practo.com/hyderabad/hospital/dr-sulochana-hospital-madinaguda/reviews",
    source: "Practo Reviews",
    kind: "practo",
  },
  {
    title: "MediBuddy — Book OPD",
    description:
      "Book direct outpatient consultation slots with Dr. Sulochana Mortha online.",
    href: "https://www.medibuddy.in/doctor-consultations/hyderabad/gynecology/dr-sulochana-mortha-310624",
    source: "MediBuddy",
    kind: "medibuddy",
  },
  {
    title: "Lybrate — Hospital Clinic Page",
    description:
      "Primary clinical portal for Dr. Sulochana's Hospital with location and contact details.",
    href: "https://www.lybrate.com/hyderabad/clinic/dr-sulochana-s-hospital-hafeezpet",
    source: "Lybrate",
    kind: "lybrate",
  },
  {
    title: "Skedoc — Gynaecologist Profile",
    description:
      "Clinical timeline including Professor tenure at Osmania Medical College and gynecology practice.",
    href: "https://www.skedoc.com/hyderabad/doctor/dr-m-sulochana-gynaecologist",
    source: "Skedoc",
    kind: "skedoc",
  },
] as const;

export const doctorRegistration = {
  council: "Andhra Pradesh Medical Council",
  number: "12665",
  membership: "Indian Medical Association (IMA)",
} as const;
