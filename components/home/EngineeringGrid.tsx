import { PillarIcon } from "@/components/home/PillarIcon";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { engineeringPillars } from "@/lib/data/engineering";
import Link from "next/link";

const pillarLinks: Record<string, string> = {
  cad: "/engineering",
  software: "/engineering",
  hardware: "/engineering",
  strategy: "/about",
  business: "/sponsors",
};

export function EngineeringGrid() {
  return (
    <section className=" py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="How We Build"
          title="Engineering the Future"
          description="CAD, hardware, software, prototyping, testing, iteration, and strategy — the disciplines that carry a robot from idea to competition."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {engineeringPillars.map((pillar, i) => (
            <Reveal key={pillar.key} delay={i * 70}>
              <Link
                href={pillarLinks[pillar.key] ?? "/engineering"}
                className="group flex h-full flex-col rounded-sm border border-white/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/60 hover:shadow-lg hover:shadow-ink-900/5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-ink-900 text-orange-400 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-ink-950">
                  <PillarIcon name={pillar.key} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{pillar.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-300">{pillar.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-blue-300">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                    &rarr;
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
