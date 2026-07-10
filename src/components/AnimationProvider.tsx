"use client";

/**
 * Client wrapper for the app tree. Scroll and hero motion use Framer Motion directly.
 */
export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
