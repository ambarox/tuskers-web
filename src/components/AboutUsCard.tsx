"use client";

import { motion } from "framer-motion";

type AboutProps = {
  founded: string;
  tagline: string;
  description: string;
  highlights: string[];
};

export default function AboutUsCard({ about }: { about: AboutProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="leather blue-glow-border card-lift rounded-sm overflow-hidden flex flex-col"
    >
      <div className="score-label text-center">About Us</div>

      <div className="p-4 flex flex-col gap-4">
        {/* Logo + tagline */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Ceylon Tuskers" className="w-14 h-14 object-contain flex-shrink-0" />
          <div>
            <p className="text-sm font-black tracking-widest uppercase text-[#0d1340] leading-tight">
              Ceylon Tuskers
            </p>
            <p className="text-[10px] text-[#3040c8] tracking-wider mt-0.5">{about.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-[11px] text-[#5a6280] leading-relaxed tracking-wide">
          {about.description}
        </p>

        {/* Highlight badges */}
        <div className="flex flex-wrap gap-2">
          {about.highlights.map((h) => (
            <span
              key={h}
              className="text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-sm bg-[#1e2878]/20 border border-[#1e2878]/40 text-[#3040c8]"
            >
              {h}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-[#1e2878]/15 border-t border-[#1e2878]/30 px-4 py-2">
        <span className="text-[9px] text-[#5a6280] tracking-widest uppercase">
          Est. {about.founded} · Singapore
        </span>
      </div>
    </motion.div>
  );
}
