import type { SiteLanguageCode } from "@/content/languages";

export type { SiteLanguageCode };

export type SiteMessages = {
  common: {
    bookAppointment: string;
    callNow: string;
    exploreServices: string;
    learnMore: string;
    yearsExperience: string;
    familiesServed: string;
    babiesBorn: string;
    patientSatisfaction: string;
    heroMetricPatient: string;
    heroTreatments: string;
    coreSpecialties: string;
    readFullStory: string;
    viewAllServices: string;
    learnMoreAbout: string;
    getDirections: string;
    scheduleConsultation: string;
    submitAnotherRequest: string;
    subscribe: string;
    enterEmail: string;
    readStories: string;
    learnMoreLink: string;
    viewAll: string;
    readArticle: string;
    newsletterLabel: string;
    newsletterSuccess: string;
  };
  nav: {
    home: string;
    treatments: string;
    allTreatments: string;
    ivfIcsi: string;
    iui: string;
    eggFreezing: string;
    about: string;
    aboutUs: string;
    meetSpecialists: string;
    successStories: string;
    resources: string;
    knowledgeCenter: string;
    patientStories: string;
    contactUs: string;
    contact: string;
  };
  hero: {
    trustBadge: string;
    headlineLine1: string;
    headlineLine2: string;
    headlineLine3Lead: string;
    headlineLine3Tail: string;
    headlineLine4: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  trustStory: {
    missionBadge: string;
    missionTitle: string;
    missionSubtitle: string;
    missionPrimaryCta: string;
    missionSecondaryCta: string;
    aboutBadge: string;
    aboutTitle: string;
    aboutBody: string;
    partnersTitle: string;
    pillars: { title: string; desc: string }[];
    expertise: { title: string; desc: string }[];
  };
  whyChoose: {
    eyebrow: string;
    title: string;
    items: { title: string; desc: string }[];
  };
  journey: {
    badge: string;
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    viewAllLabel: string;
    trustBadges: string[];
    cards: { label: string; headline: string; desc: string }[];
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    viewAllStories: string;
    slides: { quote: string; designation: string }[];
  };
  testimonialMarquee: {
    ariaLabel: string;
    items: string[];
  };
  knowledge: {
    badge: string;
    title: string;
    subtitle: string;
    articles: { title: string; desc: string; category: string }[];
    newsletterTitle: string;
    newsletterSubtitle: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    items: { q: string; a: string }[];
  };
  preFooter: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    mission: string;
    company: string;
    resources: string;
    services: string;
    legal: string;
    contact: string;
    about: string;
    successStories: string;
    careers: string;
    blogs: string;
    expertVideos: string;
    practoReviews: string;
    skedocProfile: string;
    faqs: string;
    fertilityConception: string;
    pregnancyCare: string;
    pcosManagement: string;
    gynecologyConsultation: string;
    highRiskPregnancy: string;
    fibroidsTreatment: string;
    menopauseManagement: string;
    normalDelivery: string;
    cSectionCare: string;
    womensHealth: string;
    pediatricCare: string;
    privacyPolicy: string;
    terms: string;
    accessibility: string;
    copyright: string;
    trustBadges: string[];
    hours: string[];
    emergency: string;
  };
  fertilityPage: {
    hero: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      subtitle: string;
      intro: string;
      primaryCta: string;
      callCta: string;
    };
    coreTreatments: {
      eyebrow: string;
      title: string;
      evaluationTitle: string;
      evaluationDesc: string;
      lowTechLabel: string;
      highTechLabel: string;
      preservationLabel: string;
      iuiTitle: string;
      iuiDesc: string;
      ivfTitle: string;
      ivfDesc: string;
      icsiNote: string;
      eggFreezingTitle: string;
      eggFreezingDesc: string;
    };
    framework: {
      eyebrow: string;
      title: string;
      steps: { title: string; summary: string; desc: string }[];
      transferNote: string;
      freezingNote: string;
    };
    diagnosticCta: {
      text: string;
      linkText: string;
    };
    locations: {
      eyebrow: string;
      title: string;
      intro: string;
      primaryClinic: {
        name: string;
        tagline: string;
        address: string;
        fee: string;
        hours: string;
        bookingLabel: string;
      };
      secondaryClinic: {
        name: string;
        tagline: string;
        phones: string;
        address: string;
        fee: string;
        hours: string;
        bookingLabel: string;
      };
      footerQuestion: string;
    };
    listSection: {
      eyebrow: string;
      title: string;
      subtitle: string;
      bookConsultation: string;
    };
    midCta: {
      eyebrow: string;
      title: string;
      subtitle: string;
      primaryCta: string;
      callCta: string;
    };
    knowledge: {
      eyebrow: string;
      title: string;
      subtitle: string;
      viewAll: string;
      articles: { title: string; desc: string; category: string }[];
      readArticle: string;
    };
    reviews: {
      eyebrow: string;
      title: string;
      subtitle: string;
      viewAll: string;
      items: { name: string; time: string; text: string }[];
    };
    trustBadges: string[];
  };
  testimonialsPage: {
    badge: string;
    title: string;
    subtitle: string;
    metrics: string[];
    featuredStories: { names: string; quote: string; cta: string; imageAlt: string }[];
    slides: { name: string; quote: string; designation: string }[];
    videoSectionTitle: string;
    watchStory: string;
    videos: { name: string; journey: string }[];
  };
  knowledgePage: {
    header: {
      badge: string;
      title: string;
      subtitle: string;
    };
    featured: {
      badge: string;
      readTime: string;
      author: string;
    };
    expertReviewed: string;
    articles: { title: string; desc: string; category: string }[];
    videos: {
      eyebrow: string;
      title: string;
      subtitle: string;
      badge: string;
      watchCta: string;
      viewAllYoutube: string;
    };
  };
  aboutPage: {
    heroTitle: string;
    philosophy: {
      quote: string;
      attribution: string;
    };
    aboutLead: string;
    aboutDetail: string;
    appointmentNote: string;
    milestones: {
      eyebrow: string;
      title: string;
      items: { title: string; description: string }[];
    };
    credentials: {
      specializations: string;
      education: string;
      experience: string;
      commonReasons: string;
      registrations: string;
      items: {
        specializations: string[];
        education: string[];
        experience: string[];
        commonReasons: string[];
        registrations: string[];
      };
    };
    clinicLocations: {
      eyebrow: string;
      title: string;
      subtitle: string;
      feeLabel: string;
      timingLabel: string;
      phoneLabel: string;
      bookOnline: string;
      directions: string;
    };
    clinic: {
      sectionTitle: string;
      body: string;
      locationLabel: string;
      callToBook: string;
      bookAppointment: string;
      callAriaLabel: string;
      imageAlt: string;
    };
    publicMedia: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: { title: string; description: string; source: string }[];
    };
    medicalPortals: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: { title: string; description: string; source: string }[];
    };
  };
  contact: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    formTitle: string;
    formSubtitle: string;
    formSubmitLabel: string;
    formWhatsAppHint: string;
    formNameLabel: string;
    formPhoneLabel: string;
    formEmailLabel: string;
    formTypeLabel: string;
    formDateLabel: string;
    formMessageLabel: string;
    formNamePlaceholder: string;
    formPhonePlaceholder: string;
    formEmailPlaceholder: string;
    formMessagePlaceholder: string;
    formSuccessTitle: string;
    formSuccessMessage: string;
    visitTitle: string;
    directionsLabel: string;
    hoursTitle: string;
    contactInfoTitle: string;
    trustTitle: string;
    trustItems: string[];
    emergencyTitle: string;
    emergencyBody: string;
    faqEyebrow: string;
    faqTitle: string;
    faqs: { q: string; a: string }[];
    closingTitle: string;
    closingSubtitle: string;
    consultationTypes: string[];
    hours: string[];
  };
};
