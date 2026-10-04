"use client";

import { WaterRippleImage } from "@/components/ui/water-ripple-image";
import { useEffect, useRef, type CSSProperties } from "react";

const START_SCALE = 0.35;
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Scroll-driven reveal: the rippling robot render starts as a small window and
 * grows to fill the screen while "The Design" fades in. The section is taller
 * than the viewport and its inner stage is sticky, so the growth is tied to
 * scrolling through that extra height.
 */
export function TeamPictures() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    const text = textRef.current;
    if (!section || !frame || !text) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      // Growth finishes at ~60% of the travel so the full image holds for a moment.
      const p = easeOut(clamp01(-rect.top / (travel * 0.6)));
      const s = START_SCALE + (1 - START_SCALE) * p;
      frame.style.transform = `scale(${s})`;
      // The frame is scaled, so counter-scale the border, shadow and corner ticks
      // to keep them identical to every other panel on the site.
      frame.style.borderWidth = `${1 / s}px`;
      frame.style.boxShadow = `${6 / s}px ${6 / s}px 0 rgb(0 0 0 / 0.5)`;
      frame.style.setProperty("--tw", `${2 / s}px`);
      frame.style.setProperty("--tl", `${14 / s}px`);
      const t = clamp01((p - 0.55) / 0.45);
      text.style.opacity = String(t);
      text.style.transform = `translateY(${(1 - t) * 24}px)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[260svh]">
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
        <div
          ref={frameRef}
          className="panel corner-ticks tick-orange isolate h-full w-full overflow-hidden will-change-transform"
          style={{
            transform: `scale(${START_SCALE})`,
            borderWidth: `${1 / START_SCALE}px`,
            boxShadow: `${6 / START_SCALE}px ${6 / START_SCALE}px 0 rgb(0 0 0 / 0.5)`,
            ...({
              "--tw": `${2 / START_SCALE}px`,
              "--tl": `${14 / START_SCALE}px`,
            } as CSSProperties),
          }}
        >
          <WaterRippleImage
            src="/robot-cad.png"
            blueish={0.4}
            scale={7}
            illumination={0.15}
            surfaceDistortion={0.03}
            waterDistortion={0.02}
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink-950/70 via-transparent to-ink-950/30" />
        </div>

        <div
          ref={textRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 opacity-0"
        >
          <div className="flex flex-col items-center gap-5">
            <span className="eyebrow">02 / Design</span>
            <h2 className="font-display text-5xl font-bold tracking-tight text-white [text-shadow:0_4px_40px_rgb(0_0_0/0.6)] sm:text-7xl lg:text-8xl">
              The Design
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
