import React from "react";

const Grid = ({ styles }) => {
  return (
    <div
      className={` w-[300px] flex justify-start items-end bg-gray-300 ${styles} `}
    >
      <div className="text-white px-3 py-1 bg-primary">machine name</div>
    </div>
  );
};
function Page() {
  return (
    <div className="min-h-screen py-20 w-screen bg-white flex flex-col justify-center items-center ">
      <h1 className="font-medium text-primary ">Equipment Gallery</h1>
      <div className=" sm:mt-10 grid grid-cols-3 grid-rows-3 gap-4 ">
        <Grid styles={"h-[250px]"} />
        <Grid styles={" h-[310px] "} />
        <Grid styles={"h-[250px]"} />
        <Grid styles={"h-[250px]"} />
        <Grid styles={" h-[220px] mt-8 w-auto col-span-2  "} />
        <Grid styles={"h-[250px] w-auto col-span-3"} />
      </div>
    </div>
  );
}

export default Page;
