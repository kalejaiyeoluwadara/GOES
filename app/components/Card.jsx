"use client";
import Image from "next/image";
import React from "react";
import img from "../assets/explore.webp";
import { BsArrowUpRight } from "react-icons/bs";
import { useGlobal } from "../Context";
function Card({ projectname, projectlocation, description, files }) {
  const { state, setState } = useGlobal();
  return (
    <div className="relative  h-[400px] my-8 overflow-hidden  bg-white w-[300px] border shadow-sm rounded-[6px]  ">
      <img src={files[0]} alt="" className="object-cover h-[300px] w-full " />
      <div className="flex justify-between items-start gap-2 400 p-3  ">
        <section>
          <h5 className="font-semibold text-primary text-[16px] ">
            {projectname}
          </h5>
          <p className="text-[15px] text-gray-600 ">{projectlocation}</p>
        </section>
        <button
          onClick={() => {
            setState((prev) => !prev);
          }}
          className="h-[40px] text-white flex items-center justify-center w-[40px] rounded-full bg-primary"
        >
          <BsArrowUpRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Card;
