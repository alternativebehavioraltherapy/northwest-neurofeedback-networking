import { useEffect, useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProcessPhoto } from "@/data/photos";

type Props = {
  photos: ProcessPhoto[];
  heading?: string;
  startIndex?: number;
  variant?: "page" | "embed";
  fit?: "cover" | "contain";
  headingClassName?: string;
  intervalMs?: number;
};

export function PhotoCarousel({
  photos,
  heading = "What a session can look like",
  startIndex = 0,
  variant = "page",
  fit = "cover",
  headingClassName = "text-xs font-medium uppercase tracking-widest text-teal-dark",
  intervalMs = 12000,
}: Props) {
  const labelId = useId();
  const [index, setIndex] = useState(() =>
    photos.length ? startIndex % photos.length : 0,
  );
  const [paused, setPaused] = useState(false);
  const failCount = useRef(0);

  useEffect(() => {
    if (photos.length < 2 || paused) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [photos.length, paused, intervalMs]);

  if (photos.length === 0) return null;
  const current = photos[index] ?? photos[0];

  function go(delta: number) {
    setIndex((i) => (i + delta + photos.length) % photos.length);
  }

  const embed = variant === "embed";
  const contain = fit === "contain";

  return (
    <section
      className={embed ? "" : "border-y border-line bg-paper"}
      aria-labelledby={labelId}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={embed ? "" : "mx-auto max-w-5xl px-4 py-10 sm:px-6"}>
        {heading ? (
          <p
            id={labelId}
            className={headingClassName}
          >
            {heading}
          </p>
        ) : (
          <span id={labelId} className="sr-only">
            Slide images
          </span>
        )}
        <div className={`relative overflow-hidden rounded-lg border border-line ${embed ? "mt-3" : "mt-4"} ${contain ? "bg-cream" : "bg-navy-deep"}`}>
          <img
            src={current.src}
            alt={current.alt}
            className={contain ? "aspect-video w-full object-contain" : "aspect-[3/2] w-full object-cover"}
            onError={() => {
              if (failCount.current >= photos.length - 1) return;
              failCount.current += 1;
              setIndex((i) => (i + 1) % photos.length);
            }}
          />
          {contain ? null : (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/80 to-transparent p-4 pt-16">
              <p className="text-sm text-paper">{current.caption}</p>
              <p className="mt-1 text-xs text-cream">
                {index + 1} of {photos.length}
              </p>
            </div>
          )}
          {photos.length > 1 ? (
            <>
              <button
                type="button"
                className="absolute top-1/2 left-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-navy"
                onClick={() => go(-1)}
                aria-label="Previous photo"
              >
                <ChevronLeft className="size-5" aria-hidden />
              </button>
              <button
                type="button"
                className="absolute top-1/2 right-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-navy"
                onClick={() => go(1)}
                aria-label="Next photo"
              >
                <ChevronRight className="size-5" aria-hidden />
              </button>
            </>
          ) : null}
        </div>
        {contain ? (
          <p className="mt-2 text-sm text-muted">
            {current.caption}{" "}
            <span className="text-xs">
              ({index + 1} of {photos.length})
            </span>
          </p>
        ) : null}
        {photos.length > 1 ? (
          <div className="mt-4 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Photo slides">
            {photos.map((photo, i) => (
              <button
                key={photo.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show photo ${i + 1}: ${photo.caption}`}
                className={`size-2.5 rounded-full ${
                  i === index ? "bg-navy" : "bg-line hover:bg-muted"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function ProcessFigure({ photo, className }: { photo: ProcessPhoto; className?: string }) {
  return (
    <figure className={className}>
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full rounded-lg border border-line object-cover aspect-[3/2]"
      />
      <figcaption className="mt-2 text-sm text-muted">{photo.caption}</figcaption>
    </figure>
  );
}
