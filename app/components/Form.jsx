"use client";
import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { db } from "@/utils/firebase"; // Adjust the path as necessary
import { collection, addDoc } from "firebase/firestore";
import { useGlobal } from "../Context";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
const Modal = ({ modalMessage, isModalOpen, abnormal = false }) => {
  return (
    <>
      {isModalOpen && (
        <div
          className={`w-screen  ${
            abnormal ? "top-[26.5rem] -left-[315px] " : "fixed top-2 left-0"
          }  z-40  flex items-center justify-center`}
        >
          <div className="w-auto px-6 h-[60px] gap-4 flex items-center justify-center shadow-md bg-white rounded-xl ">
            {modalMessage === "Message sent successfully" ? (
              <FaCheckCircle className=" text-green-500 " size={30} />
            ) : (
              <MdError className="text-primary  " />
            )}
            <p className="text-[16px] text-black ">{modalMessage}</p>
          </div>
        </div>
      )}
    </>
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
  // const router = Router();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      setTimeout(() => {
        setIsModalOpen(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting message: ", error);
      setModalMessage("An error occurred. Please try again.");
      setIsModalOpen(true);
      setTimeout(() => {
        setIsModalOpen(false);
      }, 4000);
    }
  };

  return (
    <div className="min-w-[400px] bg-white h-auto px-8 py-4 border border-gray-600 ">
      <h2 className="text-[22px] flex flex-col font-[400] mb-8 ">
        Send us a message
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          className="border w-full h-[60px] bg-gray-100 px-4 "
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          className="border w-full h-[60px] bg-gray-100 px-4 "
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          type="tel"
          className="border w-full h-[60px] bg-gray-100 px-4 "
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          className="border w-full h-[60px] bg-gray-100 px-4 "
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="border w-full h-[190px] rounded-lg py-4 bg-gray-100 px-4 "
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-[200px] flex items-center gap-2 justify-center h-[60px] mt-4 rounded-md bg-primary text-white "
        >
          Send Message <IoSend size={20} />
        </button>
        <p className="h6 mb-2">
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
