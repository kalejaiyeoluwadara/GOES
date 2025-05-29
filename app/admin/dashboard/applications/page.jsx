"use client";
import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { BsArrowsVertical } from "react-icons/bs";
import Selected from "./Selected";
import axios from "axios";
import Link from "next/link";
import useAdminAuth from "@/hooks/useAdminAuth";
import { toast } from "react-toastify";

function Page() {

  useAdminAuth()

  const [selected, setSelected] = useState(null);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserApplications = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/applications/get`);
        console.log(res)
        setApplications(res.data); // Adapt if shape is different
      } catch (err) {
        console.error(err);
        setError("Failed to fetch applications");
      } finally {
        setLoading(false);
      }
    };

    getUserApplications();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this application?");
    if (!confirmed) return;

    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/applications/delete/${id}`);
      toast.success("Application deleted successfully.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete application.");
    }
  };

  if (loading) return <div className="text-center mt-10 text-gray-600">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-8 flex-grow">
      <div className="max-w-4xl mx-auto w-full">
        {selected ? (
          <Selected selected={selected} setSelected={setSelected} />
        ) : (
          <>
            <header className="grid grid-cols-3 sm:grid-cols-4 items-center bg-white text-gray-700 font-semibold px-4 sm:px-6 py-3 rounded-t-md shadow-md">
              <p>Full Name</p>
              <p className="hidden sm:block">Status</p>
              <p className="text-center sm:col-span-2">Actions</p>
            </header>
  
            <div className="flex flex-col bg-white rounded-b-md shadow-sm">
              {applications.length === 0 ? (
                <div className="text-center text-gray-500 py-10">No applications found.</div>
              ) : (
                applications.map((app) => (
                    <Link key={app._id} href={`/admin/dashboard/applications/${app._id}`} passHref>
                      <div className="grid grid-cols-3 sm:grid-cols-4 items-center px-4 sm:px-6 py-4 hover:bg-gray-50 transition cursor-pointer border-t border-gray-200">
                        <p className="truncate text-gray-800 font-medium">
                          {app.firstName} {app.lastName}
                        </p>
                        <p className="hidden sm:block text-sm text-gray-500">Pending</p>
                        <div className="flex items-center gap-2 col-span-2 sm:col-span-1 justify-center">
      <span className="flex items-center gap-1 text-blue-600 text-sm">
        View <BsArrowsVertical />
      </span>
                          <MdDelete
                              size={20}
                              className="text-red-500 hover:text-red-600"
                              onClick={(e) => {
                                e.preventDefault(); // prevent navigating if delete clicked
                                e.stopPropagation();
                                handleDelete(app._id);
                              }}
                          />
                        </div>
                      </div>
                    </Link>

                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}  

export default Page;
