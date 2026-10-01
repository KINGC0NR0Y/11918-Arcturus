import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TbdCard } from "@/components/ui/TbdCard";
import { outreachEvents, outreachStats } from "@/lib/data/outreach";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outreach",
  description:
    "How ARCTURUS #11918 shares robotics and STEM with students and the community beyond competition.",
};

export default function OutreachPage() {
  return (
    <>
      <PageHeader
        eyebrow="Beyond the Field"
        title="Robotics Beyond Competition"
        description="Outreach is part of how ARCTURUS operates, not an afterthought. Every figure below is real — unmeasured impact is marked TBD, not estimated."
      />

      <section className=" py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-2 overflow-hidden rounded-sm *:border *:border-white/10 sm:grid-cols-4">
            {outreachStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 60} className=" px-5 py-10 text-center">
                <div className="font-display text-3xl font-bold text-orange-400">TBD</div>
                <p className="mt-2 font-mono-tech text-[11px] uppercase tracking-wide text-ink-300">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className=" py-16 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Log" title="Outreach Events" />
          <div className="mt-10">
            {outreachEvents.length === 0 ? (
              <TbdCard
                title="No outreach events logged yet"
                description="Each event will appear here with its date, location, and impact once it takes place."
              />
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {outreachEvents.map((event) => (
                  <div key={event.name} className="rounded-sm border border-white/15 p-6">
                    <p className="font-display text-lg font-bold text-white">{event.name}</p>
                    <p className="mt-1 text-sm text-ink-300">
                      {event.date} &middot; {event.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-200">{event.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className=" py-16 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Photos" title="Outreach Gallery" />
          <div className="mt-10">
            <TbdCard
              title="Photos coming soon"
              description="Outreach event photography will be added here as it's collected."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
