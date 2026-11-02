import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { FiArrowRight, FiBox, FiPlay, FiSettings, FiTool, FiTruck } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Robot",
  description: "The ARCTURUS #11918 robot: this season's machine, its systems, and its specifications.",
};

const LOREM_SHORT = "Lorem ipsum dolor sit amet.";
const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.";

const specs = [
  { icon: FiBox, label: "Spec One", value: "Lorem ipsum" },
  { icon: FiTruck, label: "Spec Two", value: "Dolor sit" },
  { icon: FiSettings, label: "Spec Three", value: "Amet elit" },
  { icon: FiTool, label: "Spec Four", value: "Sed do eiusmod" },
];

const mechanisms = ["Lorem", "Ipsum", "Dolor", "Amet"];

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

export default function RobotPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-10 pt-14 sm:pt-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <span className="eyebrow">The Robot</span>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.95] text-white sm:text-6xl">
                Lorem ipsum
                <span className="block text-orange-500">Dolor sit</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-300">{LOREM}</p>
            </Reveal>
            <Reveal delay={160} className="mt-8">
              <p className="font-display text-xl font-bold uppercase text-white">Lorem-0000</p>
              <p className="mt-1 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-ink-300">
                Lorem ipsum / Dolor sit
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-6">
              <Button href="#" variant="secondary">
                <FiPlay aria-hidden /> Lorem Ipsum
              </Button>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <ImagePlaceholder className="aspect-[4/3]" />
          </Reveal>
        </Container>
      </section>

      {/* Spec strip */}
      <section className="py-6">
        <Container>
          <Reveal>
            <dl className="panel grid grid-cols-2 p-4 lg:grid-cols-4 lg:divide-x lg:divide-line">
              {specs.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 p-3 lg:px-6">
                  <Icon className="h-8 w-8 shrink-0 text-blue-300" aria-hidden />
                  <div>
                    <dt className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-ink-300">
                      {label}
                    </dt>
                    <dd className="mt-1 font-display text-sm font-bold text-white">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Key mechanisms */}
      <section className="py-10 sm:py-14">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <h2 className="title-rule font-display text-2xl font-bold uppercase text-white sm:text-3xl">
              Lorem Ipsum Dolor
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-300">{LOREM}</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {mechanisms.map((name, i) => (
              <Reveal key={name} delay={i * 60}>
                <article className="panel panel-hover flex h-full flex-col gap-3 p-3">
                  <ImagePlaceholder className="aspect-[4/3]" />
                  <h3 className="font-display text-base font-bold uppercase text-white">{name}</h3>
                  <p className="text-xs leading-relaxed text-ink-300">{LOREM_SHORT}</p>
                  <FiArrowRight className="mt-auto text-orange-400" aria-hidden />
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CAD to reality */}
      <section className="py-10 sm:py-14">
        <Container>
          <Reveal>
            <div className="grid items-center gap-6 lg:grid-cols-3">
              <ImagePlaceholder className="aspect-[4/3]" />
              <div>
                <h3 className="font-display text-lg font-bold uppercase text-white">Lorem Ipsum Dolor</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{LOREM}</p>
                <Button href="#" variant="secondary" className="mt-5">
                  Lorem Ipsum
                </Button>
              </div>
              <ImagePlaceholder className="aspect-[4/3]" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Closing band */}
      <section className="border-t border-line bg-ink-950/70 py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-4 text-center">
          <Reveal>
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-ink-300">
              Lorem ipsum. Dolor sit.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-display text-3xl font-bold uppercase text-white sm:text-5xl">
              Lorem ipsum dolor <span className="text-orange-500">sit amet.</span>
            </h2>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
