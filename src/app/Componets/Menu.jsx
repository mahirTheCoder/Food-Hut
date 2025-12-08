import React from "react";
import offer from "../../../public/offers.png";
import offer4 from "../../../public/offer4.png";
import offer3 from "../../../public/offer3.png";
import offer2 from "../../../public/offer2.png";
import ratig from "../../../public/rating.png";

import Image from "next/image";
const Menu = () => {
  return (
    <section id="Menu" className="w-full py-20  text-white">
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

        {/* -----------menu parts----------- */}
        {/* Cards Row */}
        <div className="flex justify-between flex-wrap lg:mt-33 gap-30 lg:gap-0">
          {/* ------- Card 1 ------- */}
          <div className=" bg-linear-to-b from-gray-500 to-amber-800 w-77 h-92 rounded-2xl  shadow-xl  transition flex flex-col items-center relative mt-[66px]">
            {/* ----img part-------- */}
            <div className="img absolute top-[-30%]">
              <Image src={offer} alt="offer" className="w-63 h-63  " />
            </div>

            {/* ------rationg part-------- */}
            <div className="flex items-center justify-center gap-2 mt-34">
              <p className="flex items-center gap-1 text-[#F65F5F] text-sm">
                <Image src={ratig} alt="offer" />{" "}
                <span className="text-lg">★ 4 . 5</span>
              </p>
            </div>

            <h3 className=" text-[#F65F5F]  font-semibold text-lg mt-7.5">
              Kebab
            </h3>
            <p className="text-center w-[243px] text-black text-sm mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>

            <button className="bg-[#F65F5F] text-white mt-7.5 px-5 py-3 rounded-full hover:bg-[#ff7979] transition">
              Order Now
            </button>
          </div>

          {/* ------- Card 3 ------- */}
          <div className=" bg-linear-to-b from-gray-500 to-amber-800 w-77 h-92 rounded-2xl  shadow-xl  transition flex flex-col items-center relative mt-[66px]">
            {/* ----img part-------- */}
            <div className="img absolute top-[-30%]">
              <Image src={offer2} alt="offer" className=" w-63 h-63  " />
            </div>

            {/* ------rationg part-------- */}
            <div className="flex items-center justify-center gap-2 mt-34">
              <p className="flex items-center gap-1 text-[#F65F5F] text-sm">
                <Image src={ratig} alt="offer" />{" "}
                <span className="text-lg">★ 4 . 8</span>
              </p>
            </div>

            <h3 className=" text-[#F65F5F]  font-semibold text-lg mt-7.5">
              Chicken Tikka
            </h3>
            <p className="text-center w-[243px] text-black text-sm mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>

            <button className="bg-[#F65F5F] text-white mt-7.5 px-5 py-3 rounded-full hover:bg-[#ff7979] transition">
              Order Now
            </button>
          </div>

          {/* ------- Card 3 ------- */}
          <div className=" bg-linear-to-b from-gray-500 to-amber-800 w-77 h-92 rounded-2xl  shadow-xl  transition flex flex-col items-center relative mt-[66px]">
            {/* ----img part-------- */}
            <div className="img absolute top-[-30%]">
              <Image src={offer3} alt="offer" className=" w-63 h-63  " />
            </div>

            {/* ------rationg part-------- */}
            <div className="flex items-center justify-center gap-2 mt-34">
              <p className="flex items-center gap-1 text-[#F65F5F] text-sm">
                <Image src={ratig} alt="offer" />{" "}
                <span className="text-lg">★ 4 . 2</span>
              </p>
            </div>

            <h3 className=" text-[#F65F5F]  font-semibold text-lg mt-7.5">
              Desi Chowmein
            </h3>
            <p className="text-center w-[243px] text-black text-sm mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>

            <button className="bg-[#F65F5F] text-white mt-7.5 px-5 py-3 rounded-full hover:bg-[#ff7979] transition">
              Order Now
            </button>
          </div>

          {/* ------- Card 4 ------- */}
          <div className=" bg-linear-to-b from-gray-500 to-amber-800 w-77 h-92 rounded-2xl  shadow-xl  transition flex flex-col items-center relative mt-[66px]">
            {/* ----img part-------- */}
            <div className="img absolute top-[-30%]">
              <Image src={offer4} alt="offer" className=" w-63 h-63  " />
            </div>

            {/* ------rationg part-------- */}
            <div className="flex items-center justify-center gap-2 mt-34">
              <p className="flex items-center gap-1 text-[#F65F5F] text-sm">
                <Image src={ratig} alt="offer" />{" "}
                <span className="text-lg">★ 5 . 0</span>
              </p>
            </div>

            <h3 className=" text-[#F65F5F]  font-semibold text-lg mt-7.5">
              Chicken Chargha
            </h3>
            <p className="text-center w-[243px] text-black text-sm mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>

            <button className="bg-[#F65F5F] text-white mt-7.5 px-5 py-3 rounded-full hover:bg-[#ff7979] transition">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
