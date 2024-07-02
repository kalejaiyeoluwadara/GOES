import React from "react";
import Form from "../components/Form";
import Map from "../components/Map";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import Footer from "../components/Footer";
import Image from "next/image";
import ongoing from "@/app/assets/ongoing.jpg";
function Page() {
  return (
    <>
      <div>
        <div className="h-[50vh] relative mb-8 w-screen bg-gray-300  ">
          <Image className="cover" src={ongoing} alt="" />
        </div>
        <main className="min-h-[140vh] pb-40 sm:px-20 flex  flex-col items-center justify-center w-screen ">
          <h1 className="mt-10 text-[50px] text-primary font-bold ">
            About Us
          </h1>
          <p className=" mt-10 sm:px-0 px-4 text-gray-500 ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>

          <div className="flex sm:flex-row flex-col w-full my-20 gap-10 justify-center items-center  ">
            <div className=" h-[600px] flex flex-col gap-8 sm:px-0 px-4 sm:w-[50%]">
              <div className=" ">
                <FaLocationDot className="text-primary mb-1 " size={25} />
                <h2 className=" text-primary font-semibold text-[20px]  ">
                  Office Address
                </h2>
                <p className="text-gray-500">
                  21A, Tunji Bello Street, Ikolaba Estate, Ibadan, Oyo state.
                </p>
              </div>

              <div className=" ">
                <MdCall className="text-primary mb-1 " size={25} />
                <h2 className=" text-primary font-semibold text-[20px]  ">
                  Phone
                </h2>
                <p className="text-gray-500">(+234) 803 3244 038</p>
              </div>

              <div className=" ">
                <MdEmail className="text-primary" mb-1 size={25} />
                <h2 className=" text-primary font-semibold text-[20px]  ">
                  e-Mail Address
                </h2>
                <p className="text-gray-500">goeslimited@gmail.com</p>
              </div>

              <Map />
            </div>

            <div className="h-[600px] sm:mt-0 mt-[230px] sm:w-[50%] ">
              <Form />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Page;
