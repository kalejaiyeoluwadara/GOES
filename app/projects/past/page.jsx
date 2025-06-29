"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { IoLocation } from "react-icons/io5";
import { AiOutlineArrowRight } from "react-icons/ai";
import {useRouter} from "next/navigation";
import {ClipLoader} from "react-spinners";

const pastPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const pastProjects = projects.filter(project => project.status === "past");
    const router = useRouter();

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/projects/get`);
                setProjects(res.data || []);
            } catch (e) {
                console.error("Error fetching projects:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading)
        return (
            <div className="w-screen h-screen flex flex-col items-center justify-center text-gray-500">
                <ClipLoader color={"#2B0184"} />
                <p className="mt-4 animate-pulse">Loading...</p>
            </div>
        );


    return (
        <div className="mt-32 px-6 md:px-12 mb-20">
            <h1 className="text-2xl font-semibold mb-6">Past Projects</h1>

            {loading ? (
                <p className="text-gray-500">Loading projects...</p>
            ) : pastProjects.length === 0 ? (
                <p className="text-gray-500">No ongoing projects found.</p>
            ) : (
                <div  className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {pastProjects.map((project, index) => (
                        <div onClick={()=>router.push(`/projects/past/${project._id}`)}
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col gap-4 hover:shadow-md transition-all duration-300"
                        >
                            {project.images && project.images[0] ? (
                                <img
                                    src={project.images[0]}
                                    alt={project.name || "Project Image"}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                            ) : (
                                <div className="bg-gray-300 w-full h-48 rounded-md flex items-center justify-center text-gray-500 text-sm">
                                    No image available
                                </div>
                            )}

                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-lg truncate">{project.title || "Untitled Project"}</h2>
                                <p className="text-sm text-gray-600 line-clamp-2">
                                    {project.description || "No description available."}
                                </p>

                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <IoLocation className="text-primary" />
                                    <span>{project.location || "Unknown location"}</span>
                                </div>

                                <button className="mt-2 bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2 group">
                                    View Project
                                    <AiOutlineArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default pastPage;