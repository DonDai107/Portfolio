'use client'

import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { client } from '@/lib/sanity'
import { bioQuery, milestonesQuery } from '@/lib/queries'
import { AboutSection } from './sections/AboutSection'
import { TimelineSection } from './sections/TimelineSection'
import { ProjectBox } from './ProjectBox'
import { Bio, Milestone } from '@/lib/types'

interface WindowProps {
  id: string
  label: string
  onClick: () => void
  side: 'left' | 'right'
  className?: string
}

const ShutterWindow = ({ id, label, onClick, side, className }: WindowProps) => {
  const shutterRef = useRef<SVGRectElement>(null)

  const handleHover = () => {
    gsap.to(shutterRef.current, {
      rotateY: side === 'left' ? -100 : 100,
      duration: 0.8,
      ease: 'back.out(1.7)',
      transformOrigin: side === 'left' ? 'left center' : 'right center'
    })
  }

  const handleHoverExit = () => {
    gsap.to(shutterRef.current, {
      rotateY: 0,
      duration: 0.8,
      ease: 'power2.inOut'
    })
  }

  return (
    <g
      id={id}
      className={cn('group cursor-pointer perspective-1000', className)}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
    >
      {/* Window Frame */}
      <rect x="0" y="0" width="80" height="100" fill="#2a1a0a" stroke="#1a0a00" strokeWidth="2" />
      {/* Window Glass */}
      <rect x="5" y="5" width="70" height="90" fill="#a5d8ff" fillOpacity="0.4" />
      <line x1="40" y1="5" x2="40" y2="95" stroke="#1a0a00" strokeWidth="1" />
      <line x1="5" y1="50" x2="75" y2="50" stroke="#1a0a00" strokeWidth="1" />
      
      {/* Shutter */}
      <rect
        ref={shutterRef}
        x={side === 'left' ? 0 : 0}
        y="0"
        width="80"
        height="100"
        fill="#5c3d2e"
        stroke="#3d2b1f"
        strokeWidth="1"
        className="transition-transform"
      />
      
      {/* Label */}
      <text
        x="40"
        y="125"
        textAnchor="middle"
        fill="#3d2b1f"
        className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-opacity font-serif"
      >
        {label}
      </text>
    </g>
  )
}

