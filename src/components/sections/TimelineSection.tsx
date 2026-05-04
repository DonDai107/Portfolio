'use client'

import React from 'react'

interface Milestone {
  _id: string
  year: string
  title: string
  description: string
}

interface TimelineSectionProps {
  milestones: Milestone[]
}

export const TimelineSection = ({ milestones }: TimelineSectionProps) => {
  if (!milestones || milestones.length === 0) return <p>The scrolls of time are empty.</p>

  return (
    <div className="relative border-l border-zinc-800 ml-4 md:ml-0 md:pl-0 animate-in fade-in slide-in-from-left-4 duration-1000">
      <div className="space-y-12">
        {milestones.map((milestone) => (
          <div key={milestone._id} className="relative pl-8 md:pl-12">
            {/* Dot */}
            <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-zinc-700 border-2 border-zinc-950" />
            
            <div className="space-y-2">
              <span className="text-sm font-mono text-zinc-500 tracking-tighter">
                {milestone.year}
              </span>
              <h3 className="text-xl font-serif text-white">{milestone.title}</h3>
              <p className="text-zinc-400 max-w-2xl leading-relaxed">
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
