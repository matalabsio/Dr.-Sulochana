import type { Metadata } from "next";
import {
  DM_Sans,
  Inter,
  Lato,
  Noto_Sans_Devanagari,
  Noto_Sans_Telugu,
  Playfair_Display,
} from "next/font/google";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";
import AnimationProvider from "@/components/AnimationProvider";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { assetPaths } from "@/content/images";
import { pageSeo } from "@/lib/seo/keywords";
import { getSiteUrl, siteConfig } from "@/lib/seo/site";
import "./globals.css";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: pageSeo.home.title,
    description: siteConfig.description,
    path: "/",
  }),
  metadataBase: new URL(getSiteUrl()),
  verification: {
    google: "PM0mXBpVFjeTzSFx5QT9Xj8vJrnYCi5RXzxkmmarDZ0",
  },
  icons: {
    icon: [
      { url: assetPaths.brand.favicon, type: "image/svg+xml" },
      { url: assetPaths.brand.faviconIco, sizes: "any" },
      { url: "/icon", sizes: "32x32", type: "image/png" },
      { url: assetPaths.brand.icon192, sizes: "192x192", type: "image/png" },
      { url: assetPaths.brand.icon512, sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: assetPaths.brand.faviconIco }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  applicationName: siteConfig.shortName,
  appleWebApp: {
    capable: true,
    title: siteConfig.shortName,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

const notoTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-telugu",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`locale-en ${inter.variable} ${lato.variable} ${dmSans.variable} ${playfairDisplay.variable} ${notoDevanagari.variable} ${notoTelugu.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <GoogleAnalytics />
        <MicrosoftClarity />
        <LanguageProvider>
          <AnimationProvider>{children}</AnimationProvider>
        </LanguageProvider>
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
