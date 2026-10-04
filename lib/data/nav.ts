export interface NavChild {
  label: string;
  href: string;
}

/** A top-level page. `sections` are anchors within that page (used by the footer). */
export interface NavItem {
  label: string;
  href: string;
  sections?: NavChild[];
}

// Single source of truth for the navbar, the footer columns and the sitemap.
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Robot",
    href: "/robot",
    sections: [
      { label: "Current Robot", href: "/robot#current-robot" },
      { label: "Systems", href: "/robot#systems" },
      { label: "Specifications", href: "/robot#specifications" },
    ],
  },
  { label: "Team", href: "/team" },
  {
    label: "Engineering",
    href: "/engineering",
    sections: [
      { label: "Mechanical", href: "/engineering#mechanical" },
      { label: "Electrical", href: "/engineering#electrical" },
      { label: "Software", href: "/engineering#software" },
      { label: "CAD", href: "/engineering#cad" },
    ],
  },
  {
    label: "Journey",
    href: "/journey",
    sections: [
      { label: "Seasons", href: "/journey#seasons" },
      { label: "Competitions", href: "/journey#competitions" },
      { label: "Gallery", href: "/journey#gallery" },
    ],
  },
];

/** Every real page — used by the sitemap. */
export const allPages: NavChild[] = navItems.map(({ label, href }) => ({ label, href }));

export function isItemActive(item: NavItem, pathname: string): boolean {
  return item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
}
