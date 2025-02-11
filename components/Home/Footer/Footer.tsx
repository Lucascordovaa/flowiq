import React from "react";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FaSlack } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#060b3b] py-10">
      <div className="mx-auto flex w-3/5 bg-teal-200">
        {/* Logo and desc. */}
        <div className="w-[30%] bg-yellow-900">
          <Image src="/images/logo2.png" alt="logo" width={150} height={150} />
          <p className="mt-4 text-lg text-white">
            The fastest and easiest way to drive business growth with our
            solutions.
          </p>
          <div className=" mt-4 flex flex-row items-center gap-2">
            <CiMail className="text-white" size={30} />
            <p className="text-white">flowiq@fictional.com</p>
          </div>
          <div className=" mt-4 flex flex-row items-center gap-2">
            <FaSlack className="text-white" size={30} />
            <p className="text-white">Join our slack community</p>
          </div>
        </div>
        <div className=" ml-auto grow bg-green-700">TEXT</div>
      </div>
    </div>
  );
};

export default Footer;
