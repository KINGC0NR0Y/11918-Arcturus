import { TeamDirectory } from "@/components/team/TeamDirectory";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { teamLeads, teamMembers } from "@/lib/data/team";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: `Meet the ${teamMembers.length} students of ARCTURUS #11918 — ${teamLeads.length} team leads and members across software, hardware, CAD, business, and strategy.`,
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Roster"
        title="The Students of ARCTURUS"
        description={`${teamMembers.length} students across software, hardware, CAD, and business — each bringing something different to the team.`}
      />

      <section className=" py-16 sm:py-24">
        <Container>
          <TeamDirectory />
        </Container>
      </section>
    </>
  );
}
