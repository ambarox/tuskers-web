"use client";

import { motion } from "framer-motion";

type Game = {
  id: number;
  opponent: string;
  date: string;
  venue: string;
  time: string;
};

export default function ScheduleCard({ game, index = 0 }: { game: Game; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card-hover bg-white border border-[#1e2878]/30 rounded-sm p-5 flex justify-between items-center"
    >
      <div>
        <p className="text-xs text-[#5a6280] tracking-widest uppercase mb-1">
          {new Date(game.date).toLocaleDateString("en-SG", {
            weekday: "short",
            day: "numeric",
            month: "short",
          })}{" "}
          · {game.time}
        </p>
        <p className="text-[#0d1340] font-black tracking-widest uppercase text-lg">
          vs {game.opponent}
        </p>
      </div>
      <span
        className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm border ${
          game.venue === "Home"
            ? "text-[#3040c8] border-[#1e2878]/60 bg-[#1e2878]/10"
            : "text-[#5a6280] border-[#5a6280]/30 bg-[#5a6280]/8"
        }`}
      >
        {game.venue}
      </span>
    </motion.div>
  );
}
