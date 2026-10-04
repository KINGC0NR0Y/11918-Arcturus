"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { robotParts } from "@/lib/data/robotParts";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useState } from "react";

// WebGL: client only, never server-rendered.
const RobotScene = dynamic(() => import("./RobotScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center text-sm text-ink-300">
      Loading 3D model&hellip;
    </div>
  ),
});

export function RobotViewer() {
  const [active, setActive] = useState<string | null>(null);
  const part = robotParts.find((p) => p.id === active);

  return (
    <section className="py-20 sm:py-28" aria-label="Our robot">
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Our Robot</h2>
          <p className="mt-3 max-w-xl text-sm text-ink-300 sm:text-base">
            Drag to rotate, then click a component to see what it does.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
          <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/15 bg-ink-950/40 backdrop-blur-sm sm:h-[520px]">
            <RobotScene active={active} onSelect={setActive} />
            <span className="pointer-events-none absolute left-5 top-4 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-ink-300">
              Placeholder model
            </span>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-white/15 bg-ink-950/40 p-6 backdrop-blur-sm">
            <div className="min-h-36" aria-live="polite">
              {part ? (
                <>
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-orange-400">
                    Selected component
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">{part.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-200">{part.description}</p>
                </>
              ) : (
                <p className="text-sm leading-relaxed text-ink-300">
                  Select a component from the model or the list below to learn what it does.
                </p>
              )}
            </div>

            <ul className="flex flex-wrap gap-2">
              {robotParts.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => setActive(active === p.id ? null : p.id)}
                    aria-pressed={active === p.id}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                      active === p.id
                        ? "bg-orange-500 text-ink-950"
                        : "bg-white/10 text-ink-100 hover:bg-white/20"
                    )}
                  >
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-ink-300 sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
