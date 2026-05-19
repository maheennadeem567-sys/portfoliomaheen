import { motion } from 'motion/react';
import { Github, Figma, Terminal, Code2, Server, Database } from 'lucide-react';
import { useEffect, useState } from 'react';

const codeSnippet = `const developer = {
  name: "Maheen Nadeem",
  skills: [
    "React", "TypeScript",
    "Tailwind CSS", "Node.js"
  ],
  hardWorker: true,
  problemSolver: true,
  collaborator: true
};

developer.build();`;

export default function RightHero() {
  const [typedCode, setTypedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setTypedCode(prev => prev + codeSnippet[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 40); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      // Loop delay
      const timeout = setTimeout(() => {
        setTypedCode("");
        setCurrentIndex(0);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="hidden lg:flex justify-center items-center relative h-full w-full">
      {/* Soft glowing gradient circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-[80px]"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]"></div>

      {/* Minimal grid pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff11 1px, transparent 1px), linear-gradient(to bottom, #ffffff11 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
        }}
      ></div>

      {/* Floating Tech Stack Icons */}
      <motion.div 
        className="absolute top-[10%] left-[20%] z-20 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] text-blue-400 group cursor-pointer hover:bg-white/10 transition-colors"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        title="React"
      >
        <svg viewBox="0 0 128 128" className="w-6 h-6 group-hover:scale-110 transition-transform">
            <path fill="currentColor" d="M64 28.52c-29.35 0-53.51 11.23-53.51 29.56 0 13.9 14.52 24.16 34.02 28.16l2.36.48-1.57 1.83c-5.26 6.13-5.22 17.58-.2 20.31 4.7 2.57 15-4.22 23.33-14.71l1.52-1.92 2.37.52c3.78.82 7.7.17 11.85-.29l2.45-.26 1.48 1.95c8.06 10.66 18.25 17.65 22.99 15.17 5-.2 5-11.45.18-17.58l-1.55-1.93 2.14-.49c18.57-4.24 33.74-13.84 33.74-27.14 0-18.33-24.16-29.56-53.51-29.56zm43.34 29.56c0 9.87-11.3 17.75-26.68 21.61-4.7 1.18-9.75 2.13-14.31 2.34-3.13.14-6.44.13-9.52.09l-3.32-.12.59-3.23c2.72-14.67-.3-29.07-8-36.96l-.99-1.02.82-.41c19-9.52 42.06-7.79 56.45 2.55 3.16 2.07 4.96 4.67 4.96 7.64zm-86.68 0c0-2.85 1.76-5.4 4.88-7.46 14.28-10.45 37.38-12.33 56.55-2.87l.88.43-.99 1c-7.77 7.93-10.87 21-.86 35.83l.63 2.76-3.26.23c-3 .14-6.23.27-9.28.14-4.59-.2-9.67-1-14.34-2.18-15.54-3.87-26.96-11.83-26.96-21.84zM63.78 45.4c12.22 0 22.13 9.9 22.13 22.13 0 12.22-9.91 22.13-22.13 22.13-12.23 0-22.13-9.91-22.13-22.13 0-12.23 9.91-22.13 22.13-22.13z"/>
        </svg>
      </motion.div>

      <motion.div 
        className="absolute top-[25%] right-[5%] z-20 w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] text-[#F05032] group cursor-pointer hover:bg-white/10 transition-colors"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        title="HTML/JS"
      >
        <span className="font-bold text-lg leading-none tracking-tighter group-hover:scale-110 transition-transform">JS</span>
      </motion.div>

      <motion.div 
        className="absolute bottom-[20%] left-[5%] z-20 w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] text-green-400 group cursor-pointer hover:bg-white/10 transition-colors"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
        title="Node.js"
      >
        <Server size={26} className="group-hover:scale-110 transition-transform" />
      </motion.div>

      <motion.div 
        className="absolute bottom-[35%] right-[5%] z-20 w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] text-white group cursor-pointer hover:bg-black/80 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
        title="GitHub"
      >
        <Github size={24} className="group-hover:scale-110 transition-transform" />
      </motion.div>

      <motion.div 
        className="absolute top-[60%] right-[20%] z-20 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] text-pink-400 group cursor-pointer hover:bg-white/10 transition-colors"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 2 }}
        title="Figma"
      >
        <Figma size={20} className="group-hover:scale-110 transition-transform" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[10%] left-[30%] z-20 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] text-orange-400 group cursor-pointer hover:bg-white/10 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.8 }}
        title="HTML/CSS"
      >
        <Code2 size={20} className="group-hover:scale-110 transition-transform" />
      </motion.div>

      {/* Main Fake Code Editor Window */}
      <motion.div 
        className="relative z-10 w-[420px] max-w-full rounded-2xl bg-[#0d0d12]/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Editor Header */}
        <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="text-xs text-gray-400 font-mono flex items-center gap-2">
              <Terminal size={12} /> developer.ts
            </div>
          </div>
        </div>
        
        {/* Editor Body */}
        <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
          <pre className="text-gray-300">
            <code dangerouslySetInnerHTML={{ 
              __html: typedCode
                .replace(/const /g, '<span class="text-pink-400">const </span>')
                .replace(/developer/g, '<span class="text-blue-400">developer</span>')
                .replace(/name:/g, '<span class="text-purple-400">name:</span>')
                .replace(/skills:/g, '<span class="text-purple-400">skills:</span>')
                .replace(/hardWorker:/g, '<span class="text-purple-400">hardWorker:</span>')
                .replace(/problemSolver:/g, '<span class="text-purple-400">problemSolver:</span>')
                .replace(/collaborator:/g, '<span class="text-purple-400">collaborator:</span>')
                .replace(/"Maheen Nadeem"/g, '<span class="text-green-400">"Maheen Nadeem"</span>')
                .replace(/"React"| "TypeScript"| "Tailwind CSS"| "Node.js"/g, match => `<span class="text-green-400">${match}</span>`)
                .replace(/true/g, '<span class="text-orange-400">true</span>')
                .replace(/developer\.build\(\)/g, '<span class="text-blue-400">developer</span>.<span class="text-yellow-200">build</span>()')
            }} />
            <motion.span 
              className="inline-block w-[8px] h-[15px] bg-blue-400 ml-1 translate-y-[2px]"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </pre>
        </div>
      </motion.div>
    </div>
  );
}
