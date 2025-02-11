import React from "react";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FaSlack, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-[#060b3b] pt-5">
      <div className="mx-auto flex w-[90%] flex-col pb-5 lg:w-3/5 lg:flex-row">
        {/* Logo and desc. */}
        <div className="lg:w-[30%]">
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
        {/* Links */}
        <div className="ml-auto mt-12 pt-5">
          <Link href="/" className="flex flex-row gap-12">
            <ul className="flex-1 space-y-2 text-gray-400">
              <p className="text-white">Product</p>
              <li>Services</li>
              <li>Pricing</li>
              <li>Benefits</li>
              <li>Features</li>
            </ul>
            <ul className=" flex-1 space-y-2 text-gray-400">
              <p className="text-white">Company</p>
              <li>About</li>
              <li>Privacy Policy</li>
              <li className="leading-tight">Terms & Conditions</li>
              <li>Partners</li>
              <li>Contact</li>
            </ul>
            <ul className="mr-3 flex-1 space-y-2 text-gray-400">
              <p className="text-white">Resources</p>
              <li className="leading-tight">Guides and Resources</li>
              <li>Blog</li>
              <li>Tools</li>
              <li>Support</li>
            </ul>
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-[90%] items-center py-5 lg:w-3/5">
        <p className="text-sm text-gray-200">
          © 2025 FlowIQ. All Rights Reserved
        </p>
        <Link href="/" className="ml-auto flex flex-row items-center gap-5">
          <AiFillInstagram className="size-7 text-white" />
          <BsTwitterX className="size-7 text-white" />
          <FaLinkedin className="size-7 text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
