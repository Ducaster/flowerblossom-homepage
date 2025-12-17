import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const textTone = isScrolled ? 'text-black' : 'text-white';
  const menuVisibility = isScrolled
    ? '-translate-y-6 opacity-0 pointer-events-none'
    : 'translate-y-0 opacity-100';
  const textShadowStyle = isScrolled 
    ? {} 
    : { textShadow: '1px 1px 2px rgba(120,120,120,0.25), -1px -1px 2px rgba(120,120,120,0.25), 1px -1px 2px rgba(120,120,120,0.25), -1px 1px 2px rgba(120,120,120,0.25)' };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent"
    >
      <div 
        className="w-full"
        style={{ paddingLeft: '5%', paddingRight: '8%' }}
      >
        <div
          className={`flex justify-between items-center transition-all duration-500 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}
        >
          <button
            onClick={() => scrollToSection('hero')}
            className="transition-all duration-300"
          >
            <img 
              src="/logo.png" 
              alt="꽃보나보" 
              className={`transition-all duration-300 ${isScrolled ? 'h-7' : 'h-9'}`}
            />
          </button>

          <nav
            className={`hidden md:flex items-center gap-8 transition-all duration-500 ${menuVisibility}`}
          >
            <button
              onClick={() => scrollToSection('mission')}
              className={`${textTone} hover:text-[#ff6b6b] transition-colors uppercase text-[15px] tracking-wide`}
              style={textShadowStyle}
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className={`${textTone} hover:text-[#ff6b6b] transition-colors uppercase text-[15px] tracking-wide`}
              style={textShadowStyle}
            >
              Programs
            </button>
            <Link
              to="/programs"
              className={`${textTone} hover:text-[#ff6b6b] transition-colors uppercase text-[15px] tracking-wide`}
              style={textShadowStyle}
            >
              History
            </Link>
            <button
              onClick={() => scrollToSection('getinvolved')}
              className={`${textTone} hover:text-[#ff6b6b] transition-colors uppercase text-[15px] tracking-wide`}
              style={textShadowStyle}
            >
              Get Involved
            </button>
          </nav>

          <button
            className={`md:hidden transition-all duration-500 ${menuVisibility} ${textTone}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && !isScrolled && (
          <div className="md:hidden pb-6 space-y-4">
            <button
              onClick={() => scrollToSection('mission')}
              className="block w-full text-left py-3 text-white hover:text-[#ff6b6b] transition-colors uppercase text-[15px] tracking-wide"
              style={textShadowStyle}
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="block w-full text-left py-3 text-white hover:text-[#ff6b6b] transition-colors uppercase text-[15px] tracking-wide"
              style={textShadowStyle}
            >
              Programs
            </button>
            <Link
              to="/programs"
              className="block w-full text-left py-3 text-white hover:text-[#ff6b6b] transition-colors uppercase text-[15px] tracking-wide"
              style={textShadowStyle}
            >
              History
            </Link>
            <button
              onClick={() => scrollToSection('getinvolved')}
              className="block w-full text-left py-3 text-white hover:text-[#ff6b6b] transition-colors uppercase text-[15px] tracking-wide"
              style={textShadowStyle}
            >
              Get Involved
            </button>
          </div>
        )}
      </div>
    </header>
  );
}