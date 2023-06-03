import Link from "next/link";
import Main from "@/components/Main";
import React from "react";
import SEO from "@/app/seo";

const MainServerPage = () => {
  return (
    <>
      <SEO title="메인 페이지" description="jaegwun's portfolio!" />
      <Link href={"/detail/53"}>
        <div>123123</div>
      </Link>
      <Main />
    </>
  );
};

export default MainServerPage;
