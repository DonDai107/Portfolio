'use client'

import React, { useState } from 'react'
import { Send } from 'lucide-react'

export const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="space-y-8">
        <p className="text-zinc-400 text-lg">
          Whether you have a question or just want to say hi, my inbox is always open.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Name</label>
              <input 
                required
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Email</label>
              <input 
                required
                name="email"
                type="email"
                placeholder="your@email.com"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Message</label>
            <textarea 
              required
              name="message"
              rows={5}
              placeholder="Tell me about your vision..."
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
            />
          </div>

          <button
            disabled={status === 'sending'}
            className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-colors disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          {status === 'success' && (
            <p className="text-green-500 text-sm">Message delivered to the architect&rsquo;s desk.</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-sm">Failed to send. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  )
}
