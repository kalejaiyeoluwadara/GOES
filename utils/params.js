"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useParams() {
  const pathname = usePathname();
  const [state, setState] = useState(pathname);

  useEffect(() => {
    setState(pathname);
  }, [pathname]);

  return state;
}
