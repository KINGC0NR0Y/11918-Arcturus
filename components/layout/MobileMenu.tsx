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
      "rounded-sm px-3 py-3 text-base font-medium",
      active ? "bg-orange-500/15 text-orange-400" : "text-ink-100 hover:bg-white/10"
    );

  return (
    <div
      id="mobile-menu"
      className={cn(
        "pointer-events-auto absolute inset-x-0 top-0 z-40 mt-2 origin-top overflow-hidden rounded-lg border border-white/15 bg-ink-950/85 shadow-xl shadow-black/30 backdrop-blur-xl lg:hidden",
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
            className="mt-3 inline-flex items-center justify-center rounded-sm border-2 border-white px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white"
          >
            Join Us
          </a>
        </nav>
      </div>
    </div>
  );
}
