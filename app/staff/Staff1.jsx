import React from "react";
import Card from "../components/Card";
import StaffComp from "../components/StaffComp";

function Staff1() {
  return (
    <div className=" w-screen py-40 bg-white min-h-screen grid grid-col-1 sm:grid-cols-3 justify-between gap-10 px-4 sm:px-20 ">
      {[1, 2, 3, 4, 5, 5].map((d, id) => {
        return <StaffComp />;
      })}
    </div>
  );
}

export default Staff1;
