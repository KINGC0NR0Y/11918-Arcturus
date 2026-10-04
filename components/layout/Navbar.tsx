"use client";

import { Logomark } from "@/components/layout/Logomark";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Container } from "@/components/ui/Container";
import { SlideTabs } from "@/components/ui/slide-tabs";
import { teamInfo } from "@/lib/data/social";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close the mobile menu when navigating — adjusted during render rather
  // than in an effect, per https://react.dev/learn/you-might-not-need-an-effect
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  const isHome = pathname === "/";

  // Slide the navbar away when scrolling down, bring it back when scrolling up.
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      // On the home page, stay visible through the hero and About landing before auto-hiding.
      const hideAfter = isHome ? window.innerHeight * 1.3 : 80;
      if (y < hideAfter) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      if (Math.abs(delta) > 6 || y < hideAfter) lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  const offscreen = hidden && !menuOpen;

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 w-full pt-3 transition-transform duration-300 ease-out motion-reduce:transition-none sm:pt-4",
        offscreen && "pointer-events-none -translate-y-full"
      )}
    >
      <Container className="relative">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-white"
            aria-label="ARCTURUS #11918 home"
          >
            <Logomark className="h-10 w-10" />
            <span className="font-display text-lg font-bold leading-none tracking-tight">
              ARCTURUS
              <span className="ml-1.5">#11918</span>
            </span>
          </Link>

          <nav className="hidden lg:flex" aria-label="Primary">
            <SlideTabs />
          </nav>

          <div className="hidden lg:block">
            <a
              href={`mailto:${teamInfo.email}`}
              className="inline-flex items-center rounded-sm border-2 border-white px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover: hover:text-black"
            >
              Join Us
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-white lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative block h-4 w-6">
              <span
                className={cn(
                  "absolute left-0 top-0 block h-0.5 w-6 bg-current transition-transform duration-200",
                  menuOpen && "translate-y-1.75 rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.75 block h-0.5 w-6 bg-current transition-opacity duration-200",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3.5 block h-0.5 w-6 bg-current transition-transform duration-200",
                  menuOpen && "-translate-y-1.75 -rotate-45"
                )}
              />
            </span>
          </button>
        </div>

      </Container>
    </header>
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-19 sm:pt-20 lg:hidden">
      <Container className="relative">
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
      </Container>
    </div>
    </>
  );
}
