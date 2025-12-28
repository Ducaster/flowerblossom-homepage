export function Mission() {
  return (
    <section id="mission" className="py-0">
      <div className="grid md:grid-cols-2">
        <div className="relative h-[500px] md:h-[700px]">
          <img
            src="/introduce.jpg"
            alt="청년들"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="flex flex-col justify-center"
          style={{
            backgroundColor: '#faf8f5',
            padding: '80px 60px 80px 80px'
          }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-bold" style={{ marginBottom: '40px' }}>
            Our mission
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            꽃보나보는 "꽃을 보듯 나를 보다" 라는 줄임말로 "꽃같은 20대"라는 말에서 착안했습니다. <br /><br />
            20대를 살아가는 모두가 스스로가 한 송이의 꽃임을 깨닫고 활짝 피었으면 하는 마음으로 20대 청년들의 이야기를 써내려가고 있습니다{' '}
            <button
              onClick={() => {
                const element = document.getElementById('programs');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="underline underline-offset-4 hover:text-black transition-colors font-medium"
            >
              Learn more
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
