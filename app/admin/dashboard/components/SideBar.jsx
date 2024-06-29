"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaEnvelope,
  FaUsers,
  FaFileAlt,
  FaUpload,
  FaBox,
} from "react-icons/fa"; // Import necessary icons

const routes = [
  { route: "", icon: <FaTachometerAlt /> },
  { route: "message", icon: <FaEnvelope /> },
  { route: "users", icon: <FaUsers /> },
  { route: "applications", icon: <FaFileAlt size={30} /> },
  { route: "upload", icon: <FaUpload /> },
];
function SideBar() {
  const [active, setActive] = useState("");
  return (
    <div className="min-h-screen flex relative items-start px-8 justify-start pt-8 gap-2 flex-col bg-primary  top-0 w-[190px]">
      {routes.map((item, id) => {
        return (
          <Link href={`/admin/dashboard/${item.route}`}>
            <div
              onClick={() => {
                setActive(item.route);
              }}
              key={id}
              className={`flex cursor-pointer px-4 w-[150px] items-start justify-start h-[50px]  rounded-md ${
                active === item.route
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
