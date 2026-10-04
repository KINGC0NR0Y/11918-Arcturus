import Image from "next/image";
import type { Sponsor } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Sponsor card. Every card shares one fixed aspect ratio; logos are
 * object-contain'd inside it so any logo shape stays uniform in size.
 */
export function SponsorMark({ sponsor, className }: { sponsor: Sponsor; className?: string }) {
  const cardClass = cn(
    "group relative block aspect-[3/2] w-full overflow-hidden rounded-3xl border border-white/15 bg-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/70 hover:shadow-xl hover:shadow-orange-500/10",
    className
  );

  const content = sponsor.logo ? (
    <Image
      src={sponsor.logo}
      alt={sponsor.name}
      fill
      sizes="(min-width: 640px) 288px, 240px"
      quality={90}
      draggable={false}
      className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
    />
  ) : (
    <span className="flex h-full w-full items-center justify-center px-5 text-center font-display text-lg font-bold tracking-tight text-ink-800">
      {sponsor.name}
    </span>
  );

  if (sponsor.url) {
    return (
      <a
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
        aria-label={sponsor.name}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={cardClass} role="img" aria-label={sponsor.name}>
      {content}
    </div>
  );
}
