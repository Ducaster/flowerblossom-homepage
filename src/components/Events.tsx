const events = [
  {
    title: '숨 고르는 모닝 루틴 클래스',
    date: '2025. 1. 12 (토) 10:00',
    type: '워크숍 · 오프라인',
    location: '서울 성동구',
    description: '코치와 함께 몸을 깨우고 마음을 정돈하는 90분. 가볍게 따라올 수 있는 루틴을 챙겨가세요.',
  },
  {
    title: '마음근력 북토크',
    date: '2025. 2. 02 (일) 19:30',
    type: '토크 · 온라인',
    location: 'Zoom 라이브',
    description: '요즘 꽂힌 한 권의 책을 함께 읽고, 마음의 힘을 키우는 방법을 나눕니다.',
  },
  {
    title: '매거진 인터뷰 공개 녹음',
    date: '2025. 3. 08 (토) 14:00',
    type: '인터뷰 · 오프라인',
    location: '서울 마포구',
    description: '각자의 이야기가 힘이 되는 순간을 담습니다. 편안한 분위기에서 당신의 목소리를 들려주세요.',
  },
];

export function Events() {
  return (
    <section id="events" className="py-24 md:py-32 bg-[#f7f6fb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-16">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#7c5cdb]">Events</p>
            <h2 className="text-4xl md:text-5xl leading-tight text-gray-900">이번 달, 가볍게 들렀다 가세요</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              부담 없이 참여할 수 있는 작은 모임부터 한 달을 정돈하는 워크숍까지, 꽃보나보의 일정을 모아두었어요.
              마음이 끌리는 순간에 살짝 손을 들어주세요.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="px-4 py-2 rounded-full bg-white shadow-sm text-sm text-gray-700 border border-gray-100">
              오프라인
            </span>
            <span className="px-4 py-2 rounded-full bg-white shadow-sm text-sm text-gray-700 border border-gray-100">
              온라인
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col gap-4 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="px-3 py-1 rounded-full bg-[#f2edff] text-[#7c5cdb] font-semibold">This Month</span>
                <span>{event.type}</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900 leading-snug">{event.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{event.description}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-600">
                <div className="space-y-1">
                  <div className="font-semibold text-gray-800">{event.date}</div>
                  <div className="text-gray-500">{event.location}</div>
                </div>
                <button className="text-[#ff6b6b] font-semibold hover:underline">참여하기</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

