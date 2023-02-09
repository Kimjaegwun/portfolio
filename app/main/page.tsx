"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    year: 2012,
    work: "링글에듀케이션",
  },
];

const Main = () => {
  return (
    <div className="container mx-auto pb-[100px]">
      <div className="flex justify-center p-3 rounded-md bg-zinc-800">
        <span className="font-bold text-[22px]">
          안녕하세요! 저는 2년차 프론트엔드 엔지니어입니다. 반갑습니다~ 😆
        </span>
      </div>
      <div className="mt-[20px]">
        <span className="text-[34px] font-bold">JaeGwun.kim</span>
      </div>
      <span className="text-[20px] text-gray-300">
        [ 풀스택을 꿈꾸는 디발자 ]
      </span>
      <Image
        src="/profile.jpg"
        width={100}
        height={100}
        alt="profile"
        placeholder="blur"
        blurDataURL="/profile.jpg"
        className="mx-auto mt-5 rounded-[50px] border-2 border-white mb-5"
      />
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="mb-2"
      >
        <div className="mb-3">
          <span className="text-[28px] border-b-2 border-gray-500 pb-1">
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
          <span className="px-3 text-[22px] py-1 bg-red-500 rounded-lg">
            JaeGwun{`'`}s Portfolio →
          </span>
        </div>

        <div className="mb-3">
          <span className="text-[28px] border-b-2 border-gray-500 pb-1">
            학력 & 경력
          </span>
        </div>
        {career.map((item) => (
          <div key={item.id} className="mt-1">
            <span className="font-bold w-[60px] inline-block">{item.year}</span>
            <span className="text-[22px]">{item.work}</span>
          </div>
        ))}

        <div className="mt-4 mb-3">
          <span className="text-[28px] border-b-2 border-gray-500 pb-1">
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
      </motion.div>
    </div>
  );
};

export default Main;
