import React from "react";
import HowEasyCard from "@/components/Home/HowEasy/HowEasyCard";
import Image from "next/image";

const HowEasy = () => {
  return (
    <div className="mx-auto py-16 lg:w-3/5 lg:items-center ">
      <div className="mx-auto lg:w-1/2">
        <h1 className="mt-6 text-center text-[2.7rem] leading-tight">
          How simple is it to use our platform?
        </h1>
      </div>
      <div className="mx-2 my-12 grid grid-cols-1 items-baseline lg:grid-cols-5">
        <HowEasyCard
          image="/assets/loginimg.svg"
          title="Sign up and access your dashboard"
          description="Create an account or log in to start using our platform and unlock powerful analytics tools."
        />
        <Image
          src="/assets/imgmid.svg"
          alt="imgmid"
          width={150}
          height={150}
          className="hidden lg:mx-auto lg:block"
        />
        <HowEasyCard
          image="/assets/connectimg.svg"
          title="Seamlessly connect your favorite tools"
          description="Easily integrate with your preferred apps and platforms in just a few clicks."
        />
        <Image
          src="/assets/imgmid.svg"
          alt="imgmid"
          width={150}
          height={150}
          className="hidden lg:mx-auto lg:block"
        />
        <HowEasyCard
          image="/assets/getimg.svg"
          title="Gain insights with real-time analytics"
          description="Our system collects and analyzes your data, giving you valuable insights to optimize your business."
        />
      </div>
    </div>
  );
};

export default HowEasy;
