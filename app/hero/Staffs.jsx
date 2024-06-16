import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import StaffComp from "../components/StaffComp";
function Staffs() {
  return (
    <div className="min-h-screen  flex flex-col pt-[180px] w-screen items-center justify-center ">
      <h1 className="text-primary text-[50px] font-bold  ">Our Staff</h1>
      <p className="w-[500px] text-gray-400 text-center ">
        Our esteemed staff without who have immensely contributed to the growth
        of this company
      </p>
      <div className="flex flex-col mt-10 pb-10 w-full bg-blue-50 items-center justify-center">
        <Link href={"/staff"}>
          <button className="my-8 flex gap-2 items-center justify-center border-2 border-primary px-4 py-2 rounded-md relative text-[18px] right-5 ">
            View more
            <FaArrowRightLong className="text-primary" size={20} />
          </button>
        </Link>
        <div className="flex  gap-4">
          {[1, 2, 3].map((d, id) => {
            return <StaffComp />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Staffs;
