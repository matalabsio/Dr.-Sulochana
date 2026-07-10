import Image from "next/image";
import { images } from "@/content/images";

type BrandLogoProps = {
  /** White logo for dark plum surfaces; purple mask for light surfaces */
  variant?: "onDark" | "onLight";
  className?: string;
  priority?: boolean;
};

/**
 * Official brand lockup from {@link images.brand.logo} → public/brand/logo.png
 * (mother–child mark + hospital name + specialties). White artwork on black;
 * onDark uses mix-blend-lighten; onLight uses a purple CSS mask.
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
        aria-label="Dr. Sulochana's Hospital"
        className={`brand-logo brand-logo--on-light ${className}`.trim()}
      />
    );
  }

  return (
    <Image
      src={images.brand.logo}
      alt="Dr. Sulochana's Hospital"
      width={492}
      height={364}
      quality={90}
      priority={priority}
      className={`brand-logo-img brand-logo-img--on-dark ${className}`.trim()}
    />
  );
}
