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
          src={"/moby/moby-detail.png"}
          alt="moby"
          width="0"
          height="0"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={"/moby/moby-detail.png"}
          className="w-[80%] rounded-xl h-auto mx-auto"
        />
        <div className="my-2">앱 서비스, 어드민 페이지 기획 및 구현</div>
        <div className="text-gray-400 mt-2">[Work]</div>
        <div>
          - React-Native 프레임워크를 이용하여 로그인, 호출 페이지 화면 구성
        </div>
        <div>- NodeJS, GraphQL 서버 환경 구축 및 Git 연동</div>
        <div>- 가입시 작성한 데이터 기반 매칭 알고리즘 구현</div>
        <div>- Apollo Subscription으로 실시간 택시 매칭 화면 구현</div>
        <Image
          src={"/moby/moby-detail2.png"}
          alt="moby"
          width="0"
          height="0"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={"/moby/moby-detail2.png"}
          className="w-[80%] rounded-xl h-auto my-2 mx-auto"
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
