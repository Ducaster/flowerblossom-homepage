import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Instagram, Youtube, Facebook, Twitter, Mail, Send } from 'lucide-react';

const allPrograms = [
  {
    id: 1,
    date: '2025년 1월',
    title: '청년 토크콘서트',
    description: '20대의 고민과 꿈을 함께 나누며 마음을 단단하게 만드는 저녁. 서로의 이야기를 들으며 공감하고, 함께 성장하는 시간을 가져요.',
    tag: 'Community',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60',
    status: 'upcoming'
  },
  {
    id: 2,
    date: '상시 모집',
    title: '1:1 마인드 코칭',
    description: '나를 알아보고 목표를 세우는 개인 맞춤형 코칭 프로그램. 전문 코치와 함께 나만의 성장 로드맵을 그려보세요.',
    tag: 'Coaching',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60',
    status: 'ongoing'
  },
  {
    id: 3,
    date: '2025년 2월',
    title: '매거진 인터뷰',
    description: '당신의 이야기를 기록하고 전할 수 있도록 따뜻하게 인터뷰합니다. 누군가에게 힘이 되는 당신의 스토리를 나눠주세요.',
    tag: 'Story',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop&q=60',
    status: 'upcoming'
  },
  {
    id: 4,
    date: '2024년 12월',
    title: '연말 회고 워크숍',
    description: '한 해를 돌아보며 나만의 성장 스토리를 정리하는 시간. 2024년을 마무리하고 새해를 준비하는 특별한 워크숍이었어요.',
    tag: 'Workshop',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=60',
    status: 'past'
  },
  {
    id: 5,
    date: '2024년 11월',
    title: '커리어 탐색 세션',
    description: '진짜 하고 싶은 일을 찾아가는 그룹 코칭 프로그램. 함께 고민하고 방향을 찾아가는 여정이었습니다.',
    tag: 'Career',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=60',
    status: 'past'
  },
  {
    id: 6,
    date: '2024년 10월',
    title: '글쓰기 모임',
    description: '나를 표현하는 글쓰기로 내면을 탐험하는 소모임. 글로 자신을 마주하고 서로의 이야기를 나눴어요.',
    tag: 'Writing',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=60',
    status: 'past'
  },
  {
    id: 7,
    date: '2024년 9월',
    title: '마음챙김 명상 클래스',
    description: '바쁜 일상 속에서 잠시 멈추고 나를 돌아보는 명상 시간. 마음의 평화를 찾는 방법을 배웠습니다.',
    tag: 'Wellness',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=60',
    status: 'past'
  },
  {
    id: 8,
    date: '2024년 8월',
    title: '여름 네트워킹 파티',
    description: '꽃보나보 커뮤니티 멤버들이 함께 모여 즐거운 시간을 보낸 여름밤의 파티였어요.',
    tag: 'Community',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=60',
    status: 'past'
  },
];

