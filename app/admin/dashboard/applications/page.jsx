"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsMenuButtonWide, BsCopy, BsArrowsVertical } from "react-icons/bs";
import Selected from "./Selected";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { MdDelete } from "react-icons/md";
import { db } from "@/utils/firebase";

function Page() {
  const [selected, setSelected] = useState(null);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const applicationsCollection = collection(db, "applications");
        const applicationsSnapshot = await getDocs(applicationsCollection);
        const applicationsList = applicationsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApplications(applicationsList);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch Applications");
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  // Function to handle deletion
  const handleDelete = async (applicationId) => {
    const confirmed = confirm(
      "Are you sure you want to delete this application?"
    );
    if (confirmed) {
      try {
        // Delete the application document from Firestore
        await deleteDoc(doc(db, "applications", applicationId));

        // Update the applications state
        setApplications(applications.filter((app) => app.id !== applicationId));

        alert("Application deleted successfully.");
      } catch (err) {
        setError("Failed to delete application");
      }
    }
  };

  return (
    <div className="flex pt-8 pl-6 bg-gray-300 min-h-screen">
      {selected ? (
        <Selected selected={selected} setSelected={setSelected} />
      ) : (
        <div>
          <header className="w-screen text-gray-600 grid grid-cols-4 justify-center px-8 items-center bg-white shadow-md h-[80px]">
            <p>Name</p>
            <p></p>
            <p className=""></p>
          </header>

          <div className="flex flex-col">
            {applications.map((d) => {
              return (
                <main
                  key={d.id}
                  onClick={() => {
                    setSelected(d);
                  }}
                  className="w-screen border-y cursor-pointer border-gray-400 text-gray-600 grid grid-cols-3 justify-center px-8 items-center bg-gray-200 shadow-md h-[80px]"
                >
                  <p>
                    {d.firstName} {d.lastName}
                  </p>
                  <p className="flex text-primary gap-1 items-center">
                    View Application <BsArrowsVertical />
                  </p>
                  <MdDelete
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents the click event from propagating to the main div
                      handleDelete(d.id);
                    }}
                    className="cursor-pointer text-red-500"
                    size={20}
                  />
                </main>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
