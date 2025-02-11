import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const GetStarted = () => {
  return (
    <div className="w-full">
      <div className="mx-auto my-20 rounded-lg bg-[#209fa0] py-16 lg:w-3/5 lg:items-center">
        <div className="mx-auto w-1/2">
          <h1 className=" text-[2.7rem] leading-tight text-white">
            Ready to get started?
          </h1>
          <p className="mt-2 text-lg leading-tight text-gray-300">
            The fastest and easiest way to drive business growth with our
            solutions. Contact us with your email below!
          </p>
          <div className="mt-6 flex flex-col items-center gap-x-2 space-y-2 md:flex md:flex-col lg:flex lg:flex-row lg:space-y-0">
            <Input
              type="email"
              placeholder="Your business email"
              className="h-[4.2rem] border-[#20a2a2] bg-[#edffff] px-6 placeholder:text-[1rem] placeholder:text-gray-500 lg:pr-56 xl:pr-2"
            />
            <Button className="h-[4.2rem] border-[#20a2a2] bg-teal-200 px-9 py-6 text-[1rem] text-teal-700 hover:bg-teal-700 hover:text-teal-200 lg:flex">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
