"use client";

import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

export default function RootClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <body className="bg-[#202023]">
      <main className="font-yanolja text-[16px]">
        {path !== "/" && <Header />}
        <AnimatePresence initial={true}>{children}</AnimatePresence>
        <Analytics />
      </main>
    </body>
  );
}
