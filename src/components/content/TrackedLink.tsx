"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackBookAppointmentClick } from "@/lib/analytics";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  ctaLocation: string;
  sourcePage?: string;
  trackAsAppointment?: boolean;
};

export default function TrackedLink({
  ctaLocation,
  sourcePage,
  trackAsAppointment = false,
  href,
  onClick,
  ...props
}: TrackedLinkProps) {
  const hrefString = typeof href === "string" ? href : (href.pathname ?? "");

  return (
    <Link
      {...props}
      href={href}
      onClick={(event) => {
        if (trackAsAppointment) {
          trackBookAppointmentClick({
            ctaLocation,
            destination: hrefString,
            sourcePage,
          });
        }
        onClick?.(event);
      }}
    />
  );
}
