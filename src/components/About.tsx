import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React from 'react';
import { LiquidButton } from './ui/liquid-glass-button';
import TiltCard from './ui/TiltCard';

export default function About() {
  return (
    <section id="about" className="relative z-10 w-full max-w-6xl mx-auto px-6 py-10 min-h-screen flex items-center">
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row gap-8" style={{ perspective: "1000px" }}>
          {/* Main content */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
              <span className="text-blue-500 font-mono tracking-[0.3em] uppercase text-sm">
                WHO I AM
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6" style={{ color: "var(--text-heading)" }}>
              About Me
            </h2>
            <p className="text-lg leading-relaxed opacity-80 mb-4" style={{ color: "var(--text-primary)" }}>
              I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Maheen Nadeem</span>, a Computer Science Student.
            </p>
            <p className="text-lg leading-relaxed opacity-80 mb-6" style={{ color: "var(--text-primary)" }}>
              When I'm not coding, you'll find me capturing moody landscapes through my lens.
            </p>
            
            {/* EDUCATION */}
            <div className="mt-6">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] mb-6 opacity-60 text-blue-500">// EDUCATION</h3>
              <div className="relative pl-6 border-l-2 border-blue-500 space-y-6">
                {[
                  { title: "BSCS Bachelor of Computer Science", sub: "University of Punjab, Lahore", type: "Graduation" },
                  { title: "ICS Computer Science", sub: "BISE Rawalpindi", type: "INTERMEDIATE" },
                  { title: "Computer Science", sub: "Punjab Board, Rawalpindi", type: "MATRICULATION" }
                ].map((edu, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[35px] top-0 w-5 h-5 rounded-full border-4 border-blue-500 bg-white dark:bg-[#1f1f2b]"></div>
                    <span className="text-[10px] uppercase font-bold text-blue-500 tracking-wider">{edu.type}</span>
                    <h4 className="font-bold text-md text-[var(--text-primary)] mt-0.5">{edu.title}</h4>
                    <p className="text-xs opacity-70 text-[var(--text-primary)]">{edu.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Info & Interests */}
          <div className="flex-1 space-y-6 flex flex-col justify-center">
            <TiltCard 
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/30 to-pink-500/30 hover:from-blue-500 hover:to-pink-500 shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]"
            >
              <div className="p-6 h-full w-full bg-[#FAFAFA] dark:bg-[#1f1f2b] rounded-2xl transition-colors duration-500" style={{ transformStyle: "preserve-3d" }}>
                <div style={{ transform: "translateZ(30px)" }}>
                  <h3 className="text-xs font-mono uppercase tracking-[0.2em] mb-4 opacity-80 text-black dark:text-white">QUICK INFO</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Name", value: "Maheen Nadeem" },
                      { label: "Location", value: "Rawalpindi, PK" },
                      { label: "Degree", value: "BSCS" },
                      { label: "Focus", value: "Full Stack + Mobile" },
                      { label: "Status", value: "• Open to Work", color: "text-blue-500 font-bold" }
                    ].map((info) => (
                      <div key={info.label} className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-1">
                        <span className="text-sm opacity-80 text-black dark:text-white">{info.label}</span>
                        <span className={`text-sm ${info.color || "text-black dark:text-white font-medium"}`}>{info.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>

            <TiltCard 
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/30 to-pink-500/30 hover:from-blue-500 hover:to-pink-500 shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]"
            >
              <div className="p-6 h-full w-full bg-[#FAFAFA] dark:bg-[#1f1f2b] rounded-2xl transition-colors duration-500" style={{ transformStyle: "preserve-3d" }}>
                <div style={{ transform: "translateZ(30px)" }}>
                  <h3 className="text-xs font-mono uppercase tracking-[0.2em] mb-4 opacity-80 text-black dark:text-white">// INTERESTS</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Mobile Apps", "Web Dev", "UI/UX", "Open Source"].map((interest) => (
                      <span key={interest} className="px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-500/20 text-black dark:text-white font-medium text-sm border border-black/10 dark:border-white/10 group-hover:border-blue-500/50 transition-colors duration-300">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>

            <TiltCard>
              <LiquidButton 
                  className="w-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
              </LiquidButton>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}

