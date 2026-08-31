"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
};

const AUTOPLAY_MS = 5000;

/** Fisher–Yates. Returns a new array; never mutates the input. */
function shuffle<T>(items: T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function GallerySlider({ gallery }: { gallery: GalleryItem[] }) {
  // Starts in JSON order so the prerendered HTML and the first client render
  // match; the mount effect below swaps in the shuffle.
  const [items, setItems] = useState(gallery);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const thumbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setItems(shuffle(gallery));
  }, [gallery]);

  const count = items.length;

  const goTo = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setIndex(next);
  }, []);

  const prev = useCallback(() => {
    goTo((index - 1 + count) % count, -1);
  }, [count, goTo, index]);

  const next = useCallback(() => {
    goTo((index + 1) % count, 1);
  }, [count, goTo, index]);

  // Autoplay runs for the whole visit. `index` is a dependency so picking a
  // photo restarts the clock from there rather than cutting its turn short.
  // Off under reduced-motion, and idle while hovered or backgrounded.
  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const t = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, count, index]);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // Keep the active thumbnail in view as the stage advances.
  useEffect(() => {
    const strip = thumbsRef.current;
    const active = strip?.children[index] as HTMLElement | undefined;
    active?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [index]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  // Swipe — a short horizontal drag flips the stage.
  const dragStart = useRef(0);
  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const dx = e.clientX - dragStart.current;
    if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
  };

  if (count === 0) {
    return (
      <div className="leather blue-glow-border rounded-sm p-16 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-[#5a6280]">
          No photos yet
        </p>
      </div>
    );
  }

  const current = items[index];

  return (
    <div
      className="flex flex-col gap-4"
      role="group"
      aria-roledescription="carousel"
      aria-label="Ballpark moments"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Stage — capped so the older 800px-wide files are never upscaled. */}
      <div className="mx-auto w-full max-w-[900px]">
        <div
          className="leather blue-glow-border rounded-sm overflow-hidden relative aspect-[3/2] bg-[#dde3ff] select-none"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img
              key={current.id}
              src={current.src}
              alt={current.alt}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
              onError={(e) => {
                const t = e.currentTarget;
                t.style.visibility = "hidden";
              }}
            />
          </AnimatePresence>

          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#0d1340]/60 text-white text-xl hover:bg-[#0d1340]/85 transition-colors duration-200"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#0d1340]/60 text-white text-xl hover:bg-[#0d1340]/85 transition-colors duration-200"
          >
            ›
          </button>
        </div>

        {/* Caption + position */}
        <div className="flex items-center justify-between gap-4 px-1 pt-3">
          <p className="text-xs text-[#5a6280] italic">{current.alt}</p>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#3040c8] font-bold shrink-0">
            {index + 1} / {count}
          </span>
        </div>
        <p className="sr-only" aria-live="polite">
          Photo {index + 1} of {count}: {current.alt}
        </p>
      </div>

      {/* Thumbnail strip */}
      <div
        ref={thumbsRef}
        className="flex gap-1.5 overflow-x-auto pb-2 px-1"
        role="tablist"
        aria-label="Choose a photo"
      >
        {items.map((item, i) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={i === index}
            aria-label={`Show photo ${i + 1}: ${item.alt}`}
            onClick={() => goTo(i, i > index ? 1 : -1)}
            className={`relative shrink-0 w-20 h-14 overflow-hidden rounded-sm border-2 transition-all duration-200 ${
              i === index
                ? "border-[#3040c8] opacity-100"
                : "border-[#1e2878]/20 opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={item.src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
