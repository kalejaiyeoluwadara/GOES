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
  { route: "applications", icon: <FaFileAlt /> },
  { route: "upload", icon: <FaUpload /> },
  { route: "products", icon: <FaBox /> },
];
function SideBar() {
  const [active, setActive] = useState("");
  return (
    <div className="h-screen flex relative items-start px-4 justify-center gap-2 flex-col bg-primary  top-0 w-[180px]">
      {routes.map((item, id) => {
        return (
          <Link href={`/admin/dashboard/${item.route}`}>
            <div
              onClick={() => {
                setActive(item.route);
              }}
              key={id}
              className={`flex cursor-pointer  px-4 py-3 rounded-md ${
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
