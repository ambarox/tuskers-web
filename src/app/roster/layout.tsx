export const metadata = {
  title: "The Roster",
  description:
    "Meet the Ceylon Tuskers Baseball Club players — Singapore's Sri Lankan baseball team competing in the Singapore International Baseball League.",
  alternates: { canonical: "https://tuskers.sg/roster" },
  openGraph: {
    title: "The Roster | Ceylon Tuskers",
    description:
      "Meet the Ceylon Tuskers players — Singapore's Sri Lankan baseball team.",
    url: "https://tuskers.sg/roster",
  },
};

export default function RosterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
