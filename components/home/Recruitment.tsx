import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { teamInfo } from "@/lib/data/social";

export function Recruitment() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex justify-center">
        <Reveal className="panel corner-ticks tick-orange flex max-w-3xl flex-col items-center px-6 py-14 text-center sm:px-16">
          <p className="mb-4">
            <span className="eyebrow">07 / Get Involved</span>
          </p>
          <h2 className="title-rule text-balance font-display text-3xl font-bold text-white sm:text-4xl">
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
