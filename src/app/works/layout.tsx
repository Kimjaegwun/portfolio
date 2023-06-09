import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-[700px] px-[20px] h-screen p-3 text-white">
      {children}
    </div>
  );
};

export default MainLayout;
