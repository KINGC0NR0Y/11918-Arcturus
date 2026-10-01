"use client";

/**
 * SlideTabs — adapted from a community "slide tabs" pattern (sliding pill
 * cursor + mix-blend-difference label) into a real, router-aware nav:
 * - Tabs are next/link anchors, not local-state-only buttons, so they
 *   navigate and support keyboard/middle-click/etc. like any link.
 * - The pill snaps to whichever tab matches the current pathname (not just
 *   "last clicked"), including on first load and on back/forward nav.
 * - Colors swapped for ARCTURUS's tokens: an ink-900 pill against a white
 *   pill-track border, matching the navbar surface instead of generic
 *   black/white.
 * - Skips the spring animation under prefers-reduced-motion.
 */

import { primaryNavItems } from "@/lib/data/nav";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, useEffect, useRef, useState, type ReactNode } from "react";

interface CursorPosition {
  left: number;
  width: number;
  opacity: number;
}

export function SlideTabs({ className }: { className?: string }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [position, setPosition] = useState<CursorPosition>({ left: 0, width: 0, opacity: 0 });
  const tabsRef = useRef<Array<HTMLLIElement | null>>([]);

  const activeIndex = primaryNavItems.findIndex((item) =>
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
  );

  const snapToActive = () => {
    const tab = tabsRef.current[activeIndex];
    if (!tab) {
      setPosition((p) => ({ ...p, opacity: 0 }));
      return;
    }
    setPosition({ left: tab.offsetLeft, width: tab.getBoundingClientRect().width, opacity: 1 });
  };

  // Re-measure on route change (mount included) and on resize, since the
  // pill's pixel position depends on rendered tab layout.
  useEffect(() => {
    snapToActive();
    window.addEventListener("resize", snapToActive);
    return () => window.removeEventListener("resize", snapToActive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <ul
      onMouseLeave={snapToActive}
      className={cn(
        "relative flex w-fit items-center rounded-full p-1",
        className
      )}
    >
      {primaryNavItems.map((item, i) => (
        <Tab
          key={item.href}
          ref={(el) => {
            tabsRef.current[i] = el;
          }}
          href={item.href}
          active={i === activeIndex}
          onActivate={(el) =>
            setPosition({ left: el.offsetLeft, width: el.getBoundingClientRect().width, opacity: 1 })
          }
        >
          {item.label}
        </Tab>
      ))}

      <Cursor position={position} animate={!prefersReducedMotion} />
    </ul>
  );
}

const Tab = forwardRef<
  HTMLLIElement,
  {
    children: ReactNode;
    href: string;
    active: boolean;
    onActivate: (el: HTMLLIElement) => void;
  }
>(({ children, href, active, onActivate }, ref) => {
  return (
    <li
      ref={ref}
      onMouseEnter={(e) => onActivate(e.currentTarget)}
      onFocus={(e) => onActivate(e.currentTarget)}
      className="relative z-10"
    >
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className="relative block whitespace-nowrap px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white"
      >
        {children}
      </Link>
    </li>
  );
});
Tab.displayName = "SlideTabsTab";

function Cursor({ position, animate }: { position: CursorPosition; animate: boolean }) {
  return (
    <motion.li
      animate={{ left: position.left, width: position.width, opacity: position.opacity }}
      transition={animate ? { type: "spring", stiffness: 420, damping: 34 } : { duration: 0 }}
      className="absolute inset-y-1 z-0 rounded-full border-2 border-white"
      aria-hidden="true"
    />
  );
}
