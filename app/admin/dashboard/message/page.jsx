"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { MdDelete } from "react-icons/md";
import { BsMenuButtonWide, BsCopy } from "react-icons/bs";
import { db } from "@/utils/firebase";
function Page() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messagesCollection = collection(db, "messages");
        const messagesSnapshot = await getDocs(messagesCollection);
        const messagesList = messagesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(messagesList);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch Messages");
        console.log(err);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);
  return (
    <div className="w-full flex-col gap-6 flex  py-2 pl-10  items-center justify-center overflow-y-hidden h-screen  ">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className=" h-[400px] flex-col gap-6 flex overflow-y-scroll ">
          {messages.map((d, id) => {
            const { email, message, name, phoneNumber, subject } = d;
            return (
              <div
                key={id}
                className="w-[700px] bg-white rounded-md shadow-sm border h-auto p-6 "
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-[20px] font-semibold ">{name}</h2>
                  <p className="text-gray-400 text-sm ">{email}</p>
                </div>
                <h4 className="text-[18px] mt-4 font-medium capitalize  ">
                  {subject}
                </h4>
                <p className="truncate w-[90%] text-base font-light ">
                  {message}
                </p>
                <div className="w-full h-auto flex gap-2 items-end justify-end ">
                  <MdDelete
                    size={20}
                    className="text-gray-500 cursor-pointer "
                  />
                  {/* <BsCopy size={20} className="text-gray-500" /> */}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Page;
