"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import { CgMenuGridR } from "react-icons/cg";

import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";
import {
  FaTachometerAlt,
  FaEnvelope,
  FaUsers,
  FaFileAlt,
  FaUpload,
  FaBox,
} from "react-icons/fa"; // Import necessary icons
import { GoProjectSymlink } from "react-icons/go";
function Mobile() {
  const [menu, setMenu] = useState(false);
  const routes = [
    { route: "", icon: <FaTachometerAlt /> },
    { route: "message", icon: <FaEnvelope /> },
    { route: "users", icon: <FaUsers /> },
    { route: "applications", icon: <FaFileAlt /> },
    { route: "upload", icon: <FaUpload /> },
    { route: "projects", icon: <GoProjectSymlink /> },
  ];
  return (
    <div className=" w-screen bg-white flex px-4 sm:hidden justify-between items-center  h-[70px]  fixed z-50 bottom-0 ">
      <Image className=" h-[40px] w-[40px] " src={logo} alt="" />
      <CgMenuGridR
        onClick={() => {
          setMenu((prev) => !prev);
        }}
        size={20}
      />
      {menu && (
        <div className="h-[200px] flex items-center justify-center absolute bottom-0 left-0 w-full ">
          <div className="h-full w-[90%] bg-white rounded-t-xl">
            <div className="w-full flex items-end justify-end pr-3 pt-3 ">
              <LiaTimesSolid
                onClick={() => {
                  setMenu(false);
                }}
                size={20}
                className="text-red-500"
              />
            </div>
            <div className="grid p-6 grid-cols-3 ">
              {routes.map((item, id) => {
                return (
                  <Link key={id} href={`/admin/dashboard/${item.route}`}>
                    <div
                      className={`flex flex-col cursor-pointer  justify-center items-center h-[50px] gap-2`}
                    >
                      {item.icon}
                      <p className=" capitalize text-[12px] font-normal">
                        {item.route === "" ? "Dashboard" : item.route}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mobile;
