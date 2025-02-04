import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen w-full pt-[4vh] md:pt-[12vh]">
      <div className="mx-auto my-10 flex w-[90%] flex-col items-center lg:flex-row xl:w-3/5">
        {/* TEXT & MORE CONTENT */}
        <div className="mr-6 flex flex-col items-start space-y-5 self-start">
          {/* MAIN TEXT */}
          <h1 className="text-[3.2rem] leading-[1.15]">
            We help any business to get analytics and sales marketing
          </h1>

          {/* SUBTEXT OR ADDITIONAL CONTENT */}
          <p className="text-lg text-gray-500 lg:mr-28">
            The fastest and simple way to generate growing business solutions
            with our products
          </p>

          {/* EMAIL INPUT */}
          <div className="relative w-[90%] py-2">
            <Input
              type="email"
              placeholder="Your business email"
              className="h-[4.2rem] border-[#20a2a2] bg-[#edffff] px-6 placeholder:text-[1rem] placeholder:text-gray-500 lg:pr-56 xl:pr-2"
            />
            <Button className="translate-y-1/3 bg-[#20a2a2] py-[1.60rem] text-[1rem] hover:bg-teal-200 hover:text-teal-700 lg:absolute lg:right-3 lg:top-[35%] lg:-translate-y-1/2 lg:px-8">
              Get Started
            </Button>
            <p className="mt-6 text-[1rem] text-gray-500 lg:mt-3">
              *we will not disseminate your email and so you avoid spam
            </p>
          </div>

          {/* NUMBERS SECTION */}
          <div className="flex pt-4 lg:w-4/5">
            {/* First Number Block */}
            <div>
              <h1 className="text-[2.7rem]">350+</h1>
              <p className="pt-2 text-lg text-gray-500">
                Over 350 businesses powered by us
              </p>
            </div>

            {/* Second Number Block */}
            <div className="pl-14">
              <h1 className="text-[2.7rem]">4.8</h1>
              <p className="pt-2 text-lg text-gray-500">
                Rating on Google Play and App Store
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="mr-6 mt-6 hidden shrink-0 flex-col items-start space-y-5 self-start lg:block ">
          <Image
            src="/images/imagehero.png"
            alt="imagehero"
            width={550}
            height={550}
          />
        </div>
      </div>

      {/* COMPANIES LOGO ROW */}
      <div className="mx-auto flex w-[90%] flex-col  items-center justify-center md:flex-row md:space-x-10 lg:w-3/5 lg:flex-row lg:space-x-[4.5rem]">
        <Image
          src="/assets/microsoft.svg"
          alt="microsoft"
          width={150}
          height={150}
        />
        <Image
          src="/assets/netflix.svg"
          alt="netflix"
          width={120}
          height={120}
        />
        <Image
          src="/assets/nike.svg"
          alt="microsoft"
          width={100}
          height={100}
        />
        <Image
          src="/assets/shopify.svg"
          alt="microsoft"
          width={100}
          height={100}
        />
        <Image
          src="/assets/slack.svg"
          alt="microsoft"
          width={130}
          height={130}
        />
        <Image
          src="/assets/intel.svg"
          alt="microsoft"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Hero;
