import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import order from "../../../public/order.png";
import Image from "next/image";

const Order = () => {
  return (
    <section id="Order" className="lg:py-24  md:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* --- 1. Left Content Area (Text and Buttons) --- */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <h2
              className="
               text-2xl sm:text-4xl lg:text-6xl 
               font-extrabold text-white 
               mb-6 leading-tight 
               max-w-xl lg:max-w-3xl 
               mx-auto lg:mx-0 lg:text-left"
            >
              It's Now <span className="text-[#F54748]">More Easy</span> to{" "}
              <span className="text-yellow-400">Order </span>
              by Our Mobile <span className="text-[#F54748]">App</span>
            </h2>

            {/* Description */}
            <p className="lg:text-base text-xs md:text-lg text-gray-400 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
              All you need to do is download one of the best delivery apps, make
              a and most companies are opting for mobile app development for
              food delivery.
            </p>

     

        </div>
      </div>
    </section>
  );
};

export default Order;
