import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "만약 한 단어로\n꽃보나보를 표현한다면,\n'힘이 되는'이에요",
    content: "혼자가 아니라는 것을 느끼게 해주는 곳이에요. 같은 고민을 하는 또래들과 만나서 이야기를 나누고, 서로를 응원하는 공간이죠. 제 이야기를 들어주고, 저도 다른 사람들의 이야기를 들으면서 많은 힘을 얻었어요.",
    name: "김지현",
    age: 24,
    role: "마인드 코칭 & 커뮤니티 멤버",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60",
    bgColor: "#ff6b6b"
  },
  {
    quote: "나를 있는 그대로\n바라볼 수 있게\n도와준 곳이에요",
    content: "항상 남들과 비교하며 살았는데, 꽃보나보에서 나만의 속도가 있다는 걸 깨달았어요. 코칭을 통해 제 강점을 발견하고, 스스로를 더 사랑하게 됐어요.",
    name: "이서연",
    age: 23,
    role: "1:1 코칭 참여자",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60",
    bgColor: "#7b61ff"
  },
  {
    quote: "꿈을 향해 나아갈\n용기를 얻었어요",
    content: "막연하게만 느껴졌던 꿈이 구체적인 목표가 됐어요. 워크숍에서 만난 분들과 서로의 꿈을 응원하면서, 포기하지 않고 도전할 수 있는 힘을 얻었어요.",
    name: "박준호",
    age: 26,
    role: "워크숍 참여자",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop&q=60",
    bgColor: "#ffb3ba"
  },
  {
    quote: "진정한 나를\n발견하는 여정이었어요",
    content: "매거진 인터뷰를 통해 제 이야기를 정리하면서, 그동안 몰랐던 저의 모습을 발견했어요. 누군가에게 힘이 될 수 있다는 것도 큰 보람이에요.",
    name: "최민지",
    age: 25,
    role: "매거진 인터뷰 참여자",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=60",
    bgColor: "#6b8e6b"
  },
  {
    quote: "함께라서\n더 멀리 갈 수 있어요",
    content: "혼자였다면 금방 지쳤을 거예요. 꽃보나보에서 만난 동료들과 함께 성장하면서, 어려운 순간도 이겨낼 수 있었어요. 평생 함께할 친구들을 만났어요.",
    name: "정승우",
    age: 27,
    role: "토크콘서트 참여자",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=60",
    bgColor: "#e8a87c"
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

        <div className="relative h-[500px] md:h-[600px]">
          <img
            src={current.image}
            alt={current.name}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>
      </div>
    </section>
  );
}
