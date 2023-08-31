import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./_footer";
import Nav from "./_nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kami's Hompage",
  description:
    "The collection of my application projects, my illustrations, and articles. My portfolio as developer. My personal stash for the treasures I gathered in this adventurous life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
