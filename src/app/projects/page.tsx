'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Terminal, Layers } from 'lucide-react'

export default function Projects() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }

  const projects = [
    {
      title: 'AI Workflow & Security Suite',
      tagline: 'Flagship System',
      desc: 'Built an integrated system combining workflow automation with backend security optimization. Uses Next.js, Python, and LLMs.',
      tech: ['Next.js', 'Python', 'LLMs', 'Security'],
      link: '#'
    },
    {
      title: 'AI Workflow Optimizer',
      tagline: 'Efficiency Tool',
      desc: 'Developed a tool that automates repetitive academic and personal tasks, improving efficiency by 40%.',
      tech: ['Automation', 'API', 'Scheduling'],
      link: '#'
    },
    {
      title: 'Cybersecurity Awareness App',
      tagline: 'Educational App',
      desc: 'Designed and deployed a gamified mobile/web app teaching students security basics.',
      tech: ['React Native', 'Gamification', 'Security'],
      link: '#'
    },
    {
      title: 'Backend Security Optimizer',
      tagline: 'Security Model',
      desc: 'Prototype backend service that uses LLMs to analyze logs and detect vulnerabilities.',
      tech: ['LLMs', 'Logging', 'Security'],
      link: '#'
    },
    {
      title: 'Smart Portfolio Site',
      tagline: 'This Abode',
      desc: 'Built a dynamic portfolio powered by Next.js and Sanity CMS, integrating animations.',
      tech: ['Next.js', 'Sanity CMS', 'Framer Motion'],
      link: '#'
    },
    {
      title: '3D Visualization Playground',
      tagline: 'Graphics Experiment',
      desc: 'Experimented with WebGL and Three.js to render interactive 3D models.',
      tech: ['WebGL', 'Three.js', '3D Modeling'],
      link: '#'
    }
  ]

  return (
    <div className="relative">
      <div className="blob w-[600px] h-[600px] bg-accent-cyan/10 top-0 left-0" />
      
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-32">
          <motion.h1 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-huge"
          >
            BUILT <br /> <span className="text-outline text-neon-cyan">WORKS.</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                className="glass p-12 md:p-16 space-y-8 group hover:border-accent-magenta/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-accent-magenta/5 blur-3xl rounded-full group-hover:bg-accent-magenta/10 transition-colors" />
                
                <div className="flex justify-between items-start relative z-10">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-cyan group-hover:text-accent-magenta transition-colors">{project.tagline}</span>
                    <h3 className="text-4xl md:text-5xl font-serif font-black tracking-tighter leading-tight group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <Layers className="text-white/10 group-hover:text-accent-magenta/40 transition-colors" size={40} />
                </div>

                <p className="text-zinc-400 group-hover:text-zinc-200 text-lg leading-relaxed relative z-10">
                  {project.desc}
                </p>

                <div className="space-y-10 relative z-10">
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span key={t} className="flex items-center gap-2 px-3 py-1 border border-white/5 bg-white/5 text-[10px] uppercase tracking-widest font-bold text-zinc-500 group-hover:text-accent-cyan group-hover:border-accent-cyan/20 transition-colors">
                        <Terminal size={12} className="text-accent-magenta" /> {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 border-b-2 border-accent-cyan/20 pb-2 hover:text-accent-magenta hover:border-accent-magenta transition-colors"
                  >
                    Inspect Build <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
