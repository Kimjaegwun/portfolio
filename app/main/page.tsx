"use client";

import { BLUR_URL } from "@/utils/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const career = [
  {
    id: 0,
    year: 2011,
    work: "성균관대학교 - 신소재공학부",
  },
  {
    id: 1,
    year: 2018,
    work: "삼성전자 메모리사업부",
  },
  {
    id: 2,
    year: 2020,
    work: "티어제이 - 모비",
  },
  {
    id: 3,
    year: 2021,
    work: "티어제이 - 다독",
  },
  {
    id: 4,
    year: "2022",
    work: "링글에듀케이션",
  },
];

const Main = () => {
  return (
    <div className="flex flex-col relative">
      <div className="container mx-auto pb-[100px]">
        <div className="flex justify-center p-2 rounded-md bg-zinc-500">
          <span className="font-bold text-[14px]">
            안녕하세요! 저는 3년차 프론트엔드 엔지니어입니다. 😆
          </span>
        </div>
        <div className="mt-[20px]">
          <span className="text-[20px] font-bold">JaeGwun.Kim</span>
        </div>
        <span className="text-[12px] text-gray-300">
          [ 풀스택을 꿈꾸는 디발자 ]
        </span>
        <Image
          src="/profile.webp"
          width={100}
          height={100}
          alt="profile"
          placeholder="blur"
          blurDataURL={BLUR_URL}
          className="mx-auto mt-5 rounded-[50px] border-2 border-gray-500 mb-5"
        />
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="mb-2"
        >
          <div className="mb-3">
            <span className="text-[18px] font-bold border-b-2 border-gray-500 pb-1">
              소개
            </span>
          </div>
          <span>
            &nbsp;안녕하세요. 풀스택 엔지니어를 꿈꾸는 김재권입니다. <br />
            &nbsp;2020년에 2년 넘게 근무하던 삼성전자를 나와 친구들과 스타트업을
            시작하였습니다. 주로 웹/앱 서비스 개발을 담당하였으며 필요에 따라 UI
            디자이너, 백엔드 등의 업무를 병행하였습니다. 그리고 서비스를
            운영하면서 다양한 경험을 얻을 수 있었고 또한 예상치 못한 이슈들에
            대처하며 트러블 슈팅 경험을 쌓을 수 있었습니다. <br />{" "}
            &nbsp;자기주도적인 개발 환경에 익숙하며, 팀원과의 소통 및 개발 관련
            정보 공유를 중요시합니다. 단순히 개발뿐만 아니라 비즈니스적으로도
            관심을 가지고 기여하는 일을 좋아합니다. 마지막으로, 좋은 프로덕트 및
            가치를 만들기 위해서는 모든 팀원이 함께 만들어야 한다고 생각하기에
            개발시 에 여러 팀들과 소통하기 위해 노력합니다.
          </span>
          <div className="flex justify-center mt-5">
            <Link href={"/works"}>
              <button className="relative inline-flex items-center bg-zinc-400 rounded hover:bg-zinc-400 group px-3 py-2">
                <span className="w-0 h-0 rounded bg-red-500 absolute top-0 left-0 ease-out duration-300 group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full duration-250 ease-in-out z-10 text-[14px]">
                  JaeGwun{`'`}s Portfolio →
                </span>
              </button>
            </Link>
          </div>

          <div className="mb-3 mt-5">
            <span className="text-[18px] font-bold border-b-2 border-gray-500 pb-1">
              학력 & 경력
            </span>
          </div>
          {career.map((item) => (
            <div key={item.id} className="mt-1">
              <span className="font-bold w-[60px] inline-block">
                {item.year}
              </span>
              <span>{item.work}</span>
            </div>
          ))}

          <div className="mt-5 mb-3">
            <span className="text-[18px] font-bold border-b-2 border-gray-500 pb-1">
              좋아하는 것
            </span>
          </div>
          <div>
            <span>
              음악, &nbsp;<span className="text-orange-200">피아노</span>,
              &nbsp;영화, &nbsp;공부, &nbsp;
              <span className="text-orange-200">프라모델</span>, &nbsp;농구
            </span>
          </div>

          <div className="mt-5 mb-3">
            <span className="text-[18px] font-bold border-b-2 border-gray-500 pb-1">
              Connect
            </span>
          </div>
          <div className="flex items-center">
            <Image
              src={"/linkedin.webp"}
              width="0"
              height="0"
              sizes="100vw"
              alt="git"
              className="relative w-[20px] h-[20px] bg-white rounded"
            />
            <Link
              href={"https://www.linkedin.com/in/jaekwon-kim-2a9863205/"}
              target="_blank"
            >
              <div className="ml-2 text-[#00a0dc] font-bold hover:underline">
                LinkedIn
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
