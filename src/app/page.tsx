'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code2, Shield, Zap } from 'lucide-react'

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }

  return (
    <div className="relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="blob w-[600px] h-[600px] bg-accent-cyan/20 -top-48 -left-48" />
      <div className="blob w-[500px] h-[500px] bg-accent-violet/20 bottom-0 right-0" />

      {/* Hero Section */}
      <section className="section-padding min-h-[90vh] flex flex-col justify-center relative z-10">
        <div className="max-w-7xl mx-auto w-full space-y-12">
          <div className="space-y-6">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent-cyan"
            >
              Software Developer & AI Engineer
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-huge"
            >
              YOUBAN <br /> <span className="text-outline text-neon-cyan">KARKI.</span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-12 items-start md:items-end"
          >
            <p className="max-w-md text-lg text-zinc-400 leading-relaxed font-light">
              Driven by the pursuit of intelligent systems that streamline workflows and enhance security. 
              Currently building AI-driven solutions at Tribhuvan University.
            </p>
            <Link 
              href="/projects" 
              className="group flex items-center gap-4 text-2xl font-serif font-black hover:text-accent-cyan transition-colors"
            >
              View All Works <ArrowRight className="group-hover:translate-x-2 transition-transform text-accent-magenta" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Flagship Project Highlight */}
      <section className="section-padding relative z-10">
        <motion.div 
          {...fadeInUp}
          className="max-w-7xl mx-auto glass rounded-[2rem] p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center overflow-hidden"
        >
          <div className="space-y-8 relative z-10">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-magenta">Flagship Project</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter leading-tight">
                AI Workflow & <br /> <span className="text-accent-cyan">Security Suite</span>
              </h2>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed">
              An integrated system combining workflow automation with backend security optimization. 
              Uses Next.js, Python, and LLMs to streamline repetitive tasks while detecting vulnerabilities.
            </p>
            <div className="flex gap-8">
              <div className="flex items-center gap-3 text-accent-cyan font-bold text-[10px] uppercase tracking-widest">
                <Shield size={20} className="text-accent-magenta" /> Security
              </div>
              <div className="flex items-center gap-3 text-accent-cyan font-bold text-[10px] uppercase tracking-widest">
                <Zap size={20} className="text-accent-magenta" /> Automation
              </div>
            </div>
            <Link 
              href="/projects" 
              className="inline-block px-10 py-5 bg-foreground text-background text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-accent-violet transition-colors"
            >
              Explore Build Details
            </Link>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden glass group">
            <div className="absolute inset-0 flex items-center justify-center p-12">
               <div className="w-full h-full border-2 border-accent-cyan/10 rounded-full animate-spin-slow flex items-center justify-center">
                 <div className="w-3/4 h-3/4 border-2 border-accent-magenta/10 rounded-full animate-reverse-spin flex items-center justify-center">
                   <Code2 className="text-accent-cyan w-24 h-24 blur-sm opacity-50 absolute" />
                   <Code2 className="text-accent-cyan w-24 h-24 relative z-10" />
                 </div>
               </div>
            </div>
            {/* Ambient Light Effect */}
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent-magenta/20 blur-[100px]" />
          </div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <section className="py-20 border-y border-white/5 overflow-hidden">
        <div className="animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-16 items-center px-12">
              <span className="text-4xl md:text-6xl font-serif font-black opacity-10">WORKFLOW OPTIMIZATION</span>
              <span className="text-4xl md:text-6xl font-serif font-black text-accent-magenta italic opacity-20">AI INTEGRATION</span>
              <span className="text-4xl md:text-6xl font-serif font-black opacity-10 text-outline">BACKEND SECURITY</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
