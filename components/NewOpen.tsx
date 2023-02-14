import { BLUR_URL } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const NewOpen = () => {
  return (
    <div className="text-[14px]">
      <div className="flex items-center">
        <span className="text-[#ff63c3] text-[12px]">Works&nbsp;&nbsp;</span>
        <span className="text-[10px]">{`〉`}</span>
        <span className="ml-2">NewOpen</span>
        <span className="ml-2 text-[10px] bg-gray-700 rounded-sm px-1">
          2021.10 - 2020.12
        </span>
      </div>
      <div className="mt-4 text-[14px]">신규 오픈한 가게들 소개 서비스</div>
      <div className="px-5 mt-4">
        <div className="">
          <span className="text-xs text-[#9ae6b4] bg-[#9ae6b429] px-1 rounded-sm">
            GIT
          </span>
          <Link
            href={"https://github.com/Kimjaegwun/newopen_web"}
            target="_blank"
          >
            <span className="ml-3 text-[14px] underline">뉴오픈</span>
          </Link>
        </div>
        <div className="">
          <span className="text-xs text-[#9ae6b4] bg-[#9ae6b429] px-1 rounded-sm">
            PLATFORM
          </span>
          <span className="ml-3 text-[14px]">Windoes / MacOS</span>
        </div>
        <div className="">
          <span className="text-xs text-[#9ae6b4] bg-[#9ae6b429] px-1 rounded-sm">
            STACK
          </span>
          <span className="ml-3 text-[14px]">
            React, TypeScript, Graph-QL, PostgreSQL
          </span>
        </div>
      </div>
      <div className="mt-5">
        <div className="mb-2 text-orange-200">
          뉴오픈, 신규 오픈 가게 홍보 서비스
        </div>
        <Image
          src={"/newopen/newopen-detail.webp"}
          alt="newopen"
          width="0"
          height="0"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR_URL}
          className="w-[80%] rounded-xl h-auto mx-auto"
        />
        <div className="my-2">웹 서비스 기획 및 구현</div>
        <div className="text-gray-400 mt-2">[Work]</div>
        <div>- React, GraphQL를 활용하여 메인 홈, 가게 소개 페이지 구성</div>
        <div>- Figma를 활용하여 UI Layout 제작</div>
        <div className="text-gray-400 mt-2">[Result]</div>
        <div>웹 사이트 출시</div>
      </div>
      <div className="h-[100px]" />
    </div>
  );
};

export default NewOpen;
