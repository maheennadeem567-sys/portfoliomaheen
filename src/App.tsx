import { useState } from 'react';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RightHero from './components/RightHero';
import DarkModeToggle from './components/ui/dark-mode-toggle';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Github, Linkedin, Mouse, Mail } from 'lucide-react';

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#top' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills and Tools', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'About Me', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <main className="relative selection:bg-blue-500/30 min-h-screen transition-colors duration-500 overflow-x-hidden p-6 flex flex-col">
      
      {/* 100vh area for hero */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center min-h-[90vh]">
        {/* Header Navigation */}
        <header className="flex flex-col md:flex-row items-center justify-between w-full mb-6 relative z-50">
            <div className="text-2xl font-black tracking-tighter mb-4 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
                M.
            </div>

            <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base font-medium text-blue-500 nav-links-3d nav-custom">
                {navItems.map((item) => (
                    <a 
                        key={item.name}
                        href={item.href} 
                        className={`hover:text-blue-400 transition-colors inline-block nav-link ${activeTab === item.name ? 'active' : ''}`}
                        onClick={() => setActiveTab(item.name)}
                    >
                        {item.name}
                    </a>
                ))}
            </nav>

            <div className="mt-4 md:mt-0">
                <div className="flex items-center justify-center bg-gray-900 rounded-full p-1.5 px-2 border border-gray-800">
                  <DarkModeToggle checked={theme === 'dark'} onChange={toggleTheme} />
                </div>
            </div>
        </header>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center flex-1" id="top">
            <div className="flex flex-col items-start text-left relative z-10 w-full max-w-2xl mt-4">
                {/* Availability Badge */}
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
                    <div className="relative flex items-center justify-center">
                        <span className="absolute w-4 h-4 rounded-full animate-ping bg-blue-400 opacity-75"></span>
                        <span className="relative w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.8)]"></span>
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>AVAILABLE FOR FREELANCE</span>
                </div>

                {/* Name */}
                <h1 className="text-[52px] md:text-[80px] leading-[1.1] font-black mb-[10px] tracking-tight animated-name">
                    Maheen Nadeem
                </h1>

                {/* Title */}
                <h2 className="text-[16px] md:text-[20px] font-medium leading-[1.4] mb-[10px]" style={{ color: 'var(--text-primary)' }}>
                    Full Stack Developer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">UI/UX</span> Designer
                </h2>

                {/* Quote Description */}
                <p className="text-[18px] md:text-[20px] font-bold mb-[12px]" style={{ color: 'var(--text-primary)' }}>
                    "Building scalable apps and <span className="text-blue-500">designing elegant</span> experiences."
                </p>

                {/* Small Description */}
                <p className="text-[16px] md:text-[17px] mb-[20px] font-mono opacity-80" style={{ color: 'var(--text-primary)' }}>
                    Modern web technologies, polished UI/UX, and a pixel-perfect approach when the code compiles.
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 mb-[20px] w-full buttons-3d-group">
                    <a href="#projects" className="btn-hero-custom btn-3d text-[14px] md:text-[15px] !m-0 !px-8">
                        View My Work
                    </a>
                    <a href="#contact" className="btn-hero-custom btn-3d text-[14px] md:text-[15px] !m-0 !px-8 !bg-transparent border-2 border-solid !text-[var(--text-primary)]" style={{ borderColor: '#ec4899' }}>
                        Hire Me
                    </a>
                </div>

                {/* Socials under buttons like in reference */}
                <div className="flex items-center gap-4">
                    <a href="https://www.linkedin.com/in/maheen-nadeem-446340405?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="btn-social-3d !p-0 w-[50px] h-[50px] !rounded-full flex items-center justify-center">
                      <Linkedin size={22} />
                    </a>

                    <a href="mailto:maheennadeem567@gmail.com" className="btn-social-3d !p-0 w-[50px] h-[50px] !rounded-full flex items-center justify-center">
                      <Mail size={22} />
                    </a>
                </div>
            </div>

            {/* Right side graphic placeholder */}
            <RightHero />
        </div>

        {/* Scroll indicator below hero */}
        <div className="w-full flex justify-center pb-12 mt-auto">
            <div className="scroll-down-custom flex flex-col items-center gap-1 cursor-pointer nav-link" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
                <Mouse size={24} className="animate-bounce" />
                <span className="!mt-0 !text-[10px] font-mono font-bold tracking-[0.2em] relative z-10">SCROLL DOWN</span>
            </div>
        </div>
      </div>

      {/* Existing Content */}
      <div className="mt-20 w-full max-w-6xl mx-auto flex flex-col gap-24 relative z-10 flex-shrink-0">
        <Projects />
        <Skills />
        <Certifications />

        <About />
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

