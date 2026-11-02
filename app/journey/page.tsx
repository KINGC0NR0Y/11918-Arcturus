import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { FiArrowRight, FiFlag } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Journey",
  description: "The ARCTURUS #11918 journey: our seasons, competitions, and photo gallery.",
};

const LOREM_SHORT = "Lorem ipsum dolor sit amet.";
const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.";

const milestones = [
  { title: "Lorem Ipsum", date: "Month 00, 0000" },
  { title: "Dolor Sit", date: "Month - Month 0000" },
  { title: "Amet Elit", date: "Month - Month 0000" },
  { title: "Sed Do", date: "Month - Month 0000" },
  { title: "Eiusmod", date: "Month - Month 0000" },
  { title: "Tempor", date: "Month 0000" },
];

function ImagePlaceholder({ className, label = "[insert image]" }: { className?: string; label?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "bg-grid-dark-fine flex w-full items-center justify-center border border-dashed border-line-strong bg-ink-900/70 text-center",
        className
      )}
    >
      <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-ink-300">{label}</span>
    </div>
  );
}

export default function JourneyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-10 pt-14 sm:pt-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <span className="eyebrow">Our Journey</span>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.95] text-white sm:text-6xl">
                Lorem ipsum
                <span className="block text-orange-500">Dolor sit</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-300">{LOREM_SHORT}</p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <ImagePlaceholder className="aspect-[4/3]" />
          </Reveal>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-10 sm:py-14">
        <Container>
          <ol className="relative flex flex-col gap-5 pl-12 before:absolute before:bottom-4 before:left-[15px] before:top-4 before:w-px before:bg-line-strong">
            {milestones.map((m, i) => (
              <Reveal key={m.title} as="li" delay={i * 40} className="relative">
                <span className="absolute -left-12 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-line-strong bg-ink-900 text-blue-300">
                  <FiFlag className="h-4 w-4" aria-hidden />
                </span>
                <article className="panel grid items-center gap-4 p-4 sm:grid-cols-[1fr_minmax(0,320px)]">
                  <div>
                    <h3 className="font-display text-base font-bold uppercase text-white">{m.title}</h3>
                    <p className="mt-1 font-mono-tech text-[11px] uppercase tracking-[0.15em] text-orange-400">
                      {m.date}
                    </p>
                    <p className="mt-2 max-w-md text-xs leading-relaxed text-ink-300">{LOREM}</p>
                  </div>
                  <ImagePlaceholder className="aspect-[16/9]" />
                </article>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Closing band */}
      <section className="border-t border-line bg-ink-950/70 py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-5 text-center">
          <Reveal>
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-ink-300">
              Lorem ipsum dolor sit amet
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-display text-3xl font-bold uppercase text-white sm:text-5xl">
              Lorem ipsum <span className="text-orange-500">dolor sit.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Button href="#" variant="secondary">
              Lorem Ipsum <FiArrowRight aria-hidden />
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
