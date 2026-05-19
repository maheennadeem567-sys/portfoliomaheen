import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function DesignGalleryModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
            className="relative w-full max-w-[1300px] h-[90vh] bg-slate-50 dark:bg-slate-900 rounded-[2rem] overflow-hidden flex flex-col shadow-2xl z-10 border border-slate-200 dark:border-slate-800"
          >
            <div className="bg-white dark:bg-slate-950 px-6 py-5 md:px-8 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center shrink-0 gap-4">
              <h2 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-500 dark:from-slate-100 dark:to-blue-400 truncate">
                ✨ UI/UX Design Gallery — 10 Premium Components ✨
              </h2>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50 flex items-center justify-center transition-all hover:scale-105 shrink-0"
              >
                <X size={20} className="font-bold" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-100 dark:bg-slate-900">
              <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                {/* DESIGN 1: Modern Login Card */}
                <div className="bg-white dark:bg-slate-950 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="text-xl font-bold mb-6 pb-2 border-b-[3px] border-blue-500 inline-block text-slate-900 dark:text-white">01. Modern Login Card</div>
                    <div style={{maxWidth: '400px', margin: '0 auto'}} className="bg-white border border-slate-200 dark:border-slate-800 dark:bg-slate-900 rounded-[24px] p-8 shadow-[0_20px_35px_-10px_rgba(0,0,0,0.1)]">
                        <h3 className="text-2xl font-bold m-0 mb-2 dark:text-white">Welcome back</h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-7">Sign in to continue</p>
                        <input type="email" placeholder="Email address" className="w-full p-3.5 border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl mb-4 text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                        <input type="password" placeholder="Password" className="w-full p-3.5 border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl mb-6 text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                        <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white border-none p-3.5 rounded-xl text-base font-semibold cursor-pointer transition-colors">Sign In</button>
                    </div>
                </div>

                {/* DESIGN 2: Feature Card Grid */}
                <div className="bg-white dark:bg-slate-950 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="text-xl font-bold mb-6 pb-2 border-b-[3px] border-blue-500 inline-block text-slate-900 dark:text-white">02. Feature Cards Grid</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl shadow-sm text-center border border-slate-100 dark:border-slate-800">
                            <div className="text-5xl mb-4">🚀</div>
                            <h4 className="text-lg font-bold mb-2 dark:text-white">Fast Performance</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Lightning fast loading times</p>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl shadow-sm text-center border border-slate-100 dark:border-slate-800">
                            <div className="text-5xl mb-4">🔒</div>
                            <h4 className="text-lg font-bold mb-2 dark:text-white">Secure Data</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Enterprise grade security</p>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl shadow-sm text-center border border-slate-100 dark:border-slate-800">
                            <div className="text-5xl mb-4">🎨</div>
                            <h4 className="text-lg font-bold mb-2 dark:text-white">Modern UI</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Beautiful and intuitive</p>
                        </div>
                    </div>
                </div>

                {/* DESIGN 3: Pricing Table */}
                <div className="bg-white dark:bg-slate-950 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="text-xl font-bold mb-6 pb-2 border-b-[3px] border-blue-500 inline-block text-slate-900 dark:text-white">03. Premium Pricing Card</div>
                    <div className="max-w-[350px] mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[32px] p-8 text-center text-white">
                        <h4 className="text-xl opacity-90 m-0 font-semibold">Pro Plan</h4>
                        <div className="text-5xl font-bold my-5">$29<span className="text-base opacity-80 font-normal">/month</span></div>
                        <ul className="text-left list-none p-0 mx-0 mb-8 space-y-3">
                            <li>✓ Unlimited projects</li>
                            <li>✓ Priority support</li>
                            <li>✓ Advanced analytics</li>
                        </ul>
                        <button className="bg-white text-indigo-600 border-none py-3.5 px-7 rounded-full font-bold cursor-pointer hover:bg-slate-50 transition-colors w-full">Get Started</button>
                    </div>
                </div>

                {/* DESIGN 4: Testimonial Card */}
                <div className="bg-white dark:bg-slate-950 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="text-xl font-bold mb-6 pb-2 border-b-[3px] border-blue-500 inline-block text-slate-900 dark:text-white">04. Testimonial Card</div>
                    <div className="max-w-[500px] mx-auto bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 text-center md:text-left">
                        <div className="text-[#fbbf24] text-5xl tracking-[4px]">★★★★★</div>
                        <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-200 my-4 font-serif italic">"Best platform I've ever used! The UI is incredibly clean."</p>
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <div className="w-12 h-12 bg-indigo-500 rounded-full flex-shrink-0"></div>
                            <div className="text-left"><strong className="dark:text-white">Sarah Johnson</strong><br/><span className="text-slate-500 dark:text-slate-400 text-sm">Product Designer</span></div>
                        </div>
                    </div>
                </div>

                {/* DESIGN 5: Newsletter Signup */}
                <div className="bg-white dark:bg-slate-950 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="text-xl font-bold mb-6 pb-2 border-b-[3px] border-blue-500 inline-block text-slate-900 dark:text-white">05. Newsletter Signup</div>
                    <div className="bg-gradient-to-br from-blue-200 to-cyan-100 dark:from-indigo-900 dark:to-cyan-900 px-5 py-10 text-center rounded-3xl">
                        <h4 className="text-2xl font-bold m-0 dark:text-white">Subscribe to Newsletter</h4>
                        <p className="my-3 mb-6 text-slate-700 dark:text-slate-300">Get latest updates directly</p>
                        <div className="flex max-w-[450px] mx-auto gap-3 flex-wrap">
                            <input type="email" placeholder="Your email" className="flex-1 p-3.5 border-none rounded-full dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            <button className="bg-slate-800 text-white border-none py-3.5 px-7 rounded-full cursor-pointer hover:bg-slate-900 transition-colors w-full sm:w-auto font-medium">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* DESIGN 6: Navigation Bar */}
                <div className="bg-white dark:bg-slate-950 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="text-xl font-bold mb-6 pb-2 border-b-[3px] border-blue-500 inline-block text-slate-900 dark:text-white">06. Modern Navbar</div>
                    <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 flex justify-between items-center rounded-full shadow-sm border border-slate-100 dark:border-slate-800 flex-wrap gap-4">
                        <div className="text-2xl font-black text-indigo-500 tracking-tight">Logo</div>
                        <div className="hidden sm:flex gap-6 flex-wrap">
                            <a href="#" className="text-slate-800 dark:text-slate-200 hover:text-indigo-500 transition-colors font-medium">Home</a>
                            <a href="#" className="text-slate-800 dark:text-slate-200 hover:text-indigo-500 transition-colors font-medium">About</a>
                            <a href="#" className="text-slate-800 dark:text-slate-200 hover:text-indigo-500 transition-colors font-medium">Services</a>
                        </div>
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white border-none py-2 px-5 rounded-[30px] cursor-pointer transition-colors font-medium">Login</button>
                    </div>
                </div>

                {/* DESIGN 7: Progress Tracker */}
                <div className="bg-white dark:bg-slate-950 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="text-xl font-bold mb-6 pb-2 border-b-[3px] border-blue-500 inline-block text-slate-900 dark:text-white">07. Progress Tracker</div>
                    <div className="max-w-[400px] mx-auto bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
                        <div className="flex justify-between mb-3"><span className="dark:text-slate-200 font-medium">Profile Completion</span><span className="font-bold dark:text-white text-indigo-500">75%</span></div>
                        <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mb-5 overflow-hidden"><div className="w-[75%] bg-emerald-500 h-full rounded-full"></div></div>
                        <div className="flex justify-between text-sm">
                            <div className="dark:text-slate-300"><span className="text-emerald-500 mr-1">✓</span> Basic</div>
                            <div className="dark:text-slate-300"><span className="text-emerald-500 mr-1">✓</span> Photo</div>
                            <div className="dark:text-slate-300"><span className="text-amber-400 mr-1">◉</span> Skills</div>
                        </div>
                    </div>
                </div>

                {/* DESIGN 8: Contact Form */}
                <div className="bg-white dark:bg-slate-950 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="text-xl font-bold mb-6 pb-2 border-b-[3px] border-blue-500 inline-block text-slate-900 dark:text-white">08. Elegant Contact Form</div>
                    <div className="max-w-[450px] mx-auto bg-slate-50 dark:bg-slate-900 rounded-3xl p-7 border border-slate-100 dark:border-slate-800">
                        <h4 className="text-xl font-bold m-0 mb-4 dark:text-white">Get in touch</h4>
                        <input type="text" placeholder="Your name" className="w-full p-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl mb-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:text-white text-sm" />
                        <input type="email" placeholder="Email" className="w-full p-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl mb-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:text-white text-sm" />
                        <textarea rows={3} placeholder="Message" className="w-full p-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl mb-1 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:text-white text-sm resize-none"></textarea>
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white w-full p-3 rounded-xl mt-3 border-none cursor-pointer font-semibold transition-colors">Send</button>
                    </div>
                </div>

                {/* DESIGN 9: Blog Post Card */}
                <div className="bg-white dark:bg-slate-950 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="text-xl font-bold mb-6 pb-2 border-b-[3px] border-blue-500 inline-block text-slate-900 dark:text-white">09. Blog Post Card</div>
                    <div className="max-w-[360px] mx-auto bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
                        <div className="h-40 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                        <div className="p-5">
                            <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 py-1 px-3 rounded-full text-xs font-bold tracking-wide uppercase">Technology</span>
                            <h4 className="text-lg font-bold my-3 dark:text-white">Future of Web Design</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm m-0 leading-relaxed">Exploring modern trends in UI/UX for 2025 and beyond</p>
                        </div>
                    </div>
                </div>

                {/* DESIGN 10: Dark Mode Dashboard Widget */}
                <div className="bg-white dark:bg-slate-950 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="text-xl font-bold mb-6 pb-2 border-b-[3px] border-blue-500 inline-block text-slate-900 dark:text-white">10. Dark Mode Dashboard</div>
                    <div className="max-w-[380px] mx-auto bg-[#1e1e2f] rounded-3xl p-6 text-white border border-slate-800">
                        <div className="flex justify-between items-start mb-5">
                            <div><h4 className="text-lg font-bold m-0">Dashboard</h4><p className="text-[#a0a0b0] text-sm mt-1 mb-0">Welcome, John!</p></div>
                            <div className="text-xl bg-slate-800/50 w-10 h-10 rounded-full flex items-center justify-center">👤</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#2a2a3e] p-4 rounded-2xl"><div className="text-2xl font-bold mb-1">1,234</div><div className="text-[#a0a0b0] text-sm">Users</div></div>
                            <div className="bg-[#2a2a3e] p-4 rounded-2xl"><div className="text-2xl font-bold mb-1">$12.5k</div><div className="text-[#a0a0b0] text-sm">Revenue</div></div>
                        </div>
                        <button className="w-full bg-indigo-500 hover:bg-indigo-600 p-3 rounded-xl mt-4 border-none text-white cursor-pointer transition-colors text-sm font-semibold">View Analytics →</button>
                    </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
