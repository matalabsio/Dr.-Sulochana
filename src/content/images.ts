/**
 * Site assets — single source of truth
 *
 * Deployed files live under `public/` only:
 *   public/brand/          — logo, favicon
 *   public/illustrations/  — official vector illustrations
 *
 * Original design files (reference, not served):
 *   Dr Sulochana website Illustrations/
 */

/** Public URL paths (served from /public) */
export const assetPaths = {
  brand: {
    logo: "/brand/logo.png",
    favicon: "/brand/favicon.svg",
  },
  illustrations: {
    pregnantCouple: "/illustrations/pregnant-couple.png",
    meditatingWoman: "/illustrations/meditating-woman.png",
    coupleNewborn: "/illustrations/couple-newborn.png",
    pregnantWomanOrange: "/illustrations/pregnant-woman-orange.png",
    coupleFloor: "/illustrations/couple-floor.png",
    pregnantWomanTeal: "/illustrations/pregnant-woman-teal.png",
    heroCouple: "/illustrations/image.png",
  },
} as const;

/**
 * Maps source filenames in `Dr Sulochana website Illustrations/`
 * to deployed paths in `public/illustrations/`.
 */
export const illustrationSourceMap = {
  "Pregnant_Couple_young_Indian_couple_woman_7_months_pregnant_w_ae652074-5fb8-4835-825c-b109bd87e7f4_1.png":
    assetPaths.illustrations.pregnantCouple,
  "Meditating_Woman_Illustration_flat_vector_illustration_young__e0b66554-56e4-4d68-9d8b-ba4a0a5e42e5_1.png":
    assetPaths.illustrations.meditatingWoman,
  "Couple_with_Newborn_flat_vector_illustration_Indian_man_cradl_1c4ea332-a465-486e-89cc-11bf6c11396b_1.png":
    assetPaths.illustrations.coupleNewborn,
  "Pregnant_Woman_Illustration_orange_outfit_flat_vector_illustr_d7426621-6966-41f8-8aef-f2bef89dbd76_2.png":
    assetPaths.illustrations.pregnantWomanOrange,
  "Couple_on_Floor_flat_vector_illustration_Indian_couple_sittin_259a3823-f7e4-444a-ab74-9afe4e5ecf11_1.png":
    assetPaths.illustrations.coupleFloor,
  "Pregnant_Woman_top_right_flat_vector_illustration_pregnant_In_6adbfc06-0b51-4a3b-ae71-8333856bd947_0.png":
    assetPaths.illustrations.pregnantWomanTeal,
} as const;

const ill = assetPaths.illustrations;

/** Semantic image slots used across the site */
export const images = {
  brand: assetPaths.brand,

  ...ill,

  /** Hero — expectant couple */
  heroLocal: ill.heroCouple,
  /** Hero floating accents */
  heroAccentIllustration: ill.pregnantWomanTeal,
  heroAccentMeditation: ill.meditatingWoman,
  /** Landing section decorative illustrations */
  landingMaternity: ill.pregnantWomanOrange,
  landingWellness: ill.meditatingWoman,
  /** Services page hero */
  servicesHeroIllustration: ill.meditatingWoman,
  /** Trust section — couple illustration */
  trustCouple: ill.coupleFloor,

  hero: ill.heroCouple,
  cta: ill.coupleFloor,
  doctorPortrait: ill.pregnantCouple,
  clinic: ill.heroCouple,
  motherhood: ill.coupleNewborn,
  contactMap: ill.pregnantCouple,
  fertilityDecor: ill.coupleFloor,

  conception: {
    fertilityEval: ill.coupleFloor,
    art: ill.pregnantWomanTeal,
    donor: ill.pregnantCouple,
    preservation: ill.meditatingWoman,
    preconception: ill.coupleFloor,
    knowledge1: ill.coupleNewborn,
    knowledge2: ill.pregnantWomanOrange,
    knowledge3: ill.pregnantWomanTeal,
  },

  articles: {
    pregnancyConsultation: ill.pregnantCouple,
    maternityIllustration: ill.pregnantWomanOrange,
    clinicalVisit: ill.pregnantWomanTeal,
    wellnessIllustration: ill.meditatingWoman,
    womensReproductiveHealth: ill.pregnantWomanTeal,
    coupleFloor: ill.coupleFloor,
    coupleNewborn: ill.coupleNewborn,
  },

  knowledge: {
    ivf: ill.pregnantWomanTeal,
    nutrition: ill.meditatingWoman,
    postnatal: ill.coupleNewborn,
    featured: ill.pregnantCouple,
    bio: ill.pregnantWomanTeal,
    community: ill.coupleFloor,
    morning: ill.meditatingWoman,
  },

  landing: {
    family: ill.pregnantCouple,
    testimonialFeature: ill.coupleNewborn,
    specialist1: ill.pregnantCouple,
    specialist2: ill.pregnantWomanTeal,
    specialist3: ill.coupleFloor,
    specialist4: ill.pregnantWomanOrange,
  },
} as const;
