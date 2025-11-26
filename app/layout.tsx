import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Islomiy Savodxonlik va Barakali Biznes",
  description: "Islom Moliyasidan 10 yillik tajriba va 10 dan oshiq kitoblar muallifi bilan islomiy savodxonlikni oshirib barakali biznes boshlashni o'rganing",
  keywords: ["Islom moliyasi", "Islomiy biznes", "Halol biznes", "Islomiy savodxonlik", "Barakali biznes"],
  authors: [{ name: "Islomiy Moliya va Biznes" }],
  openGraph: {
    title: "Islomiy Savodxonlik va Barakali Biznes",
    description: "Islom Moliyasidan 10 yillik tajriba va 10 dan oshiq kitoblar muallifi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
