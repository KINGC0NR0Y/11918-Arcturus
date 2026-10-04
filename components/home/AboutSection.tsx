import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export function AboutSection() {
  return (
    <section id="about" className="snap-section scroll-mt-16 py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
        <Reveal className="flex justify-center">
          <Image
            src="/logo.png"
            alt="ARCTURUS #11918 FTC Robotics logo"
            width={360}
            height={360}
            quality={90}
            className="h-auto w-56 rounded-full shadow-2xl shadow-black/50 sm:w-72 lg:w-full"
          />
        </Reveal>

        <div className="flex flex-col gap-8 text-left">
          <Reveal>
            <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-5xl">
              Guided by stars, driven by innovation.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl border border-white/15 bg-ink-950/40 p-8 backdrop-blur-sm sm:p-10">
              <p className="text-base leading-relaxed text-ink-200 sm:text-lg">{LOREM}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
