import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "민들레처럼\n어디서든 피어나는\n사람이 되고 싶어요",
    content: "바람에 흩날려도 결국 뿌리를 내리는 민들레처럼, 저도 어떤 환경에서든 나만의 방식으로 성장하고 싶어요. 꽃보나보에서 그 용기를 배웠어요.",
    name: "익명의 참여자",
    age: 24,
    role: "마인드 프로필 참여자",
    image: "/민들레.jpg",
    imagePosition: "center 20%",
    bgColor: "#f4a261"
  },
  {
    quote: "나를 알아가는 게\n이렇게 설렐 줄\n몰랐어요",
    content: "인마인드 검사를 통해 저와 어울리는 꽃이 무엇인지 알게 됐어요. 단순한 테스트가 아니라 나를 더 깊이 이해하는 시간이었죠. 이제 나만의 색깔이 뭔지 알 것 같아요.",
    name: "최시우",
    age: 23,
    role: "인마인드 검사 참여자",
    image: "/최시우.jpg",
    imagePosition: "center 10%",
    bgColor: "#8080e0"
  },
  {
    quote: "평범한 일상에서도\n의미를 찾을 수\n있게 됐어요",
    content: "매일 반복되는 일상이 지루하게 느껴졌는데, Q&A를 통해 제 이야기를 나누면서 평범함 속에서도 특별함을 발견했어요. 제 일상이 누군가에게 위로가 될 수 있다니 놀라웠어요.",
    name: "강요셉",
    age: 26,
    role: "매거진 Q&A 참여자",
    image: "/강요셉.jpg",
    imagePosition: "center 15%",
    bgColor: "#d4727a"
  },
  {
    quote: "인생이라는 여행에서\n잠시 쉬어가는\n곳을 찾았어요",
    content: "빠르게 달려온 삶 속에서 잠시 멈춰 나를 돌아보는 시간이 필요했어요. 꽃보나보는 그런 쉼터 같은 곳이에요. 여기서 다시 힘을 얻어 다음 여정을 떠날 수 있어요.",
    name: "익명의 참여자",
    age: 25,
    role: "마인드 프로필 참여자",
    image: "/인생이라는여행.jpg",
    imagePosition: "center 60%",
    bgColor: "#6b8e6b"
  },
  {
    quote: "나의 내면을\n기록하는 일은\n생각보다 소중해요",
    content: "마인드프로필을 통해 나의 감정과 마음을 기록하면서, 그동안 외면했던 내 모습을 마주할 수 있었어요. 내적 프로필을 완성하고 나니 나 자신이 더 선명해졌어요.",
    name: "김인혁",
    age: 27,
    role: "마인드 프로필 완료자",
    image: "/김인혁.jpg",
    imagePosition: "center top",
    bgColor: "#5a7d9a"
  }
];

export function Quote() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // 5초마다 자동으로 다음 슬라이드로 이동
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [goToNext]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-0 relative">
      <div className="grid md:grid-cols-2">
        <div 
          className="flex flex-col text-white transition-colors duration-500 relative h-[500px] md:h-[600px]"
          style={{ 
            backgroundColor: current.bgColor,
            padding: '48px 48px 48px 80px'
          }}
        >
          {/* 상단 콘텐츠 영역 - flex-1로 공간 차지 */}
          <div className="flex-1 overflow-hidden">
            <div className="text-5xl md:text-6xl mb-4 opacity-40">"</div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-snug mb-6 whitespace-pre-line">
              {current.quote}
            </h2>
            <p className="text-base md:text-lg leading-relaxed opacity-95 max-w-lg">
              {current.content}
            </p>
          </div>

          {/* 하단 고정 영역 - 이름, 역할, 인디케이터 */}
          <div className="flex-shrink-0">
            <div className="pt-6 border-t border-white/30 mb-6">
              <div className="mb-2 text-lg">— {current.name}, {current.age}세</div>
              <div className="text-sm opacity-80">{current.role}</div>
            </div>

            {/* 하단 컨트롤 영역 */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  const element = document.getElementById('getinvolved');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-left uppercase text-sm tracking-wide hover:opacity-75 transition-opacity flex items-center gap-2"
              >
                더 많은 이야기 보기 <span>→</span>
              </button>

              {/* 인디케이터와 화살표 */}
              <div className="flex items-center gap-4">
                <button
                  onClick={goToPrevious}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentIndex 
                          ? 'w-6 h-2 bg-white' 
                          : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
          {/* 블러 처리된 배경 이미지 */}
          <div
            className="absolute inset-0 w-full h-full transition-all duration-500"
            style={{
              backgroundImage: `url(${current.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(20px)',
              transform: 'scale(1.1)'
            }}
          />
          {/* 메인 이미지 - 전체 보이기 */}
          <img
            src={current.image}
            alt={current.name}
            className="relative w-full h-full object-contain transition-all duration-500 z-10"
          />
        </div>
      </div>
    </section>
  );
}
