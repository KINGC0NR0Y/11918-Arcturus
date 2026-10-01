import { BlueprintFigure } from "@/components/ui/BlueprintFigure";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DitherBackground } from "@/components/ui/DitherBackground";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { robotProfile } from "@/lib/data/robot";

const quickFacts = [
  { label: "Season", value: robotProfile.season },
  { label: "Competition", value: robotProfile.competition },
  { label: "Drive System", value: "TBD" },
];

export function RobotPreview() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <DitherBackground />
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative rounded-sm border border-ink-700 bg-ink-900/60 p-6 sm:p-10">
            <BlueprintFigure className="w-full" />
            <div className="absolute right-4 top-4 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-ink-300">
              Fig. 01 &mdash; Concept
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeader
            eyebrow="Current Robot"
            title={robotProfile.name === "TBD" ? "Our Robot — Coming Soon" : robotProfile.name}
            description="Full specifications, subsystems, and CAD are published here as soon as the build is underway. Nothing about the robot below is fabricated — every field marked TBD is genuinely undecided."
            tone="dark"
          />
          <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {quickFacts.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 80} className="border-l-2 border-blue-500/40 pl-4">
                <dt className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-ink-300">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-display text-lg font-bold text-white">{fact.value}</dd>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={240} className="mt-8">
            <Button href="/robot" variant="primary">
              Explore Our Robot
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
