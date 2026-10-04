import { HeroScroll } from "@/components/home/HeroScroll";
import { Container } from "@/components/ui/Container";
import { DitherBackground } from "@/components/ui/DitherBackground";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    // Pulled up under the (sticky, hidden-at-top) navbar so the hero fills the first screen.
    <section className="snap-section relative -mt-[76px] min-h-svh overflow-hidden sm:-mt-20">
      <DitherBackground fade />
      <div
        className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[110px]"
        aria-hidden="true"
      />

      <HeroScroll>
        <Container className="relative flex flex-col items-center gap-10 text-center">
          <Reveal className="font-mono-tech text-xs uppercase tracking-[0.4em] text-blue-300/80">
            Glenn GrizzlyBots proudly present:
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
              ARCTURUS #11918
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-mono-tech text-sm font-semibold uppercase tracking-[0.35em] text-orange-400 sm:text-base">
              Tom Glenn High School, Austin TX
            </p>
          </Reveal>
        </Container>
      </HeroScroll>
    </section>
  );
}
