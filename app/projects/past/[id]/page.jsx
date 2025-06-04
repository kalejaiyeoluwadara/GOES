"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { ClipLoader } from "react-spinners";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const IndividualPastProject = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getProject = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/projects/get/${id}`
        );
        setData(res.data);
      } catch (e) {
        setError("Failed to load project.");
      } finally {
        setLoading(false);
      }
    };

    getProject();
  }, [id]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + data.images.length) % data.images.length);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % data.images.length);

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
{/* Preview Image with Overlay */}
<div
  className="md:w-1/2 w-full relative cursor-pointer group"
  onClick={() => openModal(0)}
>
  <Image
    src={data.images?.[0]}
    alt="Preview"
    width={800}
    height={600}
    className="rounded-xl w-full h-[400px] object-cover transition duration-300 group-hover:brightness-75"
  />
  {/* Overlay */}
  <div
    className={`
      absolute inset-0 flex items-center justify-center 
      transition duration-300 
      text-white text-lg font-medium 
      md:opacity-0 md:group-hover:opacity-100 
      bg-black/60 backdrop-blur-sm
      rounded-xl
    `}
  >
    Click to view
  </div>
</div>


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

      {/* Modal/Popup Slider */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeModal}
          >
            <X />
          </button>

          <button
            onClick={prevSlide}
            className="absolute left-5 text-white text-4xl p-2 bg-black/50 rounded-full hover:bg-black"
          >
            <ChevronLeft />
          </button>

          <div className="max-w-5xl w-full mx-4">
            <Image
              src={data.images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              width={1200}
              height={800}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-5 text-white text-4xl p-2 bg-black/50 rounded-full hover:bg-black"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default IndividualPastProject;
