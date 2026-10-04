"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const VISITED_KEY = "arcturus-visited";
/** On a visitor's very first visit the loader runs at least this long. */
const FIRST_VISIT_MS = 5000;
/** Give up waiting for the load event after this long so the site never stays covered. */
const MAX_WAIT_MS = 15000;

/**
 * Full-screen loading page shown on first load / reload. It is part of the
 * server-rendered HTML, so it covers the page from the very first paint. The
 * bar eases toward 90% while the page loads and completes once the window load
 * event and web fonts are done, then the screen fades out. On a first-ever
 * visit it is deliberately held for FIRST_VISIT_MS.
 */
export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    let firstVisit = false;
    try {
      firstVisit = !localStorage.getItem(VISITED_KEY);
    } catch {
      // storage unavailable (private mode etc.) — treat as a returning visitor
    }
    const start = performance.now();

    let loaded = false;
    let value = 0;
    let frame = 0;
    const timers: number[] = [];

    const markLoaded = () => {
      loaded = true;
    };
    const whenReady = () => {
      const fonts = document.fonts?.ready ?? Promise.resolve();
      fonts.then(markLoaded, markLoaded);
    };

    if (document.readyState === "complete") whenReady();
    else window.addEventListener("load", whenReady, { once: true });
    timers.push(window.setTimeout(markLoaded, MAX_WAIT_MS));

    const finish = () => {
      try {
        localStorage.setItem(VISITED_KEY, "1");
      } catch {
        // ignore
      }
      timers.push(
        window.setTimeout(() => {
          setFading(true);
          root.style.overflow = previousOverflow;
          timers.push(window.setTimeout(() => setGone(true), 500));
        }, 250)
      );
    };

    const tick = () => {
      if (firstVisit) {
        // Time-paced: reaches 100% at FIRST_VISIT_MS, but never past 90% until loaded.
        const timed = ((performance.now() - start) / FIRST_VISIT_MS) * 100;
        value = Math.max(value, Math.min(timed, loaded ? 100 : 90));
      } else if (loaded) {
        value = Math.min(100, value + Math.max(1, (100 - value) * 0.25));
      } else {
        value += (90 - value) * 0.03;
      }
      setProgress(Math.round(value));
      if (value >= 100) {
        finish();
        return;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      timers.forEach(window.clearTimeout);
      window.removeEventListener("load", whenReady);
      root.style.overflow = previousOverflow;
    };
  }, []);

  if (gone) return null;

  return (
    <div
      id="site-loader"
      role="status"
      aria-label="Loading ARCTURUS #11918"
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 bg-ink-950 transition-opacity duration-500 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src="/logo.png"
        alt=""
        width={180}
        height={180}
        priority
        quality={90}
        className="h-36 w-36 rounded-full shadow-2xl shadow-black/60 sm:h-44 sm:w-44"
      />

      <div className="w-64 sm:w-80">
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          className="h-1.5 w-full overflow-hidden rounded-full bg-white/10"
        >
          <div
            className="h-full rounded-full bg-orange-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-3 text-center font-mono-tech text-xs tracking-[0.3em] text-ink-300">
          {progress}%
        </p>
      </div>
    </div>
  );
}
