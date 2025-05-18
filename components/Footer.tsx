import React from 'react'
import { LuMail, LuPhone, LuMapPin } from 'react-icons/lu'

const Footer = () => {
  return (
    <footer id='contact' className="bg-black/60 backdrop-blur-md text-white py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <div className="flex items-center gap-3 text-white/80">
            <LuMail size={18} /> <span>hello@zap.ng</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <LuPhone size={18} /> <span>+234 901 234 5678</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <LuMapPin size={18} /> <span>Zap HQ, Lagos, Nigeria</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2 text-white/70">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/services" className="hover:text-white">Our Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Stay Updated</h3>
          <p className="text-white/70">Get product updates and offers straight to your inbox.</p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-600 placeholder-white/50 w-full"
            />
            <button className="bg-violet-700 hover:bg-violet-800 px-4 py-2 rounded-xl text-white transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-white/50 text-sm">
        &copy; {new Date().getFullYear()} Zap. All rights reserved. <br />
        <span className="text-white/70">Powered by <strong>Zap</strong></span>
      </div>
    </footer>
  )
}

export default Footer
