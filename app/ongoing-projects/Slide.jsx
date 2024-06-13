"use client";
import React, { useState } from "react";
import Card from "../components/Card";
import Gallery from "../components/Gallery";
function Slide() {
  const [state, setState] = useState(false);
  return (
    <>
      {state ? (
        <main className="flex items-center justify-center sm:px-[110px] ">
          <div className="min-h-screen  py-20  items-center justify-center w-full  flex flex-wrap gap-10 ">
            {[1, 2, 3, 4, 5, 6].map((d, id) => {
              return <Card />;
            })}
          </div>
        </main>
      ) : (
        <Gallery />
      )}
    </>
  );
}

export default Slide;
