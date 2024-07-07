"use client";
import React from "react";
import finished from "@/app/assets/ongoing.jpg";
import past from "@/app/assets/past.jpg";
import Image from "next/image";
import Link from "next/link";
import { useGlobal } from "../Context";
function Page() {
  const { status, setStatus } = useGlobal();
  return (
    <div className="flex items-center flex-col gap-8 py-40  justify-center min-h-screen w-screen ">
      <h1 className="text-primary text-[36px]  ">Our Projects</h1>
      <div className="sm:w-[90%] w-[100%] flex-center relative h-[400px] bg-gray-900  ">
        <Image className=" cover " src={finished} alt="" />
        <div className="z-40 text-center text-white">
          <h1>Ongoing Projects</h1>
          <Link
            onClick={() => {
              setStatus("ongoing");
            }}
            href={"/projectslisting"}
          >
            {" "}
            <p className=" pointer hover:font-bold hover:text-primary ">
              Click to view {"- >"}
            </p>
          </Link>
        </div>
        <div className="cover bg-black z-20 bg-opacity-[0.5] "></div>
      </div>

      <div className="flex relative w-[90%]  flex-center h-[70px]  ">
        <div className="border-primary h-[2px] w-full bg-primary " />
        <div className="sm:w-[300px] w-[100px] h-[40px] absolute top-4 bg-white " />
      </div>

      <div className="sm:w-[90%] w-[100%] flex-center relative h-[400px] bg-gray-900  ">
        <Image className=" cover " src={past} alt="" />
        <div className="z-40 text-center text-white">
          <h1>Past Projects</h1>
          <Link
            onClick={() => {
              setStatus("past");
            }}
            href={"/projectslisting"}
          >
            {" "}
            <p className=" pointer hover:font-bold hover:text-primary ">
              Click to view {"- >"}
            </p>
          </Link>
        </div>
        <div className="cover bg-black z-20 bg-opacity-[0.5] "></div>
      </div>
    </div>
  );
}

export default Page;
