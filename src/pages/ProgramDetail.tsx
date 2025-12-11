import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Instagram, Youtube, Facebook, Twitter, Mail, Send, MapPin, Calendar } from 'lucide-react';

const allPrograms = [
  {
    id: 1,
    date: '2025년 1월 15일',
    time: '저녁 7:00 PM - 9:00 PM',
    title: '청년 토크콘서트',
    shortDesc: '20대의 고민과 꿈을 함께 나누며 마음을 단단하게 만드는 저녁.',
    description: `20대의 고민과 꿈을 함께 나누며 마음을 단단하게 만드는 저녁입니다.

이번 토크콘서트에서는:
• 다양한 분야에서 활동하는 청년들의 이야기를 들을 수 있습니다
• 서로의 고민을 나누고 공감하는 시간을 가집니다
• 새로운 인연을 만들고 네트워킹할 수 있습니다
• 전문 퍼실리테이터가 진행하는 소그룹 대화에 참여합니다

편하게 오셔서 이야기 나눠요. 간단한 다과가 준비되어 있습니다.`,
    tag: 'Community',
    location: '서울 마포구 연남동 꽃보나보 스튜디오',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop&q=80',
    status: 'upcoming',
    capacity: '30명',
    fee: '무료'
  },
  {
    id: 2,
    date: '상시 모집',
    time: '개별 조율',
    title: '1:1 마인드 코칭',
    shortDesc: '나를 알아보고 목표를 세우는 개인 맞춤형 코칭 프로그램.',
    description: `전문 코치와 함께 나만의 성장 로드맵을 그려보세요.

코칭 프로그램 내용:
• 자기 이해: 나의 강점과 가치관 탐색
• 목표 설정: 구체적이고 실현 가능한 목표 수립
• 실행 계획: 단계별 액션 플랜 작성
• 피드백: 주간 체크인과 지속적인 지원

총 4회 세션으로 진행되며, 각 세션은 60분입니다.
온라인(Zoom) 또는 오프라인 중 선택 가능합니다.`,
    tag: 'Coaching',
    location: '온라인(Zoom) 또는 오프라인',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80',
    status: 'ongoing',
    capacity: '개별 진행',
    fee: '회당 50,000원'
  },
  {
    id: 3,
    date: '2025년 2월 (일정 조율 중)',
    time: '약 2시간',
    title: '매거진 인터뷰',
    shortDesc: '당신의 이야기를 기록하고 전할 수 있도록 따뜻하게 인터뷰합니다.',
    description: `누군가에게 힘이 되는 당신의 스토리를 나눠주세요.

매거진 인터뷰 과정:
• 사전 질문지를 통해 편하게 준비하실 수 있습니다
• 전문 인터뷰어와 1:1로 약 2시간 진행됩니다
• 인터뷰 내용은 꽃보나보 매거진에 게재됩니다
• 촬영이 포함되어 있습니다 (선택사항)

당신의 이야기가 누군가에게 큰 용기가 될 수 있습니다.`,
    tag: 'Story',
    location: '서울 마포구 연남동 꽃보나보 스튜디오',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&auto=format&fit=crop&q=80',
    status: 'upcoming',
    capacity: '월 2명',
    fee: '무료'
  },
  {
    id: 4,
    date: '2024년 12월 28일',
    time: '오후 2:00 PM - 5:00 PM',
    title: '연말 회고 워크숍',
    shortDesc: '한 해를 돌아보며 나만의 성장 스토리를 정리하는 시간.',
    description: `2024년을 마무리하고 새해를 준비하는 특별한 워크숍이었습니다.

워크숍 내용:
• 올 한 해 돌아보기: 감사했던 순간들
• 성장 포인트 발견하기
• 2025년 비전 세우기
• 참가자들과 나누는 소그룹 대화

많은 분들이 함께해 주셔서 따뜻한 시간이었습니다.`,
    tag: 'Workshop',
    location: '서울 마포구 연남동 꽃보나보 스튜디오',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&auto=format&fit=crop&q=80',
    status: 'past',
    capacity: '20명',
    fee: '10,000원'
  },
  {
    id: 5,
    date: '2024년 11월 16일',
    time: '오후 2:00 PM - 5:00 PM',
    title: '커리어 탐색 세션',
    shortDesc: '진짜 하고 싶은 일을 찾아가는 그룹 코칭 프로그램.',
    description: `함께 고민하고 방향을 찾아가는 여정이었습니다.

세션 내용:
• 나의 관심사와 강점 탐색
• 다양한 커리어 경로 알아보기
• 선배들의 경험담 듣기
• 소그룹 멘토링

참가자들이 서로의 고민을 나누며 새로운 인사이트를 얻어갔습니다.`,
    tag: 'Career',
    location: '서울 마포구 연남동 꽃보나보 스튜디오',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&auto=format&fit=crop&q=80',
    status: 'past',
    capacity: '15명',
    fee: '15,000원'
  },
  {
    id: 6,
    date: '2024년 10월 매주 토요일',
    time: '오전 10:00 AM - 12:00 PM',
    title: '글쓰기 모임',
    shortDesc: '나를 표현하는 글쓰기로 내면을 탐험하는 소모임.',
    description: `글로 자신을 마주하고 서로의 이야기를 나눴습니다.

모임 내용:
• 매주 다른 주제로 글쓰기
• 서로의 글 나누고 피드백하기
• 글쓰기를 통한 자기 성찰
• 4주 완성 프로그램

글쓰기가 처음이어도 괜찮아요. 함께 쓰고 나누는 것이 중요합니다.`,
    tag: 'Writing',
    location: '서울 마포구 연남동 꽃보나보 스튜디오',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&auto=format&fit=crop&q=80',
    status: 'past',
    capacity: '8명',
    fee: '40,000원 (4주)'
  },
  {
    id: 7,
    date: '2024년 9월 21일',
    time: '오후 3:00 PM - 4:30 PM',
    title: '마음챙김 명상 클래스',
    shortDesc: '바쁜 일상 속에서 잠시 멈추고 나를 돌아보는 명상 시간.',
    description: `마음의 평화를 찾는 방법을 배웠습니다.

클래스 내용:
• 호흡 명상 기초
• 바디스캔 명상
• 일상에서 실천하는 마음챙김
• 가이드 명상 실습

처음 명상을 접하시는 분들도 편하게 참여하실 수 있습니다.`,
    tag: 'Wellness',
    location: '서울 마포구 연남동 꽃보나보 스튜디오',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=80',
    status: 'past',
    capacity: '12명',
    fee: '10,000원'
  },
  {
    id: 8,
    date: '2024년 8월 24일',
    time: '저녁 6:00 PM - 9:00 PM',
    title: '여름 네트워킹 파티',
    shortDesc: '꽃보나보 커뮤니티 멤버들이 함께 모여 즐거운 시간을 보낸 여름밤의 파티.',
    description: `꽃보나보 커뮤니티 멤버들과 함께한 즐거운 여름밤이었습니다.

파티 내용:
• 아이스브레이킹 게임
• 자유로운 네트워킹 시간
• 간단한 음식과 음료
• 추억 사진 촬영

많은 분들이 새로운 인연을 만들어 가셨습니다.`,
    tag: 'Community',
    location: '서울 마포구 연남동 루프탑',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&auto=format&fit=crop&q=80',
    status: 'past',
    capacity: '40명',
    fee: '20,000원'
  },
];

