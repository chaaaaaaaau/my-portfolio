import type { Metadata } from "next";
import { Abril_Fatface as AbrilFatface } from "next/font/google";
import "./globals.scss";

import MyHeader from "@/components/Layout/MyHeader";
import MyFooter from "@/components/Layout/MyFooter";

const abrilFatface = AbrilFatface({
  variable: "--font-abril-fatface",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sam CHAU",
  description: "This is the personal homepage of Sam CHAU. A System Analyst with five years of IT industry experience, Sam focuses on requirements analysis, solution design, and the end‑to‑end delivery of web applications. The site welcomes visitors to explore selected work and also indicates availability for select freelance projects, collaborating with teams to deliver practical, business‑ready solutions.",
  openGraph: {
    title: "Sam CHAU",
    description:
      "This is the personal homepage of Sam CHAU. A System Analyst with five years of IT industry experience, Sam focuses on requirements analysis, solution design, and the end‑to‑end delivery of web applications. The site welcomes visitors to explore selected work and also indicates availability for select freelance projects, collaborating with teams to deliver practical, business‑ready solutions.",
    url: "https://samchau.site/",
    siteName: "Sam CHAU",
    images: [
      {
        url: "https://samchau.site/images/og.png", // Must be an absolute URL
        width: 500,
        height: 500,
        alt: "Sam CHAU",
      },
    ],
    type: "website",
  },
  icons: { icon: [{ url: "./images/fav.png" }, { url: "https://samchau.site/images/fav.png" }] },
  other: {
    google: "notranslate", // Prevent Google Chrome translation prompt
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${abrilFatface.variable}`}>
        <MyHeader />
        {children}
        <MyFooter />
      </body>
    </html>
  );
}
