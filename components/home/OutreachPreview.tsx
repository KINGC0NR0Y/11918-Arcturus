import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { outreachStats } from "@/lib/data/outreach";

export function OutreachPreview() {
  return (
    <section className=" py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Community"
              title="Beyond the Field"
              description="Robotics doesn't stop at competition. ARCTURUS shares engineering and STEM with students outside our own team."
            />
            <Reveal delay={160} className="mt-8">
              <Button href="/outreach" variant="ghost">
                See Our Outreach
              </Button>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {outreachStats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 70}
                className="rounded-sm border border-dashed border-white/20 bg-white/5 p-6 text-center"
              >
                <div className="font-display text-2xl font-bold text-orange-400">TBD</div>
                <p className="mt-1.5 font-mono-tech text-[11px] uppercase tracking-wide text-ink-300">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
