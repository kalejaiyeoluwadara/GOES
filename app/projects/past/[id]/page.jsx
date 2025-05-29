"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import {ClipLoader} from "react-spinners";

const IndividualPastProject = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const getProject = async () => {
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

        getProject();
    }, [id]);

    const goToSlide = (index) => {
        if (!data?.images?.length) return;
        const total = data.images.length;
        const newIndex = (index + total) % total;
        setCurrentIndex(newIndex);
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.clientWidth * newIndex;
            sliderRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
    };


    if (loading)
        return (
            <div className="w-screen h-screen flex flex-col items-center justify-center text-gray-500">
                <ClipLoader color={"#2B0184"}/>
                <p className="mt-4 animate-pulse">Loading...</p>
            </div>
        );


    return (
        <div className="min-h-screen px-4 py-10 bg-gray-50 mt-20">
            {loading ? (
                <div className="flex justify-center items-center h-60">
                    <Loader2 className="animate-spin w-8 h-8 text-gray-500" />
                </div>
            ) : error ? (
                <div className="text-red-600 text-center">{error}</div>
            ) : data ? (
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-6">

                    {/* Image Slider */}
                    {data.images && data.images.length > 0 && (
                        <div className="md:w-1/2 w-full relative">
                            <div
                                ref={sliderRef}
                                className="flex overflow-hidden w-full rounded-xl scroll-smooth"
                            >
                                {data.images.map((img, i) => (
                                    <div key={i} className="min-w-full h-60 flex-shrink-0">
                                        <Image
                                            src={img}
                                            alt={`Slide ${i + 1}`}
                                            width={800}
                                            height={400}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Arrows */}
                            <button
                                onClick={() => goToSlide(currentIndex - 1)}
                                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                            >
                                &lt;
                            </button>
                            <button
                                onClick={() => goToSlide(currentIndex + 1)}
                                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                            >
                                &gt;
                            </button>

                            {/* Dots */}
                            <div className="flex justify-center gap-2 mt-4">
                                {data.images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => goToSlide(i)}
                                        className={`w-3 h-3 rounded-full ${
                                            i === currentIndex ? "bg-blue-600" : "bg-gray-300"
                                        }`}
                                    />
                                ))}
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
        </div>
    );
};

export default IndividualPastProject;
