"use client";
import React from "react";
import Image from "next/image";
import { useGlobal } from "@/app/Context";
import dummy from "@/app/assets/dummy.jpeg";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
function Page() {
  const { state, setState, status } = useGlobal();
  return (
    <main className="min-h-screen relative bg-white pt-[100px] py-[80px]  main flex-col ">
      <h1 className="text-primary mb-4 ">{state.projectname}</h1>
      <Link
        className="flex sm:px-0 px-3 w-full text-[20px] items-center mb-12 gap-4"
        href={"/projectslisting"}
      >
        <p className="flex items-center text-gray-500 justify-center gap-2">
          <IoArrowBack size={20} />
          Go Back
        </p>
        <p className="  text-start  font-medium text-gray-800  ">
          Projects\<span className="text-gray-500 capitalize ">{status}</span>
        </p>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full items-center justify-center ">
        {state?.files.map((d, id) => {
          return (
            <div className="h-[300px] cursor-pointer relative w-full sm:w-[300px] bg-gray-400  ">
              <img alt="" className="cover h-full w-full " src={d} />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Page;
