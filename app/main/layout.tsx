import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "메인 - 자기소개",
  description: "jaegwun's profile",
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="mx-auto max-w-[700px] px-[10px] h-screen p-3 text-white">
        {children}
      </div>
    </>
  );
};

export default MainLayout;
