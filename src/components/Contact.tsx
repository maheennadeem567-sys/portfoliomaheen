import React, { useState } from 'react'
import { Mail, Phone, Linkedin, Send } from 'lucide-react'
import TiltCard from './ui/TiltCard'
import { supabase } from '@/lib/supabaseClient'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.MouseEvent | React.FormEvent) => {
    e.preventDefault()

    if (!supabase) {
      setErrorMessage('Contact form is currently unavailable.')
      setStatus('error')
      return
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in all fields.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: name.trim(),
            email: email.trim(),
            message: message.trim()
          }
        ])

      if (error) throw error

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err: any) {
      console.error('Error:', err?.message)
      setStatus('error')
      setErrorMessage('Failed to send. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative z-10 w-full max-w-6xl mx-auto px-6 py-10 min-h-screen flex items-center">
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
            <span className="text-blue-500 font-mono tracking-[0.3em] uppercase text-sm font-bold">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)]">
            Let's Build<br />Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Great</span>
          </h2>
          <p className="text-lg opacity-80 max-w-xl text-[var(--text-primary)]">Have a project idea? I'm always open to new opportunities.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mt-4" style={{ perspective: '1000px' }}>
          {/* Contact Details Cards */}
          <div className="flex flex-col gap-4">
            <TiltCard className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/30 to-pink-500/30 hover:from-blue-500 hover:to-pink-500 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 cursor-pointer block">
              <a href="tel:03365241320" className="flex items-center gap-6 p-6 h-full w-full bg-[#FAFAFA] dark:bg-[#1f1f2b] rounded-2xl transition-colors duration-500" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 group-hover:bg-blue-500/10 transition-colors" style={{ transform: 'translateZ(60px)' }}>
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <div style={{ transform: 'translateZ(40px)' }}>
                  <p className="text-xs font-mono uppercase tracking-widest opacity-60 text-black dark:text-gray-400 mb-1">Phone</p>
                  <p className="font-bold text-black dark:text-white text-lg group-hover:text-blue-500 transition-colors">03365241320</p>
                </div>
              </a>
            </TiltCard>

            <TiltCard className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/30 to-pink-500/30 hover:from-blue-500 hover:to-pink-500 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 cursor-pointer block">
              <a href="mailto:maheennadeem567@gmail.com" className="flex items-center gap-6 p-6 h-full w-full bg-[#FAFAFA] dark:bg-[#1f1f2b] rounded-2xl transition-colors duration-500" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 group-hover:bg-pink-500/10 transition-colors" style={{ transform: 'translateZ(60px)' }}>
                  <Mail className="w-5 h-5 text-pink-500" />
                </div>
                <div style={{ transform: 'translateZ(40px)' }}>
                  <p className="text-xs font-mono uppercase tracking-widest opacity-60 text-black dark:text-gray-400 mb-1">Email</p>
                  <p className="font-bold text-black dark:text-white text-lg break-all group-hover:text-pink-500 transition-colors">maheennadeem567@gmail.com</p>
                </div>
              </a>
            </TiltCard>

            <TiltCard className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/30 to-pink-500/30 hover:from-blue-500 hover:to-pink-500 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 cursor-pointer block">
              <a href="https://www.linkedin.com/in/maheen-nadeem-446340405?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 h-full w-full bg-[#FAFAFA] dark:bg-[#1f1f2b] rounded-2xl transition-colors duration-500" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 group-hover:bg-blue-500/10 transition-colors" style={{ transform: 'translateZ(60px)' }}>
                  <Linkedin className="w-5 h-5 text-blue-500" />
                </div>
                <div style={{ transform: 'translateZ(40px)' }}>
                  <p className="text-xs font-mono uppercase tracking-widest opacity-60 text-black dark:text-gray-400 mb-1">LinkedIn</p>
                  <p className="font-bold text-black dark:text-white text-lg group-hover:text-blue-500 transition-colors">maheen-nadeem-446340405</p>
                </div>
              </a>
            </TiltCard>
          </div>

          {/* Form */}
          <div className="w-full">
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-black dark:text-white opacity-80">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1f1f2b] border border-black/10 dark:border-white/10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-black dark:text-white transition-all placeholder:opacity-40"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-black dark:text-white opacity-80">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1f1f2b] border border-black/10 dark:border-white/10 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 text-black dark:text-white transition-all placeholder:opacity-40"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-black dark:text-white opacity-80">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1f1f2b] border border-black/10 dark:border-white/10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-black dark:text-white transition-all placeholder:opacity-40 resize-none"
                ></textarea>
              </div>

              {status === 'error' && errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
              {!supabase && <p className="text-sm text-red-500">Contact form is currently unavailable. Missing Supabase configuration.</p>}
              {status === 'success' && <p className="text-sm text-green-500">✅ Message sent successfully!</p>}

              <button
                onClick={handleSubmit}
                disabled={status === 'loading'}
                type="button"
                style={{ cursor: 'pointer', pointerEvents: 'auto' }}
                className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:-translate-y-1 disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
