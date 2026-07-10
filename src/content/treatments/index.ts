import { doctor } from "@/content/doctor";
import { images } from "@/content/images";
import type { TreatmentContent } from "@/content/types";

export const treatments: TreatmentContent[] = [
  {
    slug: "fertility-treatment",
    title: "Fertility Treatment in Hyderabad",
    description:
      "Comprehensive fertility evaluation, IUI, and IVF care at Dr. Sulochana's Hospital, Madinaguda. Expert reproductive medicine with 40+ years of clinical experience.",
    category: "Fertility",
    heroImage: images.conception.art,
    sections: [
      {
        title: "Who This Is For",
        body: "Couples trying to conceive, women with irregular ovulation, recurrent pregnancy loss, or those who have not succeeded with initial treatments. We also support preconception planning and second-opinion reviews for complex fertility cases.",
      },
      {
        title: "What We Offer",
        body: "Initial fertility assessment for both partners, hormonal and ultrasound evaluation, ovulation induction, intrauterine insemination (IUI), and coordination of IVF and ICSI protocols. Treatment plans are tailored to diagnosis, age, and ovarian reserve.",
      },
      {
        title: "Why Dr. Sulochana's Hospital",
        body: "Led by Dr. Sulochana Mortha with over 40 years in obstetrics and gynecology, our team combines clinical depth with compassionate counselling. We explain each step clearly so you can make informed decisions about timing and treatment intensity.",
      },
      {
        title: "Your Next Step",
        body: "Book a fertility consultation at our Madinaguda clinic. Bring previous reports and cycle history. Early evaluation prevents unnecessary delays and helps identify the most effective treatment path.",
      },
    ],
    faqs: [
      {
        q: "How do I know if I need fertility treatment?",
        a: "Consider evaluation after 12 months of trying, or 6 months if over 35, or sooner with irregular cycles or known conditions.",
      },
      {
        q: "Do you offer IVF at the hospital?",
        a: "We provide fertility evaluation and treatment planning, including IUI and coordination of advanced IVF care through associated centres.",
      },
      {
        q: "What tests are done at the first visit?",
        a: "Typically history review, ultrasound, hormone tests, and semen analysis for the male partner when applicable.",
      },
      {
        q: "How long does fertility treatment take?",
        a: "Timelines vary. Some couples need one cycle of ovulation support; others progress to IUI or IVF over several months.",
      },
      {
        q: "Is fertility consultation confidential?",
        a: "Yes. All consultations and records are handled with complete privacy and sensitivity.",
      },
    ],
    relatedArticles: ["family-planning-contraception"],
    relatedTreatments: ["pcos-management", "gynecology-consultation"],
    relatedVideos: ["understanding-ivf-treatment", "when-to-see-a-fertility-specialist"],
  },
  {
    slug: "pregnancy-care",
    title: "Pregnancy Care in Hyderabad",
    description:
      "Complete prenatal care, trimester-wise monitoring, and delivery planning at Dr. Sulochana's Hospital, Madinaguda, Hyderabad.",
    category: "Pregnancy",
    heroImage: images.motherhood,
    sections: [
      {
        title: "Comprehensive Prenatal Care",
        body: "From pregnancy confirmation through delivery planning, we provide structured antenatal visits, recommended investigations, nutrition guidance, and fetal monitoring aligned with international standards adapted to your individual risk profile.",
      },
      {
        title: "Trimester-by-Trimester Support",
        body: "First trimester care focuses on confirmation, dating scans, and early risk assessment. Second trimester includes anomaly screening and growth monitoring. Third trimester emphasizes fetal wellbeing, birth planning, and preparation for labor.",
      },
      {
        title: "Experienced Obstetric Team",
        body: "Dr. Sulochana Mortha has supported thousands of families through pregnancy and childbirth over four decades. Our approach balances medical vigilance with emotional support for expectant mothers and partners.",
      },
      {
        title: "When to Book",
        body: "Schedule your first visit as soon as pregnancy is confirmed or if you are planning a pregnancy and need preconception advice. Early care improves outcomes and reduces anxiety.",
      },
    ],
    faqs: [
      {
        q: "When should I start antenatal visits?",
        a: "Book within the first 6–8 weeks of pregnancy, or earlier if you have symptoms or a high-risk history.",
      },
      {
        q: "How many scans will I need?",
        a: "Most pregnancies require key milestone scans. Your doctor advises additional scans only when clinically necessary.",
      },
      {
        q: "Do you handle high-risk pregnancies?",
        a: "Yes. We co-manage high-risk cases with appropriate monitoring and referral pathways when specialized care is needed.",
      },
      {
        q: "Can I choose a delivery plan?",
        a: "We discuss delivery options based on medical suitability, previous history, and your preferences during antenatal visits.",
      },
    ],
    relatedArticles: [
      "confirmation-of-pregnancy",
      "investigations-during-pregnancy",
      "safe-medication-in-pregnancy",
    ],
    relatedTreatments: ["high-risk-pregnancy", "gynecology-consultation"],
    relatedVideos: [],
  },
  {
    slug: "pcos-management",
    title: "PCOS Management in Hyderabad",
    description:
      "Expert diagnosis and treatment for PCOS/PCOD — cycle regulation, fertility support, and long-term metabolic care at Dr. Sulochana's Hospital.",
    category: "PCOS",
    heroImage: images.knowledge.ivf,
    sections: [
      {
        title: "Understanding PCOS",
        body: "Polycystic ovary syndrome affects hormones, menstrual cycles, skin, weight, and fertility. Accurate diagnosis requires more than ultrasound — we evaluate symptoms, blood tests, and long-term health risks together.",
      },
      {
        title: "Personalized Treatment Plans",
        body: "Treatment may include lifestyle counselling, medications to regulate cycles, management of excess hair or acne, metabolic monitoring, and fertility support when you wish to conceive. Plans evolve as your goals change.",
      },
      {
        title: "Fertility and PCOS",
        body: "Many women with PCOS conceive with ovulation support or assisted reproduction. Early specialist input reduces time to pregnancy and addresses associated conditions such as insulin resistance.",
      },
      {
        title: "Long-Term Wellness",
        body: "PCOS requires ongoing follow-up for metabolic health. We help you build sustainable habits and medical support beyond a single consultation.",
      },
    ],
    faqs: [
      {
        q: "How is PCOS diagnosed?",
        a: "Through clinical history, examination, ultrasound, and blood tests to exclude other causes of irregular cycles.",
      },
      {
        q: "Can I get pregnant with PCOS?",
        a: "Yes. Many women succeed with lifestyle changes, ovulation induction, or fertility treatments tailored to their profile.",
      },
      {
        q: "Do I need to lose weight to treat PCOS?",
        a: "Even modest weight improvement can restore ovulation in some women, but treatment is individualized and not weight-shaming.",
      },
      {
        q: "Is PCOS linked to diabetes?",
        a: "PCOS increases risk of insulin resistance and type 2 diabetes. Regular screening and lifestyle management are important.",
      },
    ],
    relatedArticles: ["family-planning-contraception"],
    relatedTreatments: ["fertility-treatment", "gynecology-consultation"],
    relatedVideos: ["pcod-diagnostics-and-management"],
  },
  {
    slug: "gynecology-consultation",
    title: "Gynecology Consultation in Hyderabad",
    description:
      "General gynecology care — menstrual disorders, infections, menopause, and preventive women's health at Dr. Sulochana's Hospital, Madinaguda.",
    category: "Women's Health",
    heroImage: images.knowledge.bio,
    sections: [
      {
        title: "Complete Women's Health Care",
        body: "We address menstrual irregularities, pelvic pain, discharge, contraception, menopause symptoms, and routine preventive check-ups. Every concern is evaluated with respect and clinical thoroughness.",
      },
      {
        title: "Preventive Screening",
        body: "Pap smear guidance, breast examination counselling, and age-appropriate screening recommendations help detect problems early when treatment is most effective.",
      },
      {
        title: "Trusted Experience",
        body: `${doctor.name} has served Hyderabad families for over ${doctor.yearsExperience} years. Patients value clear explanations, conservative use of surgery when possible, and continuity of care.`,
      },
      {
        title: "Easy Access",
        body: "Located in Madinaguda near Ramakrishna Nagar, our hospital offers convenient appointments Monday through Saturday. Call or book online to schedule your visit.",
      },
    ],
    faqs: [
      {
        q: "What should I expect at a gynecology visit?",
        a: "Your doctor takes history, may perform examination or ultrasound, orders tests if needed, and explains treatment options clearly.",
      },
      {
        q: "How often should I have a gynecology check-up?",
        a: "Annual visits are recommended for most women, or sooner if you have symptoms or ongoing treatment.",
      },
      {
        q: "Do you treat menopause symptoms?",
        a: "Yes. We offer counselling on hormone therapy, non-hormonal options, and bone health when appropriate.",
      },
      {
        q: "Can I consult for a second opinion?",
        a: "Absolutely. Bring previous records and we will review your case with an independent clinical perspective.",
      },
    ],
    relatedArticles: ["family-planning-contraception"],
    relatedTreatments: ["pcos-management", "pregnancy-care"],
    relatedVideos: ["pcod-diagnostics-and-management"],
  },
  {
    slug: "high-risk-pregnancy",
    title: "High-Risk Pregnancy Care in Hyderabad",
    description:
      "Specialized monitoring for high-risk pregnancies — hypertension, diabetes, advanced maternal age, and previous complications at Dr. Sulochana's Hospital.",
    category: "Pregnancy",
    heroImage: images.knowledge.postnatal,
    sections: [
      {
        title: "What Makes a Pregnancy High-Risk",
        body: "Factors include maternal age over 35, hypertension, gestational diabetes, twins, previous preterm birth, placenta concerns, autoimmune conditions, or fetal growth restriction. Identification early allows closer monitoring.",
      },
      {
        title: "Advanced Monitoring",
        body: "High-risk care may include additional blood tests, serial ultrasounds, Doppler studies, non-stress tests, and coordinated referrals. Frequency of visits increases based on clinical need.",
      },
      {
        title: "Experienced Obstetric Leadership",
        body: "Dr. Sulochana Mortha has managed complex obstetric cases throughout her career. Our team prioritizes safety while keeping you informed at every stage of pregnancy.",
      },
      {
        title: "Planning for Safe Delivery",
        body: "Delivery timing and mode are planned in advance when possible. Hospital readiness, neonatal support, and postpartum follow-up are discussed as part of your care plan.",
      },
    ],
    faqs: [
      {
        q: "Does high-risk mean I cannot have a normal delivery?",
        a: "Not necessarily. Many high-risk pregnancies still deliver vaginally. The safest mode depends on ongoing assessment.",
      },
      {
        q: "How often will I need check-ups?",
        a: "Visit frequency is higher than routine pregnancies — often weekly or biweekly in the third trimester, sometimes more.",
      },
      {
        q: "Can I travel during a high-risk pregnancy?",
        a: "Travel advice depends on your condition and gestational age. Always consult your obstetrician before planning trips.",
      },
      {
        q: "When should I contact the hospital urgently?",
        a: "Call immediately for bleeding, severe headache, vision changes, reduced baby movements, sudden swelling, or severe abdominal pain.",
      },
    ],
    relatedArticles: ["investigations-during-pregnancy", "abdominal-pain-during-pregnancy"],
    relatedTreatments: ["pregnancy-care"],
    relatedVideos: [],
  },
];

export function getAllTreatments(): TreatmentContent[] {
  return treatments;
}

export function getAllTreatmentSlugs(): string[] {
  return treatments.map((treatment) => treatment.slug);
}

export function getTreatmentBySlug(slug: string): TreatmentContent | undefined {
  return treatments.find((treatment) => treatment.slug === slug);
}
