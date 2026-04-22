"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import teamData from "@/data/team.json";

export default function RosterPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-10">
        <p className="text-xs tracking-[0.3em] uppercase text-[#3040c8] font-bold mb-2">
          Season 2026
        </p>
        <h1 className="text-5xl font-black tracking-widest uppercase text-[#0d1340]">
          The Roster
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {teamData.roster.map((player, i) => (
          <motion.div
            key={player.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card-hover group relative border-2 border-[#1e2878]/30 hover:border-[#1e2878] overflow-hidden rounded-sm bg-white"
          >
            {/* Player image */}
            <div className="relative aspect-[3/4] bg-[#eef1ff] overflow-hidden">
              {/* Fallback silhouette — behind the image */}
              <div className="absolute inset-0 flex items-center justify-center text-[#1e2878]/20 text-8xl select-none pointer-events-none">
                ⚾
              </div>
              <Image
                src={player.img}
                alt={player.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
                onError={() => {}}
              />
              {/* Jersey number badge */}
              <div className="absolute top-3 right-3 bg-[#1e2878] text-white text-xs font-black px-2 py-1 tracking-widest">
                #{player.no}
              </div>
            </div>

            {/* Info bar */}
            <div className="bg-[#1e2878] p-4">
              <h3 className="font-black italic tracking-wide text-white text-lg leading-tight">
                {player.name}
              </h3>
              <p className="text-xs tracking-widest uppercase text-[#B5B9C5] mt-0.5">
                {player.pos}
                {player.pos2 ? ` · ${player.pos2}` : ""}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
