import { Container } from "@/components/ui/Container";
import Link from "next/link";
import type { ReactElement, ReactNode } from "react";

interface Footer7Props {
  logo: {
    url: string;
    icon: ReactNode;
    title: ReactNode;
  };
  sections: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: ReactNode;
  socialLinks: Array<{
    icon: ReactElement;
    href: string;
    label: string;
  }>;
  copyright: string;
  note?: string;
}

const isExternal = (href: string) => /^(https?:|mailto:)/.test(href);

/**
 * Footer7 — shadcnblocks "footer-7" layout, adapted to this project: Next
 * links, site tokens instead of shadcn's `muted-foreground`/`primary`, and a
 * fully transparent surface so the fixed Dither background shows through.
 */
export const Footer7 = ({
  logo,
  sections,
  description,
  socialLinks,
  copyright,
  note,
}: Footer7Props) => {
  return (
    <footer className="relative py-16">
      <Container>
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            <Link href={logo.url} className="flex items-center gap-2.5 text-white lg:justify-start">
              {logo.icon}
              <span className="font-display text-xl font-semibold tracking-tight">{logo.title}</span>
            </Link>
            {description && (
              <div className="max-w-sm text-sm text-ink-300">{description}</div>
            )}
            <ul className="flex items-center space-x-6 text-ink-300">
              {socialLinks.map((social) => (
                <li key={social.label} className="font-medium transition-colors hover:text-orange-400">
                  <a
                    href={social.href}
                    aria-label={social.label}
                    {...(isExternal(social.href) && !social.href.startsWith("mailto:")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 font-mono-tech text-xs font-medium uppercase tracking-[0.2em] text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm text-ink-300">
                  {section.links.map((link) => (
                    <li key={link.href} className="font-medium transition-colors hover:text-orange-400">
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/15 pt-8 text-xs font-medium text-ink-300 md:flex-row md:items-center md:text-left">
          <p>{copyright}</p>
          {note && <p>{note}</p>}
        </div>
      </Container>
    </footer>
  );
};
