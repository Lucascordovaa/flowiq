import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  image: string;
  price: number;
  title: string;
  description: string;
  buttonText: string;
  features: string[];
};

const PricingCard = ({
  image,
  price,
  title,
  description,
  buttonText,
  features,
}: Props) => {
  return (
    <div className="my-6 flex-1 space-y-4 rounded-lg bg-white p-10 shadow-md">
      <div className="mx-auto -mt-20 w-fit rounded-lg bg-white p-5 shadow-md">
        <Image
          src={image}
          alt="image"
          width={50}
          height={50}
          className="justify-center object-contain"
        />
      </div>
      <h1 className="text-center text-2xl">{title}</h1>
      <div className="flex items-end justify-center">
        <h1 className="text-center text-4xl">${price}</h1>
        <h1 className="text-center text-2xl">/month</h1>
      </div>
      <h1 className="text-center text-gray-500">{description}</h1>
      <div className="flex justify-center">
        <Button className=" bg-[#20a2a2] px-9 py-6 text-[1rem] hover:bg-teal-200 hover:text-teal-700 lg:flex">
          {buttonText}
        </Button>
      </div>
      <hr className="my-8 h-px border-0 bg-gray-500" />
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-500">
            <Image
              src="/assets/check.svg"
              alt="Check icon"
              width={20}
              height={20}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
