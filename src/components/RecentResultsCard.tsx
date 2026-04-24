"use client";

import { motion } from "framer-motion";
import teamData from "@/data/team.json";

export default function RecentResultsCard() {
  const results = teamData.scores.slice(1, 9);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="leather blue-glow-border card-lift rounded-sm overflow-hidden flex flex-col"
    >
      <div className="score-label text-center">Recent Results</div>

      <div className="flex-1 px-4 pt-2 pb-4 flex flex-col gap-3">
        {results.map((r, i) => (
          <div key={i} className="flex justify-between items-center">
            <span className="text-sm text-[#5a6280] tracking-wide">
              vs {r.opponent}
            </span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-black tracking-widest ${r.isWin ? "text-green-700" : "text-red-400"}`}>
                {r.isWin ? "W" : "L"}
              </span>
              <span className="text-sm font-bold text-[#0d1340] tabular-nums">
                {r.tuskers}-{r.opp}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#1e2878]/15 border-t border-[#1e2878]/30 px-4 py-2">
        <span className="text-[10px] text-[#5a6280] tracking-widest uppercase">
          {teamData.season}
        </span>
      </div>
    </motion.div>
  );
}
