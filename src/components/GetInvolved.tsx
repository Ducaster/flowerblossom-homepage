import { User, Flower2, MessageCircle } from "lucide-react";

export function GetInvolved() {
  const ways = [
    {
      icon: User,
      title: "마인드 프로필",
      description:
        "나의 감정, 마음, 성향 등 6회차에 걸쳐 나의 내적 프로필을 찍어보는 시간",
      cta: "시작하기",
      link: null,
    },
    {
      icon: Flower2,
      title: "인마인드",
      description:
        "나와 가장 어울리는 꽃은 무엇일까? 9가지 유형으로 알아보는 나의 간단 성향 검사",
      cta: "검사하기",
      link: "https://flowerblossom-survey.vercel.app/",
    },
    {
      icon: MessageCircle,
      title: "Q&A",
      description:
        "평범하다고 생각했던 일상 이야기가 누군가의 공감을 이끌어냅니다. 당신의 이야기를 들려주세요.",
      cta: "참여하기",
      link: null,
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
                  {way.link ? (
                    <a 
                      href={way.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uppercase text-sm font-bold tracking-[0.2em] py-3 border-b-2 border-white/30 hover:border-white transition-all text-white/90 hover:text-white"
                    >
                      {way.cta}
                    </a>
                  ) : (
                    <button className="uppercase text-sm font-bold tracking-[0.2em] py-3 border-b-2 border-white/30 hover:border-white transition-all text-white/90 hover:text-white">
                      {way.cta}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
