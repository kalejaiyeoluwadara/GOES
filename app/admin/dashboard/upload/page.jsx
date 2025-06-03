"use client";
import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { BsCopy } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
import axios from "axios";
import useAdminAuth from "@/hooks/useAdminAuth";
const Modal = ({ modalMessage, isModalOpen }) => {

  useAdminAuth()

  return (
    <>
      {isModalOpen && (
        <div className="w-screen fixed  z-40 top-2 left-0 flex items-center justify-center">
          <div className="w-auto px-6 h-[60px] gap-4 flex items-center justify-center shadow-md bg-white rounded-xl ">
            {modalMessage === "Project Uploaded successfully..." ? (
              <FaCheckCircle className=" text-green-500 " size={30} />
            ) : (
              <MdError className="text-primary  " />
            )}
            <p className="text-[16px] text-black ">{modalMessage}</p>
          </div>
        </div>
      )}
    </>
  );
};
function Page() {
  const [formData, setFormData] = useState({
    projectname: "",
    projectlocation: "",
    description: "",
    status: "ongoing",
    files: [],
  });
  const [uploading, setUploading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    if (files) {
      const newFiles = Array.from(files).slice(0, 6);
  
      // Filter duplicates
      const existingFileMap = new Map(
        formData.files.map((file) => [`${file.name}-${file.size}`, file])
      );
  
      newFiles.forEach((file) => {
        const key = `${file.name}-${file.size}`;
        if (!existingFileMap.has(key)) {
          existingFileMap.set(key, file);
        }
      });
  
      setFormData((prevState) => ({
        ...prevState,
        files: Array.from(existingFileMap.values()),
      }));
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

  const handleRemoveFile = (index) => {
    setFormData((prevState) => {
      const newFiles = prevState.files.filter((_, i) => i !== index);
      return {
        ...prevState,
        files: newFiles,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
  
    try {
      const form = new FormData();
      form.append("title", formData.projectname);
      form.append("location", formData.projectlocation);
      form.append("description", formData.description);
      form.append("status", formData.status);
  
      formData.files.forEach((file) => {
        form.append("images", file);
      });
  
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/projects/create`, form, {
        headers: {
          "Content-Type": "multipart/form-data", // OK: Axios will handle boundary
        },
      });
  
      setFormData({
        projectname: "",
        projectlocation: "",
        description: "",
        status: "ongoing",
        files: [],
      });
  
      setModalMessage("Project Uploaded successfully...");
      setIsModalOpen(true);
      setTimeout(() => {
        setIsModalOpen(false);
        router.push("/admin/dashboard/projects");
      }, 3000);
    } catch (error) {
      console.error("Upload error:", error?.response?.data || error.message);
      setModalMessage("An error occurred, Please try again.");
      setIsModalOpen(true);
      setTimeout(() => setIsModalOpen(false), 4000);
    } finally {
      setUploading(false);
    }
  };





  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-3 items-center justify-center w-screen py-10 px-2  sm:px-8 gap-3 sm:gap-12">
      <section className="sm:col-span-2 bg-white rounded-xl h-auto p-6 w-auto border flex flex-col gap-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label>Project Name</label>
            <input
              name="projectname"
              value={formData.projectname}
              onChange={handleChange}
              className="w-full rounded-md px-2 h-[50px] border-[1px]"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Project Location</label>
            <input
              name="projectlocation"
              value={formData.projectlocation}
              onChange={handleChange}
              className="w-full rounded-md px-2 h-[50px] border-[1px]"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-md px-2 h-[50px] border-[1px]"
              required
            >
              <option value="ongoing">Ongoing</option>
              <option value="past">Past</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <label>Description</label>
            <textarea
              className="h-full border p-4 rounded-md w-full"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label>Upload Images (Max 6)</label>
            <div
              onClick={handleClick}
              className="w-full rounded-md px-6 text-center gap-2 h-[300px] border-[2px] border-dashed bg-gray-100 flex flex-col items-center justify-center cursor-pointer"
            >
              <IoCloudUploadOutline size={50} />
              <p>Click to upload</p>
              <input
                id="file-upload"
                name="files"
                type="file"
                accept=".png, .jpeg, .svg, .jpg"
                onChange={handleChange}
                className="hidden"
                multiple
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-md px-4 py-4 bg-primary  text-white"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Submit"}
          </button>
        </form>
      </section>
      <section className="bg-white rounded-xl sm:mb-0 mb-20 h-[300px] sm:h-full p-6 w-auto border flex flex-col gap-2">
        {formData.files.map((file, index) => (
          <div
            key={index}
            className="w-full border h-[60px] flex items-center justify-between px-4"
          >
            <p className="truncate  ">{file.name}</p>
            <button
              onClick={() => handleRemoveFile(index)}
              className="text-red-500"
            >
              <LiaTimesSolid />
            </button>
          </div>
        ))}
      </section>
      <Modal modalMessage={modalMessage} isModalOpen={isModalOpen} />
    </div>
  );
}

export default Page;
