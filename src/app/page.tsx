'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code2, Shield, Zap, Trophy, GraduationCap, Compass, ExternalLink, Terminal, Layers } from 'lucide-react'

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }

  const achievements = [
    "Organized and led a cybersecurity awareness workshop for peers, introducing best practices in digital safety.",
    "Developed interactive web applications focusing on usability and performance.",
    "Contributed to open-source UI/UX projects, improving accessibility and design consistency.",
    "Built automation workflows to optimize productivity in academic and personal projects.",
    "Recognized for strong analytical and communication skills through competitive academic performance."
  ]

  const timeline = [
    { year: "2021", title: "Completed 10th grade", desc: "Foundational academic milestone." },
    { year: "2023", title: "CAIE A-Levels", desc: "Graduated from St. Xavier’s College, Maitighar." },
    { year: "2024", title: "BSc CSIT", desc: "Started Computer Science degree at Tribhuvan University." },
    { year: "2025", title: "AI & Security", desc: "Began building AI-driven workflow and backend security models." },
  ]

  const projects = [
    {
      title: 'AI Workflow & Security Suite',
      tagline: 'Flagship System',
      desc: 'Built an integrated system combining workflow automation with backend security optimization. Uses Next.js, Python, and LLMs.',
      tech: ['Next.js', 'Python', 'LLMs', 'Security'],
      link: '#'
    },
    {
      title: 'AI Workflow Optimizer',
      tagline: 'Efficiency Tool',
      desc: 'Developed a tool that automates repetitive academic and personal tasks, improving efficiency by 40%.',
      tech: ['Automation', 'API', 'Scheduling'],
      link: '#'
    },
    {
      title: 'Cybersecurity Awareness App',
      tagline: 'Educational App',
      desc: 'Designed and deployed a gamified mobile/web app teaching students security basics.',
      tech: ['React Native', 'Gamification', 'Security'],
      link: '#'
    },
    {
      title: 'Backend Security Optimizer',
      tagline: 'Security Model',
      desc: 'Prototype backend service that uses LLMs to analyze logs and detect vulnerabilities.',
      tech: ['LLMs', 'Logging', 'Security'],
      link: '#'
    }
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="blob w-[600px] h-[600px] bg-accent-cyan/20 -top-48 -left-48" />
      <div className="blob w-[500px] h-[500px] bg-accent-violet/20 bottom-0 right-0" />

      {/* Hero Section */}
      <section className="section-padding min-h-[90vh] flex flex-col justify-center relative z-10">
        <div className="max-w-7xl mx-auto w-full space-y-12">
          <div className="space-y-6">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent-cyan"
            >
              Software Developer & AI Engineer
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-huge"
            >
              YOUBAN <br /> <span className="text-outline text-neon-cyan">KARKI.</span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-12 items-start md:items-end"
          >
            <p className="max-w-md text-lg text-zinc-400 leading-relaxed font-light">
              Driven by the pursuit of intelligent systems that streamline workflows and enhance security. 
              Currently building AI-driven solutions at Tribhuvan University.
            </p>
            <Link 
              href="/projects" 
              className="group flex items-center gap-4 text-2xl font-serif font-black hover:text-accent-cyan transition-colors"
            >
              View All Works <ArrowRight className="group-hover:translate-x-2 transition-transform text-accent-magenta" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Flagship Project Highlight */}
      <section className="section-padding relative z-10">
        <motion.div 
          {...fadeInUp}
          className="max-w-7xl mx-auto glass rounded-[2rem] p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center overflow-hidden"
        >
          <div className="space-y-8 relative z-10">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-magenta">Flagship Project</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter leading-tight">
                AI Workflow & <br /> <span className="text-accent-cyan">Security Suite</span>
              </h2>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed">
              An integrated system combining workflow automation with backend security optimization. 
              Uses Next.js, Python, and LLMs to streamline repetitive tasks while detecting vulnerabilities.
            </p>
            <div className="flex gap-8">
              <div className="flex items-center gap-3 text-accent-cyan font-bold text-[10px] uppercase tracking-widest">
                <Shield size={20} className="text-accent-magenta" /> Security
              </div>
              <div className="flex items-center gap-3 text-accent-cyan font-bold text-[10px] uppercase tracking-widest">
                <Zap size={20} className="text-accent-magenta" /> Automation
              </div>
            </div>
            <Link 
              href="/projects" 
              className="inline-block px-10 py-5 bg-foreground text-background text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-accent-violet transition-colors"
            >
              Explore Build Details
            </Link>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden glass group">
            <div className="absolute inset-0 flex items-center justify-center p-12">
               <div className="w-full h-full border-2 border-accent-cyan/10 rounded-full animate-spin-slow flex items-center justify-center">
                 <div className="w-3/4 h-3/4 border-2 border-accent-magenta/10 rounded-full animate-reverse-spin flex items-center justify-center">
                   <Code2 className="text-accent-cyan w-24 h-24 blur-sm opacity-50 absolute" />
                   <Code2 className="text-accent-cyan w-24 h-24 relative z-10" />
                 </div>
               </div>
            </div>
            {/* Ambient Light Effect */}
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent-magenta/20 blur-[100px]" />
          </div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto space-y-20">
          <motion.div {...fadeInUp} className="space-y-4">
            <h2 className="text-huge">
              THE <br /> <span className="text-outline text-neon-cyan">STUDIO.</span>
            </h2>
            <p className="max-w-2xl text-xl text-accent-magenta font-serif italic">
              &ldquo;Architecture is the learned game, correct and magnificent, of forms assembled in the light.&rdquo;
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                className="glass p-12 space-y-6 hover:border-accent-cyan/40 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-cyan/5 blur-3xl rounded-full" />
                <Trophy className="text-accent-cyan group-hover:scale-110 group-hover:rotate-12 transition-transform" size={32} />
                <p className="text-zinc-300 font-medium leading-relaxed relative z-10">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding relative z-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto space-y-20">
          <motion.div {...fadeInUp} className="flex justify-between items-end border-b border-white/10 pb-8">
            <h2 className="text-huge">CHRONO<span className="text-outline text-neon-cyan">LOGY.</span></h2>
            <Compass className="text-accent-magenta animate-spin-slow hidden md:block" size={64} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                className="space-y-4 group"
              >
                <span className="text-5xl font-serif font-black text-outline opacity-10 group-hover:opacity-30 transition-opacity block">{item.year}</span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold flex items-center gap-2 group-hover:text-accent-cyan transition-colors">
                    <GraduationCap size={20} className="text-accent-magenta" />
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto space-y-20">
          <motion.h2 {...fadeInUp} className="text-huge">
            BUILT <br /> <span className="text-outline text-neon-cyan">WORKS.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                className="glass p-12 md:p-16 space-y-8 group hover:border-accent-magenta/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-accent-magenta/5 blur-3xl rounded-full group-hover:bg-accent-magenta/10 transition-colors" />
                
                <div className="flex justify-between items-start relative z-10">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-cyan group-hover:text-accent-magenta transition-colors">{project.tagline}</span>
                    <h3 className="text-4xl md:text-5xl font-serif font-black tracking-tighter leading-tight group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <Layers className="text-white/10 group-hover:text-accent-magenta/40 transition-colors" size={40} />
                </div>

                <p className="text-zinc-400 group-hover:text-zinc-200 text-lg leading-relaxed relative z-10">
                  {project.desc}
                </p>

                <div className="space-y-10 relative z-10">
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span key={t} className="flex items-center gap-2 px-3 py-1 border border-white/5 bg-white/5 text-[10px] uppercase tracking-widest font-bold text-zinc-500 group-hover:text-accent-cyan group-hover:border-accent-cyan/20 transition-colors">
                        <Terminal size={12} className="text-accent-magenta" /> {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 border-b-2 border-accent-cyan/20 pb-2 hover:text-accent-magenta hover:border-accent-magenta transition-colors"
                  >
                    Inspect Build <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-4 text-2xl font-serif font-black hover:text-accent-cyan transition-colors"
            >
              Explore Full Archive <ArrowRight className="text-accent-magenta" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-20 border-y border-white/5 overflow-hidden">
        <div className="animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-16 items-center px-12">
              <span className="text-4xl md:text-6xl font-serif font-black opacity-10">WORKFLOW OPTIMIZATION</span>
              <span className="text-4xl md:text-6xl font-serif font-black text-accent-magenta italic opacity-20">AI INTEGRATION</span>
              <span className="text-4xl md:text-6xl font-serif font-black opacity-10 text-outline">BACKEND SECURITY</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
