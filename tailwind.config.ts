import type { Config } from "tailwindcss";

/** Figma Color styles — vamshi-MATA */
const figma = {
  black: "#000000",
  flamingo: "#E8541A",
  seaBuckthorn: "#F4A03B",
  white: "#FFFFFF",
  astronaut: "#2C2F7E",
} as const;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        figma: {
          black: figma.black,
          flamingo: figma.flamingo,
          "sea-buckthorn": figma.seaBuckthorn,
          white: figma.white,
          astronaut: figma.astronaut,
        },
        primary: {
          DEFAULT: figma.astronaut,
          deep: "#23265F",
          container: "#E8E9F5",
          "container-high": "#D4D6EC",
          fixed: "#E8E9F5",
          "fixed-dim": "#D4D6EC",
        },
        nav: {
          dark: "#5B2D8E",
          darkMid: "#4A2473",
          end: "#2A1045",
        },
        gold: {
          DEFAULT: figma.seaBuckthorn,
          light: "#F7C06E",
          muted: "rgba(244, 160, 59, 0.25)",
        },
        champagne: {
          DEFAULT: figma.seaBuckthorn,
          glow: "rgba(244, 160, 59, 0.35)",
        },
        cream: {
          DEFAULT: "#FFF9F5",
        },
        wellness: {
          plum: figma.astronaut,
          blush: figma.flamingo,
          surface: "#F7F7FB",
        },
        ink: {
          DEFAULT: figma.black,
          muted: "#454545",
        },
        "ink-muted": "#454545",
        ivory: {
          DEFAULT: "#F8F8FC",
          warm: "#FFF9F5",
        },
        border: {
          subtle: "rgba(0, 0, 0, 0.08)",
        },
        secondary: {
          DEFAULT: "#23265F",
          container: "#E8E9F5",
          fixed: "#E8E9F5",
          "fixed-dim": "#D4D6EC",
        },
        tertiary: {
          DEFAULT: figma.seaBuckthorn,
          container: "#F7C06E",
          fixed: "#FFF3E0",
          "fixed-dim": "#FFE0B2",
        },
        surface: {
          DEFAULT: "#F8F8FC",
          bright: "#F8F8FC",
          dim: "#dcdce8",
          container: {
            lowest: figma.white,
            low: "#f4f4fa",
            DEFAULT: "#eeeeF6",
            high: "#e8e8f2",
            highest: "#e0e0ec",
          },
          variant: "#e0e0ec",
        },
        on: {
          primary: figma.white,
          secondary: figma.white,
          surface: figma.black,
          "surface-variant": "#666666",
        },
        outline: {
          DEFAULT: "#6B6E9A",
          variant: "#D4D6EC",
        },
        background: "#F8F8FC",
        "on-background": figma.black,
        "surface-variant": "#e0e0ec",
        body: "#333333",
        flamingo: figma.flamingo,
        astronaut: figma.astronaut,
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "DM Sans", "system-ui", "sans-serif"],
        ui: ["var(--font-ui)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
      },
      fontSize: {
        "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "300" }],
        "display-lg-mobile": ["40px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "300" }],
        "headline-md": ["32px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "400" }],
        "headline-sm": ["24px", { lineHeight: "1.4", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "300" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
        caption: ["12px", { lineHeight: "1.4", fontWeight: "400" }],
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "3xl": "24px",
        "4xl": "28px",
        "5xl": "32px",
        brand: "24px",
      },
      spacing: {
        unit: "8px",
        "container-max": "1280px",
        gutter: "24px",
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        "section-gap-lg": "120px",
        "section-gap-md": "80px",
        section: "120px",
        "section-md": "80px",
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "blob-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(24px, -16px) scale(1.04)" },
          "66%": { transform: "translate(-12px, 12px) scale(0.98)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-medium": "float-medium 5s ease-in-out infinite",
        "float-gentle": "float-gentle 7s ease-in-out infinite",
        "blob-drift": "blob-drift 18s ease-in-out infinite",
        "blob-drift-slow": "blob-drift 24s ease-in-out infinite reverse",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
