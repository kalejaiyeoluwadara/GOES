"use client";
import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { db } from "@/utils/firebase"; // Adjust the path as necessary
import { collection, addDoc } from "firebase/firestore";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), formData);
      console.log("Message submitted: ", formData);
    } catch (error) {
      console.error("Error submitting message: ", error);
    }
  };

  return (
    <div className="min-w-[400px] bg-white h-auto px-8 py-4 border border-gray-600 ">
      <h2 className="text-[22px] flex flex-col font-[400] mb-8 ">
        Send us a message
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          className="border w-full h-[60px] bg-gray-100 px-4 "
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          className="border w-full h-[60px] bg-gray-100 px-4 "
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          className="border w-full h-[60px] bg-gray-100 px-4 "
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          name="subject"
          placeholder="Subject"
          className="border w-full h-[60px] bg-gray-100 px-4 "
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="border w-full h-[190px] rounded-lg py-4 bg-gray-100 px-4 "
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-[200px] flex items-center gap-2 justify-center h-[60px] mt-4 rounded-md bg-primary text-white "
        >
          Send Message <IoSend size={20} />
        </button>
        <p className="h6 mb-2">We'll respond as soon as possible</p>
      </form>
    </div>
  );
}

export default Form;
