import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const teamRoles = ["Team Lead", "Software", "Mechanical", "CAD", "Drive"];

const journey = ["Design", "Build", "Test", "Compete", "???"];

const eyebrow =
  "font-mono-tech text-xs uppercase tracking-[0.3em] text-orange-400";

export function MissionSection() {
  return (
    <section aria-label="Mission, team and journey">
      {/* Current mission */}
      <div className="border-t border-white/15 py-20 sm:py-28">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <p className={eyebrow}>Current Mission</p>
          </Reveal>

          <Reveal delay={100} className="mt-10 w-full max-w-5xl">
            <div className="flex aspect-video w-full items-center justify-center rounded-3xl border border-white/15 bg-ink-950/40 shadow-2xl shadow-black/40 backdrop-blur-sm">
              <span className="font-display text-xl font-semibold text-white/70">
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
      <div className="border-t border-white/15 py-16 sm:py-20">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <p className={eyebrow}>The Team</p>
            <p className="mt-4 font-display text-xl font-semibold text-white sm:text-2xl">
              Students &bull; Mentors &bull; Engineers
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {teamRoles.map((role) => (
                <li
                  key={role}
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold text-ink-100"
                >
                  {role}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </div>

      {/* Our journey */}
      <div className="border-t border-white/15 py-20 sm:py-28">
        <Container>
          <Reveal className="text-center">
            <p className={eyebrow}>Our Journey</p>
          </Reveal>

          <Reveal delay={100}>
            <ol className="relative mx-auto mt-14 flex max-w-4xl flex-col gap-10 md:grid md:grid-cols-5 md:gap-0">
              {/* connector: vertical on mobile, horizontal on desktop */}
              <span
                className="absolute bottom-3 left-3 top-3 w-px bg-white/25 md:hidden"
                aria-hidden="true"
              />
              <span
                className="absolute left-[10%] right-[10%] top-3 hidden h-px bg-white/25 md:block"
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
                        "relative z-10 h-6 w-6 shrink-0 rounded-full border-2 bg-ink-950",
                        unknown ? "border-dashed border-white/40!" : "border-orange-500!"
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        "font-mono-tech text-sm font-semibold uppercase tracking-[0.15em]",
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
