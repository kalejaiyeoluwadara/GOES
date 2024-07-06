"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../assets/logo.svg";
import explore from "../assets/explore.webp";
import { db } from "@/utils/firebase"; // Adjust the path as necessary
import { collection, getDocs, query, where } from "firebase/firestore";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Page() {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const q = query(collection(db, "admin"), where("adminId", "==", adminId));
      const querySnapshot = await getDocs(q);

      let isAuthenticated = false;

      querySnapshot.forEach((doc) => {
        if (doc.exists) {
          const adminData = doc.data();
          if (adminData.password === password) {
            isAuthenticated = true;
          }
        }
      });

      if (isAuthenticated) {
        setShowSuccessModal(true);
        setTimeout(() => {
          setShowSuccessModal(false);
          router.push("/admin/dashboard");
        }, 2000);
      } else {
        setErrorMessage("Invalid Admin ID or Password");
      }
    } catch (error) {
      console.error("Error logging in: ", error);
      setErrorMessage("An error occurred during login");
    }
  };

  return (
    <div className="main min-h-screen relative z-40 bg-gray-400 flex items-center justify-center">
      <Image src={explore} className="cover" alt="" />
      <div className="h-[450px] relative z-40 flex items-center justify-center flex-col gap-1 w-[95%] sm:w-[600px] bg-white rounded-md">
        <div className="flex-center">
          <Image className="h-[50px] w-[50px]" src={logo} alt="" />
          <h1 className="text-primary text-[20px]">Admin Login</h1>
        </div>
        <div className="flex flex-col sm:mt-0 mt-4 gap-2">
          <p>Admin Id</p>
          <input
            onChange={(e) => setAdminId(e.target.value)}
            name="text"
            value={adminId}
            className="sm:w-[400px] w-full rounded-md px-2 h-[50px] border-[1px] border-primary bg-blue-100"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Secret key</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
            className="sm:w-[400px] w-full rounded-md px-2 h-[50px] border-[1px] border-primary bg-blue-100"
            type="password"
          />
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          onClick={handleLogin}
          className="sm:w-[400px] w-[200px] rounded-md mt-8 h-[50px] flex items-center justify-center text-white bg-primary text-[16px] font-medium"
        >
          Login
        </button>
      </div>
      {showSuccessModal && (
        <div className="fixed top-0 left-0 right-0 bg-green-500 text-white flex items-center justify-center p-4">
          <AiOutlineCheckCircle size={24} />
          <span className="ml-2">Login Successful!</span>
        </div>
      )}
    </div>
  );
}

export default Page;
