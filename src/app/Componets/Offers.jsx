import React from "react";
import offer from "../../../public/offers.png";
import ratig from "../../../public/rating.png";
import Image from "next/image";

const Offers = () => {
  return (
    <section id="Offers" className="w-full py-40  text-white">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Today <span className="text-[#F65F5F]">Special</span> Offers
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto mt-4 text-sm">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
            Ever Since The 1500s
          </p>
        </div>

        {/* Cards Row */}
        <div className="flex justify-between flex-wrap">
          {/* ------- Card 1 ------- */}
          <div className=" bg-linear-to-b from-gray-500 to-amber-800 w-77 h-92 rounded-2xl  shadow-xl  transition flex flex-col items-center relative mt-[66px]">
            {/* ----img part-------- */}
            <div className="img absolute top-[-30%]">
              <Image src={offer} alt="offer" className="w-63 h-63  " />
            </div>

            {/* ------rationg part-------- */}
            <div className="flex items-center justify-center gap-2 mt-34">
              <p className="flex items-center gap-1 text-[#F65F5F] text-sm">
                <Image src={ratig} alt="offer" />★ 4.5
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
        </div>
      </div>
    </section>
  );
};

export default Offers;
