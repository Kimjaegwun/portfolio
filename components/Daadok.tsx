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
        <Image
          src={"/daadok/daadok-detail.webp"}
          width={1252}
          height={778}
          placeholder="blur"
          blurDataURL={BLUR_URL}
          className="rounded-xl mb-2"
          alt="daadok"
        />
        <div className="text-orange-200">다독, 정기 구독 서비스 런칭</div>
        <div className="text-gray-400 mt-2">[Tech Stack]</div>
        <div className="min-w-[60px] text-teal-200">✓ React:</div>
        <div className="ml-2">
          웹/앱 모두를 아우를 수 있고 앱에서는 더욱이 크로스 플랫폼 지원을 고려
          <br />
          react 와 react-native와는 문법에서는 차이가 있지만 비즈니스 로직은
          공유 가능한 점
        </div>
        <div className="min-w-[85px] text-teal-200">✓ Graph-QL:</div>
        <div className="ml-2">
          graphql은 하나의 엔드 포인트로 인한 api 호출의 편리성 및 schema에
          정의되어 있는 걸 토대로 작동하기 때문에 백엔드와의 소통을 최소화할 수
          있다는 점<br /> apollo 라이브러리를 통해 캐싱, playground,
          subscription 등을 편리하게 이용가능
        </div>
        <div className="text-gray-400 mt-2">[구현 방안]</div>
        <div>
          - 핵심적인 기능 파악 및 확장성 있는 컴포넌트를 구현
          <br /> - 적은 인원으로 빠르게 개발하기 위해 추가 리소스가 들어가는
          방향을 지양 <br />- 문서 작성 시에는 세부 기능별로 정리하기보다는
          프로세스 단위(로그인, 구독, 결제 등)로 정리하여 각 단계별로 어떤
          기능을 넣어야할지 정의하며 작성
        </div>
        <div className="grid grid-cols-2 mt-2">
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
          - 로그인, 메인, 상품 페이지 등 전반적인 화면 구성 및 API 연동
          <br /> - postgreSQL을 통한 디비 및 서버 환경 구축 / git 연동 <br /> -
          codepush 적용을 통한 실시간 배포 환경 구축 <br /> - figma을 이용한
          디자이너와의 협업 및 퍼블리싱
          <br />- node-cron을 통한 정기배포 서비스 구축
        </div>
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
        <div className="text-gray-400 my-2">[Result]</div>
        <div>클라이언트 및 어드민 웹 배포, 앱 프로덕션 출시</div>
        <div>회원가입자 3300명, 협력업체 50여 곳 달성</div>
      </div>
      <div className="h-[100px]" />
    </div>
  );
};

export default Daadok;
