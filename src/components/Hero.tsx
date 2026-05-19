import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="relative w-full max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-start md:items-start px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-12 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl text-center md:text-left z-10"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4 transition-colors duration-500 drop-shadow-sm uppercase" style={{ color: "var(--text-heading)" }}>
            Maheen Nadeem
          </h1>
          <h2 className="text-xl md:text-2xl font-sans font-medium max-w-2xl mx-auto md:mx-0 mb-6 leading-tight transition-colors" style={{ color: "var(--text-primary)" }}>
            Full Stack Developer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 neon-text">UI/UX Designer</span>
          </h2>
        </motion.div>

        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed font-normal transition-colors opacity-80"
          style={{ color: "var(--text-primary)" }}
        >
          Specializing in building high-performance applications with <span className="font-medium" style={{ color: "var(--btn-bg)" }}>modern technologies</span> and elegant design.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12">
          <button 
            id="view-projects-btn"
            className="btn-3d w-full sm:w-auto px-10 py-4 border-transparent rounded-2xl btn-custom shadow-lg shadow-blue-500/30 font-bold"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Projects
          </button>
          <button 
            id="contact-me-btn"
            className="btn-3d w-full sm:w-auto px-10 py-4 rounded-2xl glass font-bold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-6">
          {[
            { id: 'linkedin', icon: <Linkedin size={22} />, href: 'https://www.linkedin.com/in/maheen-nadeem-446340405?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
            { id: 'email', icon: <Mail size={22} />, href: 'mailto:maheennadeem567@gmail.com' },
          ].map((social) => (
            <a 
              key={social.id}
              id={`${social.id}-link`}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-social-3d"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        style={{ color: "var(--text-primary)" }}
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs font-mono tracking-widest text-[#60A5FA]">SCROLL DOWN</span>
        <ArrowDown size={20} className="text-[#60A5FA]" />
      </motion.div>
    </section>
  );
}
