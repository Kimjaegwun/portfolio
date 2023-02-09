"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const works = [
  {
    id: 0,
    image: "/ringle.jpg",
    title: "링글",
    content: `명문대 출신 원어민 튜터와의 1:1 화성영어`,
  },
  {
    id: 1,
    image: "/daadok.png",
    title: "다독",
    content: "다양한 식품들을 구독하여 정기배송 받는 플랫폼",
  },
  {
    id: 2,
    image: "/moby.png",
    title: "모비",
    content: "택시 기반 새로운 광고 솔루션",
  },
  {
    id: 3,
    image: "/newopen.png",
    title: "뉴오픈",
    content: "새로 오픈한 가게들을 소개하고 안내해주는 플랫폼",
  },
];

const Works = () => {
  return (
    <>
      <div className="mb-5 text-[28px] font-bold">Works</div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="mb-2"
      >
        <div className="flex flex-wrap justify-between">
          {works.map((item) => (
            <div
              key={item.id}
              className="relative inline-block w-[100%] sm:w-[48%] mb-4"
            >
              <div className="overflow-auto rounded-2xl bg-white">
                <Image
                  src={item.image}
                  alt="ringle"
                  width="0"
                  height="0"
                  sizes="100vw"
                  placeholder="blur"
                  blurDataURL="/ringle.jpg"
                  className="mx-auto w-[100%] rounded-xl h-auto"
                />
              </div>
              <div className="mt-1 text-[26px] font-bold text-center">
                {item.title}
              </div>
              <div className="text-[22px] text-center">{item.content}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Works;
