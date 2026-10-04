import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { teamInfo } from "@/lib/data/social";

export function Recruitment() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex justify-center">
        <Reveal className="flex max-w-2xl flex-col items-center text-center">
          <p className="mb-3 font-mono-tech text-xs uppercase tracking-[0.3em] text-orange-400">
            Get Involved
          </p>
          <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl">
            Build Something Bigger.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-300 sm:text-lg">
            Robotics isn&apos;t only for students who already know how to build robots. There&apos;s
            a place on ARCTURUS for whatever you&apos;re good at.
          </p>
          <div className="mt-8">
            <Button href={`mailto:${teamInfo.email}`} variant="primary">
              Join ARCTURUS
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
