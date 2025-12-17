import { useState, useEffect } from 'react';

const currentPrograms = [
  {
    date: '상시모집',
    tag: 'MIND PROFILE',
    title: '마인드 프로필',
    description: '나의 감정, 마음, 성향 등 6회차에 걸쳐 나의 내적 프로필을 찍어보는 시간',
  },
  {
    date: '상시모집',
    tag: 'IN-MIND',
    title: '인마인드',
    description: '나와 가장 어울리는 꽃은 무엇일까? 9가지 유형으로 알아보는 나의 간단 성향 검사',
  },
  {
    date: '상시모집',
    tag: 'Q&A',
    title: '매거진 Q&A',
    description: '평범하다고 생각했던 일상 이야기가 누군가의 공감을 이끌어냅니다. 당신의 이야기를 들려주세요.',
  },
];

export function Programs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // iOS Safari 및 대부분의 모바일 브라우저에서 background-attachment: fixed가 작동하지 않음
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsMobile(isTouchDevice || isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="programs" className="py-0">
      <div className="grid md:grid-cols-2">
        <div 
          className="flex flex-col justify-center order-2 md:order-1"
          style={{ 
            backgroundColor: '#faf8f5',
            padding: '60px 60px 60px 80px'
          }}
        >
          <h2 
            className="text-3xl md:text-4xl text-gray-900 leading-tight font-bold"
            style={{ marginBottom: '32px' }}
          >
            참여 가능한 프로그램
          </h2>

          <div className="border-t border-gray-300/50">
            {currentPrograms.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-300/50"
                style={{ padding: '16px 0' }}
              >
                <div className="flex items-center gap-4" style={{ marginBottom: '4px' }}>
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <span className="text-xs uppercase tracking-wider text-gray-400">{item.tag}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900" style={{ marginBottom: '4px' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="relative h-[500px] md:h-[700px] order-1 md:order-2 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop&q=80')`,
            backgroundAttachment: isMobile ? 'scroll' : 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-white px-6 space-y-4">
            <div className="text-xs uppercase tracking-[0.25em] text-white/80">community moment</div>
            <div className="text-5xl md:text-6xl lg:text-7xl font-semibold drop-shadow-xl">and breathe</div>
            <p className="text-base md:text-lg text-white/80 max-w-lg">
              서로의 속도를 존중하며 잠시 멈춰 숨을 고르는 시간, 당신을 기다립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
