import React from "react";
import banner from "../../../public/banner.png";

const Banner = () => {
  return (
    <section id="Banner">
        <div
          className=" h-[600px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${banner.src})` }}
        >
          <div className="container">

          <h2 className="text-white">Lorem ipsum dolor sit amet.</h2>
          </div>
        </div>
   

    </section>
    
  );
};

export default Banner;
