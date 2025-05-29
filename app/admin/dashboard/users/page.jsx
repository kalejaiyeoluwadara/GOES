// "use client";
// import React, { useState, useEffect } from "react";
// import { BsMenuButtonWide, BsCopy } from "react-icons/bs";
// import { TbEdit } from "react-icons/tb";
// import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
// import { deleteUser } from "firebase/auth";
// import { db, auth } from "@/utils/firebase";

// function Page() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedUser, setSelectedUser] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const usersCollection = collection(db, "users");
//         const userSnapshot = await getDocs(usersCollection);
//         const userList = userSnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setUsers(userList);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch users");
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleDeleteUser = async (user) => {
//     try {
//       const userDocRef = doc(db, "users", user.id);
//       await deleteDoc(userDocRef);

//       const userAuth = auth.currentUser;
//       if (userAuth) {
//         await deleteUser(userAuth);
//       }

//       setUsers(users.filter((u) => u.id !== user.id));
//       setSelectedUser(null);
//     } catch (err) {
//       setError("Failed to delete user");
//     }
//   };

//   const handleBlockUser = async (user) => {
//     try {
//       const userDocRef = doc(db, "users", user.id);
//       await updateDoc(userDocRef, { status: "blocked" });

//       setUsers(
//         users.map((u) => (u.id === user.id ? { ...u, status: "blocked" } : u))
//       );
//       setSelectedUser(null);
//     } catch (err) {
//       setError("Failed to block user");
//     }
//   };
//   const handleCopyEmail = (email) => {
//     navigator.clipboard.writeText(email).then(
//       () => {
//         alert("Email copied to clipboard!");
//       },
//       (err) => {
//         console.error("Failed to copy email: ", err);
//       }
//     );
//   };

//   return (
//     <div className="items-start pt-8 sm:pl-6 bg-gray-300 h-screen">
//       <header className="w-screen text-gray-600 grid grid-cols-4 justify-center px-2 sm:px-8 items-center bg-white shadow-md h-[80px]">
//         <p>Name</p>
//         <p>Email</p>
//         <p className="col-span-2">Status</p>
//       </header>

//       {loading ? (
//         <div className="w-screen  flex justify-center  items-center h-[80px]">
//           <div className="loader border-t-4 border-b-4 border-primary h-12 w-12 rounded-full animate-spin"></div>
//         </div>
//       ) : error ? (
//         <div className="w-screen -translate-x-20 flex justify-center  items-center h-[80px]">
//           <p className="text-red-500">{error}</p>
//         </div>
//       ) : (
//         users.map((user) => (
//           <main
//             key={user.id}
//             className="w-screen border-y border-gray-400 text-gray-600 grid grid-cols-4 justify-center sm:px-8 px-2 items-center bg-gray-200 shadow-md h-[80px]"
//           >
//             <p className="truncate">{user.username}</p>
//             <p className="flex sm:gap-1 gap-[2px] truncate items-center">
//               {user.email}{" "}
//               <BsCopy
//                 onClick={() => {
//                   handleCopyEmail(user.email);
//                 }}
//                 className="cursor-pointer"
//               />
//             </p>
//             <p
//               className={`font-medium sm:ml-0 ml-2 text-[16px] ${
//                 user.status === "blocked" ? "text-red-400" : "text-green-400"
//               }`}
//             >
//               {user.status === "blocked" ? "Blocked" : "Active"}
//             </p>
//             <TbEdit
//               size={30}
//               className="cursor-pointer"
//               onClick={() => setSelectedUser(user)}
//             />
//           </main>
//         ))
//       )}

//       {selectedUser && (
//         <div className="modal bg-white shadow-md p-4 rounded-md absolute right-10 top-20 z-50">
//           <p className="text-lg font-bold">Manage User</p>
//           <p className="my-2">Username: {selectedUser.username}</p>
//           <div className="flex gap-3">
//             <button
//               className="bg-red-500 text-[14px] - text-white px-4 py-2 rounded-md mt-2"
//               // onClick={() => handleDeleteUser(selectedUser)}
//             >
//               Delete
//             </button>
//             <button
//               className="bg-yellow-500 text-[14px] - text-white px-4 py-2 rounded-md mt-2"
//               // onClick={() => handleBlockUser(selectedUser)}
//             >
//               {selectedUser.status === "blocked"
//                 ? "Unblock Account"
//                 : "Block Account"}
//             </button>
//           </div>
//           <button
//             className="bg-gray-500 text-white px-4 py-2 rounded-md mt-2"
//             onClick={() => setSelectedUser(null)}
//           >
//             Cancel
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Page;
