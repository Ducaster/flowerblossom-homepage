import { useState, useEffect } from 'react';
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

  const menuVisibility = isScrolled
    ? '-translate-y-6 opacity-0 pointer-events-none'
    : 'translate-y-0 opacity-100';
  const navTextStyle = isScrolled 
    ? { color: '#333' } 
    : { color: '#5a4a4a', textShadow: '0 1px 2px rgba(255,255,255,0.5)' };

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
              className="hover:text-[#d4727a] transition-colors uppercase text-[15px] tracking-wide font-medium"
              style={navTextStyle}
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="hover:text-[#d4727a] transition-colors uppercase text-[15px] tracking-wide font-medium"
              style={navTextStyle}
            >
              Programs
            </button>
            <a
              href="https://flowerblossom-survey.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4727a] transition-colors uppercase text-[15px] tracking-wide font-medium"
              style={navTextStyle}
            >
              Contents
            </a>
            <button
              onClick={() => scrollToSection('getinvolved')}
              className="hover:text-[#d4727a] transition-colors uppercase text-[15px] tracking-wide font-medium"
              style={navTextStyle}
            >
              Get Involved
            </button>
          </nav>

          <button
            className={`md:hidden transition-all duration-500 ${menuVisibility}`}
            style={navTextStyle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && !isScrolled && (
          <div className="md:hidden pb-6 space-y-4">
            <button
              onClick={() => scrollToSection('mission')}
              className="block w-full text-left py-3 hover:text-[#d4727a] transition-colors uppercase text-[15px] tracking-wide font-medium"
              style={navTextStyle}
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="block w-full text-left py-3 hover:text-[#d4727a] transition-colors uppercase text-[15px] tracking-wide font-medium"
              style={navTextStyle}
            >
              Programs
            </button>
            <a
              href="https://flowerblossom-survey.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left py-3 hover:text-[#d4727a] transition-colors uppercase text-[15px] tracking-wide font-medium"
              style={navTextStyle}
            >
              Contents
            </a>
            <button
              onClick={() => scrollToSection('getinvolved')}
              className="block w-full text-left py-3 hover:text-[#d4727a] transition-colors uppercase text-[15px] tracking-wide font-medium"
              style={navTextStyle}
            >
              Get Involved
            </button>
          </div>
        )}
      </div>
    </header>
  );
}