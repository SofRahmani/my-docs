import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.sofiane-rahmani.com"),
  title: "My Docs",
  description:
    "Documentation personnelle enrichie par mon apprentissage et mes expérience dans le développement web.",
  keywords: ["documentation", "développement web", "apprentissage", "autoformation", "autodidacte", "front-end", "back-end", "full-stack", "web", "web development", "web developer"],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    url: "https://docs.sofiane-rahmani.com",
    title: "My Docs",
    description:
      "Documentation personnelle enrichie par mon apprentissage et mes expérience dans le développement web.",
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "My Docs",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
