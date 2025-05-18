"use client";
import gsap from 'gsap';
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const h1ref = React.useRef<HTMLHeadingElement>(null);
    const pref = React.useRef<HTMLParagraphElement>(null);
    const button1ref = React.useRef<HTMLButtonElement>(null);
    const button2ref = React.useRef<HTMLButtonElement>(null);

  useEffect(()=>{
    gsap.fromTo(h1ref.current,{
        opacity: 0,
        y: 50,
        }, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay:0.5
    })
    gsap.fromTo(pref.current,{
        opacity: 0,
        y: 50,
        }, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay:0.7
    })
    gsap.fromTo(button1ref.current,{
        opacity: 0,
        x: -50,
        }, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay:1.2
    })
    gsap.fromTo(button2ref.current,{
        opacity: 0,
        x: -50,
        }, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay:1.3
    })
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const highlightClass =
    'bg-gradient-to-r text-transparent bg-clip-text via-85 from-violet-700 via-purple-500 to-slate-200';

  const spans = [
    { text: 'Reliable', className: highlightIndex === 0 ? highlightClass : '' },
    { text: 'Delivered', className: highlightIndex === 1 ? highlightClass : '' },
    { text: 'Priced', className: highlightIndex === 2 ? highlightClass : '' },
  ];

  return (
    <div id='home' className='h-screen w-screen bg-fixed bg-[url("/cars2.png")] bg-cover bg-center flex flex-col justify-center items-center'>
      <h1 ref={h1ref}  className='text-6xl text-white font-bold text-center max-md:text-2xl'>
        <span className={spans[0].className}>{spans[0].text}</span>{' '}
        Cars. <span className={spans[1].className}>{spans[1].text}</span>{' '}
        Fast. <span className={spans[2].className}>{spans[2].text}</span>{' '}
        Right.
      </h1>
      <p ref={pref}  className='text-lg max-md:text-sm max-md:w-[80vw] max-md:truncate text-white/60 mt-4 w-[60vw] text-center'>
        Find your perfect car with our easy-to-use platform. Get fully
        inspected, road-ready cars delivered to your doorstep within 5–10 days.
        Every vehicle is tested for performance and backed by a full
        money-back guarantee.
      </p>

        <div className='flex gap-4 mt-8'>
            <button ref={button1ref} className='bg-violet-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-violet-700 transition duration-300'>
            Buy Now
            </button>
            <button  ref={button2ref} className='bg-gray-800 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300'>
            Explore
            </button>
        </div>

    </div>
  );
};

export default Hero;
