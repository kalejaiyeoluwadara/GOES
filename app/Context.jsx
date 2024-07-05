"use client";
import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [src, setSrc] = useState("");
  const [state, setState] = useState([]);
  const [modal, setModal] = useState("");
  const [item, setItem] = useState("Register");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [status, setStatus] = useState("ongoing");

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        item,
        setItem,
        modal,
        setModal,
        isMenuOpen,
        setIsMenuOpen,
        status,
        setStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () => {
  return useContext(AppContext);
};

export default AppProvider;
