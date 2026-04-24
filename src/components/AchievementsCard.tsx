"use client";

import { motion } from "framer-motion";

type Achievement = {
  season: string;
  result: string;
  badge: string;
  highlight: boolean;
};

export default function AchievementsCard({ achievements }: { achievements: Achievement[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.25 }}
      className="leather blue-glow-border rounded-sm overflow-hidden"
    >
      <div className="score-label flex items-center justify-between">
        <span>Season Achievements</span>
        <span className="text-[#a0aaff] text-[9px] tracking-widest">BEST SEASON YET</span>
      </div>

      <div className="p-4 flex flex-col gap-3">
        {achievements.map((s, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 px-3 py-2.5 rounded-sm border ${
              s.highlight
                ? "bg-[#1e2878]/08 border-[#1e2878]/40"
                : "border-[#1e2878]/15"
            }`}
          >
            <div
              className={`w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-sm font-black text-xs tracking-widest ${
                s.highlight
                  ? "bg-[#1e2878] text-white"
                  : "bg-[#eef1ff] text-[#1e2878]"
              }`}
            >
              {s.badge}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-[#5a6280] tracking-widest uppercase">
                {s.season}
              </p>
              <p
                className={`text-sm font-black tracking-wide uppercase leading-tight ${
                  s.highlight ? "text-[#1e2878]" : "text-[#0d1340]"
                }`}
              >
                {s.result}
              </p>
            </div>

            {s.highlight && (
              <span className="text-lg select-none" aria-hidden>🏆</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
