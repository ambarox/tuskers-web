import teamData from "@/data/team.json";
import LastMatchCard from "@/components/LastMatchCard";
import NextGameCard from "@/components/NextGameCard";
import RecentResultsCard from "@/components/RecentResultsCard";
import PlayerSpotlightCard from "@/components/PlayerSpotlightCard";
import BallparkMoments from "@/components/BallparkMoments";
import AboutUsCard from "@/components/AboutUsCard";

export default function Home() {
  const lastMatch = teamData.scores[0];
  const nextGame  = teamData.schedule[0];


  return (
    <div className="max-w-6xl mx-auto px-6 pt-10 pb-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left column — 2/3 width */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* About Us — top */}
          <AboutUsCard about={teamData.about} />

          {/* Score cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <LastMatchCard match={lastMatch} />
            <NextGameCard  game={nextGame}  />
            <RecentResultsCard />
          </div>

          {/* Player spotlight */}
          <PlayerSpotlightCard players={teamData.roster} />
        </div>

        {/* Right column — 1/3 width */}
        <div className="flex flex-col gap-6 h-full">

          {/* Ballpark Moments — fills available height */}
          <BallparkMoments
            gallery={teamData.gallery}
            youtubeUrl={teamData.contact.social.youtube}
          />

          {/* Join CTA */}
          <div className="leather blue-glow-border rounded-sm overflow-hidden">
            <div className="score-label text-center">Join the Club</div>
            <div className="p-5 flex flex-col items-center gap-4 text-center">
              <p className="text-sm text-[#5a6280] tracking-wide leading-relaxed">
                Love baseball? We welcome players of all levels. Come train, compete, and be part of Ceylon Tuskers.
              </p>
              <a
                href="/join"
                className="w-full py-2.5 bg-[#1e2878] hover:bg-[#3040c8] text-white text-xs font-black tracking-widest uppercase rounded-sm transition-colors duration-200 text-center block"
              >
                Register Now
              </a>
              <p className="text-[10px] text-[#5a6280] tracking-wider">
                {teamData.contact.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
