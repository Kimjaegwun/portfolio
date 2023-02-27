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
            <div className="text-gray-400 mb-1">[Webview 선정 이유]</div>
            <div className="mb-2">
              초기 개발 시 RN 라이브러리를 활용하는 방안과 웹뷰를 통한 구현을
              고려하였지만, 결과적으로 웹뷰를 선택
              <br />- d3 기반 nivo 차트 라이브러리의 높은 자유도
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
              <span>
                - 베타 서비스로 인한 잦은 수정으로 배포함에 있어 웹뷰의 편리성
              </span>
            </div>
            <div className="text-gray-400 mb-1">[Work]</div>
            <div>
              <span className="text-xs">1)</span> 웹뷰와의 자연스러운 연결
              <div className="ml-4">
                - 헤더와 하단 버튼은 앱으로 구현하여 초기 페이지 진입시 웹뷰
                로딩 시간 동안 skeleton만 보여주는 것이 ux적으로 좋지 않아 특정
                컴포너트는 앱으로 구현
              </div>
            </div>
            <div>
              <span className="text-xs">2)</span> 렌더링 속도 향상
              <div className="ml-4">
                - 응답값이 작은1api를 미리 앱 내에서 prefetch 한 후
                post-message를 통해 전달하여 웹에서의 api 호출수를 조절하여 로딩
                시간을 줄임 <br />- useQuries를 통한 network waterfall 현상 방지
                <br />- layout-shift를 줄이기위해 suspense의 fallback영역을
                layout에 맞게 설정하여 자연스러운 reflow 과정을 구현하고자 함
              </div>
            </div>
            <span className="ml-4 text-[10px] text-[#9ae6b4] bg-[#9ae6b429] px-1 rounded-sm mr-1">
              REF
            </span>
            <Link
              href={"https://toss.tech/article/faster-initial-rendering"}
              target="_blank"
              className="underline"
            >
              toss tech
            </Link>
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
            <div className="mb-2">신규 프로덕트 링글 틴즈 런칭</div>
            <div className="text-gray-400 mb-1">[구현]</div>
            <div className="mb-2">
              기존에 하나의 프로젝트로 묶여있던 링글 플러스, 틴즈를 분리하여 새
              프로젝트로 옮겨서 진행
            </div>
            <div className="text-gray-400 mb-1">[Project Migration]</div>
            <div className="mb-2">
              - 비즈니스 로직뿐만 아니라 다수의 컴포넌트에서 서로 다른
              프로덕트로 인해 발생하는 분기 처리를 없애 추후의 프로젝트 관리와
              개발의 생산성을 높이고자함 <br />- GA측면에서도 데이터를 정제하기
              용이
            </div>
            <div className="text-gray-400 mb-1">[Work]</div>
            <div>
              - git / firebase 및 ga 세팅 / sns 회원가입 / zoom sdk 세팅
              <br /> - 회원가입 프로세스, 결제 페이지 등 다수의 페이지 구현
              <br /> - 자동화 배포 도구인 fastlane 연결을 통해 ci/cd
              파이프라인을 구축
            </div>
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
        <div className="mb-2">앱 최적화를 통한 성능 개선</div>
        <video controls className="w-[50%] mb-2">
          <source src="/ringle/ringle-detail3.mp4" type="video/mp4" />
        </video>
        <span className="text-xs">1)</span> 초기 실행 속도 20% 개선
        <div className="ml-2">- hermes</div>
        <div className="ml-4">
          빌드 시 js를 bytecode로 미리 컴파일 하는 도구로 apk 사이트 및 메모리를
          낮춰 로딩 속도 개선
        </div>
        <div className="ml-2">- bundle splitter</div>
        <div className="ml-4">
          앱 실행 시 로드되는 기본 번들의 크기를 줄여 시작 시간 및 메모리 개선
        </div>
        <video controls className="w-[50%] my-2">
          <source src="/ringle/ringle-detail4.mp4" type="video/mp4" />
        </video>
        <span className="text-xs">2)</span> react-query 캐싱을 통한 페이지 로딩
        시간 개선
        <div className="flex">
          <div className="min-w-[45px] text-teal-200">✓ 문제:</div>
          <div>
            기존에는 단순히 fetch를 통한 api 호출로 데이터를 캐싱하지 못함
          </div>
        </div>
        <div className="flex">
          <div className="min-w-[45px] text-teal-200">✓ 해결:</div>
          <div>
            react-query 도입, redux의 미들웨어를 통한 호출에는 bolierplate
            코드와 사용성 - 이 불편하여 고려하지 않음
          </div>
        </div>
        <div className="flex">
          <div className="min-w-[45px] text-teal-200">✓ 평가:</div>
          <div>
            prefetch 기능을 활용하여 데이터를 미리 받아옴으로써 화면 전환시 api
            호출로 인한 로딩 시간을 없애 렌더링 시간을 50~80% 단축
            <br />
            staletime의 조절로 다른 페이지에서의 동일한 api 응답시간 단축 및
            메모리 낭비를 줄임
          </div>
        </div>
        <div className="flex">
          <div className="min-w-[45px] text-teal-200">✓ 비고:</div>
          <div>
            무분별한 prefetch는 오히려 앱에서의 메모리 사용량을 단순히 늘리게
            됨으로, GA를 통해 유저들의 사용성이 많고 서버에서의 호출이 느린
            api를 호출하는 페이 지를 고려하여 적용함
          </div>
        </div>
      </div>
      <div className="h-[100px]" />
    </div>
  );
};

export default Ringle;
