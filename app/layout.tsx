"use client";

import localFont from "@next/font/local";
import { AnimatePresence } from "framer-motion";
import "./globals.css";

const roboto = localFont({
  src: [
    {
      path: "../public/fonts/yanolja_medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/yanolja_bold.ttf",
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
  return (
    <html lang="en" className={`${roboto.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <title>JaeGwun.Kim</title>
      </head>
      <body className="bg-black">
        <main className="font-yanolja text-[24px]">
          <AnimatePresence initial={true}>{children}</AnimatePresence>
        </main>
      </body>
    </html>
  );
}
