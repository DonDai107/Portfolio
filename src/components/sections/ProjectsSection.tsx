'use client'

import React from 'react'
import { ExternalLink, Layers, Terminal } from 'lucide-react'

interface Project {
  _id: string
  title: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainImage?: any
  technologies: string[]
  demoUrl: string
}

interface ProjectsSectionProps {
  projects: Project[]
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  // Hardcoded projects from portfolio-config.md as fallbacks/primary data
  const configProjects: Project[] = [
    {
      _id: 'p1',
      title: 'AI Workflow & Security Suite',
      description: 'Built an integrated system combining workflow automation with backend security optimization. Uses Next.js, Python, and LLMs to streamline repetitive tasks while detecting vulnerabilities in client applications.',
      technologies: ['Next.js', 'Python', 'LLMs', 'Security'],
      demoUrl: '#'
    },
    {
      _id: 'p2',
      title: 'AI Workflow Optimizer',
      description: 'Developed a tool that automates repetitive academic and personal tasks, improving efficiency by 40% through intelligent scheduling and API integrations.',
      technologies: ['Automation', 'API', 'Intelligent Scheduling'],
      demoUrl: '#'
    },
    {
      _id: 'p3',
      title: 'Cybersecurity Awareness App',
      description: 'Designed and deployed a gamified mobile/web app teaching students security basics, with interactive quizzes and progress tracking.',
      technologies: ['React Native', 'Gamification', 'Security'],
      demoUrl: '#'
    },
    {
      _id: 'p4',
      title: 'Backend Security Optimizer',
      description: 'Created a prototype backend service that uses LLMs to analyze logs and detect vulnerabilities, providing automated remediation suggestions.',
      technologies: ['LLMs', 'Logging', 'Security'],
      demoUrl: '#'
    },
    {
      _id: 'p5',
      title: 'Smart Portfolio Site',
      description: 'Built a dynamic portfolio powered by Next.js and Sanity CMS, integrating animations, project showcases, and Resend API for contact forms.',
      technologies: ['Next.js', 'Sanity CMS', 'Resend API'],
      demoUrl: '#'
    },
    {
      _id: 'p6',
      title: '3D Visualization Playground',
      description: 'Experimented with WebGL and Three.js to render interactive 3D models, including rotating geometric shapes and animated data visualizations.',
      technologies: ['WebGL', 'Three.js', '3D Modeling'],
      demoUrl: '#'
    }
  ]

  const displayProjects = projects && projects.length > 0 ? projects : configProjects

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayProjects.map((project, i) => (
        <div 
          key={project._id}
          className="group relative bg-white border border-zinc-100 p-8 flex flex-col gap-6 transition-all duration-500 hover:border-accent-terracotta hover:shadow-[0_20px_40px_rgba(183,92,30,0.05)]"
        >
          {/* Architectural Index */}
          <span className="absolute top-4 right-4 text-[9px] font-mono text-zinc-300 group-hover:text-accent-terracotta transition-colors">
            BP-{String(i + 1).padStart(3, '0')}
          </span>

          <div className="space-y-3">
            <h3 className="text-2xl font-serif text-foreground group-hover:text-accent-terracotta transition-colors">
              {project.title}
            </h3>
            <div className="w-12 h-0.5 bg-accent-terracotta/20 group-hover:w-full transition-all duration-700" />
          </div>

          <p className="text-sm text-zinc-500 leading-relaxed flex-1">
            {project.description}
          </p>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span 
                  key={tech}
                  className="flex items-center gap-1.5 px-2 py-1 bg-zinc-50 text-zinc-400 text-[9px] uppercase tracking-wider font-bold rounded-sm border border-zinc-100 group-hover:border-accent-blue/20 group-hover:text-accent-blue transition-colors"
                >
                  <Terminal className="w-2.5 h-2.5" />
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-zinc-50 group-hover:border-accent-terracotta/10 transition-colors">
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground hover:text-accent-terracotta transition-colors"
              >
                Inspect Build <ExternalLink className="w-3 h-3" />
              </a>
              <Layers className="w-4 h-4 text-zinc-200 group-hover:text-accent-terracotta/20 transition-colors" />
            </div>
          </div>

          {/* Blueprint Detail Line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent-terracotta scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700" />
        </div>
      ))}
    </div>
  )
}
