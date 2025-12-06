import React from "react";

const Navbar = () => {
  return (
    <header className=" text-black py-6">
      <div className=" container flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide">
          Food<span className="text-[#F65F5F]">Hut</span>
        </h1>

        {/* Menu Items */}
        <nav className="flex items-center gap-12 text-lg font-medium">
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

   
      </div>
    </header>
  );
};

export default Navbar;
