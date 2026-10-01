import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { joinAreas } from "@/lib/data/values";

export function Recruitment() {
  return (
    <section className=" py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 font-mono-tech text-xs uppercase tracking-[0.3em] text-orange-400">
            Get Involved
          </p>
          <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl">
            Build Something Bigger.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-300 sm:text-lg">
            Robotics isn&apos;t only for students who already know how to build robots. There&apos;s
            a place on ARCTURUS for whatever you&apos;re good at.
          </p>
          <div className="mt-8">
            <Button href="/join" variant="primary">
              Join ARCTURUS
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {joinAreas.map((area, i) => (
            <div
              key={area}
              className="flex aspect-square flex-col items-center justify-center gap-1 rounded-sm border border-white/15 p-3 text-center transition-colors duration-300 hover:border-orange-400/60 hover:bg-orange-500/15"
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              <span className="font-display text-sm font-bold text-ink-50">{area}</span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
