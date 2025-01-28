import React from "react";
import Image from "next/image";
import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Nav = () => {
  return (
    <div className="z-[1000] h-[8.55vh] w-full bg-white transition-all duration-200">
      <div className="mx-auto flex h-full w-[90%] items-center justify-between xl:w-3/5">
        {/* logo */}
        <Image src="/images/logo.PNG" alt="logo" width={150} height={150} />
        {/* navigation links */}
        <div className="hidden items-center space-x-10 lg:flex">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="nav_link">{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex items-center space-x-6">
          <Link href="/">
            <p className="nav_link">Login</p>
          </Link>
          <Button className="bg-[#20a2a2] px-9 py-6 hover:bg-teal-200 hover:text-teal-700">
            Sign Up
          </Button>
          {/* Change Button? */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
