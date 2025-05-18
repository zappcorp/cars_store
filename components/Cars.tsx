'use client'

import React, { useEffect, useRef } from 'react'
import CarsCard from './CarsCard'
import gsap from 'gsap'

const Cars = () => {
  const carslist = [
    {
      image: '/4.png',
      title: 'Car 1',
      price: '$20,000',
      description: 'This is a great car.',
    },
    {
      image: '/5.png',
      title: 'Car 2',
      price: '$25,000',
      description: 'This is a great car.',
    },
    {
      image: '/6.png',
      title: 'Car 3',
      price: '$30,000',
      description: 'This is a great car.',
    },
    {
      image: '/7.png',
      title: 'Car 4',
      price: '$35,000',
      description: 'This is a great car.',
    },
    {
      image: '/8.png',
      title: 'Car 5',
      price: '$40,000',
      description: 'This is a great car.',
    },
    {
      image: '/9.png',
      title: 'Car 6',
      price: '$45,000',
      description: 'This is a great car.',
    },
    {
      image: '/10.png',
      title: 'Car 7',
      price: '$50,000',
      description: 'This is a great car.',
    },
  ]

  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cardsRef.current) {
      gsap.from(cardsRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      })
    }
  }, [])

  return (
    <div id='cars' className="flex flex-col items-center bg-black text-white justify-center w-screen min-h-screen">
      <p className="text-5xl font-bold mt-10">Our Cars</p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-24 max-md:px-2 px-10"
        ref={cardsRef}
      >
        {carslist.map((item) => (
          <CarsCard
            key={item.title}
            image={item.image}
            
          />
        ))}
      </div>
    </div>
  )
}

export default Cars
