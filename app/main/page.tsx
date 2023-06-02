import Main from "@/components/Main";
import React from "react";
import SEO from "@/app/seo";

const MainServerPage = () => {
  return (
    <>
      <SEO title="메인 페이지" description="jaegwun's portfolio!" />
      <Main />
    </>
  );
};

export default MainServerPage;
