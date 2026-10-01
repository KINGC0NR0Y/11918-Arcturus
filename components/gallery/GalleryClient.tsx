"use client";

import { TbdCard } from "@/components/ui/TbdCard";
import { galleryCategories, galleryImages } from "@/lib/data/gallery";
import type { GalleryCategory } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const filters: ("All" | GalleryCategory)[] = ["All", ...galleryCategories];

export function GalleryClient() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)),
    [filter]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, filtered.length]);

  return (
    <div>
      <div role="group" aria-label="Filter gallery by category" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
              filter === f ? "bg-orange-500 text-ink-950" : "bg-white/10 text-ink-200 hover:bg-white/20"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10">
          <TbdCard
            title="No photos in this category yet"
            description="Real ARCTURUS photography will appear here as it's captured — never stock or unrelated images."
          />
        </div>
      ) : (
        <div className="mt-10 columns-1 gap-4 *:mb-4 sm:columns-2 lg:columns-3">
          {filtered.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="block w-full overflow-hidden rounded-sm border border-white/15"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </button>
          ))}
        </div>
      )}

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink-950/95 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={filtered[lightboxIndex].alt}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-6 top-6 text-3xl leading-none text-white"
            aria-label="Close"
          >
            &times;
          </button>
          <Image
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].alt}
            width={1600}
            height={1200}
            className="max-h-[85vh] w-auto rounded-sm object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {filtered[lightboxIndex].caption && (
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-ink-200">
              {filtered[lightboxIndex].caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
