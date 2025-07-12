import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import KoFiWidget from "./KoFiWidget";
import { title, description } from "@/lib/constants";

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
    default: `${title} | Professional Text Analysis & Generation`,
    template: `%s | ${title}`,
  },
  description,

  keywords:
    "frontend developer portfolio, web developer portfolio, JavaScript developer, HTML CSS JS projects, UI/UX designer, personal developer portfolio, front-end web developer, responsive web design, modern web projects, coding portfolio website, web development blog, learn web development, frontend tutorials, crypto for developers, blockchain development basics, productivity tips for developers, developer productivity hacks, software developer blog, how to become a frontend developer, best frontend projects for portfolio, building responsive websites, frontend developer blog ideas, crypto trends for developers, productivity tools for coders, coding tips for beginners",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://babdeljalil.my",
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: title,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
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
        <main className="w-[820px] max-md:px-6">{children}</main>
        <KoFiWidget />
      </body>
    </html>
  );
}
