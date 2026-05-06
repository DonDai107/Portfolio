'use client'

import React from 'react'
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Contact() {
  const socials = [
    { name: 'GitHub', link: 'https://github.com/DonDai107', icon: <Github /> },
    { name: 'LinkedIn', link: 'https://linkedin.com/in/youbankarki', icon: <Linkedin /> },
    { name: 'Twitter', link: 'https://twitter.com/youbankarki', icon: <Twitter /> },
  ]

  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="blob w-[500px] h-[500px] bg-accent-blue -top-24 -right-24" />
      
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-20">
          <h1 className="text-huge">
            SAY <br /> <span className="text-outline">HELLO.</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent-terracotta">Electronic Mail</p>
                <a 
                  href="mailto:youbankarki95@gmail.com" 
                  className="text-3xl md:text-5xl font-serif font-black hover:text-accent-terracotta transition-colors flex items-center gap-4 break-all"
                >
                  youbankarki95@gmail.com <Mail className="text-accent-terracotta flex-shrink-0" size={32} />
                </a>
              </div>

              <div className="space-y-6">
                <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent-terracotta">Social Dimensions</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {socials.map((social) => (
                    <a 
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      className="group p-8 border border-zinc-100 flex flex-col justify-between aspect-square hover:bg-foreground hover:text-background transition-all duration-500"
                    >
                      <div className="text-accent-terracotta group-hover:text-accent-blue transition-colors">
                        {social.icon}
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{social.name}</span>
                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Note */}
            <div className="bg-zinc-50 p-12 md:p-16 space-y-8 relative">
              <div className="w-12 h-1 bg-accent-terracotta" />
              <h3 className="text-3xl font-serif font-black">AVAILABILITY</h3>
              <p className="text-zinc-500 leading-relaxed text-lg">
                I am currently open to collaboration on AI-driven projects, workflow automation, and backend security optimizations. 
                Whether you have a specific project in mind or just want to discuss the future of intelligent systems, I&rsquo;d love to hear from you.
              </p>
              <div className="pt-8 border-t border-zinc-200 flex items-center gap-4">
                <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Current Status: Accepting Inquiries</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
