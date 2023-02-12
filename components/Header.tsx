"use client";

import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

const Model = dynamic(() => import("./Model"), {
  ssr: false,
  loading: () => <div className="h-full" />,
});

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const navigationList = [
  {
    id: 0,
    name: "Main",
    link: "/main",
  },
  {
    id: 1,
    name: "Works",
    link: "/works",
  },
  {
    id: 2,
    name: "Posts",
    link: "/posts",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex h-[50px] fixed justify-end px-[10px] w-full z-[999] bg-opacity-70 backdrop-blur-sm ">
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="z-50"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-[90px] mt-3 text-[12px] font-bold py-1 text-white border-white flex rounded-md items-center justify-center"
          >
            Menu
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55, marginLeft: 10, marginTop: -3 }}
            >
              <svg width="12" height="12" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" fill="white" />
              </svg>
            </motion.div>
          </motion.button>
          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.5,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.5,
                },
              },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
            className="mt-2 text-black bg-white border-gray-400 rounded-2xl"
          >
            {navigationList.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                onClick={() => setIsOpen(false)}
              >
                <motion.li
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    color: "black",
                  }}
                  whileTap={{ scale: 1 }}
                  variants={itemVariants}
                  className="w-[90px] text-[12px] flex justify-center py-2 font-semibold text-gray-400"
                >
                  {item.name}
                </motion.li>
              </Link>
            ))}
          </motion.ul>
        </motion.nav>
      </div>
      <div className="h-[60px]" />
      <div className="h-[150px]">
        <Model />
      </div>
    </>
  );
};

export default Header;
