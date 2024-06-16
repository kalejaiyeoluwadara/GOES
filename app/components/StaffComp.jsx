import React from "react";

function StaffComp() {
  return (
    <div className="h-[450px]  bg-white border border-gray-500 rounded-[20px] w-[350px] p-4 shadow-md ">
      <div className=" h-[300px] w-full bg-gray-100 rounded-[20px]   "></div>
      <div className="w-full h-[100px] flex justify-center flex-col px-3 mt-4 rounded-[20px] bg-gray-100    ">
        <h3 className="text-[16px] font-[500] text-primary ">
          Abiola Okanlawon
        </h3>
        <p className="text-gray-400 font-[300] ">Site Supervisor</p>
      </div>
    </div>
  );
}

export default StaffComp;
