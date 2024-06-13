import Image from "next/image";
import React from "react";
import explore from "../assets/explore.webp";
import Button from "../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
function Explore() {
  return (
    <div className="main relative min-h-[400px]  ">
      <Image src={explore} alt="" className="cover  " placeholder="blur" />
      <div className="cover bg-black bg-opacity-40" />
      <div className="relative flex flex-col gap-2 items-center z-40 ">
        <h1 className="text-[40px] text-white font-bold ">Explore</h1>
        <h1 className="text-[40px] font-bold text-white ">
          Modern <span className="text-primary">Day</span>
        </h1>
        <h1 className="text-[40px] text-white font-bold ">Equipment We Use</h1>
        <button className="px-8 flex gap-2 text-[20px] py-3 rounded-md text-white font-bold bg-primary ">
          Explore <FaArrowRightLong size={30} />
        </button>
      </div>
    </div>
  );
}

export default Explore;
