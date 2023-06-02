import React from "react";
import SEO from "@/app/seo";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-[700px] px-[10px] h-screen p-3 text-white">
      {children}
    </div>
  );
};

export default MainLayout;
