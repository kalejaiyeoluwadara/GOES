"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaTachometerAlt,
  FaEnvelope,
  FaUsers,
  FaFileAlt,
  FaUpload,
} from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

const routes = [
  { route: "", icon: <FaTachometerAlt />, label: "Dashboard" },
  { route: "message", icon: <FaEnvelope />, label: "Messages" },
  // { route: "users", icon: <FaUsers />, label: "Users" },
  { route: "applications", icon: <FaFileAlt />, label: "Applications" },
  { route: "upload", icon: <FaUpload />, label: "Upload" },
  { route: "projects", icon: <GoProjectSymlink />, label: "Projects" },
];

function SideBar() {
  const active = usePathname();

  return (
    <div className="min-h-screen sm:flex hidden flex-col items-start justify-start gap-2 px-4 pt-8 bg-primary w-[190px]">
      {routes.map((item, index) => {
        const href = `/admin/dashboard/${item.route}`;
        const isActive = active === href;

        return (
          <Link href={href} key={index} passHref>
            <div
              className={`flex items-center gap-2 w-[170px] h-[50px] px-4 rounded-md cursor-pointer transition-colors duration-200 ${
                isActive ? "bg-white text-black" : "text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <p className="capitalize text-[16px] font-semibold">
                {item.label}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SideBar;
