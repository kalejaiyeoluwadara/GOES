import React from "react";
import { BsMenuButtonWide, BsCopy } from "react-icons/bs";
function Page() {
  return (
    <div className="items-start pt-8 pl-6 bg-gray-300 h-screen">
      <header className="w-screen text-gray-600 grid grid-cols-4 justify-center px-8 items-center bg-white shadow-md h-[80px]">
        <p>Name</p>
        <p>Email</p>
        <p className="col-span-2  ">Status</p>
      </header>

      <main className="w-screen border-y border-gray-400 text-gray-600 grid grid-cols-4 justify-center px-8 items-center bg-gray-200 shadow-md h-[80px]">
        <p>kalejaiye Oluwadara</p>
        <p className="flex  gap-1 items-center">
          kalejaiyeoluwadara1@gmail.com <BsCopy />{" "}
        </p>
        <p className="">Status</p>
        <BsMenuButtonWide />
      </main>
    </div>
  );
}

export default Page;
