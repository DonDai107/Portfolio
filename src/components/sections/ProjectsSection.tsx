'use client'

import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
interface Project {
  _id: string
  title: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainImage: any
  technologies: string[]
  demoUrl: string
}

interface ProjectsSectionProps {
  projects: Project[]
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  if (!projects || projects.length === 0) return <p>No blueprints found in the archives.</p>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {projects.map((project) => (
        <div 
          key={project._id}
          className="group relative bg-zinc-900/40 border border-zinc-800/50 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors"
        >
          {project.mainImage && (
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={urlFor(project.mainImage).url()}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            </div>
          )}
          
          <div className="p-6 space-y-4">
            <h3 className="text-2xl font-serif text-white">{project.title}</h3>
            <p className="text-zinc-400 line-clamp-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span 
                  key={tech}
                  className="px-2 py-1 bg-zinc-800 text-zinc-500 text-[10px] uppercase tracking-wider rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {project.demoUrl && (
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs uppercase tracking-[0.2em] text-white border-b border-zinc-700 pb-1 hover:border-white transition-colors"
              >
                View Project
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
