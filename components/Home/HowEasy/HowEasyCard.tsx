import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
};

const HowEasyCard = ({ image, title, description }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="mx-auto object-contain"
      />
      <h1 className="my-5 text-center text-[1.4rem]">{title}</h1>
      <p className="text-center text-lg text-gray-500">{description}</p>
    </div>
  );
};

export default HowEasyCard;
