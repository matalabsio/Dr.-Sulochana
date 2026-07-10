export type NavLink = {
  name: string;
  href: string;
};

export type NavItem =
  | {
      name: string;
      href: string;
      children?: undefined;
    }
  | {
      name: string;
      href?: string;
      children: readonly NavLink[];
    };

export const mainNavigation: readonly NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Treatments", href: "/treatments/fertility-treatment" },
  { name: "About", href: "/about" },
  { name: "Success Stories", href: "/testimonials" },
  {
    name: "Resources",
    children: [
      { name: "Knowledge Center", href: "/knowledge" },
    ],
  },
  { name: "Contact", href: "/contact" },
] as const;
