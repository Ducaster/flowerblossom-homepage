export function Mission() {
  return (
    <section id="mission" className="py-0">
      <div className="grid md:grid-cols-2">
        <div className="relative h-[500px] md:h-[700px]">
          <img
            src="https://images.unsplash.com/photo-1758270705172-07b53627dfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIweW91dGglMjBncm91cCUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzY1MzAxMTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
            꽃보나보는 20대 청년들이 삶에서 필요한 기본적인 역량을 키우고, 
            서로와 함께 성장할 수 있는 안전한 공간을 제공합니다. 
            우리는 대화, 워크숍, 그리고 다양한 프로그램을 통해 
            청년들이 자신만의 이야기를 되찾을 수 있도록 돕습니다.{' '}
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
