import React from "react";
import { IoSend } from "react-icons/io5";
function Form() {
  return (
    <div className="min-w-[400px] bg-white  h-auto px-8 py-4 border border-gray-600 ">
      <h2 className="text-[22px] flex flex-col  font-[400] mb-8 ">
        Send us a message
      </h2>
      <div className="flex flex-col gap-4">
        <input
          placeholder="Name"
          className="border w-full h-[60px] bg-gray-100 px-4 "
        />
        <input
          placeholder="Email"
          className="border w-full h-[60px] bg-gray-100 px-4 "
        />
        <input
          placeholder="Phone Number"
          className="border w-full h-[60px] bg-gray-100 px-4 "
        />
        <input
          placeholder="Subject"
          className="border w-full h-[60px] bg-gray-100 px-4 "
        />
        <textarea
          placeholder="Message"
          className="border w-full h-[190px] rounded-lg py-4 bg-gray-100 px-4 "
        />

        <button className="w-[200px] flex items-center gap-2 justify-center h-[60px] mt-4 rounded-md bg-primary text-white ">
          Send Message <IoSend size={20} />
        </button>
        <p className="h6 mb-2">We'll respond as soon as possible</p>
      </div>
    </div>
  );
}

export default Form;
