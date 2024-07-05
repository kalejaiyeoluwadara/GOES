"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
import Card from "../components/Card";
import Gallery from "../components/Gallery";
import { useGlobal } from "../Context";
import Link from "next/link";

function Slide({ status, setStatus }) {
  const { state, setState } = useGlobal();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      } catch (err) {
        setError("Failed to fetch Projects");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <main className="flex items-center justify-center sm:px-[110px]">
        <div className="min-h-screen py-20 items-center justify-center w-full flex flex-wrap gap-10">
          {loading ? (
            <p>Loading projects...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            projects.map((d) => {
              const { projectname, projectlocation, description, files } = d;
              return (
                <div
                  key={d.id} // Use the project ID for the key prop
                  className="cursor-pointer"
                >
                  <Link
                    onClick={() => {
                      setState(d);
                    }}
                    href={"/projectslisting/1"}
                  >
                    <Card
                      projectname={projectname}
                      projectlocation={projectlocation}
                      description={description}
                      files={files}
                    />
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </main>
    </>
  );
}

export default Slide;
