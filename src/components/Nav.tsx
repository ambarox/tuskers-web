"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/",        label: "Home"    },
  { href: "/roster",  label: "Roster"  },
  { href: "/history", label: "History" },
  { href: "/join",    label: "Join"    },
];

function TuskerLogo() {
  return (
    <img
      src="/logo.png"
      alt="Ceylon Tuskers"
      width={52}
      height={52}
      style={{ objectFit: "contain" }}
    />
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="leather border-b border-[#1e2878]/50 sticky top-0 z-50"
            style={{ boxShadow: "0 2px 24px rgba(30,40,120,0.25)" }}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo + team name */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <div className="group-hover:drop-shadow-[0_0_12px_rgba(30,40,120,0.9)] transition-all duration-300">
            <TuskerLogo />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#3040c8] font-bold">Ceylon</span>
            <span className="text-xl tracking-[0.18em] uppercase text-[#0d1340] font-black text-glow">Tuskers</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          {links.map(({ href, label }, i) => (
            <span key={href} className="flex items-center">
              {i > 0 && (
                <span className="text-[#1e2878] mx-3 text-lg select-none">|</span>
              )}
              <Link
                href={href}
                className={`text-sm tracking-[0.2em] uppercase font-bold transition-colors duration-200 ${
                  pathname === href
                    ? "text-[#3040c8]"
                    : "text-[#5a6280] hover:text-[#1e2878]"
                }`}
              >
                {label}
              </Link>
            </span>
          ))}
        </nav>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1e2878] transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1e2878] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1e2878] transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="md:hidden leather border-t border-[#1e2878]/20 px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-sm tracking-[0.25em] uppercase font-bold transition-colors duration-200 ${
                pathname === href
                  ? "text-[#3040c8]"
                  : "text-[#5a6280] hover:text-[#1e2878]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
