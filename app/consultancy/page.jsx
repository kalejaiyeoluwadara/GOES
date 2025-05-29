import React from "react";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Image from "next/image";
import personCalling from "@/app/assets/person_calling.jpg";

function Page() {
  return (
      <>
        <div>
          {/* Hero Section */}
          <div className="relative w-full h-[50vh] mb-12">
            <Image
                src={personCalling}
                alt="Contact Hero"
                className="w-full h-full object-cover object-center"
                priority
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h1 className="text-white text-3xl sm:text-4xl font-semibold">Get In Touch</h1>
            </div>
          </div>

          {/* Form Section */}
          <main className="w-full flex flex-col items-center justify-center px-4 sm:px-10 lg:px-20 pb-20">
            <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-6">
              <div className="w-full sm:w-[80%] md:w-[60%] mt-0">
                <Form />
                <h2 className="text-center text-sm text-gray-700 mt-6">
                  Or text us on{" "}
                  <a href="#" className="text-green-500 underline">
                    WhatsApp
                  </a>{" "}
                  for a faster response
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
