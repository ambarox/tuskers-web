"use client";

import { motion } from "framer-motion";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
};

export default function BallparkMoments({
  gallery,
  youtubeUrl,
}: {
  gallery: GalleryItem[];
  youtubeUrl: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="leather blue-glow-border card-lift rounded-sm overflow-hidden flex flex-col flex-1 min-h-0"
    >
      <div className="score-label text-center">Ballpark Moments</div>

      {/* 4×2 photo grid — fixed aspect ratio cells so real images don't blow up the layout */}
      <div className="grid grid-cols-2 grid-rows-4 gap-0.5 p-0.5 flex-1 min-h-0">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden bg-[#dde3ff] border border-[#1e2878]/20"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                // Placeholder when image not yet uploaded
                const t = e.currentTarget;
                t.style.display = "none";
                const parent = t.parentElement;
                if (parent && !parent.querySelector(".placeholder")) {
                  const ph = document.createElement("div");
                  ph.className =
                    "placeholder absolute inset-0 flex flex-col items-center justify-center gap-1";
                  ph.innerHTML = `<span style="font-size:1.75rem">📸</span><span style="font-size:9px;color:#B5B9C5;letter-spacing:0.1em;text-transform:uppercase">${item.alt}</span>`;
                  parent.appendChild(ph);
                }
              }}
            />
          </div>
        ))}
      </div>

      {/* Footer with YouTube link */}
      <div className="bg-[#1e2878]/15 border-t border-[#1e2878]/30 px-4 py-2 flex items-center justify-between">
        <span className="text-[9px] text-[#5a6280] tracking-widest uppercase">Match Gallery</span>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[9px] font-bold tracking-widest uppercase text-[#3040c8] hover:text-[#0d1340] transition-colors duration-200"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Watch on YouTube
        </a>
      </div>
    </motion.div>
  );
}
