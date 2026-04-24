import teamData from "@/data/team.json";

export const metadata = {
  title: "Match History",
  description: "Full match history and results for Ceylon Tuskers Baseball Club competing in the Singapore International Baseball League.",
  alternates: { canonical: "https://tuskers.sg/history" },
  openGraph: {
    title: "Match History | Ceylon Tuskers",
    description: "Full season results and upcoming schedule for Ceylon Tuskers Baseball Club, Singapore.",
    url: "https://tuskers.sg/history",
  },
};

export default function HistoryPage() {
  const wins   = teamData.scores.filter((s) => s.isWin).length;
  const losses = teamData.scores.length - wins;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[#3040c8] font-bold mb-2">{teamData.season}</p>
        <h1 className="text-4xl font-black tracking-widest uppercase text-[#0d1340] text-glow">
          Match History
        </h1>
        <div className="flex justify-center items-center gap-8 mt-6">
          <div className="text-center">
            <p className="text-3xl font-black text-[#0d1340]">{wins}</p>
            <p className="text-[10px] tracking-widest uppercase text-[#5a6280] mt-0.5">Wins</p>
          </div>
          <div className="w-px h-10 bg-[#1e2878]/40" />
          <div className="text-center">
            <p className="text-3xl font-black text-[#0d1340]">{losses}</p>
            <p className="text-[10px] tracking-widest uppercase text-[#5a6280] mt-0.5">Losses</p>
          </div>
          <div className="w-px h-10 bg-[#1e2878]/40" />
          <div className="text-center">
            <p className="text-3xl font-black text-[#0d1340]">{teamData.scores.length}</p>
            <p className="text-[10px] tracking-widest uppercase text-[#5a6280] mt-0.5">Played</p>
          </div>
        </div>
      </div>

      {/* Results table */}
      <div className="leather blue-glow-border rounded-sm overflow-hidden">
        <div className="score-label">All Results</div>
        <div className="divide-y divide-[#1e2878]/15">
          {teamData.scores.map((s) => (
            <div key={s.id} className="flex items-center justify-between px-5 py-3.5 hover:bg-[#1e2878]/5 transition-colors">
              <div className="flex items-center gap-4">
                <span className={`text-xs font-black tracking-widest w-4 ${s.isWin ? "text-green-700" : "text-red-400"}`}>
                  {s.isWin ? "W" : "L"}
                </span>
                <div>
                  <p className="text-sm font-bold text-[#0d1340] tracking-wide">vs {s.opponent}</p>
                  <p className="text-[10px] text-[#5a6280] mt-0.5 tracking-wider">
                    {new Date(s.date).toLocaleDateString("en-SG", { day: "numeric", month: "short", year: "numeric" })}
                    {" · "}{s.venue}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xl font-black tabular-nums text-[#0d1340]">
                  {s.tuskers}
                  <span className="text-[#1e2878] mx-1.5">–</span>
                  {s.opp}
                </span>
                <p className="text-[10px] text-[#5a6280] tracking-wider mt-0.5">Tuskers · Opp</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming */}
      <div className="mt-8 leather blue-glow-border rounded-sm overflow-hidden">
        <div className="score-label">Upcoming Schedule</div>
        <div className="divide-y divide-[#1e2878]/15">
          {teamData.schedule.map((g) => (
            <div key={g.id} className="flex items-center justify-between px-5 py-3.5">
              <div>
                <p className="text-sm font-bold text-[#0d1340] tracking-wide">vs {g.opponent}</p>
                <p className="text-[10px] text-[#5a6280] mt-0.5 tracking-wider">
                  {new Date(g.date).toLocaleDateString("en-SG", { day: "numeric", month: "short", year: "numeric" })}
                  {" · "}{g.venue}
                </p>
              </div>
              <span className="text-xs text-[#3040c8] font-bold tracking-widest">{g.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
