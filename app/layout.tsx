"use client";

import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import localFont from "@next/font/local";
import { usePathname } from "next/navigation";

const roboto = localFont({
  src: [
    {
      path: "../public/fonts/NIX_L.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/NIX_M.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NIX_B.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-yanolja",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <html lang="en" className={`${roboto.variable}`}>
      <title>JaeGwun.Kim</title>
      <body className="bg-[#202023]">
        <main className="font-yanolja text-[16px]">
          {path !== "/" && <Header />}
          <AnimatePresence initial={true}>{children}</AnimatePresence>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
