"use client";
import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    institution: "",
    email: "",
    option: "",
    file: null,
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleClick = () => {
    document.getElementById("file-upload").click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.file) {
      alert("Please upload a file.");
      return;
    }

    const payload = new FormData();
    payload.append("firstName", formData.firstName);
    payload.append("lastName", formData.lastName);
    payload.append("institution", formData.institution);
    payload.append("email", formData.email);
    payload.append("type", formData.option);
    payload.append("document", formData.file);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/applications/send`,
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Error submitting form, please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-4">
      <h2 className="text-center text-primary font-semibold text-2xl mb-10">
        Apply for NYSC, SIWES/IT, or Apprenticeship
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white shadow-xl rounded-2xl px-8 py-10 space-y-6 border border-gray-100"
      >
        {[
          { label: "First Name", name: "firstName", type: "text" },
          { label: "Last Name", name: "lastName", type: "text" },
          { label: "Institution", name: "institution", type: "text" },
          { label: "Email", name: "email", type: "email" },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block mb-1 font-medium text-gray-700">
              {label}
            </label>
            <input
              name={name}
              type={type}
              required
              value={formData[name]}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-blue-50"
            />
          </div>
        ))}

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Choose Option
          </label>
          <select
            name="option"
            value={formData.option}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-blue-50"
          >
            <option value="">Select an option</option>
            <option value="NYSC">NYSC</option>
            <option value="SIWES/IT">SIWES/IT</option>
            <option value="Apprenticeship">Apprenticeship</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Upload Resume / Application Letter
          </label>
          <div
            onClick={handleClick}
            className="w-full h-[200px] border-2 border-dashed border-primary bg-blue-50 rounded-lg flex flex-col items-center justify-center text-center space-y-2 cursor-pointer transition-all hover:bg-blue-100"
          >
            <IoCloudUploadOutline size={40} className="text-primary" />
            <p className="text-gray-600 text-sm">
              {formData.file ? formData.file.name : "Click to upload a file"}
            </p>
            <input
              id="file-upload"
              name="file"
              type="file"
              accept=".pdf, .doc, .docx, .odt, .txt, .rtf"
              onChange={handleChange}
              className="hidden"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all"
        >
          Submit Application
        </button>
      </form>
    </main>
  );
}

export default Form;
