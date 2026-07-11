/** Factual copy for Dr. Sulochana Mortha and clinic locations */
const YEARS_EXPERIENCE_SHORT = "over 40 years";

export const doctor = {
  name: "Dr. Sulochana Mortha",
  nameFormal: "Dr. M. Sulochana Mortha",
  nameAbout: "Dr. Sulochana Mortha",
  hospital: "Dr. Sulochana's Hospital",
  hospitalTagline: "OBGYN · INFERTILITY · PAEDIATRICS",
  yearsExperience: "40+",
  yearsExperienceShort: YEARS_EXPERIENCE_SHORT,

  address: {
    area: "Madinaguda, Deepti Bus Stop",
    landmark: "near Swagath Grand Hotel, Kalyan Tulasiram Chambers",
    city: "Hyderabad, Telangana",
    full: "3rd Floor, Kalyan Tulasiram Chambers, Deepti Bus Stop, near Swagath Grand Hotel, Madinaguda, Hyderabad, Telangana",
    footer: "Madinaguda (near Swagath Grand Hotel), Hyderabad, Telangana",
  },

  qualifications: [
    "MBBS — Andhra Medical College, Visakhapatnam (1983)",
    "MD / DGO — Obstetrics & Gynaecology, Osmania Medical College, Hyderabad (1993)",
  ] as const,

  specialties: [
    "Obstetrics and gynaecology",
    "In-vitro fertilization (IVF) and infertility",
    "High-risk pregnancies",
    "PCOS and gynecological care",
    "Prenatal and women's health counselling",
    "Menopause management",
  ] as const,

  homeHighlights: [
    "IVF and infertility treatment",
    "High-risk pregnancy care",
    "PCOS and gynecological care",
    "Prenatal and obstetric care",
  ] as const,

  philosophy: {
    title: "Healthcare Built on Trust and Understanding",
    quote:
      "I believe in delivering empathetic, patient-centric healthcare within a supportive, informative environment—explaining root causes clearly and treating every patient with the dedicated care I would offer my own family.",
    attribution: "— Dr. M. Sulochana Mortha",
  },

  bio: {
    home: `Dr. Sulochana Mortha is a veteran Obstetrician, Gynaecologist, and Infertility Specialist in Hyderabad with ${YEARS_EXPERIENCE_SHORT} of clinical and academic experience. She is known for patient-centric care, detailed explanations of root causes, and extensive public medical counselling.`,
    aboutLead:
      `Dr. M. Sulochana (Sulochana Mortha) is a highly regarded Gynaecologist and Obstetrician based in Hyderabad with ${YEARS_EXPERIENCE_SHORT} of extensive clinical and academic experience.`,
    aboutDetail:
      "She is known for patient-centric care, clear explanations of root causes, and extensive public medical counselling. As a former Professor at Osmania Medical College (1993–2016), she has hosted 50+ live television episodes on women's health across HMTV, T News, and TV5. She currently serves as Chief Consultant Gynaecologist at Dr. Sulochana's Hospital, Madinaguda, and as a panel consultant at GVK Health Hub, Jubilee Hills.",
    clinic:
      "Dr. Sulochana's Hospital in Madinaguda and GVK Health Hub in Jubilee Hills bring together obstetrics, gynecology, infertility evaluation, and women's health counselling. Whether you need prenatal care, fertility guidance, or help with PCOS, our team offers clear guidance and compassionate care.",
    appointmentNote:
      "Online directories may list similar names at different Hyderabad locations. Please confirm whether your appointment is at Madinaguda (Dr. Sulochana's Hospital) or Jubilee Hills (GVK Health Hub) when you book.",
  },
} as const;

export const aboutCredentials = [
  {
    title: "Specializations",
    items: [
      "Gynaecologist, obstetrician & infertility specialist",
      "IVF, IUI, and assisted reproductive technologies",
      "High-risk pregnancy management",
      "PCOS, menopause, and advanced gynaecological care",
    ],
  },
  {
    title: "Education",
    items: [...doctor.qualifications],
  },
  {
    title: "Experience",
    items: [
      `${doctor.yearsExperience} years in obstetrics, gynaecology, and infertility`,
      "Professor, Osmania Medical College, Hyderabad (1993–2016)",
      "Chief Consultant — Dr. Sulochana's Hospital, Madinaguda",
      "Panel Consultant — GVK Health Hub, Jubilee Hills",
      "50+ live TV medical counselling episodes (HMTV, T News, TV5)",
    ],
  },
  {
    title: "Common reasons for visit",
    items: [
      "Obstetrics problems and prenatal care",
      "Infertility evaluation and IVF consultation",
      "PCOS and gynecological issues",
      "High-risk pregnancy monitoring",
    ],
  },
  {
    title: "Registrations",
    items: [
      "Andhra Pradesh Medical Council — Reg. No. 12665",
      "Indian Medical Association (IMA)",
    ],
  },
] as const;
