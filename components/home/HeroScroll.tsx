"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll-linked wrapper for the hero: as the visitor scrolls down the hero
 * content drifts up and fades out; scrolling back to the top brings it back.
 */
export function HeroScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.8)));
      el.style.opacity = String(1 - p);
      el.style.transform = `translateY(${-p * 70}px) scale(${1 - p * 0.04})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 flex flex-col items-center justify-center will-change-transform">
      {children}
    </div>
  );
}
