"use client";
import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
const storage = getStorage();

const EditProjectForm = ({ project, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    projectname: project?.projectname,
    projectlocation: project?.projectlocation,
    status: project?.status,
    description: project?.description,
    files: project.files || [], // Add files array
  });

  const [newFiles, setNewFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setNewFiles([...e.target.files]);
  };

  const handleDeleteFile = (file) => {
    setFormData({
      ...formData,
      files: formData.files.filter((f) => f !== file),
    });
  };

  const handleClick = () => {
    document.getElementById("file-upload").click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      const uploadedFiles = await Promise.all(
        newFiles.map(async (file) => {
          const storageRef = ref(storage, `uploads/${uuidv4()}`);
          await uploadBytes(storageRef, file);
          return await getDownloadURL(storageRef);
        })
      );

      const updatedFiles = [...formData.files, ...uploadedFiles];

      await updateDoc(doc(db, "projects", project.id), {
        ...formData,
        files: updatedFiles,
      });

      onSave({ ...project, ...formData, files: updatedFiles });

      setModalMessage("Project updated successfully...");
      setIsModalOpen(true);
      setTimeout(() => {
        setIsModalOpen(false);
      }, 3000);
    } catch (error) {
      console.error("Error updating project: ", error);
      setModalMessage(
        "An error occurred while updating the project. Please try again."
      );
      setIsModalOpen(true);
      setTimeout(() => {
        setIsModalOpen(false);
      }, 4000);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-3 items-center justify-center w-full py-10 px-2 gap-12">
      <section className="col-span-2 bg-white rounded-xl h-auto p-6 w-auto border flex flex-col gap-6 shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <label className="text-lg font-medium">Project Name</label>
            <input
              name="projectname"
              value={formData.projectname}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-2 border-[1px]"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-lg font-medium">Project Location</label>
            <input
              name="projectlocation"
              value={formData.projectlocation}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-2 border-[1px]"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-lg font-medium">Description</label>
            <textarea
              className="h-[100px] border p-4 rounded-md w-full"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-lg font-medium">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-2 border-[1px]"
              required
            >
              <option value="ongoing">Ongoing</option>
              <option value="past">Past</option>
            </select>
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-lg font-medium">More Images</label>
            <div
              onClick={handleClick}
              className="w-full rounded-md px-6 text-center gap-2 h-[150px] border-[2px] border-dashed bg-blue-100 flex flex-col items-center justify-center cursor-pointer"
            >
              <IoCloudUploadOutline size={30} />
              <p>Click to upload</p>
              <input
                id="file-upload"
                name="files"
                type="file"
                accept=".png, .jpeg, .svg, .jpg"
                onChange={handleFileChange}
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
            {uploading ? "Uploading..." : "Save Changes"}
          </button>
        </form>
      </section>
      <section className="bg-white rounded-xl h-full p-6 w-auto border flex flex-col gap-2 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Current Images</h2>
        {formData.files.map((file, index) => (
          <div
            key={index}
            className="w-auto border flex justify-between items-center pr-2 gap-2 h-auto  rounded-lg  mb-2"
          >
            <img
              src={file}
              alt={`Project Image ${index}`}
              className="w-20 h-20 object-cover rounded-md"
            />
            <button
              onClick={() => handleDeleteFile(file)}
              className="text-red-500 font-semibold"
            >
              <LiaTimesSolid size={20} />
            </button>
          </div>
        ))}
      </section>
      <Modal modalMessage={modalMessage} isModalOpen={isModalOpen} />
    </div>
  );
};

const Modal = ({ modalMessage, isModalOpen }) => {
  return (
    <>
      {isModalOpen && (
        <div className="w-screen fixed z-40 top-2 left-0 flex items-center justify-center">
          <div className="w-auto px-6 h-[60px] gap-4 flex items-center justify-center shadow-md bg-white rounded-xl">
            {modalMessage === "Project updated successfully..." ? (
              <FaCheckCircle className="text-green-500" size={30} />
            ) : (
              <MdError className="text-red-500" size={30} />
            )}
            <p className="text-[16px] text-black">{modalMessage}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProjectForm;
