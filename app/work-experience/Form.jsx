"use client";
import React, { useState } from "react";
function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    institution: "",
    email: "",
    option: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <main className="min-h-screen py-20">
      <h2 className="text-center text-primary font-[500] text-[20px] py-[80px]">
        Official page for NYSC, SIWES, IT (Industrial Training) Application
      </h2>
      <form className="w-full flex gap-5 flex-col items-center justify-center">
        <div className="flex flex-col gap-2">
          <p>First Name</p>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-[400px] rounded-md px-2 h-[50px] border-[1px] border-primary bg-blue-100"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Last Name</p>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-[400px] rounded-md px-2 h-[50px] border-[1px] border-primary bg-blue-100"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Name of Institution</p>
          <input
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            className="w-[400px] rounded-md px-2 h-[50px] border-[1px] border-primary bg-blue-100"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Email</p>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[400px] rounded-md px-2 h-[50px] border-[1px] border-primary bg-blue-100"
            type="email"
          />
        </div>

        <div className="flex flex-col px-3 gap-2">
          <p>Choose Option</p>
          <select
            name="option"
            value={formData.option}
            onChange={handleChange}
            className="w-[400px] rounded-md px-2 h-[50px] border-[1px] border-primary bg-blue-100"
          >
            <option value="">Select an option</option>
            <option value="Option 1">NYSC</option>
            <option value="Option 2">SIWES/IT</option>
            <option value="Option 3">Apprenticeship</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <p>Upload Resume / Application Letter</p>
          <input
            name="file"
            type="file"
            onChange={handleChange}
            className="hidden"
            id="file-input"
          />
          <label
            htmlFor="file-input"
            className="w-[400px] rounded-md px-2 h-[50px] border-[1px] border-primary bg-blue-100 flex items-center justify-center cursor-pointer"
          >
            {formData.file ? formData.file.name : "Choose a file"}
          </label>
        </div>
      </form>
    </main>
  );
}

export default Form;
