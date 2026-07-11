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
    title: "Gynecologist in Hyderabad — Women's Health Consultation",
    description:
      "Book a gynecology consultation at Dr. Sulochana's Hospital (Sulochana Hospital), Madinaguda. Expert gynecologist for menstrual disorders, PCOS, menopause, and preventive women's health.",
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
  {
    slug: "fibroids",
    title: "Fibroids Treatment in Hyderabad",
    description:
      "Expert evaluation and management of uterine fibroids — medical therapy, monitoring, and surgical planning at Dr. Sulochana's Hospital, Madinaguda.",
    category: "Women's Health",
    heroImage: images.articles.womensReproductiveHealth,
    sections: [
      {
        title: "Understanding Uterine Fibroids",
        body: "Fibroids are non-cancerous growths in the uterus that may cause heavy periods, pelvic pressure, pain, or fertility concerns. Many women have fibroids without symptoms, while others need active management based on size, location, and reproductive goals.",
      },
      {
        title: "Diagnosis and Monitoring",
        body: "We evaluate symptoms, perform clinical examination, and use pelvic ultrasound or other imaging when needed. Regular monitoring helps determine whether conservative management is appropriate or if intervention is required.",
      },
      {
        title: "Treatment Options",
        body: "Treatment may include medications to control bleeding, hormonal therapies, or surgical options such as myomectomy or hysterectomy when indicated. Plans are individualized — preserving fertility is prioritized when that is your goal.",
      },
      {
        title: "When to Seek Care",
        body: "Book a consultation if you have heavy or prolonged periods, anemia, pelvic pain, difficulty conceiving, or a known fibroid that is growing. Early specialist input helps avoid complications and unnecessary worry.",
      },
    ],
    faqs: [
      {
        q: "Are all fibroids treated with surgery?",
        a: "No. Many fibroids are managed with observation or medication. Surgery is considered when symptoms significantly affect quality of life or fertility.",
      },
      {
        q: "Can I get pregnant with fibroids?",
        a: "Many women conceive successfully. Size and location matter — submucosal fibroids may affect implantation and are often treated before pregnancy planning.",
      },
      {
        q: "What tests diagnose fibroids?",
        a: "Pelvic examination and transvaginal ultrasound are most common. MRI or hysteroscopy may be advised for complex cases.",
      },
      {
        q: "Do fibroids turn into cancer?",
        a: "Uterine fibroids are benign. Rapid growth or unusual features may warrant further evaluation, but cancer transformation is rare.",
      },
    ],
    relatedArticles: ["family-planning-contraception"],
    relatedTreatments: ["gynecology-consultation", "pregnancy-care"],
    relatedVideos: ["womens-health-and-wellness"],
  },
  {
    slug: "menopause",
    title: "Menopause Management in Hyderabad",
    description:
      "Personalized menopause care — hot flashes, sleep changes, bone health, and hormone therapy counselling at Dr. Sulochana's Hospital.",
    category: "Women's Health",
    heroImage: images.knowledge.morning,
    sections: [
      {
        title: "Navigating Menopause",
        body: "Menopause marks the end of menstrual cycles and brings hormonal changes that can affect sleep, mood, metabolism, bone density, and cardiovascular health. Symptoms vary widely — some women need minimal support, others benefit from structured medical care.",
      },
      {
        title: "Symptom Assessment",
        body: "We review hot flashes, night sweats, vaginal dryness, mood changes, weight shifts, and sleep disruption. Associated conditions such as thyroid disorders or anemia are excluded before planning treatment.",
      },
      {
        title: "Treatment and Lifestyle Support",
        body: "Options include lifestyle counselling, non-hormonal medications, localized estrogen therapies, and systemic hormone replacement when clinically appropriate. Bone health and cardiovascular risk are discussed as part of long-term wellness.",
      },
      {
        title: "Ongoing Follow-Up",
        body: "Menopause care is not a one-time visit. We adjust treatment as symptoms evolve and recommend periodic screening aligned with your age and medical history.",
      },
    ],
    faqs: [
      {
        q: "At what age does menopause usually begin?",
        a: "The average age is around 51 in India, but perimenopause can start years earlier with irregular cycles and symptoms.",
      },
      {
        q: "Is hormone therapy safe?",
        a: "For many healthy women, short-term hormone therapy relieves symptoms effectively. Risks and benefits are individualized based on age, history, and symptom severity.",
      },
      {
        q: "Can menopause affect bone health?",
        a: "Yes. Declining estrogen increases osteoporosis risk. Calcium, vitamin D, weight-bearing exercise, and screening are important.",
      },
      {
        q: "Do I still need gynecology check-ups after menopause?",
        a: "Yes. Preventive screening, pelvic health, and any postmenopausal bleeding should be evaluated promptly.",
      },
    ],
    relatedArticles: ["family-planning-contraception"],
    relatedTreatments: ["gynecology-consultation"],
    relatedVideos: ["womens-health-and-wellness"],
  },
  {
    slug: "normal-delivery",
    title: "Normal Delivery in Hyderabad",
    description:
      "Childbirth preparation, labor support, and vaginal delivery planning with an experienced obstetric team at Dr. Sulochana's Hospital.",
    category: "Pregnancy",
    heroImage: images.motherhood,
    sections: [
      {
        title: "Preparing for Vaginal Birth",
        body: "Normal delivery is the goal for many low-risk pregnancies. Antenatal visits build confidence, address fears, and prepare you for labor signs, pain management options, and hospital admission.",
      },
      {
        title: "Labor and Delivery Support",
        body: "Our obstetric team monitors fetal wellbeing, guides progression through labor, and supports informed decisions about pain relief, positions, and timing of interventions only when medically necessary.",
      },
      {
        title: "Recovery After Birth",
        body: "Postpartum care includes monitoring for bleeding, breastfeeding support, wound care if episiotomy was needed, and guidance on rest, nutrition, and when to resume activity.",
      },
      {
        title: "Who Can Plan for Normal Delivery",
        body: "Most uncomplicated pregnancies are suitable for vaginal birth. Previous cesarean does not always exclude it — discuss VBAC eligibility with your obstetrician during antenatal visits.",
      },
    ],
    faqs: [
      {
        q: "How do I know labor has started?",
        a: "Regular painful contractions, breaking of waters, or bleeding require assessment. Contact the hospital when contractions are sustained or if you are unsure.",
      },
      {
        q: "Is pain relief available during normal delivery?",
        a: "Yes. Options include breathing techniques, epidural analgesia, and other methods depending on hospital facilities and clinical suitability.",
      },
      {
        q: "How long does labor usually last?",
        a: "First labors often take longer. Duration varies widely; your team monitors progress and intervenes only when needed for safety.",
      },
      {
        q: "When is cesarean recommended instead?",
        a: "Fetal distress, placenta concerns, breech presentation, or failure to progress may necessitate cesarean. The decision is made collaboratively when safety requires it.",
      },
    ],
    relatedArticles: ["confirmation-of-pregnancy", "investigations-during-pregnancy"],
    relatedTreatments: ["pregnancy-care", "high-risk-pregnancy"],
    relatedVideos: ["prenatal-care-essentials"],
  },
  {
    slug: "c-section",
    title: "C-Section Care in Hyderabad",
    description:
      "Planned and emergency cesarean delivery, recovery guidance, and scar care with experienced obstetric support at Dr. Sulochana's Hospital.",
    category: "Pregnancy",
    heroImage: images.knowledge.postnatal,
    sections: [
      {
        title: "When Cesarean Is Recommended",
        body: "Cesarean section may be planned for breech presentation, placenta previa, previous cesarean, or maternal conditions. Emergency cesarean is performed when vaginal delivery poses risk to mother or baby during labor.",
      },
      {
        title: "What to Expect",
        body: "Preoperative counselling covers anesthesia, timing, and hospital stay. The procedure is performed in a sterile operating environment with neonatal support ready at delivery.",
      },
      {
        title: "Recovery and Wound Care",
        body: "Postoperative care focuses on pain control, early mobilization, infection prevention, and breastfeeding initiation. Incision healing is monitored at follow-up visits.",
      },
      {
        title: "Future Pregnancies",
        body: "We discuss interval between pregnancies, scar integrity, and whether vaginal birth after cesarean (VBAC) may be an option in subsequent pregnancies.",
      },
    ],
    faqs: [
      {
        q: "How long is hospital stay after C-section?",
        a: "Most mothers stay 2–4 days depending on recovery, pain control, and baby's health.",
      },
      {
        q: "Is cesarean more painful than normal delivery?",
        a: "Pain patterns differ. Cesarean recovery involves incision healing; effective pain medication and early movement aid recovery.",
      },
      {
        q: "When can I drive or exercise after C-section?",
        a: "Timelines vary. Light activity may resume within weeks; strenuous exercise and driving typically wait until your obstetrician confirms healing.",
      },
      {
        q: "Can I breastfeed after cesarean?",
        a: "Yes. Skin-to-skin contact and breastfeeding are encouraged as soon as you are comfortable, often within hours of delivery.",
      },
    ],
    relatedArticles: ["safe-medication-in-pregnancy", "investigations-during-pregnancy"],
    relatedTreatments: ["pregnancy-care", "high-risk-pregnancy", "normal-delivery"],
    relatedVideos: ["high-risk-pregnancy-care", "prenatal-care-essentials"],
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
