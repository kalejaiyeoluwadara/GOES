import Image from "next/image";
import React from "react";
import img from "../../assets/explore.webp";
function Card() {
  return (
    <div className="relative h-auto my-4 overflow-hidden  bg-gray-300 w-[300px] rounded-[6px]  ">
      <Image src={img} alt="" className="object-cover" />
      <div className="flex justify-between items-start gap-2 400 p-3  ">
        <section>
          <h5 className="font-semibold text-primary text-[16px] ">
            “Bora” Hotel Building{" "}
          </h5>
          <p className="text-[15px] text-gray-600 ">Enugu</p>
        </section>
        <button className="h-[40px] w-[40px] rounded-full bg-primary "></button>
      </div>
    </div>
  );
}

export default Card;
