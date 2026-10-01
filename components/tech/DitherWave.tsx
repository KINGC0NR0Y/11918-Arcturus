"use client";

/**
 * DitherWave — a dependency-free stand-in for React Bits Pro's "Dither Wave"
 * (that component sits behind a paid registry we don't have a license for).
 * Renders an animated wave field posterized through classic 4x4 ordered
 * (Bayer) dithering into a small, fixed palette — the chunky, banded look of
 * retro dithered gradients — using ARCTURUS's ink/blue tokens.
 *
 * Drawn at a small internal resolution and scaled up with
 * `image-rendering: pixelated`, so it's cheap to run and reads as
 * intentionally retro rather than aliased.
 */

import { useEffect, useRef } from "react";

// Values 0-15 over 16, giving 16 even dither thresholds.
const BAYER_4X4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

type RGB = [number, number, number];

const DEFAULT_PALETTE: RGB[] = [
  [8, 9, 12], // ink-950
  [20, 43, 99], // blue-900
  [26, 61, 153], // blue-700
  [46, 100, 224], // blue-500 (wave crest)
];

const TARGET_COLS = 120;
const MAX_ROWS = 100;
const MIN_ROWS = 6;

export function DitherWave({
  className,
  speed = 1,
  palette = DEFAULT_PALETTE,
}: {
  className?: string;
  speed?: number;
  palette?: RGB[];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { willReadFrequently: false });
    if (!canvas || !ctx) return undefined;

    const reducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    let cols = 0;
    let rows = 0;
    let buffer: ImageData | null = null;
    let time = 0;
    let last = performance.now();
    let raf = 0;
    let visible = true;
    let alive = true;

    const levels = palette.length;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      const nextCols = TARGET_COLS;
      const nextRows = Math.min(
        MAX_ROWS,
        Math.max(MIN_ROWS, Math.round(nextCols * (height / width)))
      );
      if (nextCols === cols && nextRows === rows) return;
      cols = nextCols;
      rows = nextRows;
      canvas.width = cols;
      canvas.height = rows;
      buffer = ctx.createImageData(cols, rows);
      draw();
    };

    const draw = () => {
      if (!buffer) return;
      const data = buffer.data;
      for (let y = 0; y < rows; y++) {
        const ny = y / rows;
        const bayerRow = BAYER_4X4[y % 4];
        for (let x = 0; x < cols; x++) {
          const nx = x / cols;
          const wave =
            Math.sin(ny * 3.1 + Math.sin(nx * 2.0 + time * 0.35) * 1.3 + time * 0.55) * 0.6 +
            Math.sin(nx * 1.4 - time * 0.22) * 0.4;
          const v = Math.min(1, Math.max(0, (wave + 1) / 2));

          const scaled = v * (levels - 1);
          const lower = Math.floor(scaled);
          const frac = scaled - lower;
          const threshold = (bayerRow[x % 4] + 0.5) / 16;
          const level = Math.min(levels - 1, frac > threshold ? lower + 1 : lower);
          const [r, g, b] = palette[level];

          const i = (y * cols + x) * 4;
          data[i] = r;
          data[i + 1] = g;
          data[i + 2] = b;
          data[i + 3] = 255;
        }
      }
      ctx.putImageData(buffer, 0, 0);
    };

    const tick = (now: number) => {
      raf = 0;
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      time += dt * speed;
      draw();
      if (visible && alive) raf = requestAnimationFrame(tick);
    };

    const wake = () => {
      if (raf || !visible || !alive || reducedMotion) return;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };

    resize();
    if (reducedMotion) {
      draw();
    } else {
      wake();
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reducedMotion) draw();
    });
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) wake();
      else cancelAnimationFrame(raf);
    });
    intersectionObserver.observe(canvas);

    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else {
        wake();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ imageRendering: "pixelated", width: "100%", height: "100%", display: "block" }}
    />
  );
}
