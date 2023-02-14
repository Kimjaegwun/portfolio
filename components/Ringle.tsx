import Link from "next/link";

const Ringle = () => {
  return (
    <div className="text-[14px]">
      <div className="flex items-center">
        <span className="text-[#ff63c3] text-[12px]">Works&nbsp;&nbsp;</span>
        <span className="text-[10px]">{`〉`}</span>
        <span className="ml-2">Ringle</span>
        <span className="ml-2 text-[10px] bg-gray-700 rounded-sm px-1">
          2022.04 -
        </span>
      </div>
      <div className="mt-4 text-[14px]">
        영어 교육 플랫폼, 영어권 명문대 학생들과 화상으로 영어를 배울 수 있는
        서비스입니다.
      </div>
      <div className="px-5 mt-4">
        <div className="">
          <span className="text-xs text-[#9ae6b4] bg-[#9ae6b429] px-1 rounded-sm">
            WEBSITE
          </span>
          <Link href={"https://www.ringleplus.com"} target="_blank">
            <span className="ml-3 text-[14px] underline">
              https://www.ringleplus.com
            </span>
          </Link>
        </div>
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
            React, React Native, TypeScript, Tailwind, Redux, React-Query
          </span>
        </div>
      </div>
      <div className="mt-5">
        <div className="mb-2 text-orange-200">영어 점수 진단 프로젝트</div>
        <div className="grid grid-cols-4">
          <video controls>
            <source src="/ringle/ringle-detail.mp4" type="video/mp4" />
          </video>
          <div className="col-span-3 ml-5">
            <div className="mb-2">
              음성 기반 데이터 정리 및 시각화(차트) 작업 진행, 앱 내 webview를
              이용해 구현
            </div>
            <div className="text-gray-400 mb-1">[Work]</div>
            <div>
              - suspense를 이용해 렌더시의 layout-shift를 줄였고 prefetch을
              사용하여 로딩시간을 10% 단축
            </div>
            <span className="text-[10px] text-[#9ae6b4] bg-[#9ae6b429] px-1 rounded-sm mr-1">
              REF
            </span>
            <Link
              href={"https://toss.tech/article/faster-initial-rendering"}
              target="_blank"
              className="underline"
            >
              toss tech
            </Link>
            <div>
              - nivo 라이브러리를 사용, 앱 호환성 및 자유도 높음
              <div>
                <span className="text-[10px] text-[#9ae6b4] bg-[#9ae6b429] px-1 rounded-sm mr-1">
                  WEB
                </span>
                <Link
                  href={"https://nivo.rocks/"}
                  target="_blank"
                  className="underline"
                >
                  https://nivo.rocks/
                </Link>
                <br />
                <span className="text-[10px] text-[#9ae6b4] bg-[#9ae6b429] px-1 rounded-sm mr-1">
                  BLOG
                </span>
                <Link
                  href={
                    "https://shadow-change-df4.notion.site/Nivo-ec9607f53b9e42ce88d241df83356f68"
                  }
                  target="_blank"
                  className="underline"
                >
                  notion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="mb-2 text-orange-200">Ringle Teens 런칭</div>
        <div className="grid grid-cols-4">
          <video controls>
            <source src="/ringle/ringle-detail2.mp4" type="video/mp4" />
          </video>
          <div className="col-span-3 ml-5">
            <div className="mb-2">틴즈 서비스 런칭</div>
            <div className="text-gray-400 mb-1">[Work]</div>
            <div>
              - 틴즈 컴포넌트 분리하여 새로운 프로젝트로 구성 » GA 세팅 / 푸시
              알림 / 빌드 시간 개선
            </div>
            <div>
              - RN 최신 버전 적용, 회원가입 프로세스 구축(이메일 / 소셜 로그인 -
              페이스북, 카카오, 네이버, 구글, 애플)
            </div>
            <div>- Fastlene을 통한 배포 자동화</div>
            <span className="text-[10px] text-[#9ae6b4] bg-[#9ae6b429] px-1 rounded-sm mr-1">
              REF
            </span>
            <Link
              href={"https://millo-l.github.io/ReactNative-fastlane/"}
              target="_blank"
              className="underline"
            >
              millo
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="mb-2 text-orange-200">App 최적화</div>
        <video controls className="w-[50%]">
          <source src="/ringle/ringle-detail3.mp4" type="video/mp4" />
        </video>
        <div className="my-2">
          - 앱 실행 시간 개선, hermes & bundle-splitter을 통해 번들 사이즈 및
          메모리 사용량 개선
        </div>
        <video controls className="w-[50%]">
          <source src="/ringle/ringle-detail4.mp4" type="video/mp4" />
        </video>
        <div className="mt-2">
          - prefetch를 통해 홈탭 이동 시 로딩시간 30~60% 감소
        </div>
      </div>
      <div className="h-[100px]" />
    </div>
  );
};

export default Ringle;
