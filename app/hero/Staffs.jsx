import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Card = () => {
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
};
function Staffs() {
  return (
    <div className="min-h-screen  flex flex-col pt-[180px] w-screen items-center justify-center ">
      <h1 className="text-primary text-[50px] font-bold  ">Our Staff</h1>
      <p className="w-[500px] text-gray-400 text-center ">
        Our esteemed staff without who have immensely contributed to the growth
        of this company
      </p>
      <div className="flex flex-col mt-10 pb-10 w-full bg-blue-50 items-center justify-center">
        <button className="my-8 flex gap-2 items-center justify-center border-2 border-primary px-4 py-2 rounded-md relative text-[18px] right-5 ">
          View more
          <FaArrowRightLong className="text-primary" size={20} />
        </button>
        <div className="flex  gap-4">
          {[1, 2, 3].map((d, id) => {
            return <Card />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Staffs;
