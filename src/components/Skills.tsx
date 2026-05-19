import { motion } from 'motion/react';
import { Settings } from 'lucide-react';

const skillCategories = [
  {
    title: "MOBILE",
    icon: "📱",
    skills: ["Flutter", "Dart", "Riverpod"],
    color: "from-green-600 to-green-400",
    bgColor: "bg-green-500/5 dark:bg-green-500/10",
    borderColor: "border-green-500/20"
  },
  {
    title: "WEB FRONTEND",
    icon: "🖥️",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript"],
    color: "from-yellow-600 to-yellow-400",
    bgColor: "bg-yellow-500/5 dark:bg-yellow-500/10",
    borderColor: "border-yellow-500/20"
  },
  {
    title: "BACKEND",
    icon: "⚙️",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
    color: "from-blue-600 to-blue-400",
    bgColor: "bg-blue-500/5 dark:bg-blue-500/10",
    borderColor: "border-blue-500/20"
  },
  {
    title: "DATABASE",
    icon: "🗄️",
    skills: ["Firebase", "Supabase", "MongoDB"],
    color: "from-pink-600 to-pink-400",
    bgColor: "bg-pink-500/5 dark:bg-pink-500/10",
    borderColor: "border-pink-500/20"
  },
  {
    title: "DESIGN",
    icon: "🎨",
    skills: ["Figma", "Sketch", "UX/UI", "Prototyping"],
    color: "from-purple-600 to-purple-400",
    bgColor: "bg-purple-500/5 dark:bg-purple-500/10",
    borderColor: "border-purple-500/20"
  },
  {
    title: "TOOLS",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Docker"],
    color: "from-teal-600 to-teal-400",
    bgColor: "bg-teal-500/5 dark:bg-teal-500/10",
    borderColor: "border-teal-500/20"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 bg-white/2 dark:bg-black/2 rounded-[40px] mb-12">
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
          <span className="text-blue-500 font-mono tracking-[0.3em] uppercase text-sm">
            EXPERTISE
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold" style={{ color: "var(--text-heading)" }}>
          Skills and Tools
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
            className="uiverse-tracker-container"
          >
            <div className="uiverse-tracker-canvas">
              {[...Array(25)].map((_, i) => (
                <div key={i} className={`tracker tr-${i + 1}`}></div>
              ))}
              
              <div className="uiverse-tracker-card noselect">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6 bg-white/10 w-fit px-4 py-2 rounded-2xl backdrop-blur-md border border-white/20">
                    <span className="text-2xl">{category.icon}</span>
                    <span className="text-white text-[10px] font-mono tracking-widest uppercase">
                      {category.title}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div id="prompt" className="uiverse-tracker-prompt">
                    {category.title}
                  </div>
                  
                  <div className="uiverse-tracker-title-hidden">
                    {category.icon} EXPLORE
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
