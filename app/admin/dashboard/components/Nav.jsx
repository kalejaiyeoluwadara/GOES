import Image from "next/image";
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { BsFillPersonFill } from "react-icons/bs";
import logo from "../../../assets/logo.svg";
import Link from "next/link";
function Nav() {
  return (
    <div className="w-screen relative flex items-center justify-between px-8  h-[80px] bg-white shadow  z-40 ">
      <Link href={"/admin"}>
        <Image className=" h-[40px] w-[40px] " src={logo} alt="" />
      </Link>
      <div className="flex gap-8">
        <IoSettingsOutline size={25} className="text-black" />
        <CiBellOn size={25} className="text-black" />
        <Link href={"/admin/dashboard/update"}>
          <BsFillPersonFill size={25} className="text-black" />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
