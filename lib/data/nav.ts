export interface NavItem {
  label: string;
  href: string;
}

// Full site map — used by the footer ("Quick Links") and the sitemap, so
// every page stays reachable and crawlable even though the navbar itself
// only surfaces a handful of them.
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Robot", href: "/robot" },
  { label: "Engineering", href: "/engineering" },
  { label: "Competitions", href: "/competitions" },
  { label: "Outreach", href: "/outreach" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Join Us", href: "/join" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

// Trimmed set shown in the navbar itself (desktop pill tabs + mobile menu).
// Everything else lives in the footer's Quick Links.
export const primaryNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Outreach", href: "/outreach" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
];
