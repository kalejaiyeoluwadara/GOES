"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  FaTachometerAlt,
  FaEnvelope,
  FaUsers,
  FaFileAlt,
  FaUpload,
  FaBox,
} from "react-icons/fa"; // Import necessary icons
import { GoProjectSymlink } from "react-icons/go";
const routes = [
  { route: "", icon: <FaTachometerAlt /> },
  { route: "message", icon: <FaEnvelope /> },
  { route: "users", icon: <FaUsers /> },
  { route: "applications", icon: <FaFileAlt /> },
  { route: "upload", icon: <FaUpload /> },
  { route: "projects", icon: <GoProjectSymlink /> },
];
function SideBar() {
  const active = usePathname();
  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <div className="min-h-screen flex relative items-start px-4 justify-start pt-8 gap-2 flex-col bg-primary  top-0 w-[190px]">
      {routes.map((item, id) => {
        return (
          <Link href={`/admin/dashboard/${item.route}`}>
            <div
              key={id}
              className={`flex cursor-pointer px-4 w-[170px] items-start justify-start h-[50px]  rounded-md ${
                active === `/admin/dashboard/${item.route}`
                  ? "bg-white text-black "
                  : "bg-none text-white "
              } items-center gap-2`}
            >
              {item.icon}
              <p className=" capitalize text-[16px] font-semibold">
                {item.route === "" ? "Dashboard" : item.route}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SideBar;
