"use client";

import { useEffect, useState } from "react";

type PhotoFrameProps = {
  photos: string[];
  intervalMs?: number;
};

export default function PhotoFrame({ photos, intervalMs = 4000 }: PhotoFrameProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % photos.length), intervalMs);
    return () => clearInterval(id);
  }, [photos.length, intervalMs]);

  return (
    <div className="relative size-32 shrink-0 overflow-hidden rounded-sm border border-foreground/30 bg-muted shadow-[5px_5px_0_hsl(var(--primary))] -rotate-2 sm:size-44">
      {photos.length === 0 ? (
        <span className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
          photo
        </span>
      ) : (
        photos.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt="Santiago"
            className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))
      )}
    </div>
  );
}