export function ProgramDetail() {
  const { id } = useParams();
  const program = allPrograms.find(p => p.id === Number(id));

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#fce4d6' }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">프로그램을 찾을 수 없습니다</h1>
          <Link to="/programs" className="text-[#8080e0] underline">
            프로그램 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const getStatusButton = () => {
    switch (program.status) {
      case 'ongoing':
        return (
          <button 
            className="w-full text-white font-semibold"
            style={{ padding: '16px', backgroundColor: '#8080e0', marginBottom: '12px' }}
          >
            신청하기
          </button>
        );
      case 'upcoming':
        return (
          <button 
            className="w-full text-white font-semibold"
            style={{ padding: '16px', backgroundColor: '#8080e0', marginBottom: '12px' }}
          >
            사전 알림 신청
          </button>
        );
      case 'past':
        return (
          <button 
            className="w-full text-white font-semibold"
            style={{ padding: '16px', backgroundColor: '#999', marginBottom: '12px', cursor: 'not-allowed' }}
            disabled
          >
            종료된 프로그램입니다
          </button>
        );
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fce4d6' }}>
      {/* 로고 */}
      <div style={{ padding: '20px 24px' }}>
        <Link 
          to="/"
          className="text-2xl font-semibold text-gray-900 hover:text-[#8080e0] transition-colors"
        >
          꽃보나보
        </Link>
      </div>
      
      {/* 메인 콘텐츠 */}
      <div className="flex justify-center" style={{ paddingTop: '20px', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px' }}>
        <div className="bg-white shadow-lg w-full" style={{ padding: '40px', maxWidth: '700px' }}>
          {/* 뒤로가기 */}
          <Link 
            to="/programs"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#8080e0] transition-colors"
            style={{ marginBottom: '32px', fontSize: '14px' }}
          >
            <ArrowLeft className="w-4 h-4" />
            목록으로 돌아가기
          </Link>

          {/* 제목 */}
          <h1 className="font-bold text-gray-900" style={{ fontSize: '32px', marginBottom: '16px', lineHeight: '1.3' }}>
            {program.title}
          </h1>

          {/* 날짜 및 태그 */}
          <p className="text-gray-500" style={{ fontSize: '14px', marginBottom: '20px' }}>
            {program.date} | {program.tag}
          </p>

          {/* 짧은 설명 */}
          <p className="text-gray-700" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
            {program.shortDesc}
          </p>

          {/* 신청 버튼 */}
          {getStatusButton()}
          
          <Link 
            to="/programs"
            className="block text-center text-[#8080e0] hover:underline"
            style={{ fontSize: '14px', marginBottom: '32px' }}
          >
            다른 프로그램 보기
          </Link>

          {/* 이미지 */}
          <div style={{ marginBottom: '40px' }}>
            <img
              src={program.image}
              alt={program.title}
              className="w-full object-cover"
              style={{ height: '400px' }}
            />
          </div>

          {/* Time & Location */}
          <div style={{ marginBottom: '40px' }}>
            <h2 className="font-bold text-gray-900" style={{ fontSize: '20px', marginBottom: '16px' }}>
              일시 및 장소
            </h2>
            <div className="flex items-start gap-3" style={{ marginBottom: '12px' }}>
              <Calendar className="w-5 h-5 text-gray-400 flex-shrink-0" style={{ marginTop: '2px' }} />
              <div>
                <p className="text-gray-700" style={{ fontSize: '15px' }}>{program.date}</p>
                <p className="text-gray-500" style={{ fontSize: '14px' }}>{program.time}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" style={{ marginTop: '2px' }} />
              <p className="text-gray-700" style={{ fontSize: '15px' }}>{program.location}</p>
            </div>
          </div>

          {/* About the event */}
          <div style={{ marginBottom: '40px' }}>
            <h2 className="font-bold text-gray-900" style={{ fontSize: '20px', marginBottom: '16px' }}>
              프로그램 소개
            </h2>
            <div className="text-gray-700 whitespace-pre-line" style={{ fontSize: '15px', lineHeight: '1.8' }}>
              {program.description}
            </div>
          </div>

          {/* 추가 정보 */}
          <div style={{ marginBottom: '40px', padding: '20px', backgroundColor: '#f9f9f9' }}>
            <div className="flex justify-between" style={{ marginBottom: '12px' }}>
              <span className="text-gray-500" style={{ fontSize: '14px' }}>정원</span>
              <span className="text-gray-900 font-medium" style={{ fontSize: '14px' }}>{program.capacity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500" style={{ fontSize: '14px' }}>참가비</span>
              <span className="text-gray-900 font-medium" style={{ fontSize: '14px' }}>{program.fee}</span>
            </div>
          </div>

          {/* Share */}
          <div>
            <h2 className="font-bold text-gray-900" style={{ fontSize: '16px', marginBottom: '16px' }}>
              이 프로그램 공유하기
            </h2>
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-[#8080e0] transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="text-gray-500 hover:text-[#8080e0] transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="text-gray-500 hover:text-[#8080e0] transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 Newsletter */}
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
      style={{ paddingTop: '25px', paddingBottom: '25px', fontWeight: 600 }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h2 className="text-2xl md:text-3xl" style={{ marginBottom: '40px' }}>
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
              fontWeight: 600
            }}
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
            <a href="mailto:contact@kkotbonabo.com" className="text-gray-400 hover:text-[#8080e0] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#8080e0] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#8080e0] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#8080e0] transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/kkotbonabo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#8080e0] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

