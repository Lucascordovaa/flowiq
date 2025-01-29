import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen w-full pt-[4vh] md:pt-[12vh]">
      <div className="mx-auto mt-10 flex h-full w-[90%] flex-col items-center lg:flex-row xl:w-3/5">
        {/* TEXT & MORE CONTENT */}
        <div className="mr-6 flex flex-col items-start space-y-6 self-start bg-white">
          {/* MAIN TEXT */}
          <h1 className="text-[3.2rem] leading-[1.15]">
            We help any business to get analytics and sales marketing
          </h1>

          {/* SUBTEXT OR ADDITIONAL CONTENT */}
          <p className="mr-28 text-lg text-gray-700">
            The fastest and simple way to generate growing business solutions
            with our products
          </p>

          {/* BUTTONS OR CTA */}
          <div className="flex space-x-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 text-white">
              Get Started
            </button>
            <button className="rounded-lg bg-gray-300 px-6 py-3 text-gray-800">
              Learn More
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="hidden shrink-0 lg:block">
          <Image
            src="/images/imagehero.png"
            alt="imagehero"
            width={550}
            height={550}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
