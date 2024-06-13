import React from "react";

function Gallery() {
  return (
    <main className="min-h-screen bg-white py-[80px]  main flex-col ">
      <h1 className="text-primary mb-12 ">"BORA" Hotel Building </h1>
      <div className="flex flex-wrap gap-10 items-center justify-center ">
        {[1, 2, 3, 4, 5, 6].map((d, id) => {
          return <div className="h-[300px] w-[300px] bg-gray-400  "></div>;
        })}
      </div>
    </main>
  );
}

export default Gallery;
