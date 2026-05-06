'use client'

import React from 'react'
import { Bio } from '@/lib/types'
import { Quote } from 'lucide-react'

interface AboutSectionProps {
  data: Bio
}

export const AboutSection = ({ data }: AboutSectionProps) => {
  const achievements = [
    "Organized and led a cybersecurity awareness workshop for peers, introducing best practices in digital safety.",
    "Developed interactive web applications focusing on usability and performance.",
    "Contributed to open-source UI/UX projects, improving accessibility and design consistency.",
    "Built automation workflows to optimize productivity in academic and personal projects.",
    "Recognized for strong analytical and communication skills through competitive academic performance."
  ]

  const bioContent = "Driven computer science student passionate about building intelligent systems that streamline workflows and enhance security. Skilled in modern web technologies, backend optimization, and AI integration. Dedicated to creating impactful solutions and eager to contribute to innovative teams."

  return (
    <div className="relative w-full max-w-5xl mx-auto py-12 px-4 md:px-0">
      {/* Decorative Grid Marker */}
      <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-zinc-200 pointer-events-none" />
      <div className="absolute -top-6 -right-6 w-12 h-12 border-t border-r border-zinc-200 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Profile & Bio */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent-terracotta">Studio Profile</span>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground leading-tight">
              Designing Systems <br /> of Intelligence.
            </h2>
          </div>

          <div className="prose prose-zinc max-w-none">
            <p className="text-xl text-zinc-600 leading-relaxed font-light italic">
               &ldquo;{bioContent}&rdquo;
            </p>
          </div>

          {/* Achievement List */}
          <div className="space-y-8 pt-8 border-t border-zinc-100">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Core Achievements</h3>
            <ul className="grid grid-cols-1 gap-6">
              {achievements.map((item, i) => (
                <li key={i} className="group flex gap-6 items-start">
                  <span className="text-accent-terracotta font-mono text-[10px] pt-1">0{i + 1}</span>
                  <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-foreground transition-colors">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Philosophy & Metadata */}
        <div className="lg:col-span-5 space-y-12">
          <div className="bg-zinc-50 p-10 space-y-8 relative overflow-hidden">
             {/* Architectural Texture */}
             <div className="absolute top-0 left-0 w-full h-1 bg-accent-terracotta" />
             <div className="absolute bottom-4 right-4 opacity-5">
               <Quote className="w-24 h-24" />
             </div>

             <div className="space-y-4 relative z-10">
               <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-terracotta">Philosophical Foundation</h3>
               <p className="text-2xl font-serif text-foreground leading-snug">
                 &ldquo;{data?.philosophy || "Architecture is the learned game, correct and magnificent, of forms assembled in the light."}&rdquo;
               </p>
             </div>

             <div className="pt-8 border-t border-zinc-200/50 space-y-4 relative z-10">
               <p className="text-[10px] text-zinc-400 uppercase tracking-widest leading-relaxed">
                 Every system I architect is built on the principle of efficiency. 
                 By merging security with automation, I create environments where 
                 workflows flourish and vulnerabilities are mitigated at the source.
               </p>
             </div>
          </div>

          {/* Technical Metadata */}
          <div className="grid grid-cols-2 gap-8 px-4">
             <div className="space-y-2">
               <span className="block text-[9px] uppercase tracking-widest text-accent-terracotta font-bold">Specialization</span>
               <span className="block text-xs text-foreground font-mono">Full-Stack / AI / Security</span>
             </div>
             <div className="space-y-2">
               <span className="block text-[9px] uppercase tracking-widest text-accent-terracotta font-bold">Vibe</span>
               <span className="block text-xs text-foreground font-mono">Modernist / Refined</span>
             </div>
          </div>
        </div>
      </div>

      {/* Finishing Detail */}
      <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b border-l border-zinc-200 pointer-events-none" />
      <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-zinc-200 pointer-events-none" />
    </div>
  )
}
