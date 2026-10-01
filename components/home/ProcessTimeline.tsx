import { Container } from "@/components/ui/Container";
import { DitherBackground } from "@/components/ui/DitherBackground";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { engineeringProcess } from "@/lib/data/engineering";

export function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <DitherBackground />
      <Container className="relative">
        <SectionHeader
          eyebrow="Our Process"
          title="From Problem to Podium"
          description="Every mechanism on the robot passes through the same disciplined loop."
          tone="dark"
        />

        <div className="relative mt-14 overflow-x-auto pb-4">
          <div className="relative grid min-w-[720px] grid-cols-8 gap-2 sm:min-w-0">
            <div
              className="absolute left-0 right-0 top-6 hidden h-px bg-ink-700 sm:block"
              aria-hidden="true"
            />
            {engineeringProcess.map((item, i) => (
              <Reveal key={item.step} delay={i * 60} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/60 bg-ink-950 font-mono-tech text-sm font-bold text-orange-400">
                  {item.step}
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink-200 sm:text-sm">
                  {item.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
