import React from "react";
import Navbar from "./Componets/Navbar";
import Banner from "./Componets/Banner";
import Offers from "./Componets/Offers";
import Service from "./Componets/Service";
import Menu from "./Componets/Menu";
import Order from "./Componets/Order";
import Footer from "./Componets/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Offers/>
      <Service/>
      <Menu/>
      <Order/>
      <Footer/>
    </>
  );
};

export default page;
