import teamData from "@/data/team.json";
import GallerySlider from "@/components/GallerySlider";

export const metadata = {
  title: "Gallery",
  description: "Ballpark moments from Ceylon Tuskers Baseball Club, Singapore — game day action, pitching, and celebrations.",
  alternates: { canonical: "https://tuskers.sg/gallery" },
  openGraph: {
    title: "Gallery | Ceylon Tuskers",
    description: "Ballpark moments from Ceylon Tuskers Baseball Club, Singapore — game day action, pitching, and celebrations.",
    url: "https://tuskers.sg/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-10">
        <h1 className="text-5xl font-black tracking-widest uppercase text-[#0d1340]">
          Gallery
        </h1>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#5a6280]">
          <p>
            Ceylon Tuskers baseball on the red clay of Singapore, shot across
            Singapore International Baseball League fixtures. The action frames
            catch the game at its sharpest — a pitcher mid-delivery with his
            front foot still in the air, a runner diving back into the bag a
            heartbeat ahead of the throw, a first baseman stretched full length
            for a ball that has not arrived yet, a batter tracking the flight of
            one he has just put in play.
          </p>
          <p>
            Just as many frames are about everything around the game: the mound
            conference with the catcher still in his mask, the handshake line
            filing past at the end of the day, the wall of high-fives waiting at
            the fence for a runner coming home, the whole squad arm in arm and
            grinning at the camera, and a helmet, a glove and a scatter of bats
            left in the dirt between innings. Royal blue pinstripes give way to
            navy as the set goes on — the kit has changed since the club was
            founded in 2022, the red clay and the green outfield fence have not.
          </p>
        </div>
      </div>

      <GallerySlider gallery={teamData.gallery} />
    </div>
  );
}
