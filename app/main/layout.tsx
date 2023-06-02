import React from "react";
import SEO from "@/app/seo";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-[700px] px-[10px] h-screen p-3 text-white">
      <SEO title="메인 페이지" description="jaegwun's portfolio" />
      {children}
    </div>
  );
};

export default MainLayout;
