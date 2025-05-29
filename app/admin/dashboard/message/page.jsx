"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import useAdminAuth from "@/hooks/useAdminAuth";

// Spinner Component
const Spinner = () => (
  <div className="flex items-center justify-center">
    <div
      className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
      role="status"
    ></div>
  </div>
);

// Modal Component
const Modal = ({ show, message, onClose }) => (
  <div
    className={`fixed inset-0 flex z-[70] items-center justify-center bg-black bg-opacity-50 transition-opacity ${
      show ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  >
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold">{message}</h2>
      <button
        onClick={onClose}
        className="mt-4 bg-primary text-white px-3 py-1 rounded"
      >
        Close
      </button>
    </div>
  </div>
);

function Page() {

  useAdminAuth()

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/messages/get`);
        setMessages(res.data);
      } catch (err) {
        setError("Failed to fetch messages");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/messages/delete/${id}`);
      setMessages(messages.filter((message) => message.id !== id));
      setModalMessage("Message deleted successfully!");
      setShowModal(true);
    } catch (err) {
      setError("Failed to delete message");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => setShowModal(false);
  const handleSelectMessage = (message) => setSelectedMessage(message);
  const handleBackToList = () => setSelectedMessage(null);

  return (
    <div className="w-full flex-col gap-6 flex py-2 sm:pl-10 px-2 items-center justify-start sm:justify-center overflow-y-hidden h-screen">
      {loading ? (
        <Spinner />
      ) : selectedMessage ? (
        <div className="sm:w-[700px] w-[360px] bg-white rounded-md shadow-sm border h-auto p-4 sm:p-6">
          <button
            onClick={handleBackToList}
            className="mb-4 text-primary sm:px-3 py-1 rounded"
          >
            <IoArrowBack size={20} />
          </button>
          <div className="flex sm:flex-row flex-col items-start sm:items-center justify-between">
            <h2 className="text-[20px] font-semibold">{selectedMessage.name}</h2>
            <p className="text-gray-400 text-sm">{selectedMessage.email}</p>
          </div>
          <h4 className="text-[18px] mt-4 font-medium capitalize">
            {selectedMessage.subject}
          </h4>
          <p className="text-base font-light">{selectedMessage.message}</p>
          <div className="w-full h-auto flex gap-2 items-end justify-end">
            <MdDelete
              size={20}
              className="text-gray-500 cursor-pointer"
              onClick={() => handleDelete(selectedMessage.id)}
            />
          </div>
        </div>
      ) : (
        <div className="h-[400px] flex-col gap-6 flex no-scrollbar overflow-y-scroll">
          {messages.length === 0 ? (
            <p>No messages available.</p>
          ) : (
            messages.map((message) => {
              return (
                <div
                  key={message._id}
                  className="sm:w-[700px] w-[360px] bg-white rounded-md shadow-sm border p-4 sm:p-6 cursor-pointer"
                  onClick={() => handleSelectMessage(message)}
                >
                  <div className="flex sm:flex-row flex-col items-start sm:items-center justify-between">
                    <h2 className="sm:text-[20px] text-sm truncate sm:w-auto font-semibold">
                      {message.name}
                    </h2>
                    <p className="text-gray-400 sm:text-sm text-[8px]">{message.email}</p>
                  </div>
                  <h4 className="sm:text-[18px] text-[13px] mt-4 font-medium capitalize">
                    {message.subject}
                  </h4>
                  <p className="truncate w-[90%] text-base font-light">{message.message}</p>
                  <div className="w-full h-auto flex gap-2 items-end justify-end">
                    <MdDelete
                      size={20}
                      className="text-gray-500 cursor-pointer hover:text-red-500 duration-300 transition-all ease-in-out"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(message._id);
                      }}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
      <Modal show={showModal} message={modalMessage} onClose={closeModal} />
    </div>
  );
}

export default Page;
