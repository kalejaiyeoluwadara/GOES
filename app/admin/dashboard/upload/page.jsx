import React from "react";
import { BsCopy } from "react-icons/bs";

function Page() {
  return (
    <div className=" h-screen flex items-center justify-center w-screen flex-col py-10 px-8 gap-12">
      <div className="bg-blue-50 w-[600px] h-[700px] flex items-center justify-center ">
        <p className="text-primary">Drag and drop file or click to pick file</p>
      </div>
      <textarea
        className="h-[300px] w-[300px] border border-primary "
        name=""
        id=""
      ></textarea>
      <div></div>
      <button className=" w-[400px] h-[60px] flex items-center justify-center text-[20px] font-semibold ">
        Upload
      </button>
    </div>
  );
}

export default Page;
