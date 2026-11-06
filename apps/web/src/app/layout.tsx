import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "@/styles/globals.css";

const display = Syne({ subsets: ["latin"], weight: ["500"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "dapp.ing · where builder work becomes visible",
  description:
    "Proof pages for Web3 and AI builders. Turn scattered repos, launches and peer endorsements into one record people can check.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
