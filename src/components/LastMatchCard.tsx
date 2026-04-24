"use client";

import { motion } from "framer-motion";

type Match = {
  opponent: string;
  tuskers: number;
  opp: number;
  date: string;
  venue: string;
  matchType: string;
  isWin: boolean;
};

export default function LastMatchCard({ match, season }: { match: Match; season: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="leather blue-glow-border card-lift rounded-sm overflow-hidden flex flex-col"
    >
      <div className="score-label text-center">Last Match</div>

      <div className="flex-1 p-4 flex flex-col gap-3">
        {/* Teams */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚾</span>
            <span className="text-sm font-bold tracking-widest uppercase text-[#5a6280]">
              {match.opponent}
            </span>
          </div>
          <span className="text-3xl font-black tabular-nums text-[#5a6280]">
            {match.opp}
          </span>
        </div>

        <div className="h-px bg-[#1e2878]/20" />

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Tuskers" className="w-6 h-6 object-contain" />
            <div>
              <p className="text-sm font-black tracking-widest uppercase text-[#0d1340]">
                Tuskers
              </p>
              <p className="text-[10px] text-[#3040c8] tracking-widest uppercase">
                {match.isWin ? "Tuskers Win" : "Opp Win"}
              </p>
            </div>
          </div>
          <span className="text-3xl font-black tabular-nums text-[#0d1340]">
            {match.tuskers}
          </span>
        </div>

        {/* Tournament */}
        <div className="mt-1 pt-2 border-t border-[#1e2878]/15 flex flex-col items-center gap-0.5">
          <p className="text-[9px] text-[#5a6280] tracking-wider text-center uppercase">
            Singapore International Baseball League
          </p>
          <p className="text-[9px] text-[#3040c8] tracking-wider text-center uppercase font-bold">
            {match.matchType}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1e2878]/15 border-t border-[#1e2878]/30 px-4 py-2 flex justify-between items-center">
        <span className={`text-xs font-bold tracking-widest uppercase ${match.isWin ? "text-green-700" : "text-red-400"}`}>
          Final · {match.isWin ? "W" : "L"}
        </span>
        <div className="text-right">
          <p className="text-[10px] text-[#5a6280]">
            {new Date(match.date).toLocaleDateString("en-SG", { day: "2-digit", month: "2-digit", year: "numeric" })}
          </p>
          <p className="text-[9px] text-[#5a6280] tracking-widest uppercase">{season}</p>
        </div>
      </div>
    </motion.div>
  );
}
