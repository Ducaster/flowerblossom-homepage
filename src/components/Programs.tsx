import { Link } from 'react-router-dom';

const currentPrograms = [
  {
    id: 2,
    date: '상시 모집',
    title: '1:1 마인드 코칭',
    description: '나를 알아보고 목표를 세우는 개인 맞춤형 코칭 프로그램',
    tag: 'Coaching',
  },
  {
    id: 1,
    date: '2025년 1월',
    title: '청년 토크콘서트',
    description: '20대의 고민과 꿈을 함께 나누며 마음을 단단하게 만드는 저녁',
    tag: 'Community',
  },
  {
    id: 3,
    date: '2025년 2월',
    title: '매거진 인터뷰',
    description: '당신의 이야기를 기록하고 전할 수 있도록 따뜻하게 인터뷰합니다',
    tag: 'Story',
  },
];

export function Programs() {
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
            {currentPrograms.map((item) => (
              <Link
                key={item.id}
                to={`/programs/${item.id}`}
                className="block group cursor-pointer transition-all duration-300 border-b border-gray-300/50"
                style={{ padding: '16px 0' }}
              >
                <div className="flex items-center gap-4" style={{ marginBottom: '4px' }}>
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <span className="text-xs uppercase tracking-wider text-gray-400">{item.tag}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-[#8080e0] transition-colors" style={{ marginBottom: '4px' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>

          <Link
            to="/programs"
            className="mt-8 underline underline-offset-4 hover:text-[#8080e0] transition-colors font-medium text-gray-700"
          >
            모든 프로그램 보기 →
          </Link>
        </div>

        <div 
          className="relative h-[500px] md:h-[700px] order-1 md:order-2 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop&q=80')`,
            backgroundAttachment: 'fixed'
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
