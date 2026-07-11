import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Page Not Found",
  description: "The page you requested could not be found on Dr. Sulochana's Hospital website.",
  path: "/404",
  noIndex: true,
});

const topServices = [
  { name: "Fertility Treatment", href: "/treatments/fertility-treatment" },
  { name: "Pregnancy Care", href: "/treatments/pregnancy-care" },
  { name: "PCOS Management", href: "/treatments/pcos-management" },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="not-found-page flex min-h-[calc(100vh-var(--nav-height))] flex-col items-center justify-center px-4 py-16 pt-[var(--nav-height)] text-center sm:px-6">
        <p className="font-display text-7xl font-semibold text-primary/20 sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">Page not found</h1>
        <p className="mt-3 max-w-md text-base leading-relaxed text-body">
          The page you are looking for may have moved or no longer exists. You can return home, book an
          appointment, or explore our services below.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="about-btn-primary about-btn-primary--lg">
            Back to Home
          </Link>
          <Link href="/contact#appointment-form" className="about-btn-outline">
            Book Appointment
          </Link>
        </div>
        <nav aria-label="Popular services" className="mt-10">
          <p className="text-sm font-medium text-ink-subtle">Popular services</p>
          <ul className="mt-3 flex flex-wrap justify-center gap-2">
            {topServices.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="inline-flex rounded-full border border-ink/10 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <Footer />
    </>
  );
}
