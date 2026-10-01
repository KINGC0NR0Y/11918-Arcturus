import { Container } from "@/components/ui/Container";
import { DitherBackground } from "@/components/ui/DitherBackground";
import { Reveal } from "@/components/ui/Reveal";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-16 sm:pb-20 sm:pt-20">
      <DitherBackground fade />
      <Container className="relative">
        <Reveal className="font-mono-tech text-xs uppercase tracking-[0.35em] text-orange-400">
          {eyebrow}
        </Reveal>
        <Reveal delay={60}>
          <h1 className="text-balance mt-3 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={120}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={180} className="mt-6">
            {children}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
