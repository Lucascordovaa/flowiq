import React from "react";
import Hero from "@/components/Home/Hero/Hero";
import HowEasy from "@/components/Home/HowEasy/HowEasy";
import WhyChoose from "@/components/Home/WhyChoose/WhyChoose";
import Customers from "@/components/Home/Customers/Customers";
import Pricing from "@/components/Home/Pricing/Pricing";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <HowEasy />
      <WhyChoose />
      <Customers />
      <Pricing />
    </div>
  );
};

export default Home;
