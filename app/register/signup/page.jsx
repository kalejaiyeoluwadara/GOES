// components/Signup.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import Link from "next/link";
import Modal from "./Modal";
import { useGlobal } from "@/app/Context";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { item, setItem } = useGlobal();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save user details to Firestore
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email,
        username,
        phone,
        createdAt: new Date(),
      });

      setMessage("SignUp successful");
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-2">
      {showModal && <Modal message={message} onClose={closeModal} />}
      <div className="bg-white border w-[400px] rounded-md mb-10 h-[480px] py-6 px-10 relative mt-40">
        <h1 className="text-4xl text-center text-primary font-bold mb-8">
          Sign Up
        </h1>
        <form className="flex flex-col space-y-4" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            Sign Up
          </button>
          <p className="text-center text-gray-500 text-[13px]">
            Are you new here?{" "}
            <Link href={"/register/login"} className="text-primary underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
