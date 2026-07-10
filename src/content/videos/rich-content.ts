import type { FaqItem } from "@/content/types";

/** Full summary + FAQ overrides for videos with expanded on-site content */
export type VideoRichContent = {
  slug: string;
  summary: string[];
  faqs: FaqItem[];
  relatedArticles?: string[];
  relatedTreatments?: string[];
  relatedVideos?: string[];
};

export const videoRichContent: VideoRichContent[] = [
  {
    slug: "pcod-diagnostics-and-management",
    summary: [
      "Polycystic ovarian disease (PCOD), also referred to as PCOS, is one of the most common hormonal conditions affecting women of reproductive age. It can influence menstrual regularity, weight, skin health, and fertility. Early diagnosis helps prevent long-term metabolic complications and supports better pregnancy outcomes.",
      "In this public awareness segment, Dr. Sulochana Mortha discusses how PCOD is evaluated through clinical history, physical examination, ultrasound findings, and blood tests including hormonal and metabolic markers. Not every woman with irregular periods has PCOS, which is why structured assessment matters before starting treatment.",
      "Management is individualized. Lifestyle changes involving nutrition, physical activity, and weight optimization form the foundation of care. Medications may be used to regulate cycles, reduce androgen-related symptoms, or support ovulation when trying to conceive. Long-term monitoring of blood sugar, lipids, and blood pressure is important for many patients.",
      "Women with PCOD who wish to become pregnant benefit from preconception planning. Timely referral to a fertility specialist can reduce delays in treatment and improve the chance of natural or assisted conception.",
      "If you have irregular cycles, excess hair growth, acne, weight gain, or difficulty conceiving, schedule a gynecology consultation for a complete evaluation and personalized treatment plan at Dr. Sulochana's Hospital, Madinaguda.",
    ],
    faqs: [
      {
        q: "What is the difference between PCOD and PCOS?",
        a: "The terms are often used interchangeably. Both describe a spectrum of ovarian and hormonal imbalance. Your doctor confirms diagnosis using clinical criteria, not ultrasound alone.",
      },
      {
        q: "Can PCOD be cured completely?",
        a: "PCOD is a chronic condition that can be managed effectively with lifestyle, medication, and monitoring. Many women achieve regular cycles and successful pregnancies with proper care.",
      },
      {
        q: "Does PCOD always cause infertility?",
        a: "Not always. Some women conceive naturally. Others may need ovulation support or fertility treatments. Early evaluation improves planning.",
      },
      {
        q: "Which tests are needed for PCOD diagnosis?",
        a: "Common tests include pelvic ultrasound, testosterone and other hormone levels, thyroid function, prolactin, and glucose or insulin assessment when indicated.",
      },
      {
        q: "When should I see a specialist for PCOD?",
        a: "See a gynecologist if you have irregular periods for several months, failed to conceive after 6–12 months of trying, or symptoms affecting quality of life.",
      },
    ],
    relatedArticles: ["family-planning-contraception"],
    relatedTreatments: ["pcos-management", "fertility-treatment", "gynecology-consultation"],
    relatedVideos: ["when-to-see-a-fertility-specialist", "understanding-ivf-treatment", "pcos-and-fertility"],
  },
  {
    slug: "understanding-ivf-treatment",
    summary: [
      "In-vitro fertilization (IVF) is an assisted reproductive technology that helps couples conceive when natural methods or simpler treatments have not succeeded. IVF involves stimulating the ovaries to produce multiple eggs, retrieving those eggs, fertilizing them in the laboratory, and transferring a selected embryo into the uterus.",
      "IVF may be recommended for blocked fallopian tubes, severe male factor infertility, diminished ovarian reserve, endometriosis, unexplained infertility, or when intrauterine insemination (IUI) has not worked. Age, ovarian reserve, and previous treatment history guide whether IVF is the right next step.",
      "A typical IVF cycle includes ovarian stimulation with injectable medications, monitoring through blood tests and ultrasound, egg retrieval under sedation, fertilization using standard IVF or ICSI when sperm quality requires it, embryo culture, and embryo transfer. Additional embryos may be frozen for future attempts.",
      "Success rates depend on age, egg quality, sperm parameters, uterine health, and laboratory standards. Realistic counselling before starting treatment helps couples prepare emotionally, financially, and medically.",
      "Dr. Sulochana Mortha brings decades of experience in reproductive medicine at Dr. Sulochana's Hospital and associated fertility centres in Hyderabad. If you are considering IVF, book a consultation to review your history, investigations, and a personalized treatment roadmap.",
    ],
    faqs: [
      {
        q: "How long does one IVF cycle take?",
        a: "From start of stimulation to embryo transfer usually takes about 4–6 weeks, depending on protocol and monitoring response.",
      },
      {
        q: "Is IVF painful?",
        a: "Daily injections may cause mild discomfort. Egg retrieval is performed under anaesthesia, so pain during the procedure is minimal for most patients.",
      },
      {
        q: "What is the success rate of IVF?",
        a: "Success varies by age and clinical factors. Your doctor provides individualized estimates after reviewing ovarian reserve and semen analysis.",
      },
      {
        q: "How many IVF cycles might I need?",
        a: "Some couples succeed in the first cycle; others require multiple attempts. A frank discussion about cumulative success helps set expectations.",
      },
      {
        q: "When should we consider IVF instead of IUI?",
        a: "IVF is often advised after failed IUI, tubal blockage, severe male factor, or when age and ovarian reserve suggest the need for faster intervention.",
      },
    ],
    relatedArticles: ["family-planning-contraception"],
    relatedTreatments: ["fertility-treatment"],
    relatedVideos: ["when-to-see-a-fertility-specialist", "ivf-process-and-procedure", "failed-ivf-what-next"],
  },
  {
    slug: "when-to-see-a-fertility-specialist",
    summary: [
      "Many couples wonder how long they should try naturally before seeking fertility help. General guidance suggests consulting a specialist if you have been trying for 12 months without success, or after 6 months if the woman is over 35, or sooner if there are known issues such as irregular periods, previous pelvic surgery, or abnormal semen analysis.",
      "A fertility evaluation usually begins with a detailed history for both partners, cycle tracking, ovarian reserve testing, hormonal profiles, ultrasound assessment, and semen analysis. These investigations identify whether the issue relates to ovulation, tubal factors, uterine conditions, or male factor infertility.",
      "Treatment is stepwise. Lifestyle optimization and timed intercourse may be sufficient for some couples. Others benefit from ovulation induction with oral or injectable medications, IUI, or IVF depending on diagnosis and age. The goal is to use the least invasive effective option first while not delaying necessary advanced care.",
      "Emotional support matters throughout the journey. Clear communication about timelines, costs, and success probabilities helps couples make informed decisions without unnecessary stress.",
      "At Dr. Sulochana's Hospital in Madinaguda, Hyderabad, we provide fertility assessments and coordinate advanced reproductive care when needed. Book a consultation if you are planning pregnancy or have concerns about conception.",
    ],
    faqs: [
      {
        q: "At what age does female fertility decline significantly?",
        a: "Fertility gradually declines after the mid-30s and more sharply after 40. Earlier evaluation is recommended if you plan pregnancy at an older age.",
      },
      {
        q: "Should both partners be evaluated?",
        a: "Yes. Male factor contributes to a significant share of infertility cases. Semen analysis is a standard part of the initial workup.",
      },
      {
        q: "What if my periods are irregular?",
        a: "Irregular cycles may indicate ovulation problems such as PCOS or thyroid imbalance. Do not wait 12 months before seeking assessment.",
      },
      {
        q: "Can lifestyle changes improve fertility?",
        a: "Healthy weight, balanced nutrition, avoiding smoking and excess alcohol, and managing stress can improve outcomes, especially in mild cases.",
      },
      {
        q: "What should I bring to my first fertility visit?",
        a: "Bring previous reports, menstrual history, list of medications, and any prior treatment records. Both partners should attend when possible.",
      },
    ],
    relatedArticles: ["family-planning-contraception"],
    relatedTreatments: ["fertility-treatment", "pcos-management"],
    relatedVideos: ["understanding-ivf-treatment", "causes-of-infertility-in-women", "male-factor-infertility"],
  },
];

const richBySlug = new Map(videoRichContent.map((item) => [item.slug, item]));

export function getVideoRichContent(slug: string): VideoRichContent | undefined {
  return richBySlug.get(slug);
}
