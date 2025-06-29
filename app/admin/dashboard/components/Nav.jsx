'use client'
import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";

function Nav() {
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    window.location.reload();
  };

  return (
    <div className="w-full flex items-center justify-end px-6 py-4 bg-white shadow z-40">
      <div className="flex items-center gap-4">
        <span className="text-gray-800 font-medium">{name}</span>
        <button onClick={logout} title="Logout">
          <FiLogOut size={22} className="text-red-500 hover:text-red-700 transition" />
        </button>
      </div>
    </div>
  );
}

export default Nav;
