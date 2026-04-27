"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type NewsItem = {
  id: number;
  title: string;
  summary: string;
  date: string;
  img: string;
  tag: string;
};

const PAGE_URL = "https://tuskers.sg/news";

function ShareIcons({ title, summary }: { title: string; summary: string }) {
  const encoded    = encodeURIComponent(PAGE_URL);
  const encodedMsg = encodeURIComponent(`${title} — ${summary.slice(0, 80)}...`);

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encoded}`;
  const xUrl        = `https://x.com/intent/tweet?text=${encodedMsg}&url=${encoded}`;

  const handleInstagram = async () => {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await (navigator as Navigator & { share: (d: object) => Promise<void> }).share({
          title,
          text: summary,
          url: PAGE_URL,
        });
      } catch { /* user cancelled */ }
    } else {
      window.open("https://www.instagram.com/tuskers.baseball", "_blank");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button onClick={handleInstagram} aria-label="Share on Instagram"
        className="text-[#5a6280] hover:text-[#E1306C] transition-colors duration-200">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      </button>
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"
        className="text-[#5a6280] hover:text-[#1877F2] transition-colors duration-200">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>
      <a href={xUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on X"
        className="text-[#5a6280] hover:text-[#0d1340] transition-colors duration-200">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
    </div>
  );
}

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
        <div className="w-full sm:w-48 h-48 flex-shrink-0 bg-[#1e2878]/10 overflow-hidden">
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
