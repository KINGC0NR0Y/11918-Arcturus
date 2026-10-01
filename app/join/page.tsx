import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DitherBackground } from "@/components/ui/DitherBackground";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TbdCard } from "@/components/ui/TbdCard";
import { teamInfo } from "@/lib/data/social";
import { joinAreas, whatYouCanLearn } from "@/lib/data/values";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "How to join ARCTURUS #11918 — no prior robotics experience required.",
};

const joinInfo = [
  { label: "Recruitment Process", value: "TBD" },
  { label: "Meeting Schedule", value: "TBD" },
  { label: "Application", value: "TBD" },
];

export default function JoinPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get Involved"
        title="Join ARCTURUS"
        description="Students can contribute regardless of prior robotics experience. There's a place on the team for whatever you're good at."
      />

      <section className=" py-16 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Where You Fit" title="Ways to Contribute" />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {joinAreas.map((area, i) => (
              <Reveal
                key={area}
                delay={i * 40}
                className="rounded-sm border border-white/15 p-5 text-center"
              >
                <span className="font-display text-sm font-bold text-ink-50">{area}</span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24">
        <DitherBackground />
        <Container className="relative">
          <SectionHeader eyebrow="Skills" title="What You Can Learn" tone="dark" />
          <div className="mt-10 flex flex-wrap gap-3">
            {whatYouCanLearn.map((skill, i) => (
              <Reveal
                key={skill}
                delay={i * 30}
                className="rounded-full border border-ink-700 bg-ink-900/60 px-4 py-2 text-sm font-medium text-ink-100"
              >
                {skill}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className=" py-16 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Details" title="How to Join" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {joinInfo.map((item, i) => (
              <Reveal key={item.label} delay={i * 60}>
                <TbdCard title={item.label} description="Details will be posted here soon." />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Ask a Question
            </Button>
            <Button href={`mailto:${teamInfo.email}`} variant="ghost">
              Email the Team
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
