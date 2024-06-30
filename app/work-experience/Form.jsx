"use client";
import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { db, storage } from "@/utils/firebase"; // Adjust the path as necessary
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/navigation";
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

  const handleClick = () => {
    document.getElementById("file-upload").click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.file) {
      alert("Please upload a file.");
      return;
    }

    try {
      // Upload file to Firebase Storage
      const storageRef = ref(storage, `files/${formData.file.name}`);
      await uploadBytes(storageRef, formData.file);
      const fileURL = await getDownloadURL(storageRef);

      // Exclude the file object from the formData
      const { file, ...dataToSave } = formData;

      // Save form data to Firestore
      await addDoc(collection(db, "applications"), {
        ...dataToSave,
        fileURL,
      });
      router.push("/");
      setFormData({
        firstName: "",
        lastName: "",
        institution: "",
        email: "",
        option: "",
        file: null,
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Error submitting form, please try again.");
    }
  };

  return (
    <main className="min-h-screen py-20">
      <h2 className="text-center text-primary font-[500] text-[20px] py-[20px]">
        Official page for NYSC, SIWES, IT (Industrial Training) Application
      </h2>
      <form
        className="w-full flex gap-5 flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <p>First Name</p>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-[400px] rounded-md px-2 h-[50px] border-[1px] border-primary bg-blue-100"
            type="text"
            required
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
            required
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
            required
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
            required
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
            <option value="NYSC">NYSC</option>
            <option value="SIWES/IT">SIWES/IT</option>
            <option value="Apprenticeship">Apprenticeship</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <p>Upload Resume / Application Letter</p>

          <div
            onClick={handleClick}
            className="w-[400px] rounded-md px-6 text-center gap-2 h-[300px] border-[2px] border-dashed border-primary bg-blue-100 flex flex-col items-center justify-center cursor-pointer"
          >
            <IoCloudUploadOutline size={50} />
            <p>
              {formData.file
                ? formData.file.name
                : "Drag and drop, or Choose File"}
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
          className="w-[400px] rounded-md mt-8 h-[50px] flex items-center justify-center text-white bg-primary text-[20px] font-semibold"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default Form;
