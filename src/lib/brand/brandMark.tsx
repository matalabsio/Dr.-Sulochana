/** Figma Color styles — vamshi-MATA */
export const BRAND_PRIMARY = "#2C2F7E"; // White Astronaut
export const BRAND_PRIMARY_DEEP = "#23265F";
export const BRAND_GOLD = "#F4A03B"; // Sea Buckthorn
export const BRAND_CHAMPAGNE = "#F4A03B"; // Sea Buckthorn
export const BRAND_BLUSH = "#E8541A"; // Flamingo
export const BRAND_FLAMINGO = "#E8541A";
export const BRAND_SEA_BUCKTHORN = "#F4A03B";
export const BRAND_ASTRONAUT = "#2C2F7E";
export const BRAND_CREAM = "#FFF9F5";
/** @deprecated Use BRAND_CHAMPAGNE / BRAND_SEA_BUCKTHORN */
export const BRAND_ACCENT = BRAND_SEA_BUCKTHORN;
export const BRAND_ON_PRIMARY = "#ffffff";

type BrandMarkProps = {
  size?: number;
  stroke?: string;
  strokeWidth?: number;
  accentFill?: string;
};

export function BrandMark({
  size = 48,
  stroke = BRAND_ON_PRIMARY,
  strokeWidth = 2.6,
  accentFill = BRAND_CHAMPAGNE,
}: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M34 10.5c6.5 1.2 10.5 6.8 10 13.5-.6 8.5-6.5 15.5-14.5 18-9 2.8-18.5-1.5-22.5-9.5C3.5 25.5 5 15 12 10c4.5-2.8 10.5-2.5 15 2 2.2 2.2 4.5 4 7 5.5"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.5 18.5c3.8.5 6.5 3.8 6.2 7.8-.4 5.2-4.8 9-10 9.2-4.5.2-8.5-2.5-9.8-6.8-.8-2.8-.2-5.8 1.8-8 2.2-2.5 6-3.5 9.2-2.2"
        stroke={stroke}
        strokeWidth={strokeWidth * 0.85}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="31.5" cy="21" r="2.4" fill={accentFill} />
    </svg>
  );
}
