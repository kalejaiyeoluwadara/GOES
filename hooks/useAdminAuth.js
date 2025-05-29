"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useAdminAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      router.replace("/admin"); // Redirect to login
    }
  }, []);
};

export default useAdminAuth;
