"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Loader2, X, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { ClipLoader } from "react-spinners";

const IndividualOngoingProject = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [popupOpen, setPopupOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchProject = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/projects/get/${id}`);
                setData(res.data);
            } catch (e) {
                console.error(e);
                setError("Failed to load project.");
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    const openPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);
    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % data.images.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + data.images.length) % data.images.length);

    if (loading) {
        return (
            <div className="w-screen h-screen flex flex-col items-center justify-center text-gray-500">
                <ClipLoader color={"#2B0184"} />
                <p className="mt-4 animate-pulse">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen px-4 py-10 bg-gray-50 mt-20">
            {error ? (
                <div className="text-red-600 text-center">{error}</div>
            ) : data ? (
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-6">
                    {/* Preview Image with Click */}
                    {data.images && data.images.length > 0 && (
                        <div
                            onClick={openPopup}
                            className="relative w-full md:w-1/2 h-60 rounded-xl overflow-hidden cursor-pointer group"
                        >
                            <Image
                                src={data.images[0]}
                                alt="Preview"
                                width={800}
                                height={400}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-lg font-semibold md:opacity-0 md:group-hover:opacity-100 transition duration-300">
                                Click to View
                            </div>
                        </div>
                    )}

                    {/* Description */}
                    <div className="md:w-1/2 w-full flex flex-col justify-center">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{data.title}</h1>
                        <p className="text-gray-700 leading-relaxed">{data.description}</p>
                        <div className="text-sm text-gray-500 mt-4">
                            Status: <span className="font-semibold capitalize">{data.status}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center text-gray-500">No project data found.</div>
            )}

            {/* Popup Slider */}
            {popupOpen && data?.images?.length > 0 && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
                    <button onClick={closePopup} className="absolute top-4 right-4 text-white text-2xl">
                        <X />
                    </button>
                    <button onClick={prevSlide} className="absolute left-4 text-white text-2xl">
                        <ArrowLeft />
                    </button>
                    <div className="w-full max-w-3xl h-[70vh] relative">
                        <Image
                            src={data.images[currentIndex]}
                            alt={`Image ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <button onClick={nextSlide} className="absolute right-4 text-white text-2xl">
                        <ArrowRight />
                    </button>
                </div>
            )}
        </div>
    );
};

export default IndividualOngoingProject;
