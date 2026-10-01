import { Container } from "@/components/ui/Container";
import { DitherBackground } from "@/components/ui/DitherBackground";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TbdCard } from "@/components/ui/TbdCard";
import { buildLogPosts, engineeringProcess, engineeringSections } from "@/lib/data/engineering";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "The engineering process behind ARCTURUS #11918 — CAD, hardware, software, electrical, testing, and documentation.",
};

const buildLogStages = [
  "Problem",
  "Initial Idea",
  "Prototype",
  "Testing",
  "Failure",
  "Iteration",
  "Final Solution",
  "What We Learned",
];

export default function EngineeringPage() {
  return (
    <>
      <PageHeader
        eyebrow="Engineering Portfolio"
        title="Engineering Is a Process, Not Just a Product"
        description="This page documents how ARCTURUS designs, builds, and refines its robot — not only the finished result."
      />

      <section className=" py-16 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Disciplines" title="Where the Work Happens" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringSections.map((section, i) => (
              <Reveal
                key={section.key}
                delay={i * 50}
                className="rounded-sm border border-white/15 p-6"
              >
                <h3 className="font-display text-lg font-bold text-white">{section.title}</h3>
                <p
                  className={
                    section.content === "TBD"
                      ? "mt-2 text-sm font-semibold uppercase tracking-wide text-orange-400"
                      : "mt-2 text-sm leading-relaxed text-ink-300"
                  }
                >
                  {section.content}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24">
        <DitherBackground />
        <Container className="relative">
          <SectionHeader
            eyebrow="Our Loop"
            title="The Engineering Cycle"
            tone="dark"
            description="Every mechanism moves through the same eight-step loop, sometimes more than once."
          />
          <div className="mt-12 flex flex-wrap gap-3">
            {engineeringProcess.map((item, i) => (
              <Reveal
                key={item.step}
                delay={i * 40}
                className="flex items-center gap-3 rounded-sm border border-ink-700 bg-ink-900/60 px-4 py-3"
              >
                <span className="font-mono-tech text-sm font-bold text-orange-400">{item.step}</span>
                <span className="text-sm font-semibold text-white">{item.label}</span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className=" py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Build Log"
            title="Documenting the Build"
            description="Every build-log entry follows the same structure, so progress and setbacks are equally visible."
          />

          <Reveal delay={80} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {buildLogStages.map((stage) => (
              <div
                key={stage}
                className="rounded-sm border border-dashed border-white/20 bg-white/5 px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-ink-300"
              >
                {stage}
              </div>
            ))}
          </Reveal>

          <div className="mt-10">
            {buildLogPosts.length === 0 ? (
              <TbdCard
                title="No build-log posts yet"
                description="Entries will be published here throughout the season as mechanisms are designed, tested, and refined."
              />
            ) : null}
          </div>
        </Container>
      </section>
    </>
  );
}
