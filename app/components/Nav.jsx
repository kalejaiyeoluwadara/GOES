"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGlobal } from "../Context";
import { useParams } from "@/utils/params";
import Button from "./Button";
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
    if (Array.isArray(route)) {
      return route.includes(active);
    }
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
    <header className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 flex items-center justify-between h-[80px] sm:h-[100px]">
        {/* Logo */}
        <Link href="/" className="block">
          <Image
            src={logo}
            alt="Logo"
            className="object-cover w-[90px] sm:w-[220px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ href, label, match }) => (
            <Link key={href} href={href}>
              <span
                className={`relative cursor-pointer text-primary text-sm sm:text-base font-medium transition duration-200 hover:text-[#2B0184] ${
                  isActive(match || href)
                    ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#2B0184] font-semibold"
                    : ""
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:block">
          <Button title="Hire" otherStyles="bg-[#2B0184] text-white px-5 py-2" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <RiMenu2Fill
            onClick={() => setIsMenuOpen(true)}
            size={28}
            className="cursor-pointer text-primary"
          />
        </div>
      </div>
    </header>
  );
}

export default Nav;
