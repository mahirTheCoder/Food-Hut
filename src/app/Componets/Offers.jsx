import React from "react";
import offer from "../../../public/offers.png";
import offer4 from "../../../public/offer4.png";
import offer3 from "../../../public/offer3.png";
import offer2 from "../../../public/offer2.png";
import pata from "../../../public/pata.png";
import ratig from "../../../public/rating.png";
import Image from "next/image";

const Offers = () => {
  return (
    <section id="Offers" className="w-full lg:py-40  text-white relative">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl  font-bold">
            Today <span className="text-[#F65F5F]">Special</span> Offers
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto mt-10 text-sm">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
            Ever Since The 1500s
          </p>
        </div>

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
                <Image src={ratig} alt="offer" /> <span className="text-lg">★ 4 . 5</span>
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
                <Image src={ratig} alt="offer" /> <span className="text-lg">★ 4 . 8</span>
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
               <Image src={ratig} alt="offer" /> <span className="text-lg">★ 4 . 2</span>
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
               <Image src={ratig} alt="offer" /> <span className="text-lg">★ 5 . 0</span>
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

          {/* -------pata img------- */}
          <div className="pata hidden lg:block absolute bottom-r-0 bottom-0 right-0 lg:right-0">
            <Image src={pata} alt="pata"   />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
