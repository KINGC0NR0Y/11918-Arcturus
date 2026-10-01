"use client";

import dynamic from "next/dynamic";

// WebGL: client only, never server-rendered.
const SiteBackgroundCanvas = dynamic(() => import("./SiteBackgroundCanvas"), { ssr: false });

/**
 * Single, shared, viewport-fixed Dither layer. It sits behind all content
 * (-z-10), never intercepts clicks (pointer-events-none) and does not affect
 * layout. Sections that should show it simply have a transparent background.
 */
export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <SiteBackgroundCanvas />
    </div>
  );
}
