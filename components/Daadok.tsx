import { BLUR_URL } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const Daadok = () => {
  return (
    <div className="text-[14px]">
      <div className="flex items-center">
        <span className="text-[#ff63c3] text-[12px]">Works&nbsp;&nbsp;</span>
        <span className="text-[10px]">{`〉`}</span>
        <span className="ml-2">Daadok</span>
        <span className="ml-2 text-[10px] bg-gray-700 rounded-sm px-1">
          2021.01 - 2021.12
        </span>
      </div>
      <div className="mt-4 text-[14px]">식품, 생필품 정기 구독 서비스</div>
      <div className="px-5 mt-4">
        <div className="">
          <span className="text-xs text-[#9ae6b4] bg-[#9ae6b429] px-1 rounded-sm">
            PLATFORM
          </span>
          <span className="ml-3 text-[14px]">
            Windows / macOS / iOS / Android
          </span>
        </div>
        <div className="">
          <span className="text-xs text-[#9ae6b4] bg-[#9ae6b429] px-1 rounded-sm">
            STACK
          </span>
          <span className="ml-3 text-[14px]">
            React, React Native, TypeScript, Redux, Graph-QL, PostgreSQL
          </span>
        </div>
      </div>
      <div className="mt-5">
        <div className="mb-2 text-orange-200">다독, 정기 구독 서비스 런칭</div>
        <Image
          src={"/daadok/daadok-detail.webp"}
          width={1252}
          height={778}
          placeholder="blur"
          blurDataURL={BLUR_URL}
          className="rounded-xl"
          alt="daadok"
        />
        <div className="my-2">
          앱-웹 서비스 기획, 클라이언트-어드민 페이지 및 API 구현
        </div>
        <div className="grid grid-cols-2">
          <Link
            href={"/daadok/daadok-detail2.webp"}
            target="_blank"
            className="cursor-zoom-in mr-1"
          >
            <Image
              src={"/daadok/daadok-detail2.webp"}
              width={1440}
              height={992}
              placeholder="blur"
              blurDataURL={BLUR_URL}
              className="rounded-xl"
              alt="daadok"
            />
          </Link>
          <Link
            href={"/daadok/daadok-detail3.webp"}
            target="_blank"
            className="cursor-zoom-in"
          >
            <Image
              src={"/daadok/daadok-detail3.webp"}
              width={1440}
              height={739}
              placeholder="blur"
              blurDataURL={BLUR_URL}
              className="rounded-xl"
              alt="daadok"
            />
          </Link>
        </div>
        <div className="text-gray-400 mt-2">[Work]</div>
        <div>
          - Next.js/React Native를 이용하여 로그인, 메인, 상품 페이지 등
          전반적인 화면 구성 및 API 연동
        </div>
        <div>- NodeJS, GraphQL 서버 환경 구축 및 Git 연동</div>
        <div>- Jenkins, Docker 를 통한 배포 시스템 자동화</div>
        <div>- CodePush 적용을 통한 실시간 트러블슈팅 작업 환경 구축</div>
        <div>- Figma을 이용한 디자이너와의 협업 및 Frontend 퍼블리싱</div>
        <Link
          href={"/daadok-detail4.webp"}
          target="_blank"
          className="cursor-zoom-in"
        >
          <Image
            src={"/daadok/daadok-detail4.webp"}
            width={2278}
            height={872}
            placeholder="blur"
            blurDataURL={BLUR_URL}
            className="rounded-xl my-2"
            alt="daadok"
          />
        </Link>
        <div>- node-cron을 통한 정기배포 서비스 구축</div>
        <div className="text-gray-400 my-2">[Result]</div>
        <div>클라이언트 및 어드민 웹 배포, 앱 프로덕션 출시</div>
        <div>회원가입자 3300명, 협력업체 50여 곳 달성</div>
      </div>
      <div className="h-[100px]" />
    </div>
  );
};

export default Daadok;
