import React from "react";

const page = ({ params = {} as any }) => {
  return <div>{params.id}</div>;
};

export default page;
