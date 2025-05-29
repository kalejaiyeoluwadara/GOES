"use client";
import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { useGlobal } from "../Context";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

const Modal = ({ modalMessage, isModalOpen, abnormal = false }) => {
  return (
      isModalOpen && (
          <div
              className={`fixed z-50 ${
                  abnormal ? "top-[26.5rem] -left-[315px]" : "top-6 left-1/2 -translate-x-1/2"
              } flex items-center justify-center`}
          >
            <div className="flex items-center gap-3 px-5 py-3 bg-white border shadow-lg rounded-xl">
              {modalMessage === "Message sent successfully" ? (
                  <FaCheckCircle className="text-green-500" size={24} />
              ) : (
                  <MdError className="text-red-500" size={24} />
              )}
              <p className="text-sm font-medium text-gray-800">{modalMessage}</p>
            </div>
          </div>
      )
  );
};

function Form({ abnormal = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const { modal, setModal } = useGlobal();
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), formData);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
      setModalMessage("Message sent successfully");
      setIsModalOpen(true);
      setTimeout(() => setIsModalOpen(false), 3000);
    } catch (error) {
      console.error("Error submitting message: ", error);
      setModalMessage("An error occurred. Please try again.");
      setIsModalOpen(true);
      setTimeout(() => setIsModalOpen(false), 4000);
    }
  };

  return (
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md px-8 py-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {["name", "email", "phoneNumber", "subject"].map((field) => (
              <input
                  key={field}
                  name={field}
                  type={field === "email" ? "email" : field === "phoneNumber" ? "tel" : "text"}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="h-[52px] px-4 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  value={formData[field]}
                  onChange={handleChange}
                  required
              />
          ))}

          <textarea
              name="message"
              placeholder="Your Message"
              className="h-[140px] px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-primary transition"
              value={formData.message}
              onChange={handleChange}
              required
          />

          <button
              type="submit"
              className="w-full sm:w-[200px] h-[52px] mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition"
          >
            Send Message <IoSend size={18} />
          </button>

          <p className="text-sm text-gray-600 mt-2">
            {modal === "" ? "We'll respond as soon as possible" : modal}
          </p>

          <Modal
              abnormal={abnormal}
              isModalOpen={isModalOpen}
              modalMessage={modalMessage}
          />
        </form>
      </div>
  );
}

export default Form;
