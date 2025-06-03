"use client";
import React, { useState, useEffect } from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Modal from "../components/Modal";
import EditProjectForm from "./EditProject";
import {ClipLoader} from "react-spinners";
import { toast } from "react-toastify";
import useAdminAuth from "@/hooks/useAdminAuth";
import axios from "axios";

function Page() {

  useAdminAuth()

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [editingProject, setEditingProject] = useState(null);

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/get`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setProjects(data.projects || data); // Adjust if response shape is different
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch projects");
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {


    fetchProjects();
  }, []);

  const handleDelete = async () => {
    if (!selectedProject) return;
    setLoading(true);
    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/projects/delete/${selectedProject._id}`);
      if (res.status !== 200) throw new Error("Delete failed");
      // setProjects(projects.filter((p) => p.id !== selectedProject._id));
      fetchProjects();
      setShowModal(false);
      toast.success('Deleted Successfully')
    } catch (err) {
      toast.error("Failed to delete project");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  const startEdit = (project) => {
    setEditingProject(project);
  };

  const cancelEdit = () => {
    setEditingProject(null);
  };

  const saveEdit = (updatedProject) => {
    setProjects(
      projects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
    setEditingProject(null);
  };


  if (loading)
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center text-gray-500">
          <ClipLoader color={"#2B0184"}/>
          <p className="mt-4">Loading...</p>
        </div>
    );


  if (error) {
    return <p className="text-center w-full mt-20 text-red-500">{error}</p>;
  }

  return (
    <main className="gap-8 w-full sm:mb-0 mb-20 px-2 sm:px-20 flex items-center justify-start py-10 flex-col min-h-screen">
      {projects.length === 0 ? (
        <p className="text-center w-full mt-20">No projects found.</p>
      ) : editingProject ? (
        <EditProjectForm
          project={editingProject}
          onSave={saveEdit}
          onCancel={cancelEdit}
        />
      ) : (
        projects.map((project) => (
          <div
            key={project.id}
            className="w-full border hover:shadow-lg transition-shadow duration-300 px-4 py-3 grid grid-cols-1 sm:grid-cols-4 gap-4 items-center rounded-xl bg-white shadow-sm"
          >
            <section className="flex sm:flex-row flex-col items-center sm:col-span-2 gap-4">
              <div className="sm:w-[200px] w-full flex-shrink-0 relative rounded-xl bg-gray-100 h-[180px] overflow-hidden">
                {project.images?.length > 0 ? (
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    No Image
                  </div>
                )}
              </div>
              <div>
                <h2 className="font-semibold text-xl truncate">{project.title}</h2>
                <p className="text-gray-500">{project.location}</p>
              </div>
            </section>

            <section className="text-center sm:text-left">
              <span className="inline-block capitalize px-2 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                {project.status}
              </span>
            </section>

            <section className="flex items-center justify-center gap-3">
              <FiEdit3
                size={20}
                className="cursor-pointer text-blue-500 h-[30px] w-[30px] p-1 rounded-md hover:bg-blue-100 transition-all"
                onClick={() => startEdit(project)}
              />
              <MdDelete
                size={20}
                className="cursor-pointer text-red-500 h-[30px] w-[30px] p-1 rounded-md hover:bg-red-100 transition-all"
                onClick={() => openModal(project)}
              />
            </section>
          </div>
        ))
      )}
      <Modal
        show={showModal}
        message={`Are you sure you want to delete the project "${selectedProject?.title}"?`}
        onConfirm={handleDelete}
        onClose={closeModal}
      />
    </main>
  );
}

export default Page;
