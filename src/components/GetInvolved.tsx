import { Users, BookOpen, Calendar } from "lucide-react";

export function GetInvolved() {
  const ways = [
    {
      icon: Users,
      title: "1:1 코칭 신청",
      description:
        "전문 코치와 함께 나만의 성장 여정을 시작하세요. 목표 설정부터 실행까지 체계적으로 지원합니다.",
      cta: "신청하기",
    },
    {
      icon: BookOpen,
      title: "인터뷰 참여",
      description:
        "당신의 진솔한 이야기를 매거진에 담아보세요. 누군가에게 큰 힘이 될 수 있습니다.",
      cta: "참여하기",
    },
    {
      icon: Calendar,
      title: "행사 참여",
      description:
        "워크숍, 토크콘서트, 소모임 등 다양한 행사에 참여하여 새로운 사람들을 만나보세요.",
      cta: "일정 보기",
    },
  ];

  return (
    <section
      id="getinvolved"
      className="bg-[#8080e0] text-white"
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-16 px-6 max-w-5xl">
          {ways.map((way, index) => {
            const Icon = way.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div style={{ marginBottom: '24px' }} className="transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  <Icon className="w-20 h-20 stroke-[1.5] text-white/90" />
                </div>

                <h3 className="text-2xl font-bold" style={{ marginBottom: '20px' }}>
                  {way.title}
                </h3>
                <p className="text-base text-white/80 leading-7 font-medium break-keep max-w-[280px]" style={{ marginBottom: '28px' }}>
                  {way.description}
                </p>

                <div>
                  <button className="uppercase text-sm font-bold tracking-[0.2em] py-3 border-b-2 border-white/30 hover:border-white transition-all text-white/90 hover:text-white">
                    {way.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
