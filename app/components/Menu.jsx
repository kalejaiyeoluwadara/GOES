"use client";
import Link from "next/link";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { useGlobal } from "../Context";
function Menu() {
  const { isMenuOpen, setIsMenuOpen } = useGlobal();
  return (
    <>
      {isMenuOpen && (
        <div className="fixed top-0 z-50 left-0 h-screen w-screen  bg-black bg-opacity-65 flex-center  ">
          <div className="h-[400px] w-[330px] bg-white p-6 rounded-xl ">
            <div
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="flex cursor-pointer items-end justify-end "
            >
              <LiaTimesSolid size={30} />
            </div>
            <div
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="flex mt-10 flex-col items-center gap-4 justify-center  text-black "
            >
              <Link href={"/"}>Home</Link>
              <Link href={"/about-us"}>About Us</Link>
              <Link href={"/staff"}>Our Staffs</Link>
              <Link href={"/director"}>Director Profile</Link>
              <Link href={"/projects"}>Projects</Link>
              <Link href={"/consultancy"}>Consultancy</Link>
              <Link href={"/work-experience"}>Work Experience & Training</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
