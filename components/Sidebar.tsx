"use client"
import React from 'react';
import { FaCar, FaHome, FaNewspaper, FaQuestion } from 'react-icons/fa';
import { MdNewReleases } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
const Sidebar = () => {
  const sidebarItems = [
    {
      name: 'home',
      icon: <FaHome />,
    },
    {
      name: 'why',
      icon: <FaQuestion />,
    },
    {
        name:'Difference',
        icon:<MdNewReleases />
    },
    { 
        name:'cars',
        icon:<FaCar />
    },
    { 
        name:'contact',
        icon:<IoMdContact />
    },
    {   
        name:'blog',
        icon:<FaNewspaper />
    }
  ];

  const handleClick = (name:string) => {
    const section = document.getElementById(name);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <div className='fixed top-1/2 left-4 max-md:left-1  transform -translate-y-1/2 z-50'>
      <div className='flex flex-col gap-4 p-4 max-md:p-2 rounded-xl backdrop-blur-md bg-white/10 border border-white/30 shadow-md'>
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className='flex items-center w-fit max-md:p-0 gap-2 p-2 hover:bg-white/20 transition-all duration-200 rounded-md cursor-pointer text-white'
          >
            <span className='text-xl max-md:text-xs' onClick={() => handleClick(item.name)}>{item.icon}</span>
            {/* <span className='text-lg'>{item.name}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
