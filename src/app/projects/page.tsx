'use client'

import React from 'react'
import { ExternalLink, Terminal, Layers } from 'lucide-react'

export default function Projects() {
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
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-20">
          <h1 className="text-huge">
            BUILT <br /> <span className="text-outline">WORKS.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-100 border border-zinc-100">
            {projects.map((project, i) => (
              <div key={i} className="bg-background p-12 md:p-16 space-y-8 group hover:bg-foreground hover:text-background transition-all duration-500">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-terracotta group-hover:text-accent-blue transition-colors">{project.tagline}</span>
                    <h3 className="text-4xl md:text-5xl font-serif font-black tracking-tighter leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <Layers className="text-zinc-200 group-hover:text-accent-terracotta/40" size={40} />
                </div>

                <p className="text-zinc-500 group-hover:text-zinc-300 text-lg leading-relaxed">
                  {project.desc}
                </p>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span key={t} className="flex items-center gap-2 px-3 py-1 border border-zinc-200 text-[10px] uppercase tracking-widest font-bold group-hover:border-zinc-800">
                        <Terminal size={12} /> {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold border-b-2 border-accent-terracotta pb-2 group-hover:text-accent-blue transition-colors"
                  >
                    Inspect Build <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
