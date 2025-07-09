import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import KoFiWidget from "./KoFiWidget";
import Header from "./components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "babdeljalil",
    template: "%s - babdeljalil",
  },
  description: "babdeljalil frontend developer portfolio",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center w-[100vw]`}
      >
        <main className="w-[820px] max-md:px-6">
          <Header />
          {children}
        </main>
        <KoFiWidget />
      </body>
    </html>
  );
}
