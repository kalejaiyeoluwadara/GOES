"use client";
import React from "react";
import Image from "next/image";
import { useGlobal } from "@/app/Context";
import dummy from "@/app/assets/dummy.jpeg";
function Page() {
  const { state, setState } = useGlobal();
  console.log(state);
  return (
    <main className="min-h-screen relative bg-white pt-[100px] py-[80px]  main flex-col ">
      <h1 className="text-primary mb-12 ">"BORA" Hotel Building </h1>
      <div className="flex flex-wrap gap-10 items-center justify-center ">
        {[1, 2, 3, 4, 5, 6].map((d, id) => {
          return (
            <div className="h-[300px] cursor-pointer relative w-[300px] bg-gray-400  ">
              <Image
                onClick={() => {
                  setState(null);
                }}
                className="cover h-full w-full "
                src={dummy}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Page;
