"use client";
import React, { useState } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

const EditProjectForm = ({ project, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    location: project?.location || "",
    status: project?.status || "ongoing",
    description: project?.description || "",
  });

  const [uploading, setUploading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/projects/edit/${project._id}`,
        {
          title: formData.title,
          description: formData.description,
          location: formData.location,
          status: formData.status,
        }
      );

      onSave(response.data);
      setModalMessage("Project updated successfully...");
      setIsModalOpen(true);
      setTimeout(() => setIsModalOpen(false), 3000);
    } catch (error) {
      console.error("Error updating project:", error);
      setModalMessage("An error occurred while updating the project. Please try again.");
      setIsModalOpen(true);
      setTimeout(() => setIsModalOpen(false), 4000);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-3 items-start justify-center w-full py-10 px-2 gap-4 sm:gap-12">
      <section className="sm:col-span-2 bg-white rounded-xl p-6 w-full border flex flex-col gap-6 shadow-sm">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="text-lg font-medium">Project Name</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-2 border"
              type="text"
              required
            />
          </div>
          <div>
            <label className="text-lg font-medium">Project Location</label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-2 border"
              type="text"
              required
            />
          </div>
          <div>
            <label className="text-lg font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="h-[100px] border p-4 rounded-md w-full"
              required
            />
          </div>
          <div>
            <label className="text-lg font-medium">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-2 border"
              required
            >
              <option value="ongoing">Ongoing</option>
              <option value="past">Past</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={uploading}
            className="w-full rounded-md px-4 py-2 bg-primary text-white"
          >
            {uploading ? "Uploading..." : "Save Changes"}
          </button>
        </form>
      </section>

      <Modal modalMessage={modalMessage} isModalOpen={isModalOpen} />
    </div>
  );
};

const Modal = ({ modalMessage, isModalOpen }) =>
  isModalOpen && (
    <div className="w-screen fixed z-40 top-2 left-0 flex items-center justify-center">
      <div className="w-auto px-6 h-[60px] gap-4 flex items-center justify-center shadow-sm bg-white rounded-xl">
        {modalMessage.includes("success") ? (
          <FaCheckCircle className="text-green-500" size={30} />
        ) : (
          <MdError className="text-red-500" size={30} />
        )}
        <p className="text-[16px] text-black">{modalMessage}</p>
      </div>
    </div>
  );

export default EditProjectForm;
