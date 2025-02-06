import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  comment: string;
  profile: string;
  name: string;
  position: string;
};

const CustomersCard = ({ image, comment, profile, name, position }: Props) => {
  return (
    <div className="flex-1 bg-[#edffff] p-10">
      <Image
        src={image}
        alt={comment}
        width={130}
        height={130}
        className="object-contain"
      />
      <p className="pt-8 text-gray-500">{comment}</p>
      <div className="flex space-x-6 pt-8">
        <Image src={profile} alt="profile" width={50} height={50} />
        <div className="flex flex-col">
          <h1 className="text-lg">{name}</h1>
          <p className="text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomersCard;
