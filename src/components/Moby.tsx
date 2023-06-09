import { BLUR_URL } from "@/utils/constants";
import Image from "next/image";

const Moby = () => {
  return (
    <div className="text-[14px]">
      <div className="flex items-center">
        <span className="text-[#ff63c3] text-[12px]">Works&nbsp;&nbsp;</span>
        <span className="text-[10px]">{`〉`}</span>
        <span className="ml-2">Moby</span>
        <span className="ml-2 text-[10px] bg-gray-700 rounded-sm px-1">
          2020.07 - 2020.12
        </span>
      </div>
      <div className="mt-4 text-[14px]">택시 광고 솔루션 서비스</div>
      <div className="px-5 mt-4">
        <div className="">
          <span className="text-xs text-[#9ae6b4] bg-[#9ae6b429] px-1 rounded-sm">
            PLATFORM
          </span>
          <span className="ml-3 text-[14px]">iOS / Android</span>
        </div>
        <div className="">
          <span className="text-xs text-[#9ae6b4] bg-[#9ae6b429] px-1 rounded-sm">
            STACK
          </span>
          <span className="ml-3 text-[14px]">
            React Native, TypeScript, Redux, Graph-QL, PostgreSQL
          </span>
        </div>
      </div>
      <div className="mt-5">
        <div className="mb-2 text-orange-200">모비 런칭</div>
        <Image
          src={"/moby/moby-detail.webp"}
          width={2032}
          height={1126}
          placeholder="blur"
          blurDataURL={BLUR_URL}
          className="rounded-xl mx-auto"
          alt="moby"
        />
        <div className="my-2">앱 서비스, 어드민 페이지 기획 및 구현</div>
        <div className="text-gray-400 mt-2">[Work]</div>
        <div>- 홈 / 마이페이지 / 결제 수단 등록 화면 구성 및 API 연동</div>
        <div>- 소셜 로그인 및 공유 기능 구현</div>
        <div>- 유저 데이터 기반 매칭 알고리즘 구현</div>
        <div>- Apollo Subscription으로 실시간 택시 매칭 화면 구현</div>
        <Image
          src={"/moby/moby-detail2.webp"}
          width={1610}
          height={1072}
          placeholder="blur"
          blurDataURL={BLUR_URL}
          className="rounded-xl my-2 mx-auto"
          alt="moby"
        />
        <div>- Tablet PC용 화면 구성</div>
        <div className="text-gray-400 my-2">[Result]</div>
        <div>앱 프로덕션 출시</div>
      </div>
      <div className="h-[100px]" />
    </div>
  );
};

export default Moby;
