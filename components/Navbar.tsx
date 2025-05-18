import React from 'react'
import { LuShoppingCart } from 'react-icons/lu'

const Navbar = () => {
  const cartItemCount = 3 // You can dynamically pass this via props or context

  return (
    <nav className="bg-black/70 backdrop-blur-lg shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-tight">CarStore</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-white/80 text-sm">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Shop</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>

        {/* Cart Icon */}
        <div className="relative cursor-pointer">
          <LuShoppingCart size={28} className="text-white" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItemCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
