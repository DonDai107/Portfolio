'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Shield, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="blob w-[600px] h-[600px] bg-accent-blue -top-48 -left-48" />
      <div className="blob w-[400px] h-[400px] bg-accent-terracotta -bottom-24 -right-24" />

      {/* Hero Section */}
      <section className="section-padding min-h-[80vh] flex flex-col justify-center relative z-10">
        <div className="max-w-7xl mx-auto w-full space-y-12">
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent-terracotta"
            >
              Software Developer & AI Engineer
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-huge"
            >
              YOUBAN <br /> <span className="text-outline">KARKI.</span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row gap-12 items-start md:items-end"
          >
            <p className="max-w-md text-lg text-zinc-500 leading-relaxed font-light">
              Driven by the pursuit of intelligent systems that streamline workflows and enhance security. 
              Currently building AI-driven solutions at Tribhuvan University.
            </p>
            <Link 
              href="/projects" 
              className="group flex items-center gap-4 text-2xl font-serif font-black hover:text-accent-terracotta transition-colors"
            >
              View All Blueprints <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Flagship Project Highlight */}
      <section className="section-padding bg-foreground text-background relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-blue">Flagship Project</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter leading-tight">
                AI Workflow & <br /> Security Suite
              </h2>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed">
              An integrated system combining workflow automation with backend security optimization. 
              Uses Next.js, Python, and LLMs to streamline repetitive tasks while detecting vulnerabilities.
            </p>
            <div className="flex gap-8">
              <div className="flex items-center gap-3 text-accent-blue font-bold text-[10px] uppercase tracking-widest">
                <Shield size={20} /> Security
              </div>
              <div className="flex items-center gap-3 text-accent-blue font-bold text-[10px] uppercase tracking-widest">
                <Zap size={20} /> Automation
              </div>
            </div>
            <Link 
              href="/projects" 
              className="inline-block px-10 py-5 bg-accent-terracotta text-background text-[10px] uppercase tracking-[0.3em] font-bold hover:scale-105 transition-transform"
            >
              Explore Build Details
            </Link>
          </div>
          <div className="relative aspect-square bg-zinc-900 overflow-hidden group">
            {/* Visual representation of the flagship project */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
               <div className="w-full h-full border-2 border-accent-blue/20 rounded-full animate-spin-slow flex items-center justify-center">
                 <div className="w-3/4 h-3/4 border-2 border-accent-terracotta/20 rounded-full animate-reverse-spin flex items-center justify-center">
                   <Code className="text-accent-blue w-24 h-24" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 border-y border-zinc-100 overflow-hidden">
        <div className="animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-12 items-center px-12">
              <span className="text-4xl md:text-6xl font-serif font-black opacity-10">WORKFLOW OPTIMIZATION</span>
              <span className="text-4xl md:text-6xl font-serif font-black text-accent-terracotta italic opacity-20">AI INTEGRATION</span>
              <span className="text-4xl md:text-6xl font-serif font-black opacity-10">BACKEND SECURITY</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
