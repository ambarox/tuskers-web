"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareIcons from "./ShareIcons";

type NewsItem = {
  id: number;
  title: string;
  summary: string;
  date: string;
  img: string;
  tag: string;
};

export default function LatestNewsCard({ item }: { item: NewsItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="leather blue-glow-border card-lift rounded-sm overflow-hidden"
    >
      <div className="score-label flex items-center justify-between">
        <span>Latest News</span>
        <Link
          href="/news"
          className="text-[#a0aaff] hover:text-white text-[9px] tracking-widest uppercase transition-colors"
        >
          View All →
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 bg-[#1e2878]/10 overflow-hidden">
          <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
        </div>

        {/* Text */}
        <div className="flex-1 p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-sm bg-[#1e2878]/10 text-[#1e2878]">
              {item.tag}
            </span>
            <p className="text-[10px] text-[#3040c8] font-bold tracking-widest uppercase">
              {new Date(item.date).toLocaleDateString("en-SG", { day: "numeric", month: "short", year: "numeric" })}
            </p>
            <div className="ml-auto">
              <ShareIcons title={item.title} summary={item.summary} />
            </div>
          </div>

          <h2 className="text-base font-black tracking-wide text-[#0d1340] leading-snug">
            {item.title}
          </h2>

          <p className="text-sm text-[#5a6280] leading-relaxed">
            {item.summary}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
