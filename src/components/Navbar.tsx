"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import BrandLogo from "@/components/brand/BrandLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, ChevronDown, Menu, X } from "lucide-react";
import type { NavItem } from "@/content/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useMessages } from "@/i18n/LanguageProvider";
import { useLocalizedNavigation } from "@/i18n/useLocalizedNavigation";

const DESKTOP_NAV_MQ = "(min-width: 1024px)";

function isActivePath(pathname: string, hash: string, href: string) {
  if (href === "/") {
    return pathname === "/" && !hash;
  }
  if (href.includes("#")) {
    const [path, fragment] = href.split("#");
    if (pathname === path && hash === `#${fragment}`) return true;
  }
  const path = href.split("#")[0];
  if (!path) return false;
  return pathname === path || pathname.startsWith(`${path}/`);
}

function itemIsActive(pathname: string, hash: string, item: NavItem): boolean {
  if ("children" in item && item.children) {
    return item.children.some((c) => isActivePath(pathname, hash, c.href));
  }
  return item.href ? isActivePath(pathname, hash, item.href) : false;
}

function NavDropdownDesktop({
  item,
  pathname,
  hash,
}: {
  item: Extract<NavItem, { children: readonly { name: string; href: string }[] }>;
  pathname: string;
  hash: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = itemIsActive(pathname, hash, item);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [open]);

  return (
    <div
      ref={ref}
      className="nav-dropdown relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`nav-link-flow nav-link-flow--trigger ${active ? "nav-link-flow-active" : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {item.name}
        <ChevronDown
          className={`nav-chevron h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="nav-dropdown-panel"
            role="menu"
          >
            {item.children.map((child) => (
              <Link
                key={child.name}
                href={child.href}
                role="menuitem"
                className={`nav-dropdown-link cursor-pointer ${
                  isActivePath(pathname, hash, child.href) ? "nav-dropdown-link-active" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {child.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavMobileGroup({
  item,
  pathname,
  hash,
  onNavigate,
}: {
  item: Extract<NavItem, { children: readonly { name: string; href: string }[] }>;
  pathname: string;
  hash: string;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const active = itemIsActive(pathname, hash, item);

  return (
    <li>
      <button
        type="button"
        className={`nav-link-mobile nav-link-mobile--trigger flex w-full min-h-[48px] cursor-pointer items-center justify-between rounded-xl px-4 font-ui text-base font-medium ${
          active ? "nav-link-mobile-active" : ""
        }`}
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
      >
        {item.name}
        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="nav-mobile-submenu overflow-hidden"
          >
            {item.children.map((child) => (
              <li key={child.name}>
                <Link
                  href={child.href}
                  className={`nav-link-mobile-sub flex min-h-[44px] cursor-pointer items-center rounded-lg px-6 font-ui text-sm ${
                    isActivePath(pathname, hash, child.href) ? "nav-link-mobile-active" : ""
                  }`}
                  onClick={onNavigate}
                >
                  {child.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Navbar() {
  const navigation = useLocalizedNavigation();
  const { common } = useMessages();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    setHash(window.location.hash);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("nav-menu-open");

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    const mq = window.matchMedia(DESKTOP_NAV_MQ);
    const onMqChange = (e: MediaQueryListEvent) => {
      if (e.matches) closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onMqChange);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.classList.remove("nav-menu-open");
      window.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onMqChange);
    };
  }, [open, closeMenu]);

  const navTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.4, ease: [0.32, 0.72, 0, 1] as const };

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 140, damping: 24, delay: 0.05 }
        }
        className={`site-nav-float fixed inset-x-0 top-0 pt-[env(safe-area-inset-top)] ${open ? "z-[70]" : "z-50"}`}
      >
        <nav
          className={`nav-glass-shell nav-glass-shell--flow flex h-[var(--nav-bar-height)] w-full min-w-0 items-center justify-between gap-1 px-4 sm:gap-3 sm:px-6 lg:px-10 ${
            scrolled ? "nav-glass-shell-scrolled" : ""
          }`}
          aria-label="Main navigation"
        >
          <div className="mx-auto flex h-full w-full min-w-0 max-w-container items-center justify-between gap-1 sm:gap-3">
          <Link
            href="/"
            className="nav-brand-link flex min-h-[44px] min-w-0 shrink items-center transition-opacity duration-200 hover:opacity-85"
            aria-label="Dr. Sulochana's Hospital — Home"
          >
            <BrandLogo
              variant="onDark"
              priority
              className="brand-logo-img--nav"
            />
          </Link>

          <div className="nav-desktop-links hidden min-w-0 lg:flex lg:flex-1 lg:items-center lg:justify-center lg:gap-0.5 xl:gap-1">
            {navigation.map((item) => {
              if ("children" in item && item.children) {
                return (
                  <NavDropdownDesktop
                    key={item.name}
                    item={item}
                    pathname={pathname}
                    hash={hash}
                  />
                );
              }
              const isActive = isActivePath(pathname, hash, item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link-flow cursor-pointer ${isActive ? "nav-link-flow-active" : ""}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="nav-actions flex shrink-0 items-center gap-1 sm:gap-2">
            <Link
              href="/contact"
              className="nav-cta-btn nav-cta-btn--plum nav-cta-btn--compact hidden cursor-pointer sm:inline-flex lg:hidden"
              aria-label={common.bookAppointment}
            >
              <Calendar className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
              <span className="hidden md:inline">{common.bookAppointment}</span>
            </Link>

            <Link href="/contact" className="nav-cta-btn nav-cta-btn--plum hidden cursor-pointer lg:inline-flex">
              <Calendar className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
              {common.bookAppointment}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="nav-menu-toggle inline-flex h-10 w-10 min-h-[44px] min-w-[44px] shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-lg sm:h-11 sm:w-11 sm:rounded-xl lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav-panel"
            >
              {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          </div>
          </div>
        </nav>
      </motion.header>

      <LanguageSwitcher variant="floating" />

      <AnimatePresence>
        {open && (
          <div className="nav-mobile-overlay fixed inset-0 z-[60] lg:hidden" role="presentation">
            <motion.button
              type="button"
              className="absolute inset-0 cursor-pointer bg-ink/35 backdrop-blur-md"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            />

            <div className="nav-mobile-overlay-inner pointer-events-none relative flex h-full flex-col pt-[var(--nav-height)]">
            <motion.nav
              id="mobile-nav-panel"
              className="nav-mobile-glass pointer-events-auto mx-1.5 flex max-h-[calc(100dvh-var(--nav-height)-0.75rem)] min-h-0 flex-col overflow-hidden rounded-xl sm:mx-3 sm:rounded-2xl"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={navTransition}
              aria-label="Mobile navigation"
            >
              <div className="nav-mobile-scroll flex-1 overflow-y-auto overscroll-contain px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <ul className="flex flex-col gap-0.5">
                  {navigation.map((item) => {
                    if ("children" in item && item.children) {
                      return (
                        <NavMobileGroup
                          key={item.name}
                          item={item}
                          pathname={pathname}
                          hash={hash}
                          onNavigate={closeMenu}
                        />
                      );
                    }
                    const isActive = isActivePath(pathname, hash, item.href);
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`nav-link-mobile flex min-h-[48px] cursor-pointer items-center rounded-xl px-4 font-ui text-base font-medium ${
                            isActive ? "nav-link-mobile-active" : ""
                          }`}
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="mb-2 px-1 font-ui text-xs font-semibold uppercase tracking-[0.1em] text-white/55">
                    Language
                  </p>
                  <LanguageSwitcher variant="nav-mobile" />
                </div>

                <Link
                  href="/contact"
                  className="nav-cta-btn nav-cta-btn--plum mt-4 flex min-h-[48px] w-full cursor-pointer items-center justify-center"
                  onClick={closeMenu}
                >
                  <Calendar className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                  {common.bookAppointment}
                </Link>
              </div>
            </motion.nav>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
