import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-[650px] px-[10px] mt-[25px] h-screen p-3 text-white">
      {children}
    </div>
  );
};

export default MainLayout;
