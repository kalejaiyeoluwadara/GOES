// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import logo from "@/app/assets/logo.svg";
// import explore from "@/app/assets/explore.webp";
// import { db } from "@/utils/firebase"; // Adjust the path as necessary
// import { collection, doc, updateDoc } from "firebase/firestore";
// import { AiOutlineCheckCircle } from "react-icons/ai";
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import useAdminAuth from "@/hooks/useAdminAuth";

// function UpdateAdminPage() {

//   useAdminAuth()

//   const [newAdminId, setNewAdminId] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [message, setMessage] = useState(""); // For displaying success or error messages
//   const router = useRouter();

//   const handleUpdate = async () => {
//     try {
//       // Assuming there's only one admin document
//       const adminDocRef = doc(collection(db, "admin"), "6BfR5QzW8QnvfHhPV9aZ"); // Change "adminId" to the actual document ID

//       await updateDoc(adminDocRef, {
//         adminId: newAdminId,
//         password: newPassword,
//       });

//       setMessage({
//         text: "Admin credentials updated successfully!",
//         type: "success",
//       });
//       setTimeout(() => {
//         router.push("/admin/dashboard");
//       }, 2000);
//     } catch (error) {
//       console.error("Error updating admin data:", error);
//       setMessage({ text: "Error updating admin data.", type: "error" });
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center">
//       {/* <Image src={explore} className="cover" alt="" /> */}
//       <div className="h-[400px] w-full sm:w-[500px] bg-white rounded-md shadow-md flex flex-col items-center justify-center p-6">
//         <Image className="h-[40px] w-[40px]" src={logo} alt="" />
//         <h1 className="text-primary text-[20px] font-semibold mt-4 mb-4">
//           Update Admin Credentials
//         </h1>
//         <div className="w-full max-w-md">
//           {message && (
//             <div
//               className={`flex items-center justify-center mb-4 text-${
//                 message.type === "success" ? "green-600" : "red-600"
//               }`}
//             >
//               {message.type === "success" ? (
//                 <AiOutlineCheckCircle size={24} className="mr-2" />
//               ) : (
//                 <AiOutlineCloseCircle size={24} className="mr-2" />
//               )}
//               <span>{message.text}</span>
//             </div>
//           )}
//           <div className="flex flex-col gap-4">
//             <div className="flex flex-col gap-2">
//               <p>New Admin ID</p>
//               <input
//                 onChange={(e) => setNewAdminId(e.target.value)}
//                 value={newAdminId}
//                 className="w-full rounded-md px-3 h-[40px] border-[1px] border-primary bg-blue-100"
//                 type="text"
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <p>New Secret Key</p>
//               <input
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 value={newPassword}
//                 className="w-full rounded-md px-3 h-[40px] border-[1px] border-primary bg-blue-100"
//                 type="password"
//               />
//             </div>
//             <button
//               onClick={handleUpdate}
//               className="w-full rounded-md mt-4 h-[40px] flex items-center justify-center text-white bg-primary text-[14px] font-medium"
//             >
//               Update Credentials
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UpdateAdminPage;
