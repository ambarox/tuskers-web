"use client";

import { motion } from "framer-motion";

type Game = {
  opponent: string;
  date: string;
  venue: string;
  time: string;
  matchType: string;
};

export default function NextGameCard({ game }: { game: Game }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="leather blue-glow-border card-lift rounded-sm overflow-hidden flex flex-col"
    >
      <div className="score-label text-center">Next Game</div>

      <div className="flex-1 p-4 flex flex-col justify-center gap-4">
        <div className="flex flex-col items-center gap-1 text-center">
          <img src="/logo.png" alt="Tuskers" className="w-10 h-10 object-contain" />
          <p className="text-base font-black tracking-widest uppercase text-[#0d1340]">Tuskers</p>
          <p className="text-xs text-[#3040c8] tracking-widest font-bold">vs.</p>
          <span className="text-2xl">⚾</span>
          <p className="text-base font-black tracking-widest uppercase text-[#5a6280]">{game.opponent}</p>
          <p className="text-[11px] text-[#5a6280] mt-1">
            {new Date(game.date).toLocaleDateString("en-SG", { day: "numeric", month: "short", year: "numeric" })}
          </p>
          <p className="text-[10px] text-[#3040c8] font-bold tracking-widest uppercase mt-0.5">
            {game.matchType}
          </p>
        </div>
      </div>

      <div className="bg-[#1e2878]/15 border-t border-[#1e2878]/30 px-4 py-2 text-center">
        <span className="text-[10px] text-[#3040c8] font-bold tracking-widest uppercase">
          {game.venue} · {game.time}
        </span>
      </div>
    </motion.div>
  );
}
