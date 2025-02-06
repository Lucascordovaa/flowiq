import React from "react";
import HowEasyCard from "@/components/Home/HowEasy/HowEasyCard";
import Image from "next/image";

const HowEasy = () => {
  return (
    <div className="mx-auto py-16 lg:w-3/5 lg:items-center ">
      <div className="mx-auto lg:w-1/2">
        <h1 className="mt-6 text-center text-[2.7rem] leading-tight">
          How easy is the process of using our platform?
        </h1>
      </div>
      <div className="mx-2 my-12 grid grid-cols-1 items-baseline lg:grid-cols-5">
        <HowEasyCard
          image="/assets/loginimg.svg"
          title="Login or sign up to get access to our platform"
          description="You must log in first to be able to use our platform to get your product analytics"
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
          title="Connect your website with just a few clicks"
          description="Select the application you want to connect with just a few clicks"
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
          title="Get your sales data analytics"
          description="Our system gathers data from your connected application, providing you with detailed analytics"
        />
      </div>
    </div>
  );
};

export default HowEasy;
