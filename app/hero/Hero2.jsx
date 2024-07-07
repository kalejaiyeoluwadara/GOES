import Image from "next/image";
import React from "react";
import ab from "@/app/assets/ab.png";
function Hero2() {
  return (
    <div className="main flex-col items-center justify-center sm:py-[100px] py-[30px]  min-h-[300px] ">
      <h1 className="text-primary font-bold text-[40px] ">Who are We?</h1>
      <div className="grid sm:px-20 px-4 sm:mt-12 mt-6 items-start justify-start grid-cols-1 sm:grid-cols-2 gap-10 ">
        <p className="w-auto   ">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <div className="h-[400px] overflow-hidden w-auto rounded-[20px] bg-gray-100 relative ">
          <Image src={ab} className="cover" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero2;
