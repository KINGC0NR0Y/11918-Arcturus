import { SponsorMark } from "@/components/sponsors/SponsorMark";
import { CTASection } from "@/components/ui/CTASection";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TbdCard } from "@/components/ui/TbdCard";
import { sponsors } from "@/lib/data/sponsors";
import { teamInfo } from "@/lib/data/social";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "The organizations that support ARCTURUS #11918 — and how to become a sponsor.",
};

export default function SponsorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Partners"
        title="Powered by Our Partners"
        description="ARCTURUS competes because organizations like these invest in student engineering."
      />

      <section className=" py-16 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Current Sponsors" title="Thank You" />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {sponsors.map((sponsor, i) => (
              <Reveal key={sponsor.id} delay={i * 40}>
                <SponsorMark sponsor={sponsor} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className=" py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Why It Matters"
              title="What Sponsorship Supports"
              description="Sponsorship funds the parts, materials, tools, competition fees, and travel that let ARCTURUS design, build, and compete."
            />
          </div>
          <Reveal delay={100}>
            <TbdCard
              title="Sponsorship tiers coming soon"
              description="Specific sponsorship levels and benefits will be published here once finalized — we won't invent them in the meantime."
            />
          </Reveal>
        </Container>
      </section>

      <CTASection
        eyebrow="Partner With Us"
        title="Become a Sponsor"
        description={`Reach out at ${teamInfo.email} to learn how your organization can support ARCTURUS #${teamInfo.number}.`}
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
