import teamData from "@/data/team.json";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.1" fill="currentColor"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export default function Footer() {
  const igHandle = teamData.contact.social.ig.replace("@", "");

  return (
    <footer className="leather border-t border-[#1e2878]/40 mt-4"
            style={{ boxShadow: "0 -2px 24px rgba(30,40,120,0.12)" }}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Ceylon Tuskers" width={40} height={40} style={{ objectFit: "contain" }} />
              <div>
                <p className="text-sm font-black tracking-widest uppercase text-[#0d1340]">Ceylon Tuskers</p>
                <p className="text-[10px] text-[#3040c8] tracking-widest uppercase">Baseball Club · Singapore</p>
              </div>
            </div>
            <p className="text-xs text-[#5a6280] leading-relaxed">
              Singapore's Sri Lankan baseball community. Playing with heart since 2018.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-1">
              <a
                href={`https://instagram.com/${igHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#5a6280] hover:text-[#3040c8] transition-colors duration-200"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="X / Twitter"
                className="text-[#5a6280] hover:text-[#3040c8] transition-colors duration-200"
              >
                <XIcon />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-[#5a6280] hover:text-[#3040c8] transition-colors duration-200"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-2">
            <p className="text-[10px] tracking-widest uppercase text-[#3040c8] font-bold mb-1">Quick Links</p>
            {[
              { href: "/",        label: "Home"    },
              { href: "/roster",  label: "Roster"  },
              { href: "/history", label: "History" },
              { href: "/join",    label: "Join Us"  },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-[#5a6280] hover:text-[#0d1340] transition-colors tracking-wide"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Join CTA */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] tracking-widest uppercase text-[#3040c8] font-bold">Join the Club</p>
            <p className="text-xs text-[#5a6280] leading-relaxed">
              Open to all skill levels. Come swing with us.
            </p>
            <a
              href={`mailto:${teamData.contact.email}`}
              className="text-xs text-[#5a6280] hover:text-[#0d1340] transition-colors tracking-wide"
            >
              {teamData.contact.email}
            </a>
            <a
              href="/join"
              className="inline-block text-center py-2.5 px-5 bg-[#1e2878] hover:bg-[#3040c8] text-white text-xs font-black tracking-widest uppercase rounded-sm transition-colors duration-200 mt-1"
            >
              Register Now
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1e2878]/20 text-center">
          <p className="text-[10px] text-[#8890aa] tracking-widest uppercase">
            © {new Date().getFullYear()} Ceylon Tuskers Baseball Club · Singapore
          </p>
        </div>
      </div>
    </footer>
  );
}
