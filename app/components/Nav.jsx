"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import { GoPersonFill } from "react-icons/go";
import { RxPerson } from "react-icons/rx";
import { BsBuildingCheck } from "react-icons/bs";
import { FaPhone, FaBuildingCircleArrowRight } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import logo from "../assets/head.png";
import Image from "next/image";
import { useGlobal } from "../Context";
function Nav() {
  const [about, setAbout] = useState(false);
  const [profiles, setProfiles] = useState(false);
  const [work, setWork] = useState(false);
  const { item, setItem } = useGlobal();
  useEffect(() => {
    const logStatus = localStorage.getItem("log");
    if (logStatus === "true") {
      setItem("Log Out");
    }
  }, []); // Runs only once when the component mounts

  return (
    <div className="w-screen z-30 absolute top-2 flex items-center justify-between px-12 h-[70px]">
      <div>
        <Image className="h-[70px] object-cover w-[180px]" src={logo} alt="" />
      </div>
      <div>
        <ul className="flex gap-6">
          <Link href={"/"}>
            <li className="text-[16px] text-[#2B0184] cursor-pointer">Home</li>
          </Link>
          <li
            onClick={() => {
              setProfiles(false);
              setAbout((prev) => !prev);
            }}
            className="text-[16px] relative flex items-center gap-1 text-[#2B0184] cursor-pointer"
          >
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <Link href={"/projects"}>
            <li className="text-[16px] relative flex items-center gap-1 text-[#2B0184] cursor-pointer">
              Projects
            </li>
          </Link>
          <Link href={"/consultancy"}>
            <li className="text-[16px] text-[#2B0184] cursor-pointer">
              Consultancy
            </li>
          </Link>
          <Link href={"/work-experience"}>
            <li className="text-[16px] relative flex items-center gap-1 text-[#2B0184] cursor-pointer">
              Work Experience & Training
              <AnimatePresence>
                {work && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="px-4 py-2 shadow-sm w-[200px] absolute -bottom-[110px] bg-white space-y-2 rounded-md"
                  >
                    <p className="text-primary flex gap-2 text-[15px] font-[500]">
                      SIEWS
                    </p>
                    <p className="text-primary flex gap-2 text-[15px] font-[500]">
                      NYSC
                    </p>
                    <p className="text-primary flex gap-2 text-[15px] font-[500]">
                      Industrial Training
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-3">
        {item === "Register" && (
          <Link href={"/register/login"}>
            <Button otherStyles={"text-primary font-[500]"} title={item} />
          </Link>
        )}
        {item === "Log Out" && (
          <div
            onClick={() => {
              localStorage.removeItem("log");
              setItem("Register");
            }}
          >
            <Button otherStyles={"text-primary font-[500]"} title={item} />
          </div>
        )}
        <Button otherStyles={"bg-[#2B0184] text-white"} title={"Hire"} />
      </div>
    </div>
  );
}

export default Nav;
