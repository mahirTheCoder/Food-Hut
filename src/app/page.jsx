import React from "react";
import Navbar from "./Componets/Navbar";
import Banner from "./Componets/Banner";
import Offers from "./Componets/Offers";
import Service from "./Componets/Service";
import Menu from "./Componets/Menu";
import Order from "./Componets/Order";

const page = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Offers/>
      <Service/>
      <Menu/>
      <Order/>
    </>
  );
};

export default page;
