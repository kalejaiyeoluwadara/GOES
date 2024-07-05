"use client";
import React, { useState, useEffect } from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Modal from "../components/Modal";
import { db } from "@/utils/firebase";
import EditProjectForm from "./EditProject";

function Page() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [editingProject, setEditingProject] = useState(null); // State for editing project

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, "projects");
        const projectsSnapshot = await getDocs(projectsCollection);
        const projectsList = projectsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectsList);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch projects");
        console.log(err);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleDelete = async () => {
    if (!selectedProject) return;
    setLoading(true);
    try {
      await deleteDoc(doc(db, "projects", selectedProject.id));
      setProjects(
        projects.filter((project) => project.id !== selectedProject.id)
      );
      setShowModal(false);
    } catch (err) {
      setError("Failed to delete project");
      console.log(err);
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

  if (loading) {
    return <p className="text-center w-full mt-20">Loading...</p>;
  }

  if (error) {
    return <p className="text-center w-full mt-20">{error}</p>;
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
            className="w-full border h-auto sm:h-[200px] px-4 py-1 grid grid-cols-1 sm:grid-cols-4 justify-between items-center rounded-md bg-white shadow-sm"
          >
            <section className="flex sm:flex-row flex-col items-center sm:col-span-2 gap-4">
              <div className="w-[200px] flex-shrink-0 relative rounded-xl bg-gray-300 h-[180px]">
                {project.files ? (
                  <img
                    src={project.files[0]}
                    alt={project.name}
                    className="w-full h-full absolute object-cover rounded-xl"
                  />
                ) : null}
              </div>
              <div>
                <h2 className="w-full truncate font-medium text-[20px]">
                  {project.projectname}
                </h2>
                <p className="text-gray-500">{project.projectlocation}</p>
              </div>
            </section>
            <section className="  sm:flex-center">
              <p className="capitalize">{project.status}</p>
            </section>
            <section className="flex items-center justify-center gap-2">
              <FiEdit3
                size={20}
                className="cursor-pointer h-[30px] w-[30px] p-1 rounded-md hover:border transition-all"
                onClick={() => startEdit(project)}
              />
              <MdDelete
                size={20}
                className="cursor-pointer text-red-500 h-[30px] w-[30px] p-1 rounded-md hover:border transition-all"
                onClick={() => openModal(project)}
              />
            </section>
          </div>
        ))
      )}
      <Modal
        show={showModal}
        message={`Are you sure you want to delete the project "${selectedProject?.projectname}"?`}
        onConfirm={handleDelete}
        onClose={closeModal}
      />
    </main>
  );
}

export default Page;
