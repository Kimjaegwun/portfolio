"use client";

import Image from "next/image";

const works = [
  {
    id: 0,
    image: "/ringle.jpg",
    content: "abcde fghijklmnop",
  },
  {
    id: 1,
    image: "/daadok.png",
    content: "abcde fghijklmnop",
  },
  {
    id: 2,
    image: "/moby.png",
    content: "abcde fghijklmnop",
  },
];

const Works = () => {
  return (
    <>
      <div className="mb-5 text-[28px] font-bold">Works</div>
      <div className="flex flex-wrap justify-between">
        {works.map((item) => (
          <div
            className="relative inline-block mb-4 overflow-auto w-3/10 rounded-2xl"
            key={item.id}
          >
            <Image
              src={item.image}
              alt="ringle"
              placeholder="blur"
              blurDataURL="/ringle.jpg"
              fill
              objectFit="contain"
              className="mx-auto w-3/10 rounded-2xl"
            />
            <div className="w-full mb-4 bg-gray-300 sm:w-[350px] mx-auto">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Works;
