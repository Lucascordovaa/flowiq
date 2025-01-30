"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={` fixed ${navBg ? "bg-white shadow-md" : "fixed"} z-[1000] h-[8.55vh] w-full transition-all duration-200`}
    >
      <div className="mx-auto flex h-full w-[90%] items-center justify-between bg-white xl:w-3/5">
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
          <Link href="/" className="hidden lg:flex">
            <p className="nav_link">Login</p>
          </Link>
          <Button className="hidden bg-[#20a2a2] px-9 py-6 text-[1rem] hover:bg-teal-200 hover:text-teal-700 lg:flex">
            Sign Up
          </Button>
          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="size-8 cursor-pointer text-black lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
