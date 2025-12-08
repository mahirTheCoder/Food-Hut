import React from "react";

const Offers = () => {
  return (
    <section id="Offers" className="w-full py-20  text-white">
      <div className="container mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Today <span className="text-[#F65F5F]">Special</span> Offers
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy
            Text Ever Since The 1500s
          </p>
        </div>

        {/* Cards Row */}
        <div className="flex justify-between flex-wrap">

          {/* ------- Card 1 ------- */}
          <div className="bg-[#2A2A2A] w-77 rounded-2xl p-5 shadow-xl hover:scale-[1.03] transition relative">
            <div className="absolute top-[50%] mx-auto w-40 h-40 rounded-full overflow-hidden">
              <img src="/kebab.jpg" className="w-full h-full object-cover" />
           
            </div>

            <div className="flex items-center justify-center gap-2 mt-4">
              <img src="/u1.jpg" className="w-8 h-8 rounded-full" />
              <img src="/u2.jpg" className="w-8 h-8 rounded-full" />
              <p className="flex items-center gap-1 text-yellow-400 text-sm">★ 4.5</p>
            </div>

            <h3 className="text-center font-semibold text-lg mt-3">Kebab</h3>
            <p className="text-center text-gray-400 text-sm mt-1">
              Lorem Ipsum Is Simply Dummy Text Of The Printing
            </p>

            <button className="bg-[#F65F5F] text-white mt-4 w-full py-2 rounded-full hover:bg-[#ff7979] transition">
              Order Now
            </button>
          </div>

    
        </div>
      </div>
    </section>
  );
};

export default Offers;
