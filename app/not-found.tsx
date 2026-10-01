import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DitherBackground } from "@/components/ui/DitherBackground";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <DitherBackground fade />
      <Container className="relative text-center">
        <p className="font-mono-tech text-sm uppercase tracking-[0.35em] text-orange-400">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
          This page isn&apos;t on the roster.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-ink-300">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline-light">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
