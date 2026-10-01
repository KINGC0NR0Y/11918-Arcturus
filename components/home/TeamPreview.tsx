import { TeamCard } from "@/components/team/TeamCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { teamLeads } from "@/lib/data/team";

export function TeamPreview() {
  return (
    <section className=" py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Who We Are"
            title="The People Behind ARCTURUS"
            description="A multidisciplinary student organization — software, hardware, CAD, business, and strategy, working as one team."
          />
          <Reveal delay={80}>
            <Button href="/team" variant="ghost">
              Meet the Full Team
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamLeads.map((member, i) => (
            <Reveal key={member.id} delay={i * 80}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
