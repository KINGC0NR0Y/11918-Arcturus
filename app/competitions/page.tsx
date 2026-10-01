import { CompetitionTable } from "@/components/competitions/CompetitionTable";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TbdCard } from "@/components/ui/TbdCard";
import { competitionHistory, upcomingEvents } from "@/lib/data/competitions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competitions",
  description: "Competition history, schedule, and results for ARCTURUS #11918.",
};

export default function CompetitionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="On the Field"
        title="Competition History"
        description="Every event ARCTURUS attends is logged here — results and awards are added after they happen, never before."
      />

      <section className=" py-16 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Season Record" title="Results" />
          <div className="mt-10">
            <CompetitionTable events={competitionHistory} />
          </div>
        </Container>
      </section>

      <section className=" py-16 sm:py-24">
        <Container>
          <SectionHeader eyebrow="What's Next" title="Upcoming Events" />
          <div className="mt-10">
            {upcomingEvents.length === 0 ? (
              <TbdCard
                title="No events confirmed yet"
                description="The competition schedule will be posted here as soon as it's finalized."
              />
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.map((event, i) => (
                  <Reveal
                    key={event.event}
                    delay={i * 60}
                    className="rounded-sm border border-white/15 p-6"
                  >
                    <p className="font-display text-lg font-bold text-white">{event.event}</p>
                    <p className="mt-2 text-sm text-ink-300">{event.date}</p>
                    <p className="text-sm text-ink-300">{event.location}</p>
                  </Reveal>
                )) }
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className=" py-16 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Photos" title="Competition Gallery" />
          <div className="mt-10">
            <TbdCard
              title="Match photos coming soon"
              description="Competition-day photography will be added to the gallery after each event."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
