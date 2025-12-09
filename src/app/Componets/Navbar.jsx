'use client'; 

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from '../../../public/Logo.png';
import { HiMenu, HiX } from "react-icons/hi"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Array of navigation links
  const navLinks = [
    { name: "Today special offers", href: "#" },
    { name: "Why FoodHut", href: "#" },
    { name: "Our Menu", href: "#" },
    { name: "Our Popular food", href: "#" },
  ];

  return (
    <section className="w-full py-4 sm:py-6 bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href={"/"}>
          <Image 
            src={logo} 
            alt="FoodHut Logo" 
            width={150} 
            height={50} 
            className="w-[120px] sm:w-[150px] h-auto" 
          />
        </Link>

        {/* --- 1. Desktop Menu --- */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12 text-base xl:text-lg font-medium text-white">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="transition hover:text-[#F65F5F]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* --- 2. Button and Mobile Toggle --- */}
        <div className="flex items-center gap-4">
          <button 
            className="hidden sm:inline-block px-4 py-1.5 sm:px-6 sm:py-2 bg-[#F54748] rounded-full border border-black font-medium text-sm sm:text-base text-white transition hover:bg-black"
          >
            Download App
          </button>

          {/* Hamburger/Close Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-3xl lg:hidden focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* --- 3. Mobile Menu Overlay --- */}
      <nav 
        className={`lg:hidden absolute top-full left-0 w-full bg-gray-900 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 py-4 border-t border-[#F54748]' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}

      >
        <div className="flex flex-col items-center space-y-4 px-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-white w-full text-center py-2 transition hover:text-[#F65F5F] hover:bg-gray-800 rounded"
            >
              {link.name}
            </a>
          ))}
          {/* Button inside mobile menu */}
          <button 
            className="w-full px-6 py-2 mt-2 bg-[#F54748] rounded-full border border-black font-medium text-white transition hover:bg-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Download App
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;