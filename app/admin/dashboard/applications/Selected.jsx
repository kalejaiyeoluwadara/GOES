import React from "react";
import { BsCopy } from "react-icons/bs";

function Selected() {
  return (
    <div className=" sm:px-20 w-screen bg-white py-12 justify-center flex-col">
      <h1 className="h4">Full Name</h1>
      <form className=" mt-10 sm:w-[700px]   grid gap-4 grid-rows-3 grid-cols-2 ">
        <div>
          <p>First Name</p>
          <div className="w-auto px-2 flex items-center justify-center rounded-md border border-primary h-[50px]  ">
            <input
              className=" px-2 outline-none flex-1 h-full w-full "
              type="text"
            />
            <BsCopy />
          </div>
        </div>
        <div>
          <p>Last Name</p>
          <div className="w-auto px-2 flex items-center justify-center rounded-md border border-primary h-[50px] ">
            <input
              className=" px-2 outline-none flex-1 h-full w-full "
              type="text"
            />
            <BsCopy />
          </div>
        </div>
        <div className="col-span-2">
          <p>Institution</p>
          <div className="w-auto px-2 flex items-center justify-center rounded-md border border-primary h-[50px] ">
            <input
              className=" px-2 outline-none flex-1 h-full w-full "
              type="text"
            />
            <BsCopy />
          </div>
        </div>
        <div>
          <p>Email</p>
          <div className="w-auto px-2 flex items-center justify-center rounded-md border border-primary h-[50px] ">
            <input
              className=" px-2 outline-none flex-1 h-full w-full "
              type="text"
            />
            <BsCopy />
          </div>
        </div>
        <div>
          <p>Type</p>
          <div className="w-auto px-2 flex items-center justify-center rounded-md border border-primary h-[50px] ">
            <input
              className=" px-2 outline-none flex-1 h-full w-full "
              type="text"
            />
            <BsCopy />
          </div>
        </div>
        <div className="col-span-2 ">
          <p>Resume / Application letter</p>
          <div className="w-auto px-2 flex items-center justify-center rounded-md border border-primary h-[50px] ">
            <input
              className=" px-2 outline-none flex-1 h-full w-full "
              type="text"
            />
            <BsCopy />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Selected;
