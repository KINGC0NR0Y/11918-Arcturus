import { CTASection } from "@/components/ui/CTASection";
import { Container } from "@/components/ui/Container";
import { DitherBackground } from "@/components/ui/DitherBackground";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { teamInfo } from "@/lib/data/social";
import { approachSteps, teamValues, whatWeDo } from "@/lib/data/values";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "ARCTURUS #11918 is a student-led engineering organization at Tom Glenn High School — what we do, how we work, and what we value.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About ARCTURUS"
        title="A student-led engineering organization."
        description="Not just a group that builds robots — a team where students design, build, program, test, compete, collaborate, and learn."
      />

      <section className=" py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader eyebrow="Who We Are" title="Who We Are" />
            <Reveal delay={80} className="mt-6 space-y-5 text-base leading-relaxed text-ink-200 sm:text-lg">
              <p>
                ARCTURUS #{teamInfo.number} is a student robotics team from {teamInfo.school} in
                Texas. Our team brings together students across software, hardware, CAD, business,
                and strategy to design, build, program, and compete with robots.
              </p>
              <p>
                Robotics is a team effort. Every member contributes different skills and
                perspectives to the engineering and competition process.
              </p>
              <p>
                The team combines technical engineering with strategy, business, communication,
                outreach, and leadership.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative overflow-hidden rounded-sm border border-white/15 p-8">
            <DitherBackground overlay="bg-ink-950/45" grid={false} />
            <p className="relative font-mono-tech text-xs uppercase tracking-[0.25em] text-orange-400">
              Our Approach
            </p>
            <ol className="relative mt-6 space-y-4">
              {approachSteps.map((step, i) => (
                <li key={step} className="flex items-center gap-4">
                  <span className="font-mono-tech text-sm text-blue-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-base font-semibold text-white">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      <section className=" py-20 sm:py-28">
        <Container>
          <SectionHeader eyebrow="What We Do" title="What We Do" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 60}
                className="rounded-sm border border-white/15 p-6"
              >
                <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className=" py-20 sm:py-28">
        <Container>
          <SectionHeader eyebrow="What We Value" title="Our Values" align="center" />
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teamValues.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 60}
                className="rounded-sm border border-white/15 p-6 text-center"
              >
                <h3 className="font-display text-base font-bold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Curious How We Build?"
        title="See the engineering process behind the robot."
        primaryLabel="View Engineering"
        primaryHref="/engineering"
        secondaryLabel="Meet the Team"
        secondaryHref="/team"
      />
    </>
  );
}
