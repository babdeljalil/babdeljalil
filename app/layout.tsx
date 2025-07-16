import type { Metadata } from "next";
import "./globals.css";
import { title, description } from "@/lib/constants";

import KoFiWidget from "./KoFiWidget";

export const metadata: Metadata = {
  title: {
    default: `${title} | Professional Text Analysis & Generation`,
    template: `%s | ${title}`,
  },
  description,

  keywords: "babdeljalil, berhil, abdeljalil, abdeljalil berhil",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased flex justify-center w-[100vw] transition-all duration-1000`}
      >
        <main className="w-[820px] max-md:px-6">{children}</main>
        <KoFiWidget />
      </body>
    </html>
  );
}
