'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Milestone } from '@/lib/types'

interface TimelineSectionProps {
  milestones: Milestone[]
}

export const TimelineSection = ({ milestones }: TimelineSectionProps) => {
  const careerMilestones = [
    { year: "2022", title: "The Foundation", description: "Began journey as a digital architect, exploring the intersection of design and code." },
    { year: "2023", title: "Immersive Design", description: "Designed and built immersive portfolio experiences that tell stories through interaction." },
    { year: "2024", title: "Collaborative Growth", description: "Collaborated on creative web projects for international clients, refining the craft." },
    { year: "2025", title: "Cinematic Narrative", description: "Focused on animation-driven storytelling and high-fidelity UI architectures." }
  ]

  // Use CMS milestones if available, otherwise use hardcoded ones
  const items = milestones && milestones.length > 0 ? milestones : careerMilestones

  return (
    <div className="relative max-w-4xl mx-auto py-12">
      {/* Central Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 -translate-x-1/2" />

      <div className="space-y-24">
        {items.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative flex items-center justify-between gap-8 md:gap-16 ${
              index % 2 === 0 ? "flex-row md:flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Content Box */}
            <div className={`w-full md:w-[45%] ${index % 2 === 0 ? "text-left md:text-right" : "text-left"}`}>
              <div className="bg-white p-6 rounded-xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow group">
                <span className="text-sm font-mono text-orange-600 font-bold tracking-widest mb-2 block">
                  {milestone.year}
                </span>
                <h3 className="text-2xl font-serif text-zinc-900 mb-3 group-hover:text-orange-800 transition-colors">
                  {milestone.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-sm">
                  {milestone.description}
                </p>
              </div>
            </div>

            {/* Dot on line */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-orange-400 border-4 border-white shadow-sm -translate-x-1/2 z-10" />

            {/* Empty space for layout balance */}
            <div className="hidden md:block w-[45%]" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
