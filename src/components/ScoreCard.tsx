"use client";

import { motion } from "framer-motion";

type Match = {
  id: number;
  opponent: string;
  tuskers: number;
  opp: number;
  date: string;
  venue: string;
  isWin: boolean;
};

export default function ScoreCard({ match, index = 0 }: { match: Match; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card-hover bg-white border-l-4 border-[#1e2878] rounded-sm p-6 shadow-lg"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs text-[#5a6280] tracking-widest uppercase">
          {new Date(match.date).toLocaleDateString("en-SG", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
        <span className="text-xs text-[#5a6280] tracking-widest uppercase">
          {match.venue}
        </span>
      </div>

      <div className="flex justify-between items-center mt-1">
        <span className="text-lg font-black tracking-widest uppercase text-[#0d1340]">
          Tuskers
        </span>
        <span className="text-3xl font-black text-[#0d1340] tabular-nums">
          {match.tuskers}
        </span>
      </div>
      <div className="flex justify-between items-center mt-1">
        <span className="text-lg font-bold tracking-wide uppercase text-[#5a6280]">
          {match.opponent}
        </span>
        <span className="text-3xl font-black text-[#5a6280] tabular-nums">
          {match.opp}
        </span>
      </div>

      <div
        className={`mt-4 inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm ${
          match.isWin
            ? "bg-green-50 text-green-700 border border-green-300"
            : "bg-red-50 text-red-600 border border-red-300"
        }`}
      >
        Final · {match.isWin ? "Win" : "Loss"}
      </div>
    </motion.div>
  );
}
