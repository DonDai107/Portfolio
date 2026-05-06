'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Compass, GraduationCap, Trophy } from 'lucide-react'

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
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

  return (
    <div className="relative">
      <div className="blob w-[500px] h-[500px] bg-accent-violet/10 -top-24 -right-24" />
      
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <motion.h1 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-huge"
            >
              ABOUT <br /> <span className="text-outline text-neon-cyan">STUDIO.</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-2xl font-serif text-accent-magenta italic">
                &ldquo;Architecture is the learned game, correct and magnificent, of forms assembled in the light.&rdquo;
              </p>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Driven computer science student passionate about building intelligent systems that streamline workflows and enhance security. 
                Skilled in modern web technologies, backend optimization, and AI integration.
              </p>
            </motion.div>
          </div>

          {/* Achievements Grid */}
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

          {/* Timeline Section */}
          <div className="space-y-20">
            <div className="flex justify-between items-end border-b border-white/10 pb-8">
              <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tighter">CHRONOLOGY</h2>
              <Compass className="text-accent-magenta animate-spin-slow" size={48} />
            </div>

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
        </div>
      </section>
    </div>
  )
}
