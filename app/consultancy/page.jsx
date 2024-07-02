import React from "react";
import Form from "../components/Form";
import Map from "../components/Map";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import Footer from "../components/Footer";

function Page() {
  return (
    <>
      <div>
        <div className="h-[50vh] mb-8 w-screen bg-gray-300  " />
        <main className="min-h-[140vh]  pb-40 sm:px-20 flex  flex-col items-center justify-center w-screen ">
          <div className="flex w-full   justify-center items-center  ">
            <div className="h-[600px] sm:px-0 px-4 sm:-translate-y-40 sm:w-[50%] ">
              <Form />
              <h2 className="sm:mt-3 mt-8 w-full text-center">
                Or Text Us On{" "}
                <a href="">
                  <span className="text-green-400 underline ">Whatsapp</span>
                </a>{" "}
                faster response
              </h2>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Page;
