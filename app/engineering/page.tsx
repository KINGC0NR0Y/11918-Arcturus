import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import {
  FiArrowRight,
  FiAward,
  FiCheck,
  FiCode,
  FiMonitor,
  FiRefreshCw,
  FiSettings,
  FiSun,
  FiTool,
  FiZap,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "The engineering behind ARCTURUS #11918: mechanical, electrical, software, and CAD.",
};

const LOREM_SHORT = "Lorem ipsum dolor sit amet.";
const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.";

const pillars = [
  { icon: FiSettings, label: "Lorem" },
  { icon: FiZap, label: "Ipsum" },
  { icon: FiCode, label: "Dolor" },
];

const disciplines = ["Lorem", "Ipsum", "Dolor"];
const bullets = ["Lorem ipsum", "Dolor sit amet", "Consectetur elit"];

const steps = [
  { icon: FiSun, label: "1. Lorem" },
  { icon: FiMonitor, label: "2. Ipsum" },
  { icon: FiTool, label: "3. Dolor" },
  { icon: FiRefreshCw, label: "4. Sit" },
  { icon: FiAward, label: "5. Amet" },
];

function ImagePlaceholder({ className, label = "[insert image]" }: { className?: string; label?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "bg-grid-dark-fine flex w-full items-center justify-center border border-dashed border-line-strong bg-ink-900/70 text-center",
        className
      )}
    >
      <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-ink-300">{label}</span>
    </div>
  );
}

export default function EngineeringPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-10 pt-14 sm:pt-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <span className="eyebrow">Engineering</span>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl">
                Lorem <span className="text-ink-300">&gt;</span> Ipsum{" "}
                <span className="text-ink-300">&gt;</span>{" "}
                <span className="text-orange-500">Dolor</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-300">{LOREM}</p>
            </Reveal>
            <Reveal delay={160}>
              <ul className="mt-8 flex gap-8">
                {pillars.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex flex-col items-start gap-2">
                    <Icon className="h-6 w-6 text-blue-300" aria-hidden />
                    <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-white">
                      {label}
                    </span>
                    <span className="text-xs text-ink-300">Lorem ipsum</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <ImagePlaceholder className="aspect-[4/3]" />
          </Reveal>
        </Container>
      </section>

      {/* Our disciplines */}
      <section className="py-10 sm:py-14">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <h2 className="title-rule font-display text-2xl font-bold uppercase text-white sm:text-3xl">
              Lorem Ipsum
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-300">{LOREM_SHORT}</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {disciplines.map((name, i) => (
              <Reveal key={name} delay={i * 60}>
                <article className="panel panel-hover flex h-full flex-col gap-3 p-3">
                  <ImagePlaceholder className="aspect-[4/3]" />
                  <h3 className="mt-2 font-display text-base font-bold uppercase text-white">{name}</h3>
                  <p className="text-xs leading-relaxed text-ink-300">{LOREM}</p>
                  <ul className="mt-1 space-y-1.5 text-xs text-ink-200">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <FiCheck className="text-blue-300" aria-hidden /> {b}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 font-mono-tech text-[11px] uppercase tracking-[0.15em] text-orange-400">
                    Lorem ipsum <FiArrowRight aria-hidden />
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* The process */}
      <section className="border-t border-line py-10 sm:py-14">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <h2 className="title-rule font-display text-2xl font-bold uppercase text-white sm:text-3xl">
              Lorem Ipsum
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-300">{LOREM_SHORT}</p>
          </Reveal>
          <Reveal>
            <ol className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {steps.map(({ icon: Icon, label }) => (
                <li key={label} className="flex flex-col items-center gap-3 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line-strong bg-panel">
                    <Icon className="h-6 w-6 text-blue-300" aria-hidden />
                  </span>
                  <span className="font-mono-tech text-[11px] uppercase tracking-[0.15em] text-white">
                    {label}
                  </span>
                  <span className="text-xs text-ink-300">Lorem ipsum dolor sit.</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* Problem solving banner */}
      <section className="py-10 pb-24 sm:py-14 sm:pb-24">
        <Container>
          <Reveal>
            <div className="panel grid items-center gap-6 p-4 md:grid-cols-2">
              <ImagePlaceholder className="aspect-[4/3]" />
              <div className="p-2 md:p-6">
                <h3 className="font-display text-xl font-bold uppercase text-white">
                  Lorem ipsum dolor sit amet
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{LOREM}</p>
                <Button href="#" variant="secondary" className="mt-5">
                  Lorem Ipsum <FiArrowRight aria-hidden />
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
