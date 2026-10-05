import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Lilita_One, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "700"],
  display: "swap",
});

const lilita = Lilita_One({
  subsets: ["latin"],
  variable: "--font-lilita",
  weight: "400",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shiba Loves ETH ($SHB❤️ETH)",
  description:
    "Visiting Solana. Representing Ethereum. Shiba Loves ETH is an independent parody — a guest in Solana, and an ETH fan everywhere.",
  openGraph: {
    title: "Shiba Loves ETH ($SHB❤️ETH)",
    description:
      "Visiting Solana. Representing Ethereum. A guest in Solana. An ETH fan everywhere.",
    images: ["/art/banner.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${fraunces.variable} ${lilita.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background pt-[var(--header-h)] text-foreground">
        {children}
      </body>
    </html>
  );
}
