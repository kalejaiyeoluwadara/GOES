"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGlobal } from "../Context";
import { useParams } from "@/utils/params";
import Button from "./Button";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { RiMenu2Fill } from "react-icons/ri";
import logo from "../assets/head.png";
import { usePathname } from "next/navigation";

function Nav() {
  const [staffs, setStaffs] = useState(false);
  const { item, setItem, setIsMenuOpen } = useGlobal();
  const active = useParams();
  const path = usePathname()

  useEffect(() => {
    const logStatus = localStorage.getItem("log");
    if (logStatus === "true") {
      setItem("Log Out");
    }
  }, []);

  const isActive = (path) => active === path;

  if(path.startsWith('/admin')){
    return;
  }

  return (
    <div className="w-screen fixed z-50 top-0 flex items-center justify-between px-4 sm:px-12 h-[80px] sm:h-[100px] bg-white">
      {/* Logo */}
      <div>
        <Image
          className="h-full object-cover sm:w-[220px] w-[90px]"
          src={logo}
          alt="Logo"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <ul className="flex gap-2 items-center">
          <Link href="/">
            <li className={`text-[16px] px-2 cursor-pointer text-primary ${isActive("/") ? "border-b-2 border-primary font-semibold" : ""}`}>
              Home
            </li>
          </Link>

          <Link href="/about-us">
            <li className={`text-[16px] px-2 cursor-pointer text-primary ${isActive("/about-us") ? "border-b-2 border-primary font-semibold" : ""}`}>
              About Us
            </li>
          </Link>

          {/* Our Director */}
          <Link href="/director">
            <li className={`text-[16px] px-2 cursor-pointer text-primary ${isActive("/director") ? "border-b-2 border-primary font-semibold" : ""}`}>
              Our Director
            </li>
          </Link>



          <Link href="/projects">
            <li className={`text-[16px] px-2 cursor-pointer text-primary ${[
              "/projects",
              "/ongoing-projects",
              "/past-projects"
            ].includes(active) ? "border-b-2 border-primary font-semibold" : ""}`}>
              Projects
            </li>
          </Link>

          <Link href="/consultancy">
            <li className={`text-[16px] px-2 cursor-pointer text-primary ${isActive("/consultancy") ? "border-b-2 border-primary font-semibold" : ""}`}>
              Consultancy
            </li>
          </Link>

          <Link href="/work-experience">
            <li className={`text-[16px] px-2 cursor-pointer text-primary ${isActive("/work-experience") ? "border-b-2 border-primary font-semibold" : ""}`}>
              Work Experience & Training
            </li>
          </Link>
        </ul>
      </div>

      
        <Button title="Hire" otherStyles="bg-[#2B0184] text-white" />
      

      {/* Mobile Menu Icon */}
      <div className="lg:hidden block">
        <RiMenu2Fill
          onClick={() => setIsMenuOpen(true)}
          size={30}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Nav;
