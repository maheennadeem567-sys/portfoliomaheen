import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative w-full overflow-hidden mt-20 border-t backdrop-blur-md transition-colors duration-500" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col items-start text-left">
            <div className="text-3xl font-black mb-4 tracking-tighter text-blue-500">M.</div>
            <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-heading)' }}>Maheen Nadeem</h3>
            <p className="text-sm font-mono mb-4 opacity-80" style={{ color: 'var(--text-primary)' }}>Full Stack Developer & UI/UX Designer</p>
            <p className="text-sm opacity-70 leading-relaxed mb-6 max-w-sm" style={{ color: 'var(--text-primary)' }}>
              Building modern, scalable, and user-friendly digital experiences.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/maheen-nadeem-446340405?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30 border" style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}>
                <Linkedin size={18} />
              </a>
              <a href="mailto:maheennadeem567@gmail.com" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30 border" style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}>
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start lg:items-center text-left">
            <div className="w-full lg:w-max">
              <h3 className="text-lg font-bold mb-6 relative inline-block pb-2" style={{ color: 'var(--text-heading)' }}>
                Quick Links
                <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-blue-500 rounded-full"></span>
              </h3>
              <nav className="flex flex-col gap-3 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                {[
                  { name: 'Home', href: '#top' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Skills and Tools', href: '#skills' },
                  { name: 'Certifications', href: '#certifications' },
                  { name: 'About Me', href: '#about' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <a key={link.name} href={link.href} className="opacity-80 hover:opacity-100 hover:text-blue-500 transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group w-max">
                    <span className="w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-4"></span>
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-lg font-bold mb-6 relative inline-block pb-2" style={{ color: 'var(--text-heading)' }}>
              Contact Info
              <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-blue-500 rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-4 text-sm" style={{ color: 'var(--text-primary)' }}>
              <li className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500/10 text-blue-500">
                  <Mail size={16} />
                </div>
                maheennadeem567@gmail.com
              </li>
              <li className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-500/10 text-purple-500">
                  <Phone size={16} />
                </div>
                03365241320
              </li>
              <li className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500/10 text-blue-500">
                  <MapPin size={16} />
                </div>
                Pakistan
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--glass-border)' }}>
          <p className="text-sm opacity-60 text-center md:text-left" style={{ color: 'var(--text-primary)' }}>
            © {new Date().getFullYear()} Maheen Nadeem. All Rights Reserved.
          </p>
          <p className="text-sm font-medium text-center md:text-right" style={{ color: 'var(--text-primary)' }}>
            Designed & Built with <span className="text-red-500 animate-pulse text-lg inline-block align-middle mx-1">❤️</span> by Maheen Nadeem
          </p>
        </div>
      </div>
      
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:-translate-y-1 hover:scale-110 transition-all duration-300 z-20"
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
}
