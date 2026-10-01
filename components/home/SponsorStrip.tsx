import { SponsorMark } from "@/components/sponsors/SponsorMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { sponsors } from "@/lib/data/sponsors";

export function SponsorStrip() {
  return (
    <section className="border-y border-white/15 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader eyebrow="Our Partners" title="Powered by Our Partners" />
          <Reveal delay={80}>
            <Button href="/sponsors" variant="ghost">
              Become a Sponsor
            </Button>
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {sponsors.map((sponsor) => (
            <SponsorMark key={sponsor.id} sponsor={sponsor} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
