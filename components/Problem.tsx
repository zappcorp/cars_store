'use client'

import React, { useEffect, useRef } from 'react'
import { FaCar, FaCreditCard, FaToolbox } from 'react-icons/fa'
import { PiTireFill } from 'react-icons/pi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Problem = () => {
  const spansRef = useRef<HTMLSpanElement[]>([])

  const problemlist = [
    {
      title: 'Affordable Cars',
      icon: <FaCar className="text-white/40" />,
    },
    {
      title: 'Buy Now Pay Later',
      icon: <FaCreditCard className="text-white/40" />,
    },
    {
      title: 'Free Maintenance toolkit',
      icon: <FaToolbox className="text-white/40" />,
    },
    {
      title: 'FREE EXTRA TIRE',
      icon: <PiTireFill className="text-white/40" />,
    },
  ]

  useEffect(() => {
    spansRef.current.forEach((span) => {
      const letters = span.innerText.split('')
      span.innerText = ''

      letters.forEach((char, i) => {
        const letterSpan = document.createElement('span')
        letterSpan.innerText = char
        letterSpan.className = 'inline-block bg-gradient-to-r from-violet-800 to-violet-800 bg-[length:0%_100%] bg-no-repeat transition-all duration-500 ease-in-out'
        letterSpan.style.backgroundPosition = 'left bottom'
        letterSpan.style.backgroundSize = '0% 100%'
        span.appendChild(letterSpan)

        gsap.to(letterSpan, {
          backgroundSize: '100% 100%',
          scrollTrigger: {
            trigger: span,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.05,
        })
      })
    })
  }, [])

  return (
    <div id='why' className="min-h-screen w-screen bg-black flex flex-col justify-center items-center px-4 py-20">
      <h1 className="text-3xl md:text-5xl text-white/50 text-center">Why Choose Us?</h1>

      <div className="items-center flex flex-col text-center mt-10">
        <p className="text-3xl md:text-7xl text-white/80 leading-snug font-bold font-sans p-4">
          WE WANT{' '}
          <span
            ref={(el) => {
                if (el && !spansRef.current.includes(el)) {
                  spansRef.current.push(el)
                }
              }}
            className="text-white px-2 rounded-md"
          >
            YOU
          </span>{' '}
          TO GET YOUR <br />
          <span
            ref={(el) => {
                if (el && !spansRef.current.includes(el)) {
                  spansRef.current.push(el)
                }
              }}
            className="text-white px-2 rounded-md"
          >
            MONEY&apos;S{' '} VALUE
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 text-white/40 gap-6 mt-12 w-full max-w-3xl px-4">
        {problemlist.map((item, index) => (
          <div key={index} className="flex flex-row items-center justify-start gap-3 text-lg">
            {item.icon}
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Problem
