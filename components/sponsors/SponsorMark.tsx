import type { Sponsor } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SponsorMark({ sponsor, className }: { sponsor: Sponsor; className?: string }) {
  const content = (
    <span
      className={cn(
        "flex h-full w-full items-center justify-center px-5 py-6 text-center font-display text-base font-bold tracking-tight text-ink-200 transition-colors duration-300 group-hover:text-orange-400 sm:text-lg",
        className
      )}
    >
      {sponsor.name}
    </span>
  );

  const wrapperClass =
    "group flex h-24 items-center justify-center rounded-sm border border-white/15 grayscale transition-all duration-300 hover:grayscale-0 hover:border-orange-400/60 hover:shadow-md hover:shadow-ink-900/5";

  if (sponsor.url) {
    return (
      <a
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        className={wrapperClass}
        aria-label={sponsor.name}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={wrapperClass} aria-label={sponsor.name}>
      {content}
    </div>
  );
}
