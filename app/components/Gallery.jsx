import React from "react";
import { useGlobal } from "../Context";
import Image from "next/image";
import dummy from "../assets/dummy.jpeg";
function Gallery() {
  const { state, setState } = useGlobal();
  return (
    <main className="min-h-screen relative bg-white py-[80px]  main flex-col ">
      <h1 className="text-primary mb-12 ">"BORA" Hotel Building </h1>
      <div className="flex flex-wrap gap-10 items-center justify-center ">
        {[1, 2, 3, 4, 5, 6].map((d, id) => {
          return (
            <div className="h-[300px] cursor-pointer relative w-[300px] bg-gray-400  ">
              <Image
                onClick={() => {
                  setState(!state);
                }}
                className="cover h-full w-full "
                src={dummy}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Gallery;
