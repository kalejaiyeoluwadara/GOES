"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsMenuButtonWide, BsCopy, BsArrowsVertical } from "react-icons/bs";
import Selected from "./Selected";
function Page() {
  const [selected, setSelected] = useState(null);
  return (
    <div className=" flex pt-8 pl-6 bg-gray-300 h-screen">
      {selected ? (
        <Selected />
      ) : (
        <div>
          <header className="w-screen text-gray-600 grid grid-cols-4 justify-center px-8 items-center bg-white shadow-md h-[80px]">
            <p>Name</p>
            <p></p>
            <p className=""></p>
          </header>

          <div className="flex flex-col">
            {[1, 2, 3, 4, 5].map((d, id) => {
              return (
                <main
                  onClick={() => {
                    setSelected(d);
                  }}
                  className="w-screen border-y cursor-pointer border-gray-400 text-gray-600 grid grid-cols-3 justify-center px-8 items-center bg-gray-200 shadow-md h-[80px]"
                >
                  <p>kalejaiye Oluwadara</p>
                  <p className="flex text-primary gap-1 items-center">
                    View Application <BsArrowsVertical />{" "}
                  </p>
                  <p className="">Status</p>
                </main>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
