import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
          <div className="space-y-12">
            <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter leading-[0.8] text-outline" style={{ WebkitTextStroke: '1px rgba(253, 250, 243, 0.2)' }}>
              LET&rsquo;S <br /> <span className="text-background">CREATE.</span>
            </h2>
            <div className="flex gap-8">
              <a href="https://github.com/DonDai107" target="_blank" className="hover:text-accent-terracotta transition-colors"><Github size={24} /></a>
              <a href="https://linkedin.com/in/youbankarki" target="_blank" className="hover:text-accent-terracotta transition-colors"><Linkedin size={24} /></a>
              <a href="https://twitter.com/youbankarki" target="_blank" className="hover:text-accent-terracotta transition-colors"><Twitter size={24} /></a>
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col gap-6">
              <p className="text-zinc-400 text-[10px] uppercase tracking-[0.3em] font-bold">Contact Details</p>
              <a href="mailto:youbankarki95@gmail.com" className="text-2xl md:text-4xl font-serif hover:text-accent-terracotta transition-colors flex items-center gap-4">
                youbankarki95@gmail.com <ArrowUpRight size={24} className="text-accent-terracotta" />
              </a>
            </div>

            <div className="flex justify-between items-end border-t border-zinc-800 pt-12">
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                &copy; 2026 YOUBAN KARKI
              </p>
              <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                <Link href="/" className="hover:text-background transition-colors">Home</Link>
                <Link href="/projects" className="hover:text-background transition-colors">Work</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
