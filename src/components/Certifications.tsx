import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ExternalLink, X, Folder, FileBadge, ShieldCheck, Eye } from 'lucide-react';

const certifications = [
  {
    title: "Build & Deploy Apps",
    subtitle: "Google AI Studio & Vibe Coding",
    color: "green",
    icon: <Eye className="h-6 w-6 text-white opacity-80" />,
    image: "/Google Ai studio_2.jpeg"
  },
  {
    title: "Gemini Certified Student",
    subtitle: "Google for Education",
    color: "orange",
    icon: <Eye className="h-6 w-6 text-white opacity-80" />,
    image: "/Gemini_Certified_Student.jpg.png"
  },
  {
    title: "Workshop on Prompt Engineering",
    subtitle: "SkillEcted",
    color: "blue",
    icon: <Eye className="h-6 w-6 text-white opacity-80" />,
    image: "/prompt_engineering.png"
  },
  {
    title: "Introduction to Critical Infrastructure Protection",
    subtitle: "OPSWAT",
    color: "purple",
    icon: <Eye className="h-6 w-6 text-white opacity-80" />,
    image: "/introduction_to_cip.png.png"
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <section id="certifications" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
          <span className="text-blue-500 font-mono tracking-[0.3em] uppercase text-sm">
            ACHIEVEMENTS
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4" style={{ color: "var(--text-heading)" }}>
          Certifications
        </h2>
        <p className="text-lg opacity-70 max-w-2xl" style={{ color: "var(--text-primary)" }}>
          Professional certifications that validate expertise and commitment to continuous learning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="w-full uiverse-tracker-container cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            <div className="uiverse-tracker-canvas h-full">
              {[...Array(25)].map((_, i) => (
                <div key={i} className={`tracker tr-${i + 1}`}></div>
              ))}
              <div className="uiverse-tracker-card noselect" style={{ padding: '0' }}>
                <div className="flex flex-col h-full justify-between p-6 bg-black/20">
                  <div className="flex items-center gap-3 bg-white/10 w-fit px-3 py-2 rounded-2xl backdrop-blur-md border border-white/20">
                    <span className="text-xl">{cert.icon}</span>
                    <span className="text-white text-[10px] font-mono tracking-widest uppercase truncate max-w-[150px]">
                      {cert.subtitle}
                    </span>
                  </div>
                  
                  <div id="prompt" className="uiverse-tracker-prompt !left-6 !bottom-6">
                    {cert.title}
                  </div>
                  
                  <div className="uiverse-tracker-title-hidden">
                    <Eye className="h-8 w-8 text-white mr-2" /> VIEW
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#111] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <h3 className="text-xl font-bold text-white pl-2">{selectedCert.title}</h3>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="flex-1 overflow-auto bg-black/50 p-6 flex items-center justify-center min-h-[40vh]">
                {/* if image exists, render it */}
                {'image' in selectedCert && selectedCert.image ? (
                  <div className="flex flex-col items-center gap-4">
                    <img 
                      src={(selectedCert as any).image} 
                      alt={selectedCert.title} 
                      className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
                      onError={(e) => {
                        // Fallback if the user hasn't uploaded the image to the public folder yet
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'text-center p-8 bg-white/5 border border-white/10 rounded-xl max-w-sm';
                          fallback.innerHTML = `
                            <div class="text-3xl mb-4">🖼️</div>
                            <h4 class="text-lg font-bold text-white mb-2">Image Not Found</h4>
                            <p class="text-sm text-gray-400">
                              Please upload <strong>${(selectedCert as any).image}</strong> into your project's <code>public</code> folder in the files tab.
                            </p>
                          `;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div className="text-center p-10 flex flex-col items-center justify-center gap-4">
                      <div className={`w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-4 shadow-lg shadow-black/50`}>
                        {/* Scale the icon up a bit for the modal */}
                        <div className="scale-150">
                          {selectedCert.icon}
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h4>
                      {/* Removing extra text as requested for cleaner UI */}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
