import React from "react";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <div className="w-full bg-[#209fa0]">
      <div className="mx-5 lg:mx-auto lg:w-3/5">
        <div className="flex flex-col pt-16 lg:flex-row">
          {/* IMAGE */}
          <Image
            src="/assets/analytics.svg"
            alt="analytics"
            width={550}
            height={550}
            className="py-8"
          />
          {/* RIGHT SIDE DIV */}
          <div className="flex flex-col lg:ml-16">
            {/* HEADING AND SUBTEXT */}
            <div className="flex flex-col lg:mx-auto lg:w-[90%]">
              <h1 className="text-[2.5rem] leading-tight text-white lg:text-[2.7rem]">
                The reasons to prefer choosing FlowIQ
              </h1>
              <p className="pt-4 text-lg text-white">
                Seamlessly integrate with 20+ apps to enhance product analytics.
              </p>
            </div>
            {/* 2X2 GRID */}
            <div className="mt-8 flex w-full flex-wrap text-white">
              <div className="w-1/2 space-y-2 pr-8">
                <Image
                  src="/assets/charticon.svg"
                  alt="charticon"
                  width={50}
                  height={50}
                />
                <h1 className="text-[1.3rem]">Real-Time Data</h1>
                <p>Access the insights you need to make smarter decisions.</p>
              </div>
              <div className="w-1/2 space-y-2 ">
                <Image
                  src="/assets/rocketicon.svg"
                  alt="rocketicon"
                  width={50}
                  height={50}
                  className="mx-auto"
                />
                <h1 className="text-center text-[1.3rem]">
                  Fast and Easy to Use
                </h1>
                <p className="">Quickly convert APIs with just a few clicks.</p>
              </div>
              <div className="mt-6 w-1/2 space-y-2 pr-8">
                <Image
                  src="/assets/safetyicon.svg"
                  alt="safetyicon"
                  width={50}
                  height={50}
                />
                <h1 className="text-[1.3rem]">Secure and Reliable</h1>
                <p>
                  All customer data is fully encrypted for maximum security.
                </p>
              </div>
              <div className="mt-6 w-1/2 space-y-2">
                <Image
                  src="/assets/appicon.svg"
                  alt="appicon"
                  width={50}
                  height={50}
                  className="mx-auto"
                />
                <h1 className="text-center text-[1.3rem]">Powerful App</h1>
                <p>
                  A simple, minimalist dashboard for seamless user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
