import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    // Set padding and dark background
    <footer id='footer' className="bg-gray-900 lg:pt-35 mt-10 pt-10 pb-10 text-white">
      <div className="container mx-auto px-4">
        
        {/* --- Main Grid Layout: 4 columns on large screens, stack on small --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-16 pb-12 md:pb-16 border-b border-gray-700">
          
          {/* 1. Foodhut Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-[#F54748] mb-4">Foodhut</h3>
            
            <p className="text-sm text-gray-400 max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook" className="text-lg text-yellow-500 hover:text-[#F54748] transition">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="text-lg text-yellow-500 hover:text-[#F54748] transition">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="text-lg text-yellow-500 hover:text-[#F54748] transition">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Youtube" className="text-lg text-yellow-500 hover:text-[#F54748] transition">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* 2. About Us Links */}
          <div className="space-y-4">
            <h4 className="text-xl md:text-2xl font-semibold text-[#F54748] mb-4">About Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Service Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Company</a>
              </li>
            </ul>
          </div>

          {/* 3. Company Links */}
          <div className="space-y-4">
            <h4 className="text-xl md:text-2xl font-semibold text-[#F54748] mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Partnership</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Terms of Use</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Privacy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Sitemap</a>
              </li>
            </ul>
          </div>

          {/* 4. Get in touch (Newsletter Signup) */}
          <div className="space-y-4">
            <h4 className="text-xl md:text-2xl font-semibold text-[#F54748] mb-4">Get in touch</h4>
            
            <p className="text-sm text-gray-400 max-w-xs mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            
            {/* Email Input and Subscribe Button */}
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Email"
                // Input scales responsively
                className="p-3 w-full sm:max-w-[150px] lg:max-w-[200px] bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F54748] border border-transparent hover:border-gray-600 transition"
              />
              <button className="px-5 py-3 bg-[#F54748] text-white font-medium rounded-lg transition hover:bg-[#E04040]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* --- Copyright Section --- */}
        <div className="pt-8 text-center text-gray-500 text-sm">
          Copyright &copy; 2022 Foodhut.
        </div>

      </div>
    </footer>
  );
};

export default Footer;