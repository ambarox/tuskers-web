"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Game = {
  opponent: string;
  date: string;
  venue: string;
  time: string;
  matchType: string;
};

function useCountdown(date: string, time: string) {
  const [left, setLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, passed: false });

  useEffect(() => {
    const target = new Date(`${date}T${time}:00`);

    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, passed: true });
        return;
      }
      setLeft({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000)  / 60000),
        seconds: Math.floor((diff % 60000)    / 1000),
        passed:  false,
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [date, time]);

  return left;
}

function Digit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-xl font-black tabular-nums text-[#0d1340] leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[8px] tracking-widest uppercase text-[#5a6280] mt-0.5">{label}</span>
    </div>
  );
}

export default function NextGameCard({ game }: { game: Game }) {
  const { days, hours, minutes, seconds, passed } = useCountdown(game.date, game.time);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="leather blue-glow-border card-lift rounded-sm overflow-hidden flex flex-col"
    >
      <div className="score-label text-center">Next Game</div>

      <div className="flex-1 p-4 flex flex-col justify-center gap-4">
        <div className="flex flex-col items-center gap-1 text-center">
          <img src="/logo.png" alt="Tuskers" className="w-10 h-10 object-contain" />
          <p className="text-base font-black tracking-widest uppercase text-[#0d1340]">Tuskers</p>
          <p className="text-xs text-[#3040c8] tracking-widest font-bold">vs.</p>
          <span className="text-2xl">⚾</span>
          <p className="text-base font-black tracking-widest uppercase text-[#5a6280]">{game.opponent}</p>
          <p className="text-[11px] text-[#5a6280] mt-1">
            {new Date(game.date).toLocaleDateString("en-SG", { day: "numeric", month: "short", year: "numeric" })}
          </p>
          <p className="text-[10px] text-[#3040c8] font-bold tracking-widest uppercase mt-0.5">
            {game.matchType}
          </p>
        </div>

        {/* Countdown */}
        <div className="mt-1 pt-3 border-t border-[#1e2878]/15">
          {passed ? (
            <p className="text-[10px] text-center text-[#3040c8] font-bold tracking-widest uppercase">
              Game Day!
            </p>
          ) : (
            <div className="flex justify-center items-start gap-3">
              <Digit value={days}    label="Days"  />
              <span className="text-[#1e2878]/40 font-black text-lg leading-none mt-0.5">:</span>
              <Digit value={hours}   label="Hrs"   />
              <span className="text-[#1e2878]/40 font-black text-lg leading-none mt-0.5">:</span>
              <Digit value={minutes} label="Min"   />
              <span className="text-[#1e2878]/40 font-black text-lg leading-none mt-0.5">:</span>
              <Digit value={seconds} label="Sec"   />
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#1e2878]/15 border-t border-[#1e2878]/30 px-4 py-2 text-center">
        <span className="text-[10px] text-[#3040c8] font-bold tracking-widest uppercase">
          {game.venue} · {game.time}
        </span>
      </div>
    </motion.div>
  );
}
