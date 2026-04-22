"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <header className="leather border-b border-[#1e2878]/50 sticky top-0 z-50"
            style={{ boxShadow: "0 2px 24px rgba(30,40,120,0.25)" }}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + team name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="group-hover:drop-shadow-[0_0_12px_rgba(30,40,120,0.9)] transition-all duration-300">
            <TuskerLogo />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#3040c8] font-bold">Ceylon</span>
            <span className="text-xl tracking-[0.18em] uppercase text-[#0d1340] font-black text-glow">Tuskers</span>
          </div>
        </Link>

        {/* Nav links with pipe dividers */}
        <nav className="flex items-center">
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
      </div>
    </header>
  );
}
