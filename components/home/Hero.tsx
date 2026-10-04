import { HeroScroll } from "@/components/home/HeroScroll";
import { Container } from "@/components/ui/Container";
import { DitherBackground } from "@/components/ui/DitherBackground";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    // Pulled up under the (sticky, hidden-at-top) navbar so the hero fills the first screen.
    <section className="snap-section relative -mt-[76px] min-h-svh overflow-hidden sm:-mt-20">
      <DitherBackground fade />

      <HeroScroll>
        <Container className="relative flex flex-col items-center gap-10 text-center">
          <Reveal>
            <span className="eyebrow">Glenn GrizzlyBots proudly present</span>
          </Reveal>

          <Reveal delay={80}>
            <div className="panel corner-ticks tick-orange px-6 py-8 sm:px-14 sm:py-12">
              <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
                ARCTURUS #11918
              </h1>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-mono-tech text-xs font-medium uppercase tracking-[0.35em] text-blue-200 sm:text-sm">
              Tom Glenn High School, Austin TX
            </p>
          </Reveal>
        </Container>
      </HeroScroll>
    </section>
  );
}
