export type LegalSection = {
  title: string;
  paragraphs: readonly string[];
};

export type LegalPageContent = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: readonly LegalSection[];
};

export const privacyPolicyContent: LegalPageContent = {
  title: "Privacy Policy",
  description:
    "How Dr. Sulochana's Hospital collects, uses, and protects your personal and health information when you visit our website or clinic in Madinaguda, Hyderabad.",
  lastUpdated: "July 2025",
  sections: [
    {
      title: "Introduction",
      paragraphs: [
        "Dr. Sulochana Mortha's Hospital (\"we\", \"our\", or \"the clinic\") respects your privacy. This policy explains how we handle information when you use our website, book appointments, or receive care at our Madinaguda facility.",
        "By using this website or submitting an appointment request, you agree to the practices described below. This policy is intended for patients and visitors in India and should be read alongside applicable medical privacy regulations.",
      ],
    },
    {
      title: "Information We Collect",
      paragraphs: [
        "We may collect your name, phone number, email address, preferred appointment date, consultation type, and any message you provide through our contact or appointment forms.",
        "When you visit our clinic, we maintain medical records as required for lawful clinical care, including history, examination findings, investigations, prescriptions, and treatment plans.",
        "Our website may collect limited technical data such as browser type, device information, and pages visited through analytics tools (for example Google Analytics or Microsoft Clarity) when enabled in production.",
      ],
    },
    {
      title: "How We Use Your Information",
      paragraphs: [
        "We use contact and appointment details to respond to enquiries, schedule consultations, and coordinate follow-up care.",
        "Clinical information is used solely to provide safe, appropriate medical treatment and to maintain accurate health records.",
        "Aggregated, non-identifying website analytics help us improve site performance and understand which health topics visitors find useful.",
      ],
    },
    {
      title: "Sharing and Disclosure",
      paragraphs: [
        "We do not sell your personal or health information. We may share data with laboratories, imaging centres, or referral hospitals only when necessary for your care and with appropriate safeguards.",
        "We may disclose information when required by law, court order, or statutory public-health reporting obligations.",
      ],
    },
    {
      title: "Data Security and Retention",
      paragraphs: [
        "We apply reasonable administrative and technical measures to protect information against unauthorized access, alteration, or disclosure.",
        "Medical records are retained in accordance with applicable clinical and legal requirements. Website enquiry data is kept only as long as needed to fulfil the request or maintain business records.",
      ],
    },
    {
      title: "Your Rights and Contact",
      paragraphs: [
        "You may request access to, correction of, or clarification about personal information we hold, subject to clinical and legal constraints on medical records.",
        "To exercise these rights or ask questions about this policy, contact us at care@drsulochana.com or call 098498 61089. Our clinic address is Plot No. 1-99/4/C/20, Ramakrishna Nagar, Madinaguda, Hyderabad, Telangana 500049.",
      ],
    },
  ],
};

export const termsContent: LegalPageContent = {
  title: "Terms of Use",
  description:
    "Terms governing use of the Dr. Sulochana Mortha website and online appointment requests. Medical content is for general information only.",
  lastUpdated: "July 2025",
  sections: [
    {
      title: "Acceptance of Terms",
      paragraphs: [
        "By accessing drsulochana.online or related pages operated by Dr. Sulochana's Hospital, you agree to these Terms of Use. If you do not agree, please do not use the website.",
      ],
    },
    {
      title: "Medical Information Disclaimer",
      paragraphs: [
        "Content on this website—including articles, videos, treatment pages, and FAQs—is provided for general educational purposes only. It does not constitute medical advice, diagnosis, or treatment.",
        "Always seek the advice of a qualified healthcare provider for questions about your health or before starting or changing any treatment. Never disregard professional medical advice because of something you read on this site.",
        "In a medical emergency, contact emergency services or visit the nearest hospital immediately.",
      ],
    },
    {
      title: "Appointments and Communications",
      paragraphs: [
        "Submitting an online appointment request or WhatsApp message does not guarantee a confirmed slot until our team acknowledges your booking.",
        "We strive to respond promptly but cannot guarantee response times outside published clinic hours.",
      ],
    },
    {
      title: "Intellectual Property",
      paragraphs: [
        "Text, illustrations, branding, and layout on this website are owned by or licensed to Dr. Sulochana's Hospital unless otherwise stated. You may not copy, reproduce, or distribute site content for commercial purposes without prior written permission.",
      ],
    },
    {
      title: "Third-Party Links",
      paragraphs: [
        "Our website may link to external platforms such as Practo, YouTube, or mapping services. We are not responsible for the content or privacy practices of third-party websites.",
      ],
    },
    {
      title: "Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, Dr. Sulochana's Hospital is not liable for any direct or indirect damages arising from use of this website, reliance on its content, or temporary unavailability of the site.",
      ],
    },
    {
      title: "Changes and Governing Law",
      paragraphs: [
        "We may update these terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
        "These terms are governed by the laws of India. Disputes shall be subject to the courts of Hyderabad, Telangana.",
        "For questions about these terms, contact care@drsulochana.com or call 098498 61089.",
      ],
    },
  ],
};
