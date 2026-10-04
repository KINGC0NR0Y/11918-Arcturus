import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { TbdCard } from "@/components/ui/TbdCard";

interface Fact {
  label: string;
  value: string;
}
interface Card {
  title: string;
  description: string;
}
export interface PageSection {
  id: string;
  title: string;
  description: string;
  facts?: Fact[];
  cards?: Card[];
}

/**
 * Layout for the Robot / Engineering / Journey pages: one page, several
 * anchored sections. Content is honest placeholder ("TBD") until the team
 * supplies the real material.
 */
export function SectionPage({
  eyebrow,
  title,
  description,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  sections: PageSection[];
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={description} />

      <div className="flex flex-col gap-20 pb-24 sm:gap-28">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <Container className="flex flex-col gap-8">
              <Reveal>
                <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-300">
                  {section.description}
                </p>
              </Reveal>

              {section.facts && (
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.facts.map((fact, i) => (
                    <Reveal
                      key={fact.label}
                      delay={i * 40}
                      className="rounded-sm border border-white/15 p-5"
                    >
                      <dt className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-ink-300">
                        {fact.label}
                      </dt>
                      <dd
                        className={
                          fact.value === "TBD"
                            ? "mt-2 text-sm font-semibold uppercase tracking-wide text-orange-400"
                            : "mt-2 font-display text-lg font-bold text-white"
                        }
                      >
                        {fact.value}
                      </dd>
                    </Reveal>
                  ))}
                </dl>
              )}

              {section.cards && (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {section.cards.map((card, i) => (
                    <Reveal key={card.title} delay={i * 60}>
                      <TbdCard
                        title={card.title}
                        description={card.description}
                        className="h-full"
                      />
                    </Reveal>
                  ))}
                </div>
              )}
            </Container>
          </section>
        ))}
      </div>
    </>
  );
}
