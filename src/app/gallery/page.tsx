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
            Ballpark moments from the diamond — the plays, the pitches, and the
            celebrations that make up a Ceylon Tuskers season in Singapore. Every
            frame here was shot at a Singapore International Baseball League
            fixture, from the first warm-up throws to the last out of the day.
          </p>
          <p>
            You will find dust-raising slides into second, pitchers mid-delivery,
            infielders waiting on a throw, and the quieter moments in between —
            the walk back to the dugout, a batter tracking a ball off the bat, a
            teammate standing up at the bag after a hit. Together they tell the
            story of a club founded by Sri Lankan expats in 2022 that has grown
            into a side competing deep into the season.
          </p>
        </div>
      </div>

      <GallerySlider gallery={teamData.gallery} />
    </div>
  );
}
