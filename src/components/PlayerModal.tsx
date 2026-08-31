"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export type Player = {
  id: number;
  name: string;
  pos: string;
  pos2?: string;
  no: string;
  img: string;
  bio?: string;
};

export default function PlayerModal({
  player,
  onClose,
}: {
  player: Player | null;
  onClose: () => void;
}) {
  // Esc closes, and the page behind stays put while the card is open.
  useEffect(() => {
    if (!player) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [player, onClose]);

  return (
    <AnimatePresence>
      {player && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#0d1340]/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="player-modal-name"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm border-2 border-[#1e2878] bg-[#1e2878] shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[#0d1340]/70 text-white text-xl hover:bg-[#0d1340] transition-colors duration-200"
            >
              ×
            </button>

            <div className="flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-1/2 aspect-[3/4] shrink-0 bg-[#0d1340]">
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-8xl select-none pointer-events-none">
                  ⚾
                </div>
                <Image
                  src={player.img}
                  alt={player.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 384px"
                />
                <div className="absolute top-3 left-3 bg-[#0d1340] text-white text-sm font-black px-2.5 py-1 tracking-widest">
                  #{player.no}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <h2
                  id="player-modal-name"
                  className="font-black italic tracking-wide text-white text-2xl sm:text-3xl leading-tight"
                >
                  {player.name}
                </h2>
                <p className="text-xs tracking-widest uppercase text-[#B5B9C5] mt-2">
                  {player.pos}
                </p>
                {player.pos2 && (
                  <p className="text-xs tracking-widest uppercase text-[#B5B9C5]/70 mt-1">
                    {player.pos2}
                  </p>
                )}
                {player.bio && (
                  <p className="mt-5 text-sm leading-relaxed text-white/80 border-t border-white/15 pt-5">
                    {player.bio}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
