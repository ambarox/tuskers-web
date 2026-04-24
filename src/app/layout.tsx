import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tuskers.sg"),
  title: {
    default: "Ceylon Tuskers Baseball Club · Singapore",
    template: "%s | Ceylon Tuskers",
  },
  description:
    "Ceylon Tuskers is Singapore's Sri Lankan baseball club. We compete in the Singapore International Baseball League and welcome players of all skill levels.",
  keywords: [
    "Ceylon Tuskers",
    "baseball Singapore",
    "Sri Lankan baseball",
    "SIBL",
    "Singapore baseball club",
    "baseball team Singapore",
  ],
  authors: [{ name: "Ceylon Tuskers Baseball Club" }],
  creator: "Ceylon Tuskers Baseball Club",
  openGraph: {
    siteName: "Ceylon Tuskers Baseball Club",
    type: "website",
    locale: "en_SG",
    url: "https://tuskers.sg",
    title: "Ceylon Tuskers Baseball Club · Singapore",
    description:
      "Ceylon Tuskers is Singapore's Sri Lankan baseball club competing in the Singapore International Baseball League.",
    images: [
      {
        url: "/gallery/match1.jpeg",
        width: 1600,
        height: 900,
        alt: "Ceylon Tuskers Baseball Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceylon Tuskers Baseball Club · Singapore",
    description:
      "Ceylon Tuskers is Singapore's Sri Lankan baseball club competing in the SIBL.",
    images: ["/gallery/match1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "https://tuskers.sg" },
  verification: {
    google: "DRmD4RR7wK3BshMbAVgIt4phw46-i125fuSxM-O7q-A",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Ceylon Tuskers Baseball Club",
  sport: "Baseball",
  url: "https://tuskers.sg",
  logo: "https://tuskers.sg/logo.png",
  foundingDate: "2022",
  description:
    "Ceylon Tuskers is Singapore's Sri Lankan baseball club competing in the Singapore International Baseball League.",
  location: { "@type": "Place", name: "Singapore" },
  contactPoint: {
    "@type": "ContactPoint",
    email: "play@tuskers.sg",
    contactType: "membership",
  },
  sameAs: [
    "https://www.facebook.com/tuskersSG",
    "https://www.youtube.com/@CeylonTuskersBaseball",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={oswald.variable}>
      <body className="min-h-screen flex flex-col bg-[#f0f4ff]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main className="flex-1 baseball-field-bg">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
