import teamData from "@/data/team.json";

export const metadata = { title: "Join – Ceylon Tuskers" };

export default function JoinPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[#3040c8] font-bold mb-2">Get Involved</p>
        <h1 className="text-4xl font-black tracking-widest uppercase text-[#0d1340] text-glow">
          Join the Tuskers
        </h1>
        <p className="mt-4 text-sm text-[#5a6280] leading-relaxed max-w-xl mx-auto">
          We're a community of baseball enthusiasts based in Singapore with Sri Lankan roots.
          Whether you're a seasoned player or picking up a bat for the first time, you're welcome here.
        </p>
      </div>

      {/* Info cards */}
      <div className="grid sm:grid-cols-2 gap-5 mb-8">
        {[
          {
            icon: "🧢",
            title: "All Skill Levels",
            desc: "We run structured training sessions for beginners and competitive players alike.",
          },
          {
            icon: "🏟️",
            title: "Regular Games",
            desc: "We compete in local Singapore baseball leagues throughout the season.",
          },
          {
            icon: "🤝",
            title: "Community First",
            desc: "More than a team — a community that trains, wins, and celebrates together.",
          },
          {
            icon: "📅",
            title: "Training Days",
            desc: "Weekend practice sessions. Check with us for current schedule and venue.",
          },
        ].map((c) => (
          <div key={c.title} className="leather blue-glow-border rounded-sm p-5">
            <span className="text-2xl">{c.icon}</span>
            <p className="text-sm font-black tracking-widest uppercase text-[#0d1340] mt-3">{c.title}</p>
            <p className="text-xs text-[#5a6280] mt-1.5 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>

      {/* Contact / Register */}
      <div className="leather blue-glow-border rounded-sm overflow-hidden">
        <div className="score-label text-center">Ready to Play?</div>
        <div className="p-6 flex flex-col gap-5">
          <p className="text-sm text-[#5a6280] leading-relaxed text-center">
            Drop us an email to register your interest or ask any questions. We'll be in touch with
            the next training session details.
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href={`mailto:${teamData.contact.email}?subject=I want to join Ceylon Tuskers`}
              className="w-full max-w-xs text-center py-3 bg-[#1e2878] hover:bg-[#3040c8] text-white text-xs font-black tracking-widest uppercase rounded-sm transition-colors duration-200"
            >
              Register Now
            </a>
            <p className="text-xs text-[#5a6280] tracking-wide">{teamData.contact.email}</p>
            <a
              href={`https://instagram.com/${teamData.contact.social.ig.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#3040c8] hover:text-[#0d1340] transition-colors tracking-wide"
            >
              {teamData.contact.social.ig} on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
