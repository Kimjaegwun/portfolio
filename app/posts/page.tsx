"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 0,
    image: "/posts/javascript.webp",
    title: "JS",
    link: "https://shadow-change-df4.notion.site/Javascript-5c81e7ee94034ee68cd44a2ebc18afb6",
  },
  {
    id: 1,
    image: "/posts/web.webp",
    title: "WEB",
    link: "https://shadow-change-df4.notion.site/WEB-0bd1f2b4c00445c9b3fc003506336657",
  },
  {
    id: 2,
    image: "/posts/react.webp",
    title: "REACT",
    link: "https://shadow-change-df4.notion.site/React-c9a93279de4e442eb054a28d7567ef96",
  },
  {
    id: 3,
    image: "/posts/graphql.webp",
    title: "GRAPH-QL",
    link: "https://shadow-change-df4.notion.site/GraphQL-5d89ea053c0a4fd1ae36cdebf895f934",
  },
  {
    id: 4,
    image: "/posts/nivo.webp",
    title: "NIVO",
    link: "https://shadow-change-df4.notion.site/Nivo-ec9607f53b9e42ce88d241df83356f68",
  },
  {
    id: 5,
    image: "/posts/algorithm.webp",
    title: "ALGORITHM",
    link: "https://shadow-change-df4.notion.site/Algorithm-207f4892f5cb4825a61b6a7fbdb6f510",
  },
];

const Posts = () => {
  return (
    <>
      <div className="mb-5 text-[18px] font-bold">Posts</div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="mb-2"
      >
        <div className="flex flex-wrap justify-between">
          {posts.map((item) => (
            <div
              key={item.id}
              className="relative inline-block w-[100%] sm:w-[48%] mb-4"
            >
              <div className="rounded-2xl max-w-[700px] bg-white overflow-hidden">
                <Link href={item.link} target="_blank">
                  <Image
                    src={item.image}
                    alt="ringle"
                    width="0"
                    height="0"
                    sizes="100vw"
                    placeholder="blur"
                    blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==" // 추가
                    className="w-[100%] min-h-[135px] rounded-2xl h-auto hover:scale-125 duration-75"
                  />
                </Link>
              </div>
              <div className="mt-2 font-bold text-center mx-auto">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Posts;
