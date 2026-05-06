'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Milestone } from '@/lib/types'
import { Calendar, Compass } from 'lucide-react'

interface TimelineSectionProps {
  milestones: Milestone[]
}

export const TimelineSection = ({ milestones }: TimelineSectionProps) => {
  const careerMilestones = [
    { _id: 'm1', year: "2021", title: "The Foundation", description: "Completed 10th grade, marking the start of a disciplined academic journey." },
    { _id: 'm2', year: "2023", title: "Advanced Leveling", description: "Graduated CAIE A-Levels from St. Xavier’s College, Maitighar, specializing in analytical sciences." },
    { _id: 'm3', year: "2024", title: "Architectural Entry", description: "Began BSc CSIT at Tribhuvan University, diving deep into computer science and intelligent systems." },
    { _id: 'm4', year: "2025", title: "Modern Synthesis", description: "Started building AI-driven workflow projects and client-focused backend security optimization models." }
  ]

  const items = milestones && milestones.length > 0 ? milestones : careerMilestones

  return (
    <div className="relative max-w-5xl mx-auto py-24">
      {/* Structural Beam */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-100 -translate-x-1/2 overflow-hidden">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-full bg-accent-terracotta/30"
        />
      </div>

      <div className="space-y-32">
        {items.map((milestone, index) => (
          <motion.div
            key={milestone._id || index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            className={`relative flex items-center justify-between gap-12 md:gap-24 ${
              index % 2 === 0 ? "flex-row md:flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Content Box */}
            <div className={`w-full md:w-[42%] ${index % 2 === 0 ? "text-left md:text-right" : "text-left"}`}>
              <div className="group relative">
                {/* Year Marker */}
                <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "justify-start md:justify-end" : "justify-start"}`}>
                  <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-accent-terracotta">
                    REF.{milestone.year}
                  </span>
                  <div className="w-8 h-px bg-zinc-200" />
                </div>

                <h3 className="text-3xl font-serif text-foreground mb-4 group-hover:text-accent-terracotta transition-colors">
                  {milestone.title}
                </h3>
                
                <p className="text-sm text-zinc-500 leading-relaxed max-w-md ml-auto mr-auto md:ml-0 md:mr-0">
                  {milestone.description}
                </p>

                {/* Coordinates (Decorative) */}
                <div className={`mt-6 flex items-center gap-3 text-[9px] font-mono text-zinc-300 ${index % 2 === 0 ? "justify-start md:justify-end" : "justify-start"}`}>
                  <Compass className="w-3 h-3" />
                  <span>27.7172° N, 85.3240° E</span>
                </div>
              </div>
            </div>

            {/* Pivot Point */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10 flex items-center justify-center">
              <div className="w-full h-full bg-background border border-accent-terracotta rotate-45 group-hover:bg-accent-terracotta transition-colors duration-500" />
              <div className="absolute w-1 h-1 bg-accent-terracotta rounded-full" />
            </div>

            {/* Date Badge */}
            <div className="hidden md:flex w-[42%] items-center justify-start md:justify-end opacity-20 group-hover:opacity-100 transition-opacity">
               <div className={`flex items-center gap-3 text-zinc-400 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                 <Calendar className="w-4 h-4" />
                 <span className="text-[10px] uppercase tracking-widest font-bold">Standard Schedule</span>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Finishing Detail */}
      <div className="absolute bottom-0 left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center">
         <div className="w-px h-full bg-zinc-100" />
      </div>
    </div>
  )
}
