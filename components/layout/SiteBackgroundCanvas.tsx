"use client";

import Dither from "@/components/ui/Dither";

/**
 * The exact Dither configuration for the site background. Client-only (it is
 * loaded with ssr:false), so reading `document.body` here is safe. Pointer
 * events are listened for on <body> so the effect reacts to the mouse even
 * though foreground content sits above the canvas.
 */
export default function SiteBackgroundCanvas() {
  return (
    <Dither
      waveColor={[0, 0.17647058823529413, 0.3843137254901961]}
      disableAnimation={false}
      enableMouseInteraction={true}
      mouseRadius={0.3}
      colorNum={4}
      waveAmplitude={0.3}
      waveFrequency={2.5}
      waveSpeed={0.05}
      eventSource={document.body}
    />
  );
}
