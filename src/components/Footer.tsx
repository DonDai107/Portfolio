import React from 'react'
import Link from 'next/link'
import { Code2, Briefcase, Send, ArrowUpRight } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-background text-foreground section-padding border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
          <div className="space-y-12">
            <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter leading-[0.8] text-outline" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)' }}>
              LET&rsquo;S <br /> <span className="text-foreground">CREATE.</span>
            </h2>
            <div className="flex gap-8">
              <a href="https://github.com/DonDai107" target="_blank" className="hover:text-accent-cyan transition-colors"><Code2 size={24} /></a>
              <a href="https://linkedin.com/in/youbankarki" target="_blank" className="hover:text-accent-cyan transition-colors"><Briefcase size={24} /></a>
              <a href="https://twitter.com/youbankarki" target="_blank" className="hover:text-accent-cyan transition-colors"><Send size={24} /></a>
            </div>
          </div>

          <div className="space-y-12 text-right">
            <div className="flex flex-col gap-6 items-end">
              <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold">Contact Details</p>
              <a href="mailto:youbankarki95@gmail.com" className="text-2xl md:text-4xl font-serif hover:text-accent-cyan transition-colors flex items-center gap-4">
                youbankarki95@gmail.com <ArrowUpRight size={24} className="text-accent-magenta" />
              </a>
            </div>

            <div className="flex justify-between items-end border-t border-white/5 pt-12">
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                &copy; 2026 YOUBAN KARKI
              </p>
              <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                <Link href="/projects" className="hover:text-foreground transition-colors">Work</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
