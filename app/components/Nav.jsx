"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGlobal } from "../Context";
import { useParams } from "@/utils/params";
import { RiMenu2Fill } from "react-icons/ri";
import logo from "../assets/head.png";
import { usePathname } from "next/navigation";

function Nav() {
  const { item, setItem, setIsMenuOpen } = useGlobal();
  const active = useParams();
  const path = usePathname();

  useEffect(() => {
    const logStatus = localStorage.getItem("log");
    if (logStatus === "true") {
      setItem("Log Out");
    }
  }, []);

  const isActive = (route) => {
    if (Array.isArray(route)) return route.includes(active);
    return active === route;
  };

  if (path.startsWith("/admin")) return null;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/director", label: "Our Director" },
    {
      href: "/projects",
      label: "Projects",
      match: ["/projects", "/ongoing-projects", "/past-projects"],
    },
    { href: "/consultancy", label: "Consultancy" },
    { href: "/work-experience", label: "Work Experience & Training" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="block">
          <Image
            src={logo}
            alt="Logo"
            priority
            className="w-[140px] sm:w-[180px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-10 items-center">
          {navLinks.map(({ href, label, match }) => (
            <Link key={href} href={href}>
              <span
                className={`relative text-sm font-medium tracking-wide text-gray-800 hover:text-[#2B0184] transition-colors duration-300
                  ${isActive(match || href) ? "text-[#2B0184] font-semibold" : ""}
                `}
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#2B0184] transition-all duration-300
                    ${isActive(match || href) ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                ></span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <RiMenu2Fill
            onClick={() => setIsMenuOpen(true)}
            size={28}
            className="cursor-pointer text-[#2B0184]"
          />
        </div>
      </div>
    </header>
  );
}

export default Nav;
