"use client";
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
  { route: "dashboard", icon: <FaTachometerAlt /> },
  { route: "message", icon: <FaEnvelope /> },
  { route: "users", icon: <FaUsers /> },
  { route: "applications", icon: <FaFileAlt /> },
  { route: "upload", icon: <FaUpload /> },
  { route: "products", icon: <FaBox /> },
];
function SideBar() {
  const [active, setActive] = useState("dashboard");
  return (
    <div className="h-screen flex relative items-start px-4 justify-center gap-2 flex-col bg-primary  top-0 w-[180px]">
      {routes.map((item, id) => {
        return (
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
              {item.route}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;
