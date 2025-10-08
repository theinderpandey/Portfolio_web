import React from "react";
import Hero from "../Compnents/Hero/Hero";
import Navbar from "../Compnents/Navbar/Navbar"
import MainSection from "../Compnents/MainSection/MainSection";
import Footer from "../Compnents/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MainSection />
      <Footer />
      
    </div>
  );
};

export default Home;