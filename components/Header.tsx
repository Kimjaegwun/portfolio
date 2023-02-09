"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
    name: "About",
    link: "/about",
  },
  {
    id: 2,
    name: "Works",
    link: "/works",
  },
  {
    id: 3,
    name: "Posts",
    link: "/posts",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative flex mb-5">
        <Link href={"/main"}>
          <Image src={"/sun.gif"} width={50} height={50} alt="star" />
        </Link>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="absolute right-0 top-[10px] z-50"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-[110px] text-[18px] border-2 border-white flex rounded-md items-center justify-center"
          >
            Menu
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55, marginLeft: 20 }}
            >
              <svg width="15" height="15" viewBox="0 0 20 20">
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
            className="mt-2 text-black bg-white border-2 border-gray-400 rounded-2xl"
          >
            {navigationList.map((item) => (
              <Link href={item.link} key={item.id}>
                <motion.li
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                    color: "black",
                  }}
                  whileTap={{ scale: 1 }}
                  variants={itemVariants}
                  className="w-[110px] text-[20px] flex justify-center py-2 font-semibold text-gray-400"
                >
                  {item.name}
                </motion.li>
              </Link>
            ))}
          </motion.ul>
        </motion.nav>
      </div>
    </>
  );
};

export default Header;
