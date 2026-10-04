import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const teamRoles = ["Team Lead", "Software", "Mechanical", "CAD", "Drive"];

const journey = ["Design", "Build", "Test", "Compete", "???"];

export function MissionSection() {
  return (
    <section aria-label="Mission, team and journey" className="bg-panel/60">
      {/* Current mission */}
      <div className="border-t border-line py-20 sm:py-28">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <p className="eyebrow">03 / Current Mission</p>
          </Reveal>

          <Reveal delay={100} className="mt-10 w-full max-w-5xl">
            <div className="panel corner-ticks flex aspect-video w-full items-center justify-center">
              <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-ink-300">
                Robot photo / action shot
              </span>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <h2 className="mt-10 font-display text-3xl font-bold text-white sm:text-5xl">
              Designing. Building. Competing.
            </h2>
            <p className="mt-4 text-base text-ink-300 sm:text-lg">
              Follow our journey through the season.
            </p>
          </Reveal>
        </Container>
      </div>

      {/* The team */}
      <div className="border-t border-line py-16 sm:py-20">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <p className="eyebrow">04 / The Team</p>
            <p className="mt-4 font-display text-xl font-semibold text-white sm:text-2xl">
              Students &bull; Mentors &bull; Engineers
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {teamRoles.map((role) => (
                <li
                  key={role}
                  className="border border-line-strong bg-panel px-4 py-2 font-mono-tech text-xs uppercase tracking-[0.18em] text-ink-100 shadow-[3px_3px_0_0_rgb(0_0_0/0.5)]"
                >
                  {role}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </div>

      {/* Our journey */}
      <div className="border-t border-line py-20 sm:py-28">
        <Container>
          <Reveal className="text-center">
            <p className="eyebrow">05 / Our Journey</p>
          </Reveal>

          <Reveal delay={60} className="mt-10 flex flex-col items-center gap-4">
            <a
              href="https://www.firstinspires.org/programs/ftc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FIRST Tech Challenge (opens in a new tab)"
              className="group panel corner-ticks panel-hover block bg-white! bg-none! p-5"
            >
              <Image
                src="/ftc-logo.png"
                alt="FIRST Tech Challenge logo"
                width={356}
                height={280}
                className="h-auto w-40 sm:w-48"
              />
            </a>
            <p className="font-mono-tech text-xs uppercase tracking-[0.22em] text-ink-300">
              Proud FIRST Tech Challenge team
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ol className="relative mx-auto mt-14 flex max-w-4xl flex-col gap-10 md:grid md:grid-cols-5 md:gap-0">
              {/* connector: vertical on mobile, horizontal on desktop */}
              <span
                className="absolute bottom-3 left-2.5 top-3 w-px bg-line-strong md:hidden"
                aria-hidden="true"
              />
              <span
                className="absolute left-[10%] right-[10%] top-3 hidden h-px bg-line-strong md:block"
                aria-hidden="true"
              />
              {journey.map((step, i) => {
                const unknown = i === journey.length - 1;
                return (
                  <li
                    key={step}
                    className="relative flex items-center gap-5 md:flex-col md:gap-4 md:text-center"
                  >
                    <span
                      className={cn(
                        "relative z-10 h-5 w-5 shrink-0 border-2 bg-ink-950",
                        unknown ? "border-dashed border-line-strong!" : "border-orange-500! bg-orange-500!"
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        "font-mono-tech text-xs font-medium uppercase tracking-[0.22em]",
                        unknown ? "text-ink-300" : "text-white"
                      )}
                    >
                      {step}
                    </span>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
