import newsData from "@/data/news.json";

export const metadata = {
  title: "News & Announcements",
  description: "Latest news, match reports, and announcements from Ceylon Tuskers Baseball Club, Singapore.",
  alternates: { canonical: "https://tuskers.sg/news" },
  openGraph: {
    title: "News & Announcements | Ceylon Tuskers",
    description: "Latest news, match reports, and announcements from Ceylon Tuskers Baseball Club, Singapore.",
    url: "https://tuskers.sg/news",
  },
};

const TAG_COLORS: Record<string, string> = {
  "Match Report": "bg-[#1e2878]/10 text-[#1e2878]",
  "Announcement": "bg-amber-50 text-amber-700",
  "Club Update":  "bg-emerald-50 text-emerald-700",
};

type Inning = { inning: number; tuskers: number; opp: number };

function BoxScore({ innings, opponent }: { innings: Inning[]; opponent: string }) {
  const tuskerTotal = innings.reduce((s, i) => s + i.tuskers, 0);
  const oppTotal    = innings.reduce((s, i) => s + i.opp, 0);

  return (
    <div className="mt-4 pt-4 border-t border-[#1e2878]/15 overflow-x-auto">
      <p className="text-[9px] tracking-widest uppercase text-[#5a6280] font-bold mb-2">Box Score</p>
      <table className="w-full text-center text-xs tabular-nums border-collapse min-w-[280px]">
        <thead>
          <tr>
            <th className="text-left text-[9px] tracking-widest uppercase text-[#5a6280] pr-4 pb-1.5 font-bold w-28">Team</th>
            {innings.map((i) => (
              <th key={i.inning} className="text-[9px] tracking-widest text-[#5a6280] pb-1.5 font-bold px-3">{i.inning}</th>
            ))}
            <th className="text-[9px] tracking-widest text-[#5a6280] pb-1.5 font-black px-3 border-l border-[#1e2878]/20">R</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#1e2878]/04">
            <td className="text-left text-[11px] font-black tracking-widest uppercase text-[#0d1340] pr-4 py-1.5">Tuskers</td>
            {innings.map((i) => (
              <td key={i.inning} className="py-1.5 px-3 text-sm font-bold text-[#0d1340]">{i.tuskers}</td>
            ))}
            <td className="py-1.5 px-3 text-sm font-black text-[#0d1340] border-l border-[#1e2878]/20">{tuskerTotal}</td>
          </tr>
          <tr>
            <td className="text-left text-[11px] font-bold tracking-widest uppercase text-[#5a6280] pr-4 py-1.5">{opponent}</td>
            {innings.map((i) => (
              <td key={i.inning} className="py-1.5 px-3 text-sm font-bold text-[#5a6280]">{i.opp}</td>
            ))}
            <td className="py-1.5 px-3 text-sm font-black text-[#5a6280] border-l border-[#1e2878]/20">{oppTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function NewsPage() {
  const articles = [...newsData.news].sort((a, b) => b.id - a.id).slice(0, 10);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[#3040c8] font-bold mb-2">Ceylon Tuskers</p>
        <h1 className="text-4xl font-black tracking-widest uppercase text-[#0d1340] text-glow">
          News &amp; Announcements
        </h1>
        <p className="text-sm text-[#5a6280] mt-3 tracking-wide">
          Match reports, club updates, and the latest from the dugout.
        </p>
      </div>

      {/* Articles */}
      <div className="flex flex-col gap-6">
        {articles.map((item) => (
          <article
            key={item.id}
            className="leather blue-glow-border rounded-sm overflow-hidden flex flex-col sm:flex-row"
          >
            {/* Image — left side */}
            <div className="w-full sm:w-72 h-56 sm:h-auto flex-shrink-0 bg-[#1e2878]/10 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className={`text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-sm ${
                    TAG_COLORS[item.tag] ?? "bg-[#1e2878]/10 text-[#1e2878]"
                  }`}
                >
                  {item.tag}
                </span>
                <span className="text-[10px] text-[#5a6280] tracking-wider">
                  {new Date(item.date).toLocaleDateString("en-SG", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              <h2 className="text-lg font-black tracking-wide text-[#0d1340] leading-snug">
                {item.title}
              </h2>

              <p className="text-sm text-[#5a6280] leading-relaxed">
                {item.summary}
              </p>

              {"innings" in item && "opponent" in item && item.innings && item.opponent && (
                <BoxScore innings={item.innings as Inning[]} opponent={item.opponent as string} />
              )}
            </div>

          </article>
        ))}

        {articles.length === 0 && (
          <div className="leather blue-glow-border rounded-sm p-10 text-center">
            <p className="text-[#5a6280] tracking-wide text-sm">No news yet. Check back soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
