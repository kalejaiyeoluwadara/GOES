"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../assets/logo.svg";
import explore from "../assets/explore.webp";
import { AiOutlineCheckCircle } from "react-icons/ai";
import companyLogo from "../assets/head.png";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Eye, EyeOffIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

function Page() {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false)
  const user = localStorage.getItem('user')

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      router.replace("/admin/dashboard"); // Redirect to dashboard if already logged in
    }
  }, []);
  


  const handleLogin = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/login`, {
        email: adminId,
        password,
      }, {
        withCredentials: true, // Needed to include cookies
      });
    
      // handle success
      localStorage.setItem('userId', response.data.user)
      localStorage.setItem('name', response.data.name)  
      localStorage.setItem('email', response.data.email)
      toast.success('Login Successful')
      router.push('/admin/dashboard')
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        // Backend responded with a status code outside the 2xx range
        console.error("Backend Error:", error.response.data);
        setErrorMessage(error.response.data.message || "An error occurred");
      } else if (error.request) {
        // Request was made but no response
        console.error("No response received:", error.request);
        setErrorMessage("No response from server");
      } else {
        // Something else happened
        console.error("Error setting up request:", error.message);
        setErrorMessage("Something went wrong");
      }
    }
    
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      <Image
        src={explore}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="relative z-10 bg-white rounded-2xl shadow-lg p-8 w-[90%] max-w-md">
        <div className="flex flex-col items-center gap mb-6 justify-center">
          <Image src={companyLogo} alt="logo" width={100} height={100} />
          <h1 className="text-xl font-semibold text-primary">Admin Login</h1>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Admin Email</label>
          <input
            type="text"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            className="w-full border border-primary bg-blue-50 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div className="mb-4 relative">
  <label className="block text-sm font-medium mb-1">Secret Key</label>
  <input
    type={isOpen ? "text" : "password"}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full border border-primary bg-blue-50 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
    required
  />

  <AnimatePresence mode="wait">
    {isOpen ? (
      <motion.div
        key="eye"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="absolute top-10 right-4 text-gray-400 cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        <Eye size={20} />
      </motion.div>
    ) : (
      <motion.div
        key="eye-off"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="absolute top-10 right-4 text-gray-400 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <EyeOffIcon size={20} />
      </motion.div>
    )}
  </AnimatePresence>
</div>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-6 bg-primary hover:bg-primary/80 transition-all text-white font-semibold py-2 rounded-md flex items-center justify-center"
        >
          {loading ? <ClipLoader color="white" width={30}/>: "Login"}
        </button>
      </div>

      {showSuccessModal && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-md shadow-md flex items-center gap-2 z-50">
          <AiOutlineCheckCircle size={20} />
          <span>Login Successful!</span>
        </div>
      )}
    </div>
  );
}

export default Page;
