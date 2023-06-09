"use client";

import { Variants, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Model from "../components/Model";
import { usePathname } from "next/navigation";

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
    sub: "/detail",
  },
  {
    id: 2,
    name: "Posts",
    link: "/posts",
  },
];

const Header = () => {
  const path = usePathname();

  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef<any>([]);

  useEffect(() => {
    function setTabPosition() {
      const find = navigationList.findIndex(
        (item) => item.link === path || item.sub === path
      );
      const currentTab = tabsRef.current[find];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [path]);

  return (
    <>
      <div className="fixed pl-5 w-full z-[999] bg-opacity-70 backdrop-blur-sm">
        <div className="h-[50px] max-w-[800px] mx-auto flex items-center">
          <Link href={"/"}>
            <Image
              src={"/crown.svg"}
              width={25}
              height={25}
              alt="crown"
              className="mr-5"
            />
          </Link>
          <div className="relative flex items-center">
            {navigationList.map((item) => (
              <Link href={item.link} key={item.id}>
                <motion.div
                  ref={(el) => (tabsRef.current[item.id] = el)}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 1 }}
                  variants={itemVariants}
                  className={"py-2 mr-5 text-sm text-white duration-300"}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
            <span
              className="absolute bottom-0 h-1 bg-teal-500 transition-all duration-300"
              style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
            />
            <Link
              href={"https://github.com/Kimjaegwun/portfolio"}
              target="_blank"
              className="flex"
            >
              <Image
                src={"/git.png"}
                width="0"
                height="0"
                sizes="100vw"
                alt="git"
                className="relative w-[20px] h-[20px]"
              />
              <span className="text-white text-sm ml-2 hover:underline">
                Source
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[60px]" />
      <div className="h-[150px]">
        <Model />
      </div>
    </>
  );
};

export default Header;
