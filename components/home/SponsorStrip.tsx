import { SponsorMark } from "@/components/sponsors/SponsorMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { sponsors } from "@/lib/data/sponsors";
import { teamInfo } from "@/lib/data/social";

/** Two copies of the list per half keeps the -50% loop seamless on very wide screens. */
const HALVES = [0, 1] as const;

export function SponsorStrip() {
  return (
    <section className="overflow-hidden border-y border-line bg-panel/60 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader eyebrow="06 / Our Partners" title="Powered by Our Partners" />
          <Reveal delay={80}>
            <Button href={`mailto:${teamInfo.email}?subject=Sponsoring%20ARCTURUS`} variant="ghost">
              Become a Sponsor
            </Button>
          </Reveal>
        </div>
      </Container>

      <Reveal delay={140} className="mt-12">
        <div
          className="group/marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]"
          aria-label="Our sponsors"
        >
          <ul className="flex w-max animate-marquee list-none [animation-duration:70s] group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none">
            {HALVES.flatMap((half) =>
              [0, 1].flatMap((copy) =>
                sponsors.map((sponsor) => (
                  <li
                    key={`${half}-${copy}-${sponsor.id}`}
                    className="w-60 shrink-0 pr-5 sm:w-72 sm:pr-6"
                    aria-hidden={half === 1 || copy === 1 ? true : undefined}
                  >
                    <SponsorMark sponsor={sponsor} />
                  </li>
                ))
              )
            )}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
