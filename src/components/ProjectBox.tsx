'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface ProjectBoxProps {
  label: string
  tagline: string
  link?: string
  className?: string
}

export const ProjectBox = ({ label, tagline, link, className }: ProjectBoxProps) => {
  const boxRef = useRef<HTMLDivElement>(null)
  const lidRef = useRef<HTMLDivElement>(null)

  const handleHover = () => {
    gsap.to(lidRef.current, {
      rotateX: -110,
      y: -10,
      duration: 0.6,
      ease: 'back.out(1.7)'
    })
    gsap.to(boxRef.current, {
      scale: 1.05,
      boxShadow: '0 20px 40px rgba(183, 92, 30, 0.2)',
      duration: 0.4
    })
  }

  const handleHoverExit = () => {
    gsap.to(lidRef.current, {
      rotateX: 0,
      y: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    })
    gsap.to(boxRef.current, {
      scale: 1,
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      duration: 0.4
    })
  }

  return (
    <motion.div
      ref={boxRef}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
      className={`relative w-full aspect-square bg-[#3d2b1f] rounded-sm cursor-pointer perspective-1000 shadow-sm transition-all ${className}`}
      onClick={() => link && window.open(link, '_blank')}
    >
      {/* Interior Content (Visible when lid opens) */}
      <div className="absolute inset-2 bg-[#2a1a0a] rounded-sm flex flex-col items-center justify-center p-4 text-center">
        <p className="text-[10px] text-orange-200/60 uppercase tracking-widest mb-2">
          {label}
        </p>
        <p className="text-xs text-white font-serif leading-tight mb-3">
          {tagline}
        </p>
        <div className="flex items-center gap-1 text-[8px] text-orange-400 uppercase tracking-tighter">
          Explore <ExternalLink className="w-2 h-2" />
        </div>
      </div>

      {/* Box Lid */}
      <div
        ref={lidRef}
        className="absolute inset-0 bg-[#5c3d2e] rounded-sm border border-[#6e4a38] origin-top z-10 flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="w-12 h-1 bg-[#4a3125] rounded-full mb-1 opacity-50" />
        <p className="absolute bottom-3 text-[9px] text-orange-200/40 uppercase tracking-[0.2em]">
          {label}
        </p>
      </div>

      {/* Side Textures */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-[#2a1a0a] opacity-30" />
    </motion.div>
  )
}
