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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mb-5 relative flex">
        <motion.div
          whileHover={{
            rotate: 90,
          }}
        >
          <Image src={"/falling-star.png"} width={50} height={50} alt="star" />
        </motion.div>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="absolute right-0 top-[10px]"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-[100px] border-2 border-white flex rounded-md items-center justify-center"
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
            className="bg-white text-black mt-2"
          >
            <Link href={"/main"}>
              <motion.li
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                  color: "black",
                }}
                whileTap={{ scale: 1 }}
                variants={itemVariants}
                className="w-[100px] flex justify-center py-2 font-semibold text-gray-400"
              >
                Main
              </motion.li>
            </Link>
            <Link href={"/"}>
              <motion.li
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                  color: "black",
                }}
                whileTap={{ scale: 1 }}
                variants={itemVariants}
                className="w-[100px] flex justify-center py-2 font-semibold text-gray-400"
              >
                About
              </motion.li>
            </Link>
            <Link href={"/works"}>
              <motion.li
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                  color: "black",
                }}
                whileTap={{ scale: 1 }}
                variants={itemVariants}
                className="w-[100px] flex justify-center py-2 font-semibold text-gray-400"
              >
                Works
              </motion.li>
            </Link>
            <Link href={"/posts"}>
              <motion.li
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                  color: "black",
                }}
                whileTap={{ scale: 1 }}
                variants={itemVariants}
                className="w-[100px] flex justify-center py-2 font-semibold text-gray-400"
              >
                Posts
              </motion.li>
            </Link>
          </motion.ul>
        </motion.nav>
      </div>
    </>
  );
};

export default Header;
