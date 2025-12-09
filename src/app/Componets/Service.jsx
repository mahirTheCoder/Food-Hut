import React from "react";
import { FaShoppingCart, FaUserCheck, FaUserTie } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoRestaurantSharp } from "react-icons/io5";
import service from "../../../public/service.png";
import Image from "next/image";

const Service = () => {
  return (
    <section id="Service" className="w-full py-20 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-14">

        {/* Left Image Box */}
        <div className="w-full lg:w-1/2 flex justify-center">
        <Image src={service} alt="service"  />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="lg:text-5xl text-2xl font-bold leading-snug mb-4">
            We are <span className="text-[#F65F5F]">more</span> than <br />
            <span className="text-[#F6C64E]">multiple</span> service
          </h2>

          <p className= "lg:w-[690px] text-gray-300 lg:text-sm text-xs mb-6">
            This is a type of restaurant which typically serves food and drink,
            in addition to light refreshments such as baked goods or snacks.
            The term comes from the french word meaning food.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-4 text-sm">

            <p className="flex items-center gap-2">
              <FaShoppingCart className="text-[#F65F5F] text-lg" />
              Online Order
            </p>

            <p className="flex items-center gap-2">
              <TbTruckDelivery className="text-[#F6C64E] text-lg" />
              24/7 Service
            </p>

            <p className="flex items-center gap-2">
              <FaUserCheck className="text-[#F65F5F] text-lg" />
              Pre-Reservation
            </p>

            <p className="flex items-center gap-2">
              <IoRestaurantSharp className="text-[#F6C64E] text-lg" />
              Organized Foodhut Place
            </p>

            <p className="flex items-center gap-2">
              <FaUserTie className="text-[#F65F5F] text-lg" />
              Super Chef
            </p>

            <p className="flex items-center gap-2">
              <MdOutlineCleaningServices className="text-[#F6C64E] text-lg" />
              Clean Kitchen
            </p>

          </div>

          <button className="mt-8 bg-[#F65F5F] px-6 py-2 rounded-full text-white hover:bg-[#ff7b7b] transition">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
