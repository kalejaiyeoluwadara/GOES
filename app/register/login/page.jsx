// components/Login.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import Modal from "./Modal";
import { useGlobal } from "@/app/Context";
export default function Login() {
  const { item, setItem } = useGlobal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Logged in successfully!");
      localStorage.setItem("log", "true");
      setShowModal(true);
      setItem("Log Out");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      setMessage(error.message);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 py-2">
      {showModal && <Modal message={message} onClose={closeModal} />}
      <div className="bg-white w-[400px] rounded-md mb-10 h-[350px] py-6 px-10 relative mt-40 ">
        <h1 className="text-4xl text-center text-primary font-bold mb-8">
          Welcome back!
        </h1>
        <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-primary font-semibold text-white p-2 rounded"
          >
            Log In
          </button>
          <p className="text-center text-gray-500 text-[13px] ">
            are you new here{" "}
            <Link href={"/register/signup"} className="text-primary underline ">
              Sign Up
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}
