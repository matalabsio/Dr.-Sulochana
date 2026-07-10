import { doctor } from "@/content/doctor";
import { images } from "@/content/images";
import type { ArticleContent } from "@/content/types";

const author = doctor.name;
const publishedAt = "2025-01-15";

export const articles: ArticleContent[] = [
  {
    slug: "confirmation-of-pregnancy",
    title: "Confirmation of Pregnancy",
    description:
      "Understanding early signs, home tests, and when to schedule your first prenatal visit with a gynecologist in Hyderabad.",
    category: "Pregnancy",
    readTime: "5 min read",
    publishedAt,
    author,
    image: images.articles.maternityIllustration,
    body: [
      "Confirming pregnancy is an important first step in your prenatal journey. Many women notice missed periods, breast tenderness, fatigue, or nausea before taking a home pregnancy test. While home kits are convenient, a clinical confirmation helps establish an accurate timeline for scans, blood tests, and prenatal vitamins.",
      "At Dr. Sulochana's Hospital in Madinaguda, Hyderabad, we recommend scheduling your first visit once you have a positive home test or persistent early pregnancy symptoms. During this consultation, we review your medical history, confirm gestational age through clinical examination and ultrasound when appropriate, and discuss nutrition, supplements, and lifestyle adjustments for a healthy pregnancy.",
      "Early confirmation also helps identify high-risk factors such as previous miscarriages, thyroid disorders, diabetes, or advanced maternal age. Timely care in the first trimester supports better outcomes for both mother and baby.",
      "If you are planning a pregnancy or have just received a positive test, book a consultation to begin structured prenatal care with an experienced obstetric team.",
    ],
    faqs: [
      {
        q: "When should I take a pregnancy test?",
        a: "Most home tests are reliable from the first day of a missed period. Testing with first-morning urine can improve accuracy if your cycle is irregular.",
      },
      {
        q: "Do I need a blood test to confirm pregnancy?",
        a: "A urine test is often sufficient initially. Beta-hCG blood tests may be recommended if dates are unclear or if your doctor needs to monitor early pregnancy progression.",
      },
      {
        q: "When is the first prenatal visit recommended?",
        a: "Schedule within the first 6–8 weeks of pregnancy, or sooner if you have pain, bleeding, or a history of pregnancy complications.",
      },
      {
        q: "What happens at the first pregnancy consultation?",
        a: "Your doctor reviews history, confirms pregnancy, advises on supplements, discusses warning signs, and plans early scans and blood investigations.",
      },
    ],
    relatedArticles: ["investigations-during-pregnancy", "safe-medication-in-pregnancy"],
    relatedTreatments: ["pregnancy-care"],
    relatedVideos: ["prenatal-care-essentials"],
  },
  {
    slug: "investigations-during-pregnancy",
    title: "Investigations During Pregnancy",
    description:
      "Essential screenings and tests recommended at each stage of your pregnancy journey, explained by an experienced obstetrician.",
    category: "Pregnancy",
    readTime: "6 min read",
    publishedAt,
    author,
    image: images.articles.pregnancyConsultation,
    body: [
      "Prenatal investigations help monitor your health and your baby's development throughout pregnancy. The exact tests depend on your trimester, age, medical history, and any symptoms you report during visits.",
      "In the first trimester, common evaluations include blood grouping, hemoglobin, thyroid and sugar screening, infections panel, and an early ultrasound to confirm viability and due date. Second-trimester care often adds anomaly scans, double marker or quadruple tests where indicated, and glucose tolerance testing.",
      "Third-trimester monitoring focuses on fetal growth, amniotic fluid, placental health, and maternal blood pressure. Non-stress tests or Doppler studies may be advised in high-risk pregnancies.",
      "At Dr. Sulochana's Hospital, we tailor investigations to avoid unnecessary testing while ensuring nothing important is missed. Clear follow-up plans help you understand each result and next steps.",
    ],
    faqs: [
      {
        q: "Which blood tests are done in early pregnancy?",
        a: "Typical panels include complete blood count, blood group, thyroid function, blood sugar, and screening for infections such as HIV, hepatitis B, and syphilis as clinically indicated.",
      },
      {
        q: "What is an anomaly scan?",
        a: "It is a detailed ultrasound usually performed around 18–20 weeks to assess fetal anatomy and growth. It helps detect structural concerns early when further care can be planned.",
      },
      {
        q: "Is the glucose tolerance test mandatory?",
        a: "It is routinely recommended between 24–28 weeks to screen for gestational diabetes, which can affect both mother and baby if untreated.",
      },
      {
        q: "How often are scans needed?",
        a: "Most low-risk pregnancies need scans at key milestones. High-risk cases may require more frequent ultrasound and monitoring based on your obstetrician's advice.",
      },
    ],
    relatedArticles: ["confirmation-of-pregnancy", "abdominal-pain-during-pregnancy"],
    relatedTreatments: ["pregnancy-care", "high-risk-pregnancy"],
    relatedVideos: ["prenatal-care-essentials", "high-risk-pregnancy-care"],
  },
  {
    slug: "safe-medication-in-pregnancy",
    title: "Safe Medication Use in Pregnancy",
    description:
      "Guidance on which medicines are safe during pregnancy, what to avoid, and when to consult your doctor before taking any drug.",
    category: "Pregnancy",
    readTime: "7 min read",
    publishedAt,
    author,
    image: images.articles.clinicalVisit,
    body: [
      "Medication decisions during pregnancy should always involve your healthcare provider. Some drugs commonly used outside pregnancy are not safe in certain trimesters, while others may be necessary to protect maternal health.",
      "Paracetamol is generally considered safe for short-term pain or fever when used at recommended doses. Many antibiotics, antacids, and prenatal supplements are prescribed based on individual need. Herbal products and over-the-counter combinations should be avoided unless explicitly approved.",
      "If you have chronic conditions such as thyroid disease, epilepsy, hypertension, or diabetes, medication review before conception or early in pregnancy is essential. Stopping required medicines without guidance can be more harmful than continuing a carefully chosen treatment.",
      "Always inform your doctor about all tablets, injections, and supplements you take. At our Madinaguda clinic, we help you balance safety and symptom relief throughout each trimester.",
    ],
    faqs: [
      {
        q: "Can I take painkillers during pregnancy?",
        a: "Paracetamol is usually preferred for mild pain. NSAIDs such as ibuprofen should be avoided unless specifically prescribed for a limited period and stage.",
      },
      {
        q: "Are prenatal vitamins necessary?",
        a: "Folic acid and iron supplementation are commonly recommended. Your doctor may adjust doses based on blood reports and dietary intake.",
      },
      {
        q: "What should I do if I took medicine before knowing I was pregnant?",
        a: "Contact your obstetrician with the drug name, dose, and timing. Many exposures are manageable with early assessment and monitoring.",
      },
      {
        q: "Are Ayurvedic or herbal remedies safe?",
        a: "Not all natural products are safe in pregnancy. Discuss any remedy with your doctor before use to avoid harmful ingredients.",
      },
    ],
    relatedArticles: ["vomiting-during-pregnancy", "investigations-during-pregnancy"],
    relatedTreatments: ["pregnancy-care"],
    relatedVideos: ["prenatal-care-essentials"],
  },
  {
    slug: "abdominal-pain-during-pregnancy",
    title: "Managing Abdominal Pain During Pregnancy",
    description:
      "When abdominal discomfort is normal during pregnancy, warning signs to watch for, and when to seek urgent medical care.",
    category: "Pregnancy",
    readTime: "6 min read",
    publishedAt,
    author,
    image: images.articles.pregnancyConsultation,
    body: [
      "Mild abdominal stretching or cramping can occur as the uterus grows, especially in the first and second trimesters. Round ligament pain, constipation, and gas are common benign causes that often improve with rest, hydration, and dietary changes.",
      "However, not all abdominal pain is harmless. Severe or persistent pain, pain with bleeding, fever, vomiting, painful urination, or reduced fetal movements requires prompt evaluation. These symptoms may indicate infections, preterm labor, placental problems, or other conditions needing urgent care.",
      "Keeping track of when pain starts, its location, intensity, and associated symptoms helps your doctor assess risk quickly. Do not delay calling your obstetric team if you are unsure.",
      "Dr. Sulochana's Hospital provides pregnancy care with clear guidance on red-flag symptoms and 24/7 escalation pathways for high-risk patients.",
    ],
    faqs: [
      {
        q: "Is mild cramping normal in early pregnancy?",
        a: "Light cramping can be normal as the uterus expands. Severe pain, shoulder pain, or bleeding should be evaluated immediately to rule out ectopic pregnancy or miscarriage.",
      },
      {
        q: "What is round ligament pain?",
        a: "It is a sharp or pulling sensation on the sides of the lower abdomen, often with movement. It is usually benign but should be distinguished from other causes by your doctor.",
      },
      {
        q: "When should I go to the hospital for abdominal pain?",
        a: "Seek urgent care for severe pain, bleeding, fainting, high fever, persistent vomiting, or if you feel unwell and cannot reach your doctor.",
      },
      {
        q: "Can constipation cause pregnancy abdominal pain?",
        a: "Yes. Fiber-rich food, fluids, and doctor-approved stool softeners can help. Report severe or sudden pain rather than assuming it is only constipation.",
      },
    ],
    relatedArticles: ["vomiting-during-pregnancy", "investigations-during-pregnancy"],
    relatedTreatments: ["pregnancy-care", "high-risk-pregnancy"],
    relatedVideos: ["high-risk-pregnancy-care", "prenatal-care-essentials"],
  },
  {
    slug: "vomiting-during-pregnancy",
    title: "Vomiting During Pregnancy",
    description:
      "Managing morning sickness, hyperemesis gravidarum, and practical tips for relief and hydration during pregnancy.",
    category: "Pregnancy",
    readTime: "5 min read",
    publishedAt,
    author,
    image: images.articles.wellnessIllustration,
    body: [
      "Nausea and vomiting affect many women in early pregnancy. Symptoms often peak around 9–10 weeks and improve by the second trimester. Eating small frequent meals, avoiding strong odors, and staying hydrated can reduce discomfort for mild cases.",
      "Hyperemesis gravidarum is a more severe form involving persistent vomiting, weight loss, and dehydration. It requires medical assessment, intravenous fluids, electrolyte correction, and sometimes anti-emetic medication under supervision.",
      "Vomiting with abdominal pain, fever, blood, or inability to keep fluids down for more than 24 hours should not be managed at home alone. Early treatment prevents complications such as ketosis and kidney strain.",
      "Our team supports you with tailored dietary advice, safe medications when needed, and monitoring throughout pregnancy.",
    ],
    faqs: [
      {
        q: "How long does morning sickness usually last?",
        a: "Most women improve after the first trimester, though some experience symptoms longer. Persistent severe vomiting needs medical review.",
      },
      {
        q: "What can I eat when everything makes me nauseous?",
        a: "Try dry crackers, toast, bananas, or rice in small portions. Cold foods and ginger tea help some women. Avoid long gaps between meals.",
      },
      {
        q: "When is vomiting considered an emergency?",
        a: "Seek care if you cannot keep fluids down, feel dizzy, have dark urine, lose weight rapidly, or vomit blood.",
      },
      {
        q: "Are anti-sickness medicines safe in pregnancy?",
        a: "Certain medications are prescribed when benefits outweigh risks. Never self-medicate; use only what your obstetrician recommends.",
      },
    ],
    relatedArticles: ["safe-medication-in-pregnancy", "confirmation-of-pregnancy"],
    relatedTreatments: ["pregnancy-care"],
    relatedVideos: ["prenatal-care-essentials"],
  },
  {
    slug: "family-planning-contraception",
    title: "Family Planning & Contraception",
    description:
      "Options, benefits, and guidance for choosing the right contraceptive method for your health goals and lifestyle.",
    category: "Women's Health",
    readTime: "8 min read",
    publishedAt,
    author,
    image: images.articles.womensReproductiveHealth,
    body: [
      "Family planning helps you choose when to conceive and which contraceptive method fits your health, age, and future fertility goals. Options range from barrier methods and oral pills to intrauterine devices, injectables, and permanent sterilization.",
      "Hormonal contraceptives can regulate cycles and reduce pain in conditions such as PCOS, but they are not suitable for everyone. Your doctor considers blood pressure, clotting risk, breastfeeding status, and medical history before recommending a method.",
      "If you plan pregnancy within the next year, preconception counselling includes folic acid, vaccination review, and management of conditions like thyroid disease or diabetes. After delivery, contraceptive needs change and should be reassessed at postnatal visits.",
      "At Dr. Sulochana's Hospital, we provide confidential counselling on contraception, spacing between pregnancies, and transition planning when you are ready to conceive.",
    ],
    faqs: [
      {
        q: "Which contraceptive method is most effective?",
        a: "Long-acting methods such as IUDs and implants are among the most effective. Effectiveness also depends on correct and consistent use for pills and condoms.",
      },
      {
        q: "Can contraception affect future fertility?",
        a: "Most reversible methods do not cause long-term infertility. Fertility typically returns soon after stopping, though timing varies by method and individual health.",
      },
      {
        q: "Is contraception safe with PCOS?",
        a: "Many women with PCOS benefit from hormonal contraception for cycle regulation. Your doctor selects the safest option based on your metabolic and cardiovascular profile.",
      },
      {
        q: "When should I stop contraception before trying to conceive?",
        a: "This depends on the method used. A preconception visit helps you plan timing, supplements, and any needed investigations before pregnancy.",
      },
    ],
    relatedArticles: ["confirmation-of-pregnancy"],
    relatedTreatments: ["gynecology-consultation", "pcos-management"],
    relatedVideos: [
      "pcod-diagnostics-and-management",
      "pcos-and-fertility",
      "when-to-see-a-fertility-specialist",
      "iui-treatment-explained",
    ],
  },
  {
    slug: "when-to-seek-fertility-care",
    title: "When to Seek Fertility Care",
    description:
      "How to know when it is time for a fertility evaluation, what testing involves, and what to expect at your first specialist visit in Hyderabad.",
    category: "Fertility",
    readTime: "6 min read",
    publishedAt,
    author,
    image: images.articles.coupleFloor,
    body: [
      "Many couples wonder how long to try naturally before seeing a fertility specialist. In general, evaluation is recommended after 12 months of regular unprotected intercourse, or after 6 months if the woman is over 35. Earlier review is wise if you have irregular periods, known PCOS, previous pelvic surgery, or a history of miscarriage.",
      "A fertility assessment usually begins with a detailed history for both partners, menstrual tracking, and baseline blood tests. Women may need ovarian reserve testing and pelvic ultrasound; men typically have a semen analysis. These steps help identify whether ovulation, tubal factors, sperm quality, or hormonal conditions are involved.",
      "Treatment is not always IVF. Many couples conceive with lifestyle guidance, ovulation support, or IUI after a clear diagnosis. Understanding your results early prevents months of uncertainty and allows a realistic, stepwise plan.",
      "At Dr. Sulochana's Hospital in Madinaguda and GVK Health Hub, Jubilee Hills, we offer confidential counselling, explain each option in plain language, and tailor care to your age, diagnosis, and family goals.",
    ],
    faqs: [
      {
        q: "At what age should I consider fertility testing sooner?",
        a: "Women over 35 are often advised to seek evaluation after 6 months of trying, because egg quality and ovarian reserve change with age.",
      },
      {
        q: "Does my partner need tests too?",
        a: "Yes. Male factors contribute to roughly one-third of infertility cases, so semen analysis is an essential part of the workup.",
      },
      {
        q: "Can PCOS make it harder to conceive?",
        a: "PCOS can affect ovulation, but many women with PCOS conceive with lifestyle changes, medicines, or fertility treatment after proper assessment.",
      },
      {
        q: "What should I bring to a fertility consultation?",
        a: "Bring previous scan reports, hormone test results, semen analysis if available, menstrual history, and a list of medicines or supplements you take.",
      },
    ],
    relatedArticles: ["family-planning-contraception", "confirmation-of-pregnancy"],
    relatedTreatments: ["fertility-treatment", "pcos-management"],
    relatedVideos: [
      "when-to-see-a-fertility-specialist",
      "ivf-process-and-procedure",
      "causes-of-infertility-in-women",
    ],
  },
];

export function getAllArticles(): ArticleContent[] {
  return articles;
}

export function getAllArticleSlugs(): string[] {
  return articles.map((article) => article.slug);
}

export function getArticleBySlug(slug: string): ArticleContent | undefined {
  return articles.find((article) => article.slug === slug);
}
