'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const CTA = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    )
  }, [])

  return (
    <div
      id='blog'
      ref={containerRef}
      className="bg-white/5 backdrop-blur-md border border-white/10 text-white p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto mt-30 flex flex-col lg:flex-row items-center justify-between gap-6 animate-fade-in"
    >
      <div className="flex-1 text-center lg:text-left space-y-4">
        <h2 className="text-3xl font-bold tracking-tight drop-shadow-lg">
          Still in Doubt?
        </h2>
        <p className="text-white/70 text-lg">
          Sign up for our newsletter or read our blog to stay informed on everything about cars in Nigeria.
        </p>
        <div className="flex items-center gap-4 mt-4 justify-center lg:justify-start">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 w-64 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
          <button className="bg-violet-700 hover:bg-violet-800 transition px-5 py-2 rounded-xl text-white shadow-md hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex-1 text-center">
        <button className="bg-gradient-to-br from-violet-600 to-indigo-800 text-white px-6 py-3 rounded-full cursor-pointer shadow-xl hover:scale-105 transition transform hover:shadow-violet-500/30">
          View Blog
        </button>
      </div>
    </div>
  )
}

export default CTA
