import { useState } from 'react';
import { Send } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('아직 서비스 준비중입니다');
    setEmail('');
  };

  return (
    <section
      className="bg-[#1a1a1a] text-white"
      style={{
        paddingTop: '25px',
        paddingBottom: '25px',
        fontFamily: "'Arita-dotum', '아리따 돋움', sans-serif",
        fontWeight: 600
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h2
          className="text-2xl md:text-3xl"
          style={{ marginBottom: '40px' }}
        >
          꽃보나보의 소식을 받아보세요 <span className="text-gray-400">(준비중)</span>
        </h2>
        
        <form 
          onSubmit={handleSubmit} 
          style={{ 
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
      </div>
    </section>
  );
}