export function AllPrograms() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fce4d6' }}>
      {/* 모바일/태블릿 헤더 */}
      <div className="lg:hidden">
        {/* 이미지 - 전체 너비 */}
        <div className="overflow-hidden" style={{ height: '240px' }}>
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60"
            alt="커뮤니티"
            className="w-full h-full object-cover"
          />
        </div>
        {/* 텍스트 - 여백 있음 */}
        <div style={{ padding: '24px 24px 0 24px' }}>
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-[#8080e0] transition-colors"
            style={{ marginBottom: '16px' }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span style={{ fontSize: '13px' }}>홈으로 돌아가기</span>
          </Link>
          <h1 className="text-gray-900 font-bold" style={{ fontSize: '28px', lineHeight: '1.3', marginBottom: '12px' }}>
            함께해 온 순간들
          </h1>
          <p className="text-gray-600" style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
            꽃보나보가 지금까지 진행해 온 모든 프로그램들입니다.
          </p>
        </div>
      </div>

      {/* 데스크톱 헤더 */}
      <div className="hidden lg:grid lg:grid-cols-2">
        <div 
          className="flex flex-col justify-center"
          style={{ backgroundColor: '#f8c8b8' }}
        >
          <div style={{ padding: '120px 60px 80px 80px' }}>
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-[#8080e0] transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">홈으로 돌아가기</span>
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-bold mb-6">
              함께해 온 순간들
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg">
              꽃보나보가 지금까지 진행해 온 모든 프로그램들입니다. 앞으로도 다양한 방식으로 함께할게요.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60"
            alt="커뮤니티"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* All Programs 바 */}
      <div className="py-3 lg:py-4" style={{ backgroundColor: '#2d2d2d', paddingLeft: '24px', paddingRight: '24px' }}>
        <p className="text-white/80 text-xs lg:text-sm uppercase tracking-[0.2em]">All Programs & Events</p>
      </div>

      {/* 프로그램 목록 */}
      {/* 모바일/태블릿 버전 */}
      <div className="lg:hidden" style={{ padding: '40px 32px' }}>
        <div style={{ maxWidth: '380px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {allPrograms.map((program) => (
            <div 
              key={program.id}
              className="bg-white overflow-hidden shadow-lg"
              style={{ borderRadius: '16px' }}
            >
              {/* 이미지 */}
              <div className="relative w-full overflow-hidden" style={{ height: '240px' }}>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                {/* 상태 배지 */}
                {program.status === 'ongoing' && (
                  <span 
                    className="absolute text-white font-semibold uppercase"
                    style={{
                      top: '12px',
                      left: '12px',
                      fontSize: '10px',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #8080e0 0%, #a090f0 100%)'
                    }}
                  >
                    모집 중
                  </span>
                )}
                {program.status === 'upcoming' && (
                  <span 
                    className="absolute text-white font-semibold uppercase"
                    style={{
                      top: '12px',
                      left: '12px',
                      fontSize: '10px',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)'
                    }}
                  >
                    예정
                  </span>
                )}
              </div>

              {/* 콘텐츠 */}
              <div style={{ padding: '24px' }}>
                <h3 className="font-bold text-gray-900" style={{ fontSize: '18px', marginBottom: '10px' }}>
                  {program.title}
                </h3>
                <p className="text-gray-500" style={{ fontSize: '12px', marginBottom: '14px' }}>
                  {program.date} | {program.tag}
                </p>
                <p className="text-gray-600 leading-relaxed" style={{ fontSize: '14px', marginBottom: '24px' }}>
                  {program.description}
                </p>
                <Link 
                  to={`/programs/${program.id}`}
                  className="block w-full font-semibold text-white text-center"
                  style={{
                    padding: '16px',
                    fontSize: '14px',
                    borderRadius: '10px',
                    backgroundColor: '#8080e0'
                  }}
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 데스크톱 버전 - 기존 스타일 유지 */}
      <div className="hidden lg:block" style={{ padding: '60px 60px 60px 60px' }}>
        <div style={{ maxWidth: '850px', marginLeft: '80px', marginRight: 'auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {allPrograms.map((program) => (
            <div 
              key={program.id}
              className="flex flex-row bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              style={{ minHeight: '420px' }}
            >
              {/* 이미지 */}
              <div className="relative w-80 flex-shrink-0 overflow-hidden" style={{ minHeight: '420px' }}>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                />
              </div>

              {/* 콘텐츠 */}
              <div className="flex-1 flex flex-col justify-center text-center" style={{ padding: '48px' }}>
                {/* 상태 배지 */}
                {program.status === 'ongoing' && (
                  <span 
                    className="inline-block self-center text-xs font-semibold uppercase tracking-widest"
                    style={{ 
                      marginBottom: '24px',
                      padding: '8px 20px',
                      background: 'linear-gradient(135deg, #8080e0 0%, #a090f0 100%)',
                      color: 'white',
                      borderRadius: '20px',
                      boxShadow: '0 2px 8px rgba(128, 128, 224, 0.3)'
                    }}
                  >
                    모집 중
                  </span>
                )}
                {program.status === 'upcoming' && (
                  <span 
                    className="inline-block self-center text-xs font-semibold uppercase tracking-widest"
                    style={{ 
                      marginBottom: '24px',
                      padding: '8px 20px',
                      background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)',
                      color: 'white',
                      borderRadius: '20px',
                      boxShadow: '0 2px 8px rgba(255, 107, 107, 0.3)'
                    }}
                  >
                    예정
                  </span>
                )}
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ marginBottom: '16px' }}>
                  {program.title}
                </h3>
                <p className="text-sm text-gray-500" style={{ marginBottom: '20px' }}>
                  {program.date} | {program.tag}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ marginBottom: '32px' }}>
                  {program.description}
                </p>
                <Link 
                  to={`/programs/${program.id}`}
                  className="self-center font-semibold hover:opacity-90 transition-all text-center"
                  style={{
                    padding: '14px 40px',
                    backgroundColor: '#8080e0',
                    color: 'white',
                    fontSize: '15px',
                    borderRadius: '4px',
                    boxShadow: '0 4px 12px rgba(128, 128, 224, 0.25)'
                  }}
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 하단 - Newsletter 스타일 */}
      <NewsletterSection />
    </div>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('뉴스레터 구독이 완료되었습니다!');
    setEmail('');
  };

  return (
    <section
      className="bg-[#1a1a1a] text-white"
      style={{
        paddingTop: '25px',
        paddingBottom: '25px',
        fontWeight: 600
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h2
          className="text-2xl md:text-3xl"
          style={{ marginBottom: '40px' }}
        >
          꽃보나보의 소식을 받아보세요
        </h2>
        
        <form 
          onSubmit={handleSubmit} 
          style={{ 
            marginBottom: '50px',
            display: 'flex',
            overflow: 'hidden',
            border: '1px solid #3a3a3a',
            backgroundColor: '#2a2a2a'
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일 주소를 입력해주세요"
            required
            style={{
              flex: 1,
              padding: '18px 28px',
              backgroundColor: 'transparent',
              color: 'white',
              border: 'none',
              outline: 'none',
              fontSize: '16px'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '18px 32px',
              backgroundColor: '#8080e0',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '15px',
              fontWeight: 600,
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#7070d0'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8080e0'}
          >
            구독하기
            <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">
            홈으로 돌아가기
          </Link>
          
          <div className="flex items-center gap-5">
            <a
              href="mailto:contact@kkotbonabo.com"
              className="text-gray-400 hover:text-[#8080e0] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#8080e0] transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#8080e0] transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#8080e0] transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/kkotbonabo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#8080e0] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

