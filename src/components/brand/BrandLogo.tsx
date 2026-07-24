import Image from "next/image";
import { images } from "@/content/images";

type BrandLogoProps = {
  /** White lockup for dark surfaces; purple CSS mask for light surfaces */
  variant?: "onDark" | "onLight";
  className?: string;
  priority?: boolean;
};

/** Intrinsic size of public/brand/logo.png (white on transparent) */
const LOGO_WIDTH = 417;
const LOGO_HEIGHT = 139;

/**
 * Official brand lockup → public/brand/logo.png
 * Mother–child mark + “Dr. Sulochana's Hospital” + specialties.
 */
export default function BrandLogo({
  variant = "onDark",
  className = "",
  priority = false,
}: BrandLogoProps) {
  if (variant === "onLight") {
    return (
      <span
        role="img"
        aria-label="Dr. Sulochana's Hospital — OBGYN, Infertility, Paediatrics"
        className={`brand-logo brand-logo--on-light ${className}`.trim()}
      />
    );
  }

  return (
    <Image
      src={images.brand.logo}
      alt="Dr. Sulochana's Hospital — OBGYN, Infertility, Paediatrics"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      quality={95}
      priority={priority}
      unoptimized
      className={`brand-logo-img brand-logo-img--on-dark ${className}`.trim()}
    />
  );
}
