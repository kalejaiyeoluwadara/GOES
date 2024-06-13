import React from "react";
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
  return (
    <div className="h-screen flex items-start px-4 justify-center gap-6 flex-col bg-primary fixed top-0 w-[180px]">
      {routes.map((item, id) => (
        <div key={id} className="flex text-white items-center gap-2">
          {item.icon}
          <p className="text-white capitalize text-[16px] font-semibold">
            {item.route}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
