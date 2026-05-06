'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Compass, GraduationCap, Trophy } from 'lucide-react'

export default function About() {
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
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <h1 className="text-huge">
              ABOUT <br /> <span className="text-outline">STUDIO.</span>
            </h1>
            <div className="space-y-6">
              <p className="text-2xl font-serif text-accent-terracotta italic">
                &ldquo;Architecture is the learned game, correct and magnificent, of forms assembled in the light.&rdquo;
              </p>
              <p className="text-zinc-500 leading-relaxed text-lg">
                Driven computer science student passionate about building intelligent systems that streamline workflows and enhance security. 
                Skilled in modern web technologies, backend optimization, and AI integration.
              </p>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1 bg-zinc-100">
            {achievements.map((achievement, i) => (
              <div key={i} className="bg-background p-12 space-y-6 hover:bg-accent-blue/5 transition-colors group">
                <Trophy className="text-accent-terracotta group-hover:scale-110 transition-transform" size={32} />
                <p className="text-zinc-600 font-medium leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline Section */}
          <div className="space-y-16">
            <div className="flex justify-between items-end border-b-2 border-foreground pb-8">
              <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tighter">CHRONOLOGY</h2>
              <Compass className="text-accent-terracotta animate-spin-slow" size={48} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-4"
                >
                  <span className="text-5xl font-serif font-black text-outline opacity-20 block">{item.year}</span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <GraduationCap size={20} className="text-accent-terracotta" />
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
