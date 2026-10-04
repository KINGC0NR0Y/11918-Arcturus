"use client";

import { isItemActive, navItems } from "@/lib/data/nav";
import { teamInfo } from "@/lib/data/social";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect } from "react";

export function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const linkClass = (active: boolean) =>
    cn(
      "border-l-2 px-3 py-3 font-mono-tech text-sm uppercase tracking-[0.18em]",
      active ? "border-orange-500 bg-orange-500/15 text-orange-400" : "border-transparent text-ink-100 hover:border-line-strong hover:bg-white/5"
    );

  return (
    <div
      id="mobile-menu"
      className={cn(
        "pointer-events-auto absolute inset-x-0 top-0 z-40 mt-2 origin-top overflow-hidden border border-line-strong bg-ink-950/95 shadow-[6px_6px_0_0_rgb(0_0_0/0.5)] lg:hidden",
        "transition-[grid-template-rows] duration-300 ease-out",
        "grid",
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      )}
      aria-hidden={!open}
    >
      <div className="overflow-hidden">
        <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={linkClass(isItemActive(item, pathname))}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${teamInfo.email}`}
            onClick={onClose}
            className="mt-3 inline-flex items-center justify-center border border-orange-500 bg-orange-500 px-5 py-3 font-mono-tech text-xs font-medium uppercase tracking-[0.2em] text-ink-950"
          >
            Join Us
          </a>
        </nav>
      </div>
    </div>
  );
}
