import Image from "next/image";
import React from "react";
import hero from "../assets/hero.jpeg";
import test1 from "@/app/assets/test1.jpg";
import test2 from "@/app/assets/test2.jpg";
import test3 from "@/app/assets/test3.jpg";
import Link from "next/link";
import mobileBg from "@/app/assets/mobile-bg.jpg";

function Hero() {
  return (
    <div className="relative min-h-[800px] sm:px-0 px-4 sm:pt-0 pt-12 text-white overflow-hidden">
      {/* Background Images Wrapper */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        <div className="sm:hidden">
          {/* <Image
            src={mobileBg}
            alt="Mobile background"
            className="w-full h-full object-cover"
            priority
            fill
          /> */}
        </div>

        {/* Desktop Background */}
        <div className="hidden sm:block">
          {/* <Image
            src={hero}
            alt="Hero background"
            className="w-full h-full object-cover object-top"
            priority
            fill
          /> */}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col sm:px-8 justify-end md:pt-40 pt-20 pb-10 items-start w-full text-[#2B0184]">
        <h3 className="text-white text-[20px]">Welcome to:</h3>
        <h1 className="font-[700] text-[20px] sm:text-[40px] text-white">
          GANI-OLA ENGINEERING SERVICES, LTD
        </h1>
        <h1 className="text-white font-[400]">
          Where <span className="font-bold text-primary">Imagination</span> meets{" "}
          <span className="font-bold text-primary">Innovation</span>
        </h1>

        <Link href="/about-us">
          <button className="bg-primary text-white px-6 py-3 mt-4 text-[20px] font-[500] rounded-md">
            Connect With Us
          </button>
        </Link>

        {/* Clients */}
        <div className="flex items-center gap-3 mt-8 px-6 py-3 bg-gradient-to-r from-primary/10 via-white to-primary/10 rounded-full shadow-md border border-primary/10">
          <span className="inline-flex items-center justify-center bg-primary text-white font-bold text-lg w-10 h-10 rounded-full shadow">
            20+
          </span>
          <span className="text-primary font-semibold text-base tracking-wide">
            Satisfied Clients
          </span>
        </div>

        {/* Stats */}
        <div className="bg-white sm:px-0 px-4 flex sm:gap-8 gap-2 items-center justify-center w-[500px] mt-[70px] h-[110px] sm:-translate-x-10 -translate-x-[70px] rounded-xl">
          {[
            { label: "Projects Done", value: "50+" },
            { label: "Total Employees", value: "150+" },
            { label: "Years Experience", value: "25+" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center flex-col">
              <h1 className="leading-[40px] text-primary font-bold">{item.value}</h1>
              <p className="text-gray-600 sm:text-base text-[14px]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
