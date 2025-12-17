import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMission = () => {
    const element = document.getElementById('mission');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-20 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 배경 이미지 - 패럴랙스 효과 */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/flowerback.jpg')`,
          transform: `translateY(${scrollY * 0.4}px)`,
          willChange: 'transform',
          filter: 'saturate(0.8)'
        }}
      />
      
      {/* 텍스트 콘텐츠 */}
      <div className="text-center px-6 py-20 relative z-10">
        <h1 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6" 
          style={{ 
            color: '#f5f0e6',
            textShadow: '1px 1px 2px rgba(120,120,120,0.25), -1px -1px 2px rgba(120,120,120,0.25), 1px -1px 2px rgba(120,120,120,0.25), -1px 1px 2px rgba(120,120,120,0.25), 0 2px 8px rgba(100,100,100,0.15)'
          }}
        >
          <span style={{ color: '#F7CAC9' }}>꽃</span>을 <span style={{ color: '#F7CAC9' }}>보</span>듯,
          <br />
          <span style={{ color: '#F7CAC9' }}>나</span>를 <span style={{ color: '#F7CAC9' }}>보</span>다.
        </h1>
        <p 
          className="text-xl md:text-2xl max-w-3xl mx-auto" 
          style={{ 
            color: '#f5f0e6', 
            opacity: 0.95,
            textShadow: '1px 1px 2px rgba(120,120,120,0.2), -1px -1px 2px rgba(120,120,120,0.2), 1px -1px 2px rgba(120,120,120,0.2), -1px 1px 2px rgba(120,120,120,0.2)'
          }}
        >
          20대 청년들의 성장과 이야기에 집중합니다
        </p>
      </div>

      {/* 하단 스크롤 안내 */}
      <button
        onClick={scrollToMission}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group"
        style={{ color: '#f5f0e6' }}
      >
        <span className="text-sm uppercase tracking-widest drop-shadow-md">더 알아보기</span>
        <ChevronDown 
          className="w-6 h-6 drop-shadow-md animate-bounce"
          style={{ 
            animation: 'bounceArrow 1.5s ease-in-out infinite'
          }}
        />
      </button>

      {/* 화살표 애니메이션 스타일 */}
      <style>{`
        @keyframes bounceArrow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </section>
  );
}
