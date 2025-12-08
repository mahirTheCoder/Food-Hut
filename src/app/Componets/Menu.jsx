import React from "react";

const Menu = () => {
  return (
    <section id="Menu" className="w-full py-20 bg-[#0F0F0F] text-white">
      <div className="container mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold leading-snug mb-10 space-y-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 underline underline-offset-8 decoration-[3px]">
            Menu
          </span>{" "}
          <span className="text-white">That</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 underline underline-offset-8 decoration-[3px]">
            Always
          </span>{" "}
          <span className="text-white">Make You</span>
          <br />
          <span className="underline-offset-8   text-blue-300">
            Fall In
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 underline underline-offset-8">
            Love
          </span>
        </h2>

        {/* Menu Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">

          {/* Active Button */}
          <button className="px-6 py-2 rounded-full bg-[#F65F5F] text-white font-medium">
            Ramen
          </button>

          {/* Other Buttons */}
          <button className="px-6 py-2 rounded-full border border-gray-500 hover:border-[#F65F5F] hover:text-[#F65F5F] transition">
            Breakfast
          </button>

          <button className="px-6 py-2 rounded-full border border-gray-500 hover:border-[#F65F5F] hover:text-[#F65F5F] transition">
            Lunch
          </button>

          <button className="px-6 py-2 rounded-full border border-gray-500 hover:border-[#F65F5F] hover:text-[#F65F5F] transition">
            Dinner
          </button>

          <button className="px-6 py-2 rounded-full border border-gray-500 hover:border-[#F65F5F] hover:text-[#F65F5F] transition">
            Maxican
          </button>

          <button className="px-6 py-2 rounded-full border border-gray-500 hover:border-[#F65F5F] hover:text-[#F65F5F] transition">
            Italian
          </button>

          <button className="px-6 py-2 rounded-full border border-gray-500 hover:border-[#F65F5F] hover:text-[#F65F5F] transition">
            Desserts
          </button>

          <button className="px-6 py-2 rounded-full border border-gray-500 hover:border-[#F65F5F] hover:text-[#F65F5F] transition">
            Drinks
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
