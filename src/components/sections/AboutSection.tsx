'use client'

import React from 'react'
import { PortableText } from '@portabletext/react'
import { Bio } from '@/lib/types'

interface AboutSectionProps {
  data: Bio
}

export const AboutSection = ({ data }: AboutSectionProps) => {
  if (!data) return <p>Loading biography...</p>

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h3 className="text-zinc-500 uppercase tracking-widest text-sm font-medium">
            The Architect
          </h3>
          <div className="prose prose-invert prose-lg max-w-none">
            <PortableText value={data.content} />
          </div>
        </div>
        
        <div className="space-y-8 bg-zinc-900/30 p-8 rounded-lg border border-zinc-800/50">
          <h3 className="text-zinc-500 uppercase tracking-widest text-sm font-medium">
            Philosophy
          </h3>
          <p className="text-2xl font-serif text-zinc-300 italic leading-snug">
            &ldquo;{data.philosophy}&rdquo;
          </p>
        </div>
      </div>
    </div>
  )
}
