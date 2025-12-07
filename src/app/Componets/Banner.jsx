import React from "react";
import banner from "../../../public/banner.png";
import { GiSelfLove } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <section id="Banner">
      <div
        className="flex items-center h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* People Trust us Button - Responsive padding and text size. */}
          <button className="p-2 sm:p-3 text-xs sm:text-sm font-normal bg-amber-400 text-black rounded-full flex items-center lg:gap-2 gap-1 mb-4 md:mb-6">
            <GiSelfLove className="lg:text-xl " />
            People Trust us
          </button>

          <h2 className="text-4xl leading-snug sm:text-5xl lg:text-[58px] text-white font-bold mb-4 lg:mb-6 md:max-w-4xl">
            We're <span className="text-[#F54748]">Serious</span> For 
            <span className="text-[#F54748] ml-1"> Food</span> &
            <span className="text-[#FDC55E]"> Delivery</span> .
          </h2>

          <p className="text-base sm:text-xl md:text-2xl font-normal text-white mb-4 sm:mb-5 md:max-w-2xl">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </p>

          {/* --------Search part----- */}
          <div className="w-full md:max-w-md h-12 sm:h-14 bg-[#0D0D0D] text-gray-700 rounded-full border border-[#F54748] flex items-center gap-3 text-lg font-normal px-4 sm:px-6 mb-8 md:mb-10">
            <FiSearch className="text-xl sm:text-2xl text-white" />
            <input
              type="text"
              placeholder="Search food"
              className="w-full h-full bg-transparent outline-none text-white placeholder-gray-500 rounded-full text-base sm:text-lg"
            />
          </div>

          {/* -------Download part--- */}
          <div className="allItems flex gap-4 sm:gap-5 items-center">
            <button className="px-5 py-2 sm:px-6 sm:py-3 bg-[#F54748] rounded-full border border-black font-medium text-sm sm:text-base text-white transition hover:bg-black">
              Download App
            </button>

            {/* Play Button */}

            <button className="h-10 w-10 sm:h-12 sm:w-12 shadow-amber-700 bg-gray-900 flex justify-center items-center text-[#F54748] rounded-full">
              <FaPlay className="text-sm sm:text-base" />
            </button>

            {/* Watch Video Text - Responsive text size. */}
            <p className="text-white text-sm sm:text-lg font-medium">
              Watch Video
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
