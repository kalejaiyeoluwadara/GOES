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
import { useParams } from "@/utils/params";
import logo from "../assets/head.png";
import { RiMenu2Fill } from "react-icons/ri";
import Image from "next/image";
import { useGlobal } from "../Context";
function Nav() {
  const [about, setAbout] = useState(false);
  const [profiles, setProfiles] = useState(false);
  const [work, setWork] = useState(false);
  const { item, setItem, isMenuOpen, setIsMenuOpen } = useGlobal();

  const active = useParams();
  useEffect(() => {
    const logStatus = localStorage.getItem("log");
    if (logStatus === "true") {
      setItem("Log Out");
    }
  }, []); // Runs only once when the component mounts
  const [staffs, setstaffs] = useState(false);
  return (
    <div
      className={`w-screen bg-white sm:z-30 fixed z-50 sm:absolute top-0  flex items-center justify-between px-4 sm:px-12 h-[80px] sm:h-[100px] ${
        active === "/admin/dashboard" ||
        active === "/admin/dashboard/message" ||
        active === "/admin/dashboard/users" ||
        active === "/admin/dashboard/applications" ||
        active === "/admin/dashboard/upload" ||
        active === "/admin/dashboard/projects" ||
        active === "/admin/dashboard/update"
          ? "invisible"
          : " visible "
      } `}
    >
      <div>
        <Image
          className="h-full object-cover sm:w-[220px] w-[90px] "
          src={logo}
          alt=""
        />
      </div>
      <div className="sm:block hidden  ">
        <ul className="flex gap-2 items-center ">
          <Link href={"/"}>
            <li
              className={`text-[16px] text-primary   px-2 cursor-pointer ${
                active === "/" ? "border-b-2 border-primary font-semibold " : ""
              } `}
            >
              Home
            </li>
          </Link>
          <li
            onClick={() => {
              setProfiles(false);
              setAbout((prev) => !prev);
            }}
            className={`text-[16px] relative flex items-center gap-1 ${
              active === "/about-us"
                ? "border-b-2 border-primary font-semibold "
                : ""
            }    px-2 cursor-pointer text-primary`}
          >
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <div
            className="relative"
            onClick={() => {
              setstaffs((prev) => !prev);
            }}
          >
            <li
              className={`text-[16px]   text-primary  flex items-center gap-1  ${
                active === "/our-staffs" ||
                active === "/staff" ||
                active === "/director"
                  ? "border-b-2 border-primary font-semibold "
                  : ""
              }  b  px-2 cursor-pointer`}
            >
              Our Staffs
              {!staffs ? (
                <GoChevronDown size={20} />
              ) : (
                <GoChevronUp size={20} />
              )}
            </li>
            {staffs && (
              <div className="absolute flex items-center justify-center gap-10 z-40 left-20 top-[15px] h-[100px] w-[400px] bg-white shadow-md rounded-md ">
                <Link
                  className="hover:shadow-sm hover:border px-3 py-2 rounded-md "
                  href={"/director"}
                >
                  Director Profile
                </Link>
                <Link
                  className="hover:shadow-sm cursor-pointer relative z-40 hover:border px-3 py-2 rounded-md "
                  href={"/staff"}
                >
                  Staffs
                </Link>
              </div>
            )}
          </div>
          <Link href={"/projects"}>
            <li
              className={`text-[16px] text-primary relative flex items-center gap-1  ${
                active === "/projects" ||
                active === "/ongoing-projects" ||
                active === "/past-projects"
                  ? "border-b-2 border-primary font-semibold "
                  : ""
              }  b  px-2 cursor-pointer`}
            >
              Projects
            </li>
          </Link>
          <Link href={"/consultancy"}>
            <li
              className={`text-[16px] text-primary ${
                active === "/consultancy"
                  ? "border-b-2 border-primary font-semibold "
                  : ""
              } cursor-pointer`}
            >
              Consultancy
            </li>
          </Link>
          <Link href={"/work-experience"}>
            <li
              className={`text-[16px] relative flex items-center gap-1  ${
                active === "/work-experience"
                  ? "border-b-2 border-primary font-semibold "
                  : ""
              }  text-primary px-2 cursor-pointer`}
            >
              Work Experience & Training
            </li>
          </Link>
        </ul>
      </div>
      <div className="sm:flex hidden gap-3">
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
      <div className="sm:hidden block ">
        {" "}
        <RiMenu2Fill
          onClick={() => {
            setIsMenuOpen(true);
          }}
          size={30}
        />
      </div>
    </div>
  );
}

export default Nav;
