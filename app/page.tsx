import Cars from '@/components/Cars'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Problem from '@/components/Problem'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const Page = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <Sidebar />
      <Hero />
      <Problem/>
      <Cars/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default Page