import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const LOREM =
  "ARCTURUS #11918 is a FIRST Robotics Competition team based in Austin, TX at Tom Glenn High School. We bring together students passionate about robotics, engineering, and teamwork to design, build, and compete with innovative robots. Through every season, we challenge ourselves to solve complex problems, learn from failure, and continuously improve our designs. More than just a robotics team, ARCTURUS is a community of students working together to build, compete, and inspire the next generation of engineers.";

export function AboutSection() {
  return (
    <section id="about" className="snap-section scroll-mt-16 py-20 sm:py-28">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <p className="mb-4">
            <span className="eyebrow">01 / About</span>
          </p>
          <h2 className="title-rule text-balance font-display text-3xl font-bold text-white sm:text-5xl">
            Guided by stars, driven by innovation.
          </h2>
        </Reveal>

        {/* Both panels sit in one row and stretch to the same height. */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr] lg:items-stretch lg:gap-10">
          <Reveal className="flex">
            <div className="panel corner-ticks tick-orange flex w-full items-center justify-center p-6">
              <Image
                src="/logo.png"
                alt="ARCTURUS #11918 FTC Robotics logo"
                width={360}
                height={360}
                quality={90}
                className="h-auto w-full max-w-72 rounded-full"
              />
            </div>
          </Reveal>

          <Reveal delay={100} className="flex">
            <div className="panel corner-ticks flex w-full items-center p-8 sm:p-10">
              <p className="text-base leading-relaxed text-ink-200 sm:text-lg">{LOREM}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
