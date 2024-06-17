import React from "react";
import { BsCopy } from "react-icons/bs";

function Page() {
  return (
    <div className=" min-h-screen flex items-center justify-center w-screen flex-col py-10 px-8 gap-12">
      <div className="bg-blue-50 sm:w-[90%] h-[300px] flex items-center justify-center ">
        <p className="text-primary">Drag and drop file or click to pick file</p>
      </div>
      <div className="h-[300px] p-4 w-[90%]  ">
        <p className="text-primary  mb-2 ">Description</p>
        <textarea
          className="h-full border p-4 rounded-md border-primary w-full"
          name=""
          id=""
        ></textarea>
      </div>
      <div></div>
      <button className=" bg-primary text-white sm:w-[90%] rounded-xl h-[70px] flex items-center justify-center text-[20px] font-semibold ">
        Upload
      </button>
    </div>
  );
}

export default Page;
