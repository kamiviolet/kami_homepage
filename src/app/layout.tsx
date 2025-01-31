import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./themeProvider";
import Footer from "./_footer";
import Nav from "./_nav";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kamiviolet.site"),
  title: "Kami's Hompage",

  description:
    "The collection of my application projects, my illustrations, and articles. My portfolio as developer. My personal stash for the treasures I gathered in this adventurous life.",

  generator: "Next.js",
  creator: "Kami Lam",

  keywords: [
    "homepage",
    "portfolio",
    "web developer",
    "software engineer",
    "tech writer",
    "personal",
  ],

  category: "technology",

  openGraph: {
    images: "/preview.png",
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers>
          <Nav />
          <main>{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};
