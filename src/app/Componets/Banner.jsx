import React from "react";
import banner from "../../../public/banner.png";
import { GiSelfLove } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <section id="Banner">
      <div
        className="flex items-center w-full min-h-[700px] bg-cover bg-center"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="container flex flex-col max-w-[650px]">
          {/* Trust Badge */}
          <button className="px-4 py-2 text-sm bg-amber-400 text-black rounded-full flex items-center gap-2 mb-5 w-fit">
            <GiSelfLove className="text-lg" />
            People Trust us
          </button>

          {/* Title */}
          <h2 className="text-white font-bold mb-6 text-4xl sm:text-5xl lg:text-6xl leading-tight">
            We're <span className="text-[#F54748]">Serious</span> For
            <span className="text-[#F54748]"> Food</span> &
            <span className="text-[#FDC55E]"> Delivery</span>.
          </h2>

          {/* Description */}
          <p className="text-white text-lg sm:text-xl mb-6 leading-relaxed max-w-[550px]">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </p>

          {/* Search Box */}
          <div className="w-full max-w-[550px] h-[55px] bg-black/60 border border-[#F54748] rounded-full flex items-center px-5 gap-3 mb-10">
            <FiSearch className="text-2xl text-white" />
            <input
              type="text"
              placeholder="Search food"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row flex-wrap items-center justify-between gap-4 w-full max-w-[500px] mx-auto">
            {/* Download App Button */}
            <button className="flex-1 min-w-[120px] px-4 py-3 bg-[#F54748] rounded-full text-white font-medium text-base transition hover:bg-black">
              Download App
            </button>

            {/* Play Button */}
            <button className="w-14 h-14 bg-black/70 border border-[#F54748] rounded-full flex justify-center items-center shadow-lg">
              <FaPlay className="text-[#F54748]" />
            </button>

            {/* Watch Video Text */}
            <p className="text-white text-base font-medium whitespace-nowrap">
              Watch Video
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
