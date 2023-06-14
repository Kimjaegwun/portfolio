import React from "react";
import SEO from "../seo";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SEO title="메인 - 자기소개" description="jaegwun's profile" />
      <div className="mx-auto max-w-[700px] px-[10px] h-screen p-3 text-white">
        {children}
      </div>
    </>
  );
};

export default MainLayout;
