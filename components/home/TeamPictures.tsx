import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const CAPTION = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

// Staggered on desktop: the middle picture sits higher, the last one lower.
const pictures = [
  { label: "Pic 1", offset: "lg:mt-0", float: "[animation-delay:0s]" },
  { label: "Pic 2", offset: "lg:-mt-12", float: "[animation-delay:-2s]" },
  { label: "Pic 3", offset: "lg:mt-12", float: "[animation-delay:-4s]" },
  { label: "Pic 4", offset: "lg:mt-0", float: "[animation-delay:-1s]" },
  { label: "Pic 5", offset: "lg:-mt-12", float: "[animation-delay:-3s]" },
  { label: "Pic 6", offset: "lg:mt-12", float: "[animation-delay:-5s]" },
];

export function TeamPictures() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-14 sm:gap-16 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-28">
          {pictures.map((pic, i) => (
            <Reveal key={pic.label} delay={(i % 3) * 100} className={pic.offset}>
              <figure className={cn("animate-float flex flex-col items-center gap-5", pic.float)}>
                <div className="flex aspect-[4/5] w-full max-w-xs items-center justify-center rounded-3xl border border-white/15 bg-ink-950/40 shadow-2xl shadow-black/40 backdrop-blur-sm">
                  <span className="font-display text-2xl font-bold text-white/80">{pic.label}</span>
                </div>
                <figcaption className="max-w-xs text-center text-sm leading-relaxed text-ink-300">
                  {CAPTION}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
