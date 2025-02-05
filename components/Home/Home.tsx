import React from "react";
import Hero from "@/components/Home/Hero/Hero";
import HowEasy from "@/components/Home/HowEasy/HowEasy";
import WhyChoose from "@/components/Home/WhyChoose/WhyChoose";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <HowEasy />
      <WhyChoose />
    </div>
  );
};

export default Home;
