import Link from "next/link";
import React from "react";
import logo from  '../../../public/Logo.png'
import Image from "next/image";
const Navbar = () => {
  return (
    <section className="w-full py-6 bg-transparent">
      <div className="container flex items-center justify-between">
        
        {/* Logo */}
        <Link href={"/"}>
        <Image src={logo} alt="Logo" width={150} height={50} />
        </Link>

        {/* Menu */}
        <nav className="hidden lg:flex items-center gap-12 text-lg font-medium text-white">
          <a href="#" className="transition hover:text-[#F65F5F]">
            Today special offers
          </a>
          <a href="#" className="transition hover:text-[#F65F5F]">
            Why FoodHut
          </a>
          <a href="#" className="transition hover:text-[#F65F5F]">
            Our Menu
          </a>
          <a href="#" className="transition hover:text-[#F65F5F]">
            Our Popular food
          </a>
        </nav>

        {/* Button */}
        <button className="px-6 py-2 bg-[#F54748] rounded-full border border-black font-medium text-white transition hover:bg-black">
          Download App
        </button>

      </div>
    </section>
  );
};

export default Navbar;
