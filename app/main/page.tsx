import Main from "@/components/Main";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "메인 - 자기소개",
  description: "jaegwun's profile",
};

const MainServerPage = () => {
  return <Main />;
};

export default MainServerPage;
