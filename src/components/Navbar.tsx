import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#projects' },
  { name: 'Skills and Tools', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      for (const item of [...navItems].reverse()) {
        const element = document.getElementById(item.href.substring(1));
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(item.name);
            break;
          }
        } else if (item.href === '#home' && window.scrollY < 300) {
            setActiveSection('Home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    setActiveSection(name);
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
       const element = document.getElementById(href.substring(1));
       if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
       }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 glass border-x-0 border-t-0 border-b border-black/5 dark:border-white/10 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="md:w-1/4">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home', 'Home')} className="text-2xl font-display font-bold text-[#4f8cff] transition-colors cursor-pointer tracking-tight">
              M<span className="text-blue-500">.</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center space-x-6 lg:space-x-8 w-1/2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.name)}
                className={`relative text-sm font-medium transition-all duration-300 transform hover:-translate-y-[2px] hover:scale-105 group text-[#4f8cff] hover:text-[#5da9ff] hover:drop-shadow-[0_0_8px_rgba(79,140,255,0.6)] hover:brightness-110 ${
                  activeSection === item.name
                    ? 'drop-shadow-[0_0_8px_rgba(79,140,255,0.5)]'
                    : ''
                }`}
              >
                {item.name}
                {/* Active indicator / underline */}
                <span className={`absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#4f8cff] shadow-[0_0_8px_rgba(79,140,255,0.8)] rounded-full transition-all duration-300 ${
                   activeSection === item.name ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-75'
                }`} />
              </a>
            ))}
          </div>

          {/* Right side (Theme toggle / Mobile menu toggle) */}
          <div className="flex items-center justify-end md:w-1/4 gap-4">
            {/* Theme Toggle */}
            <label className="switch" aria-label="Toggle Theme">
              <input 
                type="checkbox" 
                className="input" 
                checked={theme === 'dark'} 
                onChange={toggleTheme} 
              />
              <span className="slider"></span>
              <span className="sun">
                <Sun size={24} className="text-[#ffd43b]" fill="#ffd43b" />
              </span>
              <span className="moon">
                <Moon size={24} className="text-[#73c0fc]" />
              </span>
            </label>

          </div>
        </div>
      </motion.nav>
    </>
  );
}
