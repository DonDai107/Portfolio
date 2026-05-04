'use client'

import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { client } from '@/lib/sanity'
import { bioQuery, projectsQuery, milestonesQuery } from '@/lib/queries'
import { AboutSection } from './sections/AboutSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { TimelineSection } from './sections/TimelineSection'
import { ContactSection } from './sections/ContactSection'
import { Bio, Project, Milestone } from '@/lib/types'

interface WindowProps {
  id: string
  label: string
  onClick: () => void
  className?: string
}

const Window = ({ id, label, onClick, className }: WindowProps) => {
  const windowRef = useRef<SVGGElement>(null)
  const leftCurtainRef = useRef<SVGRectElement>(null)
  const rightCurtainRef = useRef<SVGRectElement>(null)
  const glassRef = useRef<SVGRectElement>(null)
  const labelRef = useRef<SVGTextElement>(null)

  const handleHover = () => {
    gsap.to(glassRef.current, {
      fill: 'rgba(255, 255, 255, 0.2)',
      duration: 0.4,
    })
    gsap.to(labelRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'back.out(1.7)',
    })
    gsap.to(leftCurtainRef.current, { x: -30, duration: 0.8, ease: 'power2.out' })
    gsap.to(rightCurtainRef.current, { x: 30, duration: 0.8, ease: 'power2.out' })
  }

  const handleHoverExit = () => {
    gsap.to(glassRef.current, {
      fill: 'rgba(255, 255, 255, 0.05)',
      duration: 0.4,
    })
    gsap.to(labelRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.4,
    })
    gsap.to([leftCurtainRef.current, rightCurtainRef.current], { x: 0, duration: 0.8, ease: 'power2.inOut' })
  }

  return (
    <g
      ref={windowRef}
      id={id}
      className={cn('group cursor-pointer', className)}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
    >
      <rect x="-4" y="-4" width="108" height="128" fill="#111" />
      <rect x="0" y="0" width="100" height="120" fill="#2a2a2a" stroke="#333" strokeWidth="1" />
      <rect ref={glassRef} x="8" y="8" width="84" height="104" fill="rgba(255, 255, 255, 0.05)" />
      
      <mask id={`mask-${id}`}>
        <rect x="8" y="8" width="84" height="104" fill="white" />
      </mask>

      <g mask={`url(#mask-${id})`}>
        <rect ref={leftCurtainRef} x="8" y="8" width="42" height="104" fill="#451a1a" />
        <rect ref={rightCurtainRef} x="50" y="8" width="42" height="104" fill="#451a1a" />
      </g>

      <line x1="50" y1="8" x2="50" y2="112" stroke="#333" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="8" y1="60" x2="92" y2="60" stroke="#333" strokeWidth="1" strokeOpacity="0.5" />

      <text
        ref={labelRef}
        x="50"
        y="145"
        textAnchor="middle"
        fill="#a1a1aa"
        className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-0"
        style={{ transform: 'translateY(10px)' }}
      >
        {label}
      </text>
    </g>
  )
}

export const House = () => {
  const houseRef = useRef<SVGSVGElement>(null)
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [data, setData] = useState<{
    bio: Bio | null
    projects: Project[]
    milestones: Milestone[]
  }>({ bio: null, projects: [], milestones: [] })

  useEffect(() => {
    // Initial entrance
    gsap.from(houseRef.current, {
      opacity: 0,
      y: 100,
      scale: 0.8,
      duration: 2.5,
      ease: 'expo.out',
    })

    // Fetch data
    const fetchData = async () => {
      const [bio, projects, milestones] = await Promise.all([
        client.fetch(bioQuery),
        client.fetch(projectsQuery),
        client.fetch(milestonesQuery),
      ])
      setData({ bio, projects, milestones })
    }
    fetchData()
  }, [])

  const handleWindowClick = (section: string) => {
    setSelectedSection(section)
    gsap.to(houseRef.current, {
      scale: 4,
      opacity: 0,
      duration: 1.5,
      ease: 'power4.inOut',
    })
  }

  const closeSection = () => {
    setSelectedSection(null)
    gsap.to(houseRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: 'power4.inOut',
    })
  }

  const renderSectionContent = () => {
    switch (selectedSection) {
      case 'about':
        return data.bio ? <AboutSection data={data.bio} /> : null
      case 'projects':
        return <ProjectsSection projects={data.projects} />
      case 'timeline':
        return <TimelineSection milestones={data.milestones} />
      case 'contact':
        return <ContactSection />
      default:
        return null
    }
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#030303] overflow-hidden">
      {/* Cinematic Lighting */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-900/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Intro Text */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
        className="absolute top-12 left-12 z-20"
      >
        <h1 className="text-zinc-500 text-[10px] uppercase tracking-[0.5em] mb-2 font-medium">
          Digital Architect
        </h1>
        <p className="text-white text-xl font-serif">
          Youban Karki
        </p>
        <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] mt-1">
          Based in Nepal
        </p>
      </motion.div>

      <AnimatePresence>
        {!selectedSection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-5xl px-4 z-10"
          >
            <svg
              ref={houseRef}
              viewBox="0 0 800 600"
              className="w-full h-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.8)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="house-grad" x1="400" y1="80" x2="400" y2="500" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1a1a1a" />
                  <stop offset="1" stopColor="#0a0a0a" />
                </linearGradient>
              </defs>

              <path
                d="M120 500 L120 260 L400 80 L680 260 L680 500 Z"
                fill="url(#house-grad)"
                stroke="#222"
                strokeWidth="1"
              />

              <path d="M110 265 L400 70 L690 265" stroke="#2a2a2a" strokeWidth="12" strokeLinecap="round" />
              <path d="M110 265 L400 70 L690 265" stroke="#111" strokeWidth="2" strokeLinecap="round" transform="translate(0, 4)" />

              <g transform="translate(200, 260)">
                <Window id="window-about" label="The Architect" onClick={() => handleWindowClick('about')} />
              </g>
              <g transform="translate(500, 260)">
                <Window id="window-projects" label="Blueprints" onClick={() => handleWindowClick('projects')} />
              </g>
              <g transform="translate(200, 410)">
                <Window id="window-timeline" label="Chronology" onClick={() => handleWindowClick('timeline')} />
              </g>
              <g transform="translate(500, 410)">
                <Window id="window-contact" label="Correspondence" onClick={() => handleWindowClick('contact')} />
              </g>

              <g transform="translate(365, 410)">
                <rect x="0" y="0" width="70" height="90" fill="#0d0d0d" />
                <rect x="4" y="4" width="62" height="86" fill="#1a0f0f" stroke="#221111" />
                <circle cx="54" cy="45" r="2.5" fill="#443322" />
              </g>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedSection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-[#030303] flex flex-col items-center p-8 md:p-16 overflow-y-auto"
          >
            <div className="max-w-6xl w-full">
              <header className="flex justify-between items-center mb-16">
                <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight capitalize">
                  {selectedSection === 'about' ? 'The Architect' : 
                   selectedSection === 'projects' ? 'Blueprints' :
                   selectedSection === 'timeline' ? 'Chronology' : 'Correspondence'}
                </h2>
                <button
                  onClick={closeSection}
                  className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-colors"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em]">Exit Room</span>
                  <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-white transition-colors">
                    <span className="text-lg">×</span>
                  </div>
                </button>
              </header>

              <div className="w-full h-px bg-zinc-900 mb-16" />
              
              <div className="pb-24">
                {renderSectionContent()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
