'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, Briefcase, Mail, Send } from 'lucide-react'

export default function Contact() {
  const socials = [
    { name: 'GitHub', link: 'https://github.com/DonDai107', icon: <Code2 /> },
    { name: 'LinkedIn', link: 'https://linkedin.com/in/youbankarki', icon: <Briefcase /> },
    { name: 'Twitter', link: 'https://twitter.com/youbankarki', icon: <Send /> },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }

  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="blob w-[500px] h-[500px] bg-accent-cyan/10 -top-24 -right-24" />
      
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-32">
          <motion.h1 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-huge"
          >
            SAY <br /> <span className="text-outline text-neon-cyan">HELLO.</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-16">
              <motion.div {...fadeInUp} className="space-y-6">
                <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent-magenta">Electronic Mail</p>
                <a 
                  href="mailto:youbankarki95@gmail.com" 
                  className="text-3xl md:text-5xl font-serif font-black hover:text-accent-cyan transition-colors flex items-center gap-4 break-all group"
                >
                  youbankarki95@gmail.com <Mail className="text-accent-magenta flex-shrink-0 group-hover:scale-110 transition-transform" size={32} />
                </a>
              </motion.div>

              <div className="space-y-6">
                <motion.p {...fadeInUp} className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent-magenta">Social Dimensions</motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {socials.map((social, i) => (
                    <motion.a 
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      {...fadeInUp}
                      transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                      className="group p-8 glass flex flex-col justify-between aspect-square hover:border-accent-cyan/40 transition-all duration-500"
                    >
                      <div className="text-accent-cyan group-hover:text-accent-magenta transition-colors">
                        {social.icon}
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{social.name}</span>
                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Note */}
            <motion.div 
              {...fadeInUp}
              className="glass p-12 md:p-16 space-y-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-cyan/20" />
              <div className="w-12 h-1 bg-accent-magenta" />
              <h3 className="text-3xl font-serif font-black">AVAILABILITY</h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                I am currently open to collaboration on AI-driven projects, workflow automation, and backend security optimizations. 
                Whether you have a specific project in mind or just want to discuss the future of intelligent systems, I&rsquo;d love to hear from you.
              </p>
              <div className="pt-8 border-t border-white/5 flex items-center gap-4">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">Current Status: Accepting Inquiries</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
