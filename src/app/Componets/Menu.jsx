"use client";
import React, { useState } from "react";
import Image from "next/image";

import offer from "../../../public/offers.png";
import offer2 from "../../../public/offer2.png";
import offer3 from "../../../public/offer3.png";
import offer4 from "../../../public/offer4.png";
import rating from "../../../public/rating.png";

const menuData = {
  Ramen: [
    { img: offer, title: "Kebab", rate: "4.5" },
    { img: offer2, title: "Chicken Tikka", rate: "4.8" },
    { img: offer3, title: "Desi Chowmein", rate: "4.2" },
    { img: offer4, title: "Chicken Chargha", rate: "5.0" },
  ],
  Breakfast: [
    { img: offer2, title: "Egg Toast", rate: "4.1" },
    { img: offer3, title: "Pancake", rate: "4.3" },
    { img: offer, title: "Oats Bowl", rate: "4.6" },
    { img: offer4, title: "Fruit Salad", rate: "4.0" },
  ],
  Lunch: [
    { img: offer3, title: "Beef Curry", rate: "4.7" },
    { img: offer4, title: "Chicken Rice", rate: "4.4" },
    { img: offer2, title: "Biriyani Special", rate: "4.9" },
    { img: offer, title: "Veg Thali", rate: "4.2" },
  ],
  Dinner: [], // default দেখাবে
  Maxican: [],
  Italian: [],
  Desserts: [],
  Drinks: [],
};

const defaultCards = [
  { img: offer, title: "Kebab", rate: "4.5" },
  { img: offer2, title: "Chicken Tikka", rate: "4.8" },
  { img: offer3, title: "Desi Chowmein", rate: "4.2" },
  { img: offer4, title: "Chicken Chargha", rate: "5.0" },
];

const Menu = () => {
  const [active, setActive] = useState("Ramen");

  const selectedCards =
    menuData[active]?.length > 0 ? menuData[active] : defaultCards;

  return (
    <section id="Menu" className="w-full py-20 text-white">
      <div className="container mx-auto text-center">

        {/* ---------- HEADING ---------- */}
        <h2 className="lg:text-4xl text-xl font-bold mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 underline decoration-[3px]">
            Menu
          </span>{" "}
          <span>That</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 underline decoration-[3px]">
            Always
          </span>{" "}
          Make You <br />
          <span className="text-blue-300">Fall In</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 underline">
            Love
          </span>
        </h2>

        {/* ---------- BUTTON GROUP ---------- */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.keys(menuData).map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-6 py-2 rounded-full transition 
                ${
                  active === item
                    ? "bg-[#F65F5F] text-white"
                    : "border border-gray-500 hover:border-[#F65F5F] hover:text-[#F65F5F]"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* ---------- MENU CARDS ---------- */}
        <div className="flex  flex-wrap justify-between mt-27 gap-30 lg:gap-0 ">
          {selectedCards.map((card, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-gray-500 to-amber-800 w-72 h-[380px] rounded-2xl shadow-xl flex flex-col items-center relative mt-16"
            >
              {/* IMAGE */}
              <div className="absolute -top-28">
                <Image src={card.img} alt="offer" className="w-63 h-63" />
              </div>

              {/* RATING */}
              <div className="flex items-center gap-2 mt-40">
                <Image src={rating} alt="rating" className="w-[74px]" />
                <span className="text-[#F65F5F] text-lg">★ {card.rate}</span>
              </div>

              {/* TITLE */}
              <h3 className="text-[#F65F5F] font-semibold text-lg mt-8">
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-center w-56 text-black text-sm mt-6">
                Lorem Ipsum is simply dummy text of the printing industry.
              </p>

              {/* BUTTON */}
              <button className="bg-[#F65F5F] text-white mt-7.5 px-5 py-3 rounded-full hover:bg-[#ff7979] transition">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
