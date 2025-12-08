import React from "react";
import Navbar from "./Componets/Navbar";
import Banner from "./Componets/Banner";
import Offers from "./Componets/Offers";
import Service from "./Componets/Service";

const page = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Offers/>
      <Service/>
    </>
  );
};

export default page;
