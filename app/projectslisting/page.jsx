"use client";
import React from "react";
import Ongoing1 from "./Ongoing1";
import Slide from "./Slide";
import Footer from "../components/Footer";
import { useGlobal } from "../Context";

function Page() {
  const { status, setStatus } = useGlobal();
  return (
    <>
      <Ongoing1 status={status} setStatus={setStatus} />
      <Slide status={status} setStatus={setStatus} />
      <Footer />
    </>
  );
}

export default Page;
