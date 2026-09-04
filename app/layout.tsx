import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./hero.css";

export const metadata: Metadata = {
  title: "Civiora — Denken begint met een vraag",
  description:
    "Een publiek sociaal media-experiment rond vragen, ideeën, filosofieën en echte dialogen.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
