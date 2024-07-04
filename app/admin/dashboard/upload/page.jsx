"use client";
import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { db, storage } from "@/utils/firebase"; // Adjust the path as necessary
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/navigation";
import { BsCopy } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
const Modal = ({ modalMessage, isModalOpen }) => {
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
      const fileArray = Array.from(files).slice(0, 6);
      setFormData((prevState) => ({
        ...prevState,
        files: [...prevState.files, ...fileArray],
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
      const fileUrls = await Promise.all(
        formData.files.map(async (file) => {
          const fileRef = ref(storage, `uploads/${file.name}`);
          await uploadBytes(fileRef, file);
          return getDownloadURL(fileRef);
        })
      );

      await addDoc(collection(db, "projects"), {
        projectname: formData.projectname,
        projectlocation: formData.projectlocation,
        description: formData.description,
        status: formData.status,
        files: fileUrls,
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
        router.push("/projects");
      }, 3000);
    } catch (error) {
      console.error("Error uploading files: ", error);
      setModalMessage("An error occurred during upload. Please try again.");
      setIsModalOpen(true);
      setTimeout(() => {
        setIsModalOpen(false);
      }, 4000);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-3 items-center justify-center w-screen py-10 px-8 gap-12">
      <section className="col-span-2 bg-white rounded-xl h-auto p-6 w-auto border flex flex-col gap-2">
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
              className="w-full rounded-md px-6 text-center gap-2 h-[300px] border-[2px] border-dashed bg-blue-100 flex flex-col items-center justify-center cursor-pointer"
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
            className="w-full rounded-md px-4 py-2 bg-blue-600 text-white"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Submit"}
          </button>
        </form>
      </section>
      <section className="bg-white rounded-xl h-full p-6 w-auto border flex flex-col gap-2">
        {formData.files.map((file, index) => (
          <div
            key={index}
            className="w-full border h-[60px] flex items-center justify-between px-4"
          >
            <p>{file.name}</p>
            <button
              onClick={() => handleRemoveFile(index)}
              className="text-red-500"
            >
              Cancel
            </button>
          </div>
        ))}
      </section>
      <Modal modalMessage={modalMessage} isModalOpen={isModalOpen} />
    </div>
  );
}

export default Page;
