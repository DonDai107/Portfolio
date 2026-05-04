'use client'

import React from 'react'
import { PortableText } from '@portabletext/react'
import { Bio } from '@/lib/types'

interface AboutSectionProps {
  data: Bio
}

export const AboutSection = ({ data }: AboutSectionProps) => {
  const achievements = [
    "Built and deployed multiple interactive web experiences.",
    "Contributed to open-source design systems.",
    "Recognized for creative UI architecture and animation design.",
    "Designed immersive portfolio experiences for clients."
  ]

  return (
    <div className="parchment p-8 md:p-16 rounded-sm border border-orange-200/50 relative overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-orange-300/20 rounded-tr-xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-orange-300/20 rounded-bl-xl pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4">
          <h3 className="text-orange-800 uppercase tracking-[0.3em] text-xs font-bold">
            Distinguished Milestones
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 leading-tight">
            The Architect&rsquo;s Achievements
          </h2>
          <div className="w-24 h-px bg-orange-300 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h4 className="text-lg font-serif text-zinc-800 border-b border-orange-200 pb-2">
              Core Contributions
            </h4>
            <ul className="space-y-6">
              {achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="text-orange-400 font-serif text-xl mt-1">&sect;</span>
                  <p className="text-zinc-700 leading-relaxed group-hover:text-zinc-900 transition-colors">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-lg font-serif text-zinc-800 border-b border-orange-200 pb-2">
              Philosophical Foundation
            </h4>
            <p className="text-2xl font-serif text-orange-900 italic leading-relaxed bg-orange-50/50 p-6 rounded-lg border-l-4 border-orange-200">
              &ldquo;{data?.philosophy || "Architecture is the learned game, correct and magnificent, of forms assembled in the light."}&rdquo;
            </p>
            
            {data?.content && (
              <div className="prose prose-zinc prose-sm max-w-none opacity-80">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <PortableText value={data.content as any} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
