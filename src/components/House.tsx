'use client'

import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { motion, AnimatePresence } from 'framer-motion'
import { client } from '@/lib/sanity'
import { bioQuery, milestonesQuery, projectsQuery } from '@/lib/queries'
import { AboutSection } from './sections/AboutSection'
import { TimelineSection } from './sections/TimelineSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { Bio, Milestone, Project } from '@/lib/types'
import { ArrowRight, Shield, Zap } from 'lucide-react'

export const House = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const houseRef = useRef<SVGSVGElement>(null)
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [data, setData] = useState<{ bio: Bio | null; milestones: Milestone[]; projects: Project[] }>({ 
    bio: null, 
    milestones: [], 
    projects: [] 
  })

  useEffect(() => {
    // Entrance animations
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } })
    tl.from('.hero-text', { y: 100, opacity: 0, stagger: 0.2 })
      .from(houseRef.current, { scale: 0.8, opacity: 0, duration: 2 }, '-=1')
      .from('.architectural-line', { scaleX: 0, stagger: 0.1 }, '-=1.5')

    // Fetch data
    const fetchData = async () => {
      const [bio, milestones, projects] = await Promise.all([
        client.fetch(bioQuery),
        client.fetch(milestonesQuery),
        client.fetch(projectsQuery),
      ])
      setData({ bio, milestones, projects })
    }
    fetchData()
  }, [])

  const handleSectionClick = (section: string) => {
    setSelectedSection(section)
    gsap.to('.hero-content', { opacity: 0, y: -20, duration: 0.5 })
  }

  const closeSection = () => {
    setSelectedSection(null)
    gsap.to('.hero-content', { opacity: 1, y: 0, duration: 0.8, delay: 0.3 })
  }

  return (
    <div ref={containerRef} className="relative w-full min-h-screen flex flex-col items-center bg-background overflow-hidden selection:bg-accent-blue/30">
      {/* Background Architectural Grid (managed by globals.css) */}
      
      {/* Header / Nav */}
      <header className="w-full max-w-7xl px-8 py-12 flex justify-between items-end z-30">
        <div className="space-y-1">
          <h1 className="hero-text text-accent-terracotta text-[10px] uppercase tracking-[0.5em] font-bold">
            Digital Architect
          </h1>
          <p className="hero-text text-4xl md:text-5xl font-serif text-foreground leading-none">
            Youban Karki
          </p>
        </div>
        <nav className="hero-text flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">
          <button onClick={() => handleSectionClick('about')} className="hover:text-accent-terracotta transition-colors">Studio</button>
          <button onClick={() => handleSectionClick('projects')} className="hover:text-accent-terracotta transition-colors">Blueprints</button>
          <button onClick={() => handleSectionClick('timeline')} className="hover:text-accent-terracotta transition-colors">Chronology</button>
        </nav>
      </header>

      {/* Main Hero Content */}
      <div className="hero-content w-full max-w-7xl px-8 flex flex-col md:flex-row items-center gap-16 flex-1 py-12">
        <div className="flex-1 space-y-8 z-20">
          <div className="space-y-4">
            <span className="hero-text inline-block px-3 py-1 bg-accent-blue/10 text-accent-blue text-[9px] uppercase tracking-[0.2em] font-bold rounded-full">
              Featured Blueprint
            </span>
            <h2 className="hero-text text-5xl md:text-7xl font-serif text-foreground leading-[1.1] tracking-tight">
              AI Workflow & <br /> Security Suite
            </h2>
            <div className="architectural-line w-24 h-1 bg-accent-terracotta origin-left" />
          </div>
          
          <p className="hero-text text-lg text-zinc-600 max-w-md leading-relaxed">
            An integrated system combining workflow automation with backend security optimization. 
            Designed to streamline repetitive tasks while detecting vulnerabilities in real-time.
          </p>

          <div className="hero-text flex flex-wrap gap-4 pt-4">
            <button className="group flex items-center gap-3 bg-foreground text-background px-6 py-4 rounded-sm hover:bg-accent-terracotta transition-all duration-500">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Explore Master Plan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex gap-6 items-center px-4">
              <div className="flex items-center gap-2 text-zinc-400">
                <Shield className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Secure</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Zap className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Auto</span>
              </div>
            </div>
          </div>
        </div>

        {/* Architectural House Illustration */}
        <div className="flex-1 relative w-full aspect-square md:aspect-auto flex items-center justify-center">
          <svg
            ref={houseRef}
            viewBox="0 0 600 600"
            className="w-full h-auto max-w-lg drop-shadow-2xl z-10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Shadows/Glows */}
            <defs>
              <linearGradient id="glass-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.05" />
              </linearGradient>
              <filter id="blur">
                <feGaussianBlur stdDeviation="10" />
              </filter>
            </defs>

            {/* Base Slab */}
            <rect x="50" y="520" width="500" height="20" fill="#e5e7eb" />
            <rect x="70" y="500" width="460" height="20" fill="#f3f4f6" />

            {/* Main Structure - Modernist Box */}
            <rect x="100" y="200" width="400" height="300" fill="white" stroke="#e5e7eb" strokeWidth="1" />
            
            {/* Glass Curtains */}
            <rect x="120" y="220" width="120" height="260" fill="url(#glass-grad)" stroke="#87CEEB" strokeWidth="0.5" />
            <rect x="260" y="220" width="220" height="260" fill="url(#glass-grad)" stroke="#87CEEB" strokeWidth="0.5" />
            
            {/* Mullions */}
            <line x1="180" y1="220" x2="180" y2="480" stroke="#87CEEB" strokeOpacity="0.5" strokeWidth="0.5" />
            <line x1="330" y1="220" x2="330" y2="480" stroke="#87CEEB" strokeOpacity="0.5" strokeWidth="0.5" />
            <line x1="400" y1="220" x2="400" y2="480" stroke="#87CEEB" strokeOpacity="0.5" strokeWidth="0.5" />

            {/* Roof Cantilever */}
            <path d="M80 200 L520 200 L500 170 L100 170 Z" fill="#B35C1E" />
            <rect x="80" y="195" width="440" height="5" fill="#8b4513" />

            {/* Details */}
            <rect x="280" y="380" width="40" height="100" fill="#5c3d2e" /> {/* Wood Accent Door */}
            <circle cx="310" cy="430" r="2" fill="#ffd700" />

            {/* Vertical Accents */}
            <rect x="470" y="200" width="10" height="300" fill="#B35C1E" opacity="0.8" />
            
            {/* Foliage */}
            <g opacity="0.8">
              <path d="M520 500 Q540 450 560 500" fill="#3FA34D" />
              <path d="M540 500 Q560 470 580 500" fill="#2E7D32" />
              <path d="M40 500 Q60 440 80 500" fill="#3FA34D" />
            </g>
          </svg>

          {/* Decorative Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 -right-8 w-24 h-24 bg-accent-blue/5 rounded-full blur-2xl"
          />
        </div>
      </div>

      {/* Stats/Bottom Bar */}
      <footer className="w-full max-w-7xl px-8 py-12 border-t border-zinc-100 flex flex-wrap gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">
        <div className="space-y-2">
          <p className="text-accent-terracotta">Status</p>
          <p className="text-foreground">Available for Collaboration</p>
        </div>
        <div className="space-y-2">
          <p className="text-accent-terracotta">Base</p>
          <p className="text-foreground">Tribhuvan University, Nepal</p>
        </div>
        <div className="space-y-2 ml-auto">
          <p className="text-accent-terracotta">Est.</p>
          <p className="text-foreground">MMXXIV</p>
        </div>
      </footer>

      {/* Overlay Sections */}
      <AnimatePresence>
        {selectedSection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col items-center p-8 md:p-16 overflow-y-auto"
          >
            <div className="max-w-6xl w-full">
              <header className="flex justify-between items-center mb-16">
                <div className="space-y-1">
                  <span className="text-accent-terracotta text-[10px] uppercase tracking-[0.5em] font-bold">Portfolio</span>
                  <h2 className="text-3xl md:text-5xl font-serif text-zinc-900 tracking-tight capitalize">
                    {selectedSection === 'about' ? 'The Studio' : selectedSection === 'projects' ? 'Blueprints' : 'Chronology'}
                  </h2>
                </div>
                <button
                  onClick={closeSection}
                  className="group flex items-center gap-3 text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em]">Close Drawer</span>
                  <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-accent-terracotta group-hover:text-accent-terracotta transition-all">
                    <span className="text-xl">×</span>
                  </div>
                </button>
              </header>

              <div className="pb-24">
                {selectedSection === 'about' && data.bio && <AboutSection data={data.bio} />}
                {selectedSection === 'projects' && <ProjectsSection projects={data.projects} />}
                {selectedSection === 'timeline' && <TimelineSection milestones={data.milestones} />}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
