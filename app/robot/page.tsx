import { SpecGrid } from "@/components/robot/SpecGrid";
import { BlueprintFigure } from "@/components/ui/BlueprintFigure";
import { CTASection } from "@/components/ui/CTASection";
import { Container } from "@/components/ui/Container";
import { DitherBackground } from "@/components/ui/DitherBackground";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TbdCard } from "@/components/ui/TbdCard";
import { robotProfile, robotSpecs, robotSystems } from "@/lib/data/robot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robot",
  description:
    "Specifications, subsystems, and CAD for the current ARCTURUS #11918 competition robot.",
};

export default function RobotPage() {
  return (
    <>
      <PageHeader
        eyebrow="Current Robot"
        title={robotProfile.name === "TBD" ? "This Season's Robot" : robotProfile.name}
        description="Every specification below reflects the actual state of the build. Fields marked TBD are genuinely undecided — nothing here is fabricated."
      >
        <div className="flex flex-wrap gap-6 font-mono-tech text-xs uppercase tracking-wide text-ink-300">
          <span>
            Season: <span className="text-white">{robotProfile.season}</span>
          </span>
          <span>
            Competition: <span className="text-white">{robotProfile.competition}</span>
          </span>
        </div>
      </PageHeader>

      <section className=" py-16 sm:py-24">
        <Container>
          <Reveal className="relative overflow-hidden rounded-sm border border-white/15 p-8 sm:p-14">
            <DitherBackground grid={false} />
            <BlueprintFigure className="relative mx-auto w-full max-w-2xl" />
            <p className="relative mt-6 text-center font-mono-tech text-xs uppercase tracking-[0.2em] text-ink-300">
              Robot photography and CAD renders will replace this placeholder once available.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className=" py-16 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Dimensions &amp; Systems" title="Specifications" />
          <div className="mt-10">
            <SpecGrid items={robotSpecs} />
          </div>
        </Container>
      </section>

      <section className=" py-16 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Under the Hood" title="Major Systems" />
          <div className="mt-10">
            <SpecGrid items={robotSystems} />
          </div>
        </Container>
      </section>

      <section className=" py-16 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Visuals" title="Robot Gallery" />
          <div className="mt-10">
            <TbdCard
              title="Photos coming soon"
              description="Build and competition photography will appear here once the season is underway."
            />
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="See How It's Built"
        title="Follow the engineering process behind this robot."
        primaryLabel="View Engineering"
        primaryHref="/engineering"
        secondaryLabel="Competition Schedule"
        secondaryHref="/competitions"
      />
    </>
  );
}
