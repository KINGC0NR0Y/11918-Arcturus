import { cn } from "@/lib/utils";

/**
 * The site's standard dark-section treatment. The animated Dither itself is a
 * single fixed layer mounted once in the root layout (SiteBackground), so this
 * component no longer spawns its own canvas — it is a transparent "window"
 * over that layer, adding a translucent overlay so foreground text always
 * keeps safe contrast, optionally vignetted and/or overlaid with a fine
 * technical grid. The host section must have no opaque background of its own.
 */
export function DitherBackground({
  className,
  fade = false,
  grid = true,
  overlay = "bg-ink-950/35",
}: {
  className?: string;
  fade?: boolean;
  grid?: boolean;
  overlay?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        fade && "bg-radial-fade",
        className
      )}
      aria-hidden="true"
    >
      <div className={cn("absolute inset-0", overlay)} />
      {grid && <div className="bg-grid-dark-fine absolute inset-0 opacity-25" />}
    </div>
  );
}
