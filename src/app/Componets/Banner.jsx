import React from "react";
import banner from "../../../public/banner.png";
import { GiSelfLove } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

const Banner = () => {
  return (
    <section id="Banner">
      <div
        className=" flex items-center  h-[600px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="container">
          <button className="p-3 text-sm font-normal  bg-amber-400 text-black rounded-4xl flex items-center gap-1 mb-6 ">
            <GiSelfLove />
            People Trust us
          </button>
          <h2 className="text-[58px] text-white font-bold mb-6 w-175">
            We're <span className="text-[#F54748]">Serious</span> For
            <span className="text-[#F54748]">Food</span> &
            <span className="text-[#FDC55E]">Delivery</span> .
          </h2>
          <p className="w-180 text-2xl font-normal text-white mb-5">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </p>
          <div className="w-120 h-15 bg-[#0D0D0D] text-gray-700 rounded-4xl border border-[#F54748] flex items-center gap-5 text-lg font-normal px-6">
            <FiSearch className="text-3xl text-white" />
            <input
              type="text"
              placeholder="Search food"
              className="w-full h-full bg-transparent outline-none  text-white placeholder-gray-500 rounded-4xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
