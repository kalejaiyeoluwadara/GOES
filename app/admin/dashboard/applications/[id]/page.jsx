"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsCopy } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import {toast} from "react-toastify";
import {ClipLoader} from "react-spinners";
import useAdminAuth from "@/hooks/useAdminAuth";

const ApplicationDetailPage = () => {

    useAdminAuth()

    const { id } = useParams();
    const router = useRouter();
    const [application, setApplication] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchApplication = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/applications/get/${id}`);
                setApplication(res.data);
            } catch (err) {
                console.error(err);
                setError("Failed to load application.");
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchApplication();
    }, [id]);

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success("Copied to clipboard!");
        } catch (err) {
            toast.error("Failed to copy.");
        }
    };


    const downloadFile = (url) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = "document";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (loading)
        return (
            <div className="w-screen h-screen flex flex-col items-center justify-center text-gray-500">
                <ClipLoader color={"#2B0184"}/>
                <p className="mt-4 animate-pulse">Loading...</p>
            </div>
        );

    if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

    return (
        <div className="sm:px-20 px-4 sm:pb-0 pb-20 min-h-screen w-screen bg-white py-12 flex-col">
            {/*<h1*/}
            {/*    onClick={() => router.push("/admin/dashboard")}*/}
            {/*    className="text-[20px] cursor-pointer font-medium mb-12 text-gray-400"*/}
            {/*>*/}
            {/*    Application / <span className="text-gray-600">{id}</span>*/}
            {/*</h1>*/}

            <h1 className="text-2xl font-bold text-gray-700 mb-6">Application Details</h1>

            <form className="mt-10 sm:w-[700px] w-full grid gap-6 grid-cols-2">
                <div>
                    <p className="text-sm mb-1">First Name</p>
                    <div className="px-3 flex items-center rounded-md border border-gray-300 h-[50px] bg-gray-50">
                        <p className="flex-1 text-gray-700">{application.firstName}</p>
                        <BsCopy className="text-gray-500 cursor-pointer"
                            onClick={() => copyToClipboard(application.firstName)}
                        />
                    </div>
                </div>

                <div>
                    <p className="text-sm mb-1">Last Name</p>
                    <div className="px-3 flex items-center rounded-md border border-gray-300 h-[50px] bg-gray-50">
                        <p className="flex-1 text-gray-700">{application.lastName}</p>
                        <BsCopy className="text-gray-500 cursor-pointer"
                            onClick={() => copyToClipboard(application.lastName)}
                        />
                    </div>
                </div>

                <div className="col-span-2">
                    <p className="text-sm mb-1">Institution</p>
                    <div className="px-3 flex items-center rounded-md border border-gray-300 h-[50px] bg-gray-50">
                        <p className="flex-1 text-gray-700">{application.institution}</p>
                        <BsCopy className="text-gray-500 cursor-pointer"
                            onClick={() => copyToClipboard(application.institution)}
                        />
                    </div>
                </div>

                <div>
                    <p className="text-sm mb-1">Email</p>
                    <div className="px-3 flex items-center rounded-md border border-gray-300 h-[50px] bg-gray-50">
                        <p className="truncate flex-1 text-gray-700">{application.email}</p>
                        <BsCopy className="text-gray-500 cursor-pointer"
                            onClick={() => copyToClipboard(application.email)}
                        />
                    </div>
                </div>

                <div>
                    <p className="text-sm mb-1">Application Type</p>
                    <div className="px-3 flex items-center rounded-md border border-gray-300 h-[50px] bg-gray-50">
                        <p className="flex-1 text-gray-700">{application.type}</p>
                        <BsCopy className="text-gray-500 cursor-pointer"
                            onClick={() => copyToClipboard(application.type)}
                        />
                    </div>
                </div>

                <div className="col-span-2">
                    <p className="text-sm mb-1">Resume / Application Letter</p>
                    <div
                        onClick={() => downloadFile(application.document)}
                        className="cursor-pointer px-4 py-8 rounded-md border border-gray-300 bg-blue-50 hover:bg-blue-100 flex flex-col items-center justify-center gap-2"
                    >
                        <FiDownload size={32} className="text-blue-600" />
                        <p className="text-blue-700 font-medium text-sm">Click to Download</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ApplicationDetailPage;
