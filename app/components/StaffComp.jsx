import React from "react";
import staff from "@/app/assets/staff.png";
import Image from "next/image";

function StaffComp() {
  return (
    <div className="h-[450px]  bg-white border border-gray-500 rounded-[20px] w-[350px] p-4 shadow-md ">
      <div className=" h-[300px] w-full bg-gray-100 relative rounded-[20px]   ">
        <Image className="cover" src={staff} alt="" />
      </div>
      <div className="w-full h-[100px] flex justify-center flex-col px-3 mt-4 rounded-[20px] bg-gray-100  overflow-hidden ">
        <h3 className="text-[16px] font-[500] text-primary ">
          Abiola Okanlawon
        </h3>
        <p className="text-gray-400 font-[300] ">Site Supervisor</p>
      </div>
    </div>
  );
}

export default StaffComp;
