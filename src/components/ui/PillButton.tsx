import Link from "next/link";
import type { ReactNode } from "react";

type PillButtonProps = {
  href: string;
  variant?: "primary" | "outline";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function PillButton({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
}: PillButtonProps) {
  const base = variant === "primary" ? "pill-btn-primary" : "pill-btn-outline";
  return (
    <Link
      href={href}
      className={`${base} cursor-pointer font-ui text-sm ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