export const House = () => {
  const houseRef = useRef<SVGSVGElement>(null)
  const cloud1Ref = useRef<SVGGElement>(null)
  const cloud2Ref = useRef<SVGGElement>(null)
  const leafRefs = useRef<(SVGPathElement | null)[]>([])

  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [isDoorOpen, setIsDoorOpen] = useState(false)
  const [data, setData] = useState<{ bio: Bio | null; milestones: Milestone[] }>({ bio: null, milestones: [] })

  useEffect(() => {
    // Entrance
    gsap.from(houseRef.current, { opacity: 0, scale: 0.95, duration: 2, ease: 'power3.out' })

    // Cloud floating
    gsap.to(cloud1Ref.current, { x: 100, duration: 20, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    gsap.to(cloud2Ref.current, { x: -80, duration: 25, repeat: -1, yoyo: true, ease: 'sine.inOut' })

    // Leaf swaying
    leafRefs.current.forEach((leaf) => {
      if (leaf) {
        gsap.to(leaf, {
          rotate: 5,
          duration: 2 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          transformOrigin: 'bottom center'
        })
      }
    })

    // Fetch data
    const fetchData = async () => {
      const [bio, milestones] = await Promise.all([
        client.fetch(bioQuery),
        client.fetch(milestonesQuery),
      ])
      setData({ bio, milestones })
    }
    fetchData()
  }, [])

  const openDoor = () => {
    setIsDoorOpen(true)
    gsap.to('#main-door', {
      rotateY: -110,
      duration: 1.2,
      ease: 'power2.inOut',
      transformOrigin: 'left center'
    })
    // Zoom into door
    gsap.to(houseRef.current, {
      scale: 5,
      x: 0,
      y: 200,
      opacity: 0,
      duration: 1.5,
      ease: 'power4.inOut'
    })
  }

  const closeInterior = () => {
    setIsDoorOpen(false)
    gsap.to('#main-door', { rotateY: 0, duration: 0.8 })
    gsap.to(houseRef.current, { scale: 1, x: 0, y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' })
  }

  const handleWindowClick = (section: string) => {
    setSelectedSection(section)
    gsap.to(houseRef.current, { scale: 1.1, opacity: 0.2, filter: 'blur(10px)', duration: 1 })
  }

  const closeSection = () => {
    setSelectedSection(null)
    gsap.to(houseRef.current, { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1 })
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#87CEEB] overflow-hidden">
      {/* Intro Text */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
        className="absolute top-8 left-8 z-30"
      >
        <h1 className="text-orange-800 text-[10px] uppercase tracking-[0.5em] mb-1 font-bold">
          Digital Architect
        </h1>
        <p className="text-zinc-900 text-2xl font-serif">
          Youban Karki
        </p>
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mt-1 italic">
          Based in Nepal
        </p>
      </motion.div>

      {/* Text Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-8 right-8 z-30 pointer-events-none"
      >
        <p className="text-zinc-800 font-serif text-lg md:text-xl italic">
          Open the windows and the door.
        </p>
      </motion.div>

      <svg
        ref={houseRef}
        viewBox="0 0 800 600"
        className="w-full h-auto max-w-6xl drop-shadow-xl z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Clouds */}
        <g ref={cloud1Ref} opacity="0.6">
          <circle cx="100" cy="80" r="30" fill="white" />
          <circle cx="140" cy="80" r="40" fill="white" />
          <circle cx="180" cy="80" r="30" fill="white" />
        </g>
        <g ref={cloud2Ref} opacity="0.4">
          <circle cx="600" cy="120" r="25" fill="white" />
          <circle cx="640" cy="120" r="35" fill="white" />
          <circle cx="680" cy="120" r="25" fill="white" />
        </g>

        {/* Grass & Hill */}
        <path d="M0 600 Q400 500 800 600 L800 600 L0 600 Z" fill="#3FA34D" />
        
        {/* Pathway */}
        <path d="M400 600 L380 500 L420 500 L440 600 Z" fill="#b1a296" />

        {/* Banana Tree (Simplified SVG) */}
        <g transform="translate(100, 350)">
          <rect x="0" y="0" width="10" height="150" fill="#5c3d2e" />
          <path ref={el => { if (el) leafRefs.current[0] = el }} d="M5 -20 Q40 -60 80 -20 Q40 20 5 -20" fill="#4CAF50" />
          <path ref={el => { if (el) leafRefs.current[1] = el }} d="M5 -20 Q-30 -60 -70 -20 Q-30 20 5 -20" fill="#388E3C" />
        </g>

        {/* Jackfruit Tree (Simplified) */}
        <g transform="translate(650, 300)">
          <rect x="0" y="0" width="20" height="200" fill="#3d2b1f" />
          <circle cx="10" cy="0" r="80" fill="#2E7D32" />
          <circle cx="-30" cy="-30" r="60" fill="#1B5E20" />
          <circle cx="50" cy="-20" r="50" fill="#388E3C" />
        </g>

        {/* House Exterior */}
        <g transform="translate(200, 250)">
          {/* Main Walls */}
          <rect x="0" y="50" width="400" height="200" fill="#F5E6C8" stroke="#e1d1b5" strokeWidth="2" />
          
          {/* Roof */}
          <path d="M-20 50 L200 -30 L420 50 Z" fill="#B35C1E" stroke="#8b4513" strokeWidth="2" />
          
          {/* Windows */}
          <ShutterWindow id="win-achievements" label="Achievements" side="left" onClick={() => handleWindowClick('about')} className="translate-x-[40px] translate-y-[80px]" />
          <ShutterWindow id="win-career" label="Career" side="right" onClick={() => handleWindowClick('timeline')} className="translate-x-[280px] translate-y-[80px]" />

          {/* Door */}
          <g transform="translate(160, 100)" className="perspective-1000">
            {/* Door Frame */}
            <rect x="0" y="0" width="80" height="150" fill="#1a0a00" />
            <rect x="5" y="5" width="70" height="145" fill="#000" /> {/* Interior mask */}
            
            <g id="main-door" onClick={openDoor} className="cursor-pointer group">
              <rect x="0" y="0" width="80" height="150" fill="#5c3d2e" stroke="#3d2b1f" strokeWidth="2" />
              <circle cx="65" cy="80" r="4" fill="#ffd700" /> {/* Brass knob */}
              <text x="40" y="170" textAnchor="middle" fill="#3d2b1f" className="text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity font-serif uppercase tracking-widest">Enter</text>
            </g>
          </g>
        </g>
      </svg>

      {/* Interior Reveal */}
      <AnimatePresence>
        {isDoorOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="absolute inset-0 z-40 flex items-center justify-center p-8 bg-[#2a1a0a]/95 backdrop-blur-md"
          >
            <div className="relative w-full max-w-5xl h-[80vh] bg-[#3d2b1f] border-8 border-[#2a1a0a] rounded-lg shadow-2xl p-8 md:p-12 overflow-hidden">
              {/* Wooden Beams Texture */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #000, #000 2px, transparent 2px, transparent 100px)' }} />
              
              <button
                onClick={closeInterior}
                className="absolute top-6 right-6 text-orange-200/50 hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px]"
              >
                Return to Garden [ESC]
              </button>

              <div className="relative h-full flex flex-col">
                <header className="mb-12">
                  <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">The Inner Sanctuary</h2>
                  <div className="w-24 h-1 bg-orange-600 mt-4" />
                </header>

                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 content-start overflow-y-auto pr-4 custom-scrollbar">
                  <ProjectBox label="Chronology" tagline="A legacy in time" />
                  <ProjectBox label="Blueprints" tagline="Architectural visions" />
                  <ProjectBox label="Correspondence" tagline="Letters from abroad" />
                  <ProjectBox label="Portfolio Site" tagline="This very abode" />
                  <ProjectBox label="3D Visualization" tagline="Depth and dimension" />
                  <ProjectBox label="Interactive Resume" tagline="A living document" />
                  <ProjectBox label="Design System" tagline="Rules of harmony" />
                  <ProjectBox label="Animation Showcase" tagline="Motion is life" />
                </div>
              </div>

              {/* Background Details */}
              <div className="absolute bottom-8 right-12 opacity-20 hidden md:block">
                <div className="w-32 h-24 bg-zinc-900 rounded-sm" /> {/* Desk */}
                <div className="w-8 h-12 bg-orange-900 absolute -top-12 right-12 rounded-full blur-xl" /> {/* Lamp Glow */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay Sections (Achievements / Career) */}
      <AnimatePresence>
        {selectedSection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-[#fdf5e6]/40 backdrop-blur-lg flex flex-col items-center p-8 md:p-16 overflow-y-auto"
          >
            <div className="max-w-6xl w-full">
              <header className="flex justify-between items-center mb-16">
                <h2 className="text-3xl md:text-5xl font-serif text-zinc-900 tracking-tight capitalize">
                  {selectedSection === 'about' ? 'Achievements' : 'Career Chronology'}
                </h2>
                <button
                  onClick={closeSection}
                  className="group flex items-center gap-3 text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em]">Leave Room</span>
                  <div className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center group-hover:border-zinc-900 transition-colors">
                    <span className="text-lg">×</span>
                  </div>
                </button>
              </header>

              <div className="pb-24">
                {selectedSection === 'about' ? <AboutSection data={data.bio!} /> : <TimelineSection milestones={data.milestones} />}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
