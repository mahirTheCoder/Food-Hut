import React from "react";

const Navbar = () => {
  return (
    <section className="w-full py-6 bg-transparent">
      <div className="container flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide text-white">
          Food<span className="text-[#F65F5F]">Hut</span>
        </h1>

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
        <button className="px-6 py-2 bg-amber-600 rounded-full border border-white font-medium text-white transition hover:bg-black">
          Download App
        </button>

      </div>
    </section>
  );
};

export default Navbar;
