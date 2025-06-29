import React from "react";
import Footer from "../components/Footer";

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
    <>
      <div className="min-h-screen py-20 sm:py-40 w-screen bg-white flex flex-col justify-center items-center ">
        <h1 className="font-medium text-primary sm:my-0 my-8 ">
          Equipment Gallery
        </h1>
        <div className=" sm:mt-10 grid sm:grid-cols-3 grid-cols-1 grid-rows-1 sm:grid-rows-3 gap-4 ">
          <Grid styles={"h-[250px]"} />
          <Grid styles={" h-[310px] "} />
          <Grid styles={"h-[250px]"} />
          <Grid styles={"h-[250px]"} />
          <Grid styles={" h-[220px] mt-8 w-auto sm:col-span-2  "} />
          <Grid styles={"h-[250px] w-auto sm:col-span-3"} />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Page;
