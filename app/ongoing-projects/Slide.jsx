import React from "react";
import Card from "./components/Card";

function Slide() {
  return (
    <main className="flex items-center justify-center sm:px-[110px] ">
      <div className="min-h-screen  py-20  items-center justify-center w-full  flex flex-wrap gap-10 ">
        {[1, 2, 3, 4, 5, 6].map((d, id) => {
          return <Card />;
        })}
      </div>
    </main>
  );
}

export default Slide;
