import React from "react";
import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { Button } from "@/components/ui/button";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div
        className={`fixed ${navOpen} inset-0 z-[10000] h-screen w-full bg-black opacity-70 transition-all duration-500`}
      ></div>
      <div
        className={`${navOpen} fixed z-[10006] flex h-full w-4/5 flex-col justify-center space-y-6 bg-[#20a2a2] text-white transition-all delay-300 duration-500
          sm:w-3/5`}
      >
        {navLinks.map((link) => {
          return (
            <Link href={link.url} key={link.id}>
              <p className="nav_link ml-12 border-b-[1.5px] border-white pb-1 text-[20px] text-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}
        <Button className="mx-12 bg-white py-6 text-[#20a2a2] hover:bg-teal-200 hover:text-white">
          Log in
        </Button>
        <Button className="mx-12 bg-white py-6 text-[#20a2a2] hover:bg-teal-200 hover:text-white">
          Sign Up
        </Button>
        <CgClose
          onClick={closeNav}
          className="absolute right-[1.4rem] top-[0.7rem] size-6 cursor-pointer sm:size-8"
        />
      </div>
    </div>
  );
};

export default MobileNav;
