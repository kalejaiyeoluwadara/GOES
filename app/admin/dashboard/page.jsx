import React from "react";
import { BsAmazon } from "react-icons/bs";
function Page() {
  return (
    <main className="    flex-1 flex items-center justify-center ">
      <div className="grid w-full bg-gray-200 gap-8 h-full px-10 py-8 grid-cols-2">
        {" "}
        <div className="flex bg-white justify-between px-6 py-3 flex-col h-[150px] rounded-md shadow-sm w-auto ">
          <div className="flex items-center justify-between ">
            <p>Sessions</p>
            <BsAmazon />
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-[25px] font-[600] text-primary ">1.2k</h3>
            <h3 className="text-[15px] font-[600] text-primary ">Today</h3>
          </div>
        </div>
        <div className="flex bg-white justify-between px-6 py-3 flex-col h-[150px] rounded-md shadow-sm w-auto ">
          <div className="flex items-center justify-between ">
            <p>Users</p>
            <BsAmazon />
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-[25px] font-[600] text-primary ">1.2k</h3>
            <h3 className="text-[15px] font-[600] text-primary ">Today</h3>
          </div>
        </div>
        <div className="flex bg-white justify-between px-6 py-3 flex-col h-[150px] rounded-md shadow-sm w-auto ">
          <div className="flex items-center justify-between ">
            <p>Ongoing Projects</p>
            <BsAmazon />
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-[25px] font-[600] text-primary ">2</h3>
            {/* <h3 className="text-[15px] font-[600] text-primary ">Today</h3> */}
          </div>
        </div>
        <div className="flex bg-white justify-between px-6 py-3 flex-col h-[150px] rounded-md shadow-sm w-auto ">
          <div className="flex items-center justify-between ">
            <p>Past Projects</p>
            <BsAmazon />
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-[25px] font-[600] text-primary ">10</h3>
            {/* <h3 className="text-[15px] font-[600] text-primary ">Today</h3> */}
          </div>
        </div>
        <div className="col-span-2 flex bg-white h-[200px] rounded-md shadow-sm w-auto"></div>{" "}
      </div>
    </main>
  );
}

export default Page;
