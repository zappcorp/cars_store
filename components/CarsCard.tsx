'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface CarsCardProps {
    image: string
}
const CarsCard = ({image}:CarsCardProps) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="relative bg-white/10 backdrop-blur-md border-t-2  border-white/20 rounded-xl p-4 shadow-xl max-w-md mx-auto">
        <div className='flex justify-between flex-row'>
            <p className='p-2 text-white w-fit rounded-2xl bg-green-400/70 border-t-2 border-white/40 '>N{3000000}</p>
            <p className='p-2 text-white w-fit rounded-2xl bg-red-700/60 border-t-2 border-white/40'>25% off</p>
        </div>
        
      <Image
        src={image}
        alt="car"
        width={300}
        height={300}
        className="w-full h-60 object-cover rounded-lg"
      />
      <div className="flex flex-col items-center justify-center mt-4 text-center">
        <h2 className="text-2xl font-semibold text-white">Tesla Model X</h2>
        <p className="text-white/70 w-72 text-wrap text-sm mt-2">
          Electric SUV with autopilot, 350-mile range, and falcon wing doors.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-violet-700/60 border-t cursor-pointer border-white/30 text-white px-4 py-2 rounded-lg mt-4 hover:bg-violet-700/90 transition duration-300"
        >
          View Details
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 w-[90%] max-w-md relative text-white">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-xl font-bold text-white/80 hover:text-white"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-2">Tesla Model X</h3>
            <p className="text-white/80 text-sm mb-6">
              Experience next-level driving with the Tesla Model X. Features include:
              <ul className="list-disc list-inside mt-2">
                <li>Autopilot and self-driving capability</li>
                <li>0-60 mph in 2.6 seconds</li>
                <li>All-electric range of 350 miles</li>
              </ul>
            </p>
            <div className="flex gap-4 justify-between">
              <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300">
                Add to Cart
              </button>
              <button className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CarsCard
