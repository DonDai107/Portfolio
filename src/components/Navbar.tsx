'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-black tracking-tighter group">
          YB.K<span className="text-accent-magenta group-hover:text-accent-cyan transition-colors">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-colors hover:text-accent-cyan ${pathname === link.path ? 'text-accent-cyan' : 'text-zinc-500'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="px-6 py-2 bg-foreground text-background text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-accent-violet transition-colors"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/5 flex flex-col items-center py-12 gap-8 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-serif font-black transition-colors ${pathname === link.path ? 'text-accent-cyan' : 'text-foreground'}`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
