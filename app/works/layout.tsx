import Header from "@/components/Header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black">
      <div className=" max-w-[800px] mx-auto h-screen p-3 text-white">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
