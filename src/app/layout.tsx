import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./themeProvider";
import Footer from "./_footer";
import Nav from "./_nav";
import Script from "next/script";

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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-96JBWREHLH" />
      <Script dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-96JBWREHLH')`
      }} />
        <body className={inter.className}>
        <Providers>
          <Nav />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
