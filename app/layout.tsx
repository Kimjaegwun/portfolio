import "./globals.css";

import { Metadata } from "next";
import RootClientLayout from "./layout.client";
import localFont from "@next/font/local";

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

export const metadata: Metadata = {
  title: "JaeGwun.Kim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <RootClientLayout>{children}</RootClientLayout>
    </html>
  );
}
