import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Civiora — Denken begint met een vraag",
  description:
    "Een publiek socialmedia-experiment waarin maatschappelijke vragen, ideeën en filosofieën gezamenlijk worden onderzocht.",
  openGraph: {
    title: "Civiora — Denken begint met een vraag",
    description:
      "Een nieuwe publieke ruimte voor vragen, ideeën, filosofie en debat.",
    type: "website",
    images: [{ url: "/civiora-hero.webp", width: 1932, height: 1120 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
