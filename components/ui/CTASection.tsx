import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DitherBackground } from "@/components/ui/DitherBackground";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <DitherBackground fade />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative text-center">
        <Reveal>
          {eyebrow && (
            <p className="mb-3 font-mono-tech text-xs uppercase tracking-[0.3em] text-orange-400">
              {eyebrow}
            </p>
          )}
          <h2 className="text-balance mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={primaryHref} variant="primary">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="outline-light">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
