import React from 'react';
// Importing React Icons for social media links
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    // Set a solid dark background for the entire footer section
    <footer id='footer' className="bg-gray-900 pt-35 text-white">
      <div className="container mx-auto px-4">
        
        {/* --- Main Grid Layout (4 Columns on large screens, stack on small) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-16 pb-12 md:pb-16 border-b border-gray-700">
          
          {/* 1. Foodhut Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#F54748] mb-4">Foodhut</h3>
            
            <p className="text-sm text-gray-400 max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            
            {/* Social Icons using React Icons */}
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


      </div>
    </footer>
  );
};

export default Footer;