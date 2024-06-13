"use client";
import React, { useState } from "react";
function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    institution: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <main className="min-h-screen py-20 ">
      <h2 className="text-center text-primary font-[500] text-[20px] py-[80px] ">
        Official page for NYSC, SIWES, IT (Industrial Training) Application
      </h2>
      <form className="w-full  flex gap-5 flex-col items-center justify-center  ">
        <div className="flex flex-col gap-2">
          <p className="">First Name</p>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-[400px] rounded-md px-2 h-[50px] border-[1px] border-primary bg-blue-100 "
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="">Last Name</p>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-[400px] rounded-md px-2 h-[50px] border-[1px] border-primary bg-blue-100 "
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="">Name of Institution</p>
          <input
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            className="w-[400px] rounded-md px-2 h-[50px] border-[1px] border-primary bg-blue-100 "
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="">Email</p>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[400px] rounded-md px-2 h-[50px] border-[1px] border-primary bg-blue-100 "
            type="email"
          />
        </div>
      </form>
    </main>
  );
}

export default Form;
