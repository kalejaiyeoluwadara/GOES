"use client";
import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [src, setSrc] = useState("");
  const [state, setState] = useState(true);
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState("Register");

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        item,
        setItem,
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
