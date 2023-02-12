"use client";

import Header from "@/components/Header";
import localFont from "@next/font/local";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import "./globals.css";

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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <title>JaeGwun.Kim</title>
      </head>
      <body className="bg-[#202023]">
        <main className="font-yanolja text-[16px]">
          {path !== "/" && <Header />}
          <AnimatePresence initial={true}>{children}</AnimatePresence>
        </main>
      </body>
    </html>
  );
}
