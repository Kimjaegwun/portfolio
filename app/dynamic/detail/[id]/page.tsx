"use client";

const DynamicDetail = ({ params }: { params: any }) => {
  return <div className="text-white">DynamicDetail: {params?.id}</div>;
};

export default DynamicDetail;
