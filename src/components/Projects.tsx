import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import DesignGalleryModal from './ui/DesignGalleryModal';

const projects = [
  {
    id: 1,
    title: "TeamProject",
    techStack: ["React.js", "Node.js", "Firebase"],
    type: "Development",
    description: "Collaborative project management tool with real-time updates.",
    icon: "👥",
    link: "https://dancing-dango-e9795e.netlify.app/"
  },
  {
    id: 2,
    title: "UI/UX Design",
    techStack: ["Figma", "Adobe XD"],
    type: "UI/UX Design",
    description: "Creative design project focused on user experience and visual interface.",
    icon: "🎨",
    link: "#"
  }
];

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="projects" className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-20 mt-[60px]">
      <DesignGalleryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="flex flex-col items-start text-left mb-16">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
          <span className="text-blue-500 font-mono tracking-[0.3em] uppercase text-sm">
            PORTFOLIO
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold" style={{ color: "var(--text-heading)" }}>
          Projects
        </h2>
      </div>
      
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-12 md:gap-16 pt-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="uiverse-parent"
          >
            <div className="uiverse-card">
              <div className="uiverse-logo">
                <span className="uiverse-circle uiverse-circle1"></span>
                <span className="uiverse-circle uiverse-circle2"></span>
                <span className="uiverse-circle uiverse-circle3"></span>
                <span className="uiverse-circle uiverse-circle4"></span>
                <span className="uiverse-circle uiverse-circle5">
                  <ExternalLink size={20} />
                </span>
              </div>
              
              <div className="uiverse-glass"></div>
              
              <div className="uiverse-content">
                <span className="uiverse-title">{project.title}</span>
                <span className="uiverse-text">{project.description}</span>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-mono rounded bg-white/10 border border-white/20 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="uiverse-bottom">
                <div className="uiverse-social-buttons-container">
                  <div className="uiverse-social-button">
                    <span className="text-xs font-bold">{project.icon}</span>
                  </div>
                  <div className="uiverse-social-button">
                    <span className="text-[10px] font-bold">UI</span>
                  </div>
                </div>
                
                <div 
                  className="uiverse-view-more"
                  onClick={() => {
                    if (project.id === 2) {
                      setIsModalOpen(true);
                    } else if (project.link !== "#") {
                      window.open(project.link, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  style={{ cursor: project.id === 2 || project.link !== "#" ? 'pointer' : 'default' }}
                >
                  <button className="uiverse-view-more-button">
                    {project.id === 2 ? '🎨 10 Designs' : 'Live Demo'}
                  </button>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
