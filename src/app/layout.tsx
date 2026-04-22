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
  title: { default: "Tuskers Baseball · Singapore", template: "%s | Tuskers" },
  description: "Official home of the Tuskers Baseball Club, Singapore.",
  metadataBase: new URL("https://tuskers.sg"),
  openGraph: {
    siteName: "Tuskers Baseball",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={oswald.variable}>
      <body className="min-h-screen flex flex-col bg-[#f0f4ff]">
        <Nav />
        <main className="flex-1 baseball-field-bg">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
