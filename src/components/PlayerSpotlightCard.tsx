"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Player = {
  name: string;
  pos: string;
  no: string;
  img?: string;
};

const INTERVAL_MS = 3500;
const VISIBLE = 3;

function PlayerCard({ player, delay }: { player: Player; delay: number }) {
  const initials = player.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay }}
      className="flex-1 relative rounded-sm overflow-hidden"
      style={{ minHeight: "260px" }}
    >
      {/* Full-bleed photo or initials fallback */}
      {player.img ? (
        <img
          src={player.img}
          alt={player.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="jersey-mesh absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-black text-[#1e2878]">{initials}</span>
        </div>
      )}

      {/* Name + number overlay strip at bottom */}
      <div className="absolute bottom-0 inset-x-0 px-2 py-2.5 flex flex-col items-center gap-0.5"
           style={{ background: "linear-gradient(to top, rgba(10,10,12,0.95) 80%, transparent)" }}>
        {/* Jersey number on top of name area */}
        <span className="text-[10px] font-black text-[#3040c8] tracking-widest">
          #{player.no}
        </span>
        <p className="text-xs font-black tracking-wider uppercase text-white text-center leading-tight">
          {player.name}
        </p>
        <p className="text-[9px] text-[#B5B9C5] tracking-widest uppercase">{player.pos}</p>
      </div>

      {/* Subtle blue border */}
      <div className="absolute inset-0 rounded-sm border border-[#1e2878]/40 pointer-events-none" />
    </motion.div>
  );
}

export default function PlayerSpotlightCard({ players }: { players: Player[] }) {
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || players.length <= VISIBLE) return;
    const id = setInterval(
      () => setStart((s) => (s + 1) % players.length),
      INTERVAL_MS
    );
    return () => clearInterval(id);
  }, [paused, players.length]);

  const visible = Array.from({ length: VISIBLE }, (_, i) => players[(start + i) % players.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="leather blue-glow-border card-lift rounded-sm overflow-hidden flex flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="score-label text-center">Player Spotlight</div>

      {/* Cards row */}
      <div className="p-4 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={start}
            className="flex gap-3"
          >
            {visible.map((player, i) => (
              <PlayerCard key={`${start}-${i}`} player={player} delay={i * 0.07} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="bg-[#1e2878]/15 border-t border-[#1e2878]/30 px-4 py-2 flex items-center justify-between">
        <div className="flex gap-1.5">
          {players.map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              aria-label={`Show from player ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === start ? "w-4 bg-[#3040c8]" : "w-1.5 bg-[#1e2878]/40"
              }`}
            />
          ))}
        </div>
        <span className="text-[10px] text-[#5a6280] tracking-widest uppercase">
          Season 2026
        </span>
      </div>
    </motion.div>

  );
}
