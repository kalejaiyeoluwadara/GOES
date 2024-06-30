import React from "react";
import { BsCopy } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
function Selected({ selected, setSelected }) {
  // Function to download the file
  function downloadFile(url) {
    if (url) {
      const link = document.createElement("a");
      link.href = url;
      link.download = url.split("/").pop(); // Extracts the filename from the URL
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("No file URL available to download.");
    }
  }

  return (
    <div className="sm:px-20 min-h-screen w-screen bg-white py-12 justify-center flex-col">
      <h1
        onClick={() => {
          setSelected(null);
        }}
        className="text-[20px]  cursor-pointer font-medium mb-12 text-gray-400 "
      >
        Dashboard / <span className="text-gray-600">Applications</span>
      </h1>
      <h1 className="h4">Full Name</h1>
      <form className="mt-10 sm:w-[700px] grid gap-4 grid-rows-3 grid-cols-2">
        <div>
          <p>First Name</p>
          <div className="w-auto px-2 flex items-center justify-center rounded-md border border-primary h-[50px]">
            <p className="px-2 outline-none flex-1 items-center justify-start flex h-full w-full">
              {selected.firstName}
            </p>
            <BsCopy />
          </div>
        </div>
        <div>
          <p>Last Name</p>
          <div className="w-auto px-2 flex items-center justify-center rounded-md border border-primary h-[50px]">
            <p className="px-2 outline-none flex-1 items-center justify-start flex h-full w-full">
              {selected.lastName}
            </p>
            <BsCopy />
          </div>
        </div>
        <div className="col-span-2">
          <p>Institution</p>
          <div className="w-auto px-2 flex items-center justify-center rounded-md border border-primary h-[50px]">
            <p className="px-2 outline-none flex-1 items-center justify-start flex h-full w-full">
              {selected.institution}
            </p>
            <BsCopy />
          </div>
        </div>
        <div>
          <p>Email</p>
          <div className="w-auto px-2 flex items-center justify-center rounded-md border border-primary h-[50px]">
            <p className="px-2 outline-none flex-1 items-center justify-start flex h-full w-full">
              {selected.email}
            </p>
            <BsCopy />
          </div>
        </div>
        <div>
          <p>Type</p>
          <div className="w-auto px-2 flex items-center justify-center rounded-md border border-primary h-[50px]">
            <p className="px-2 outline-none flex-1 items-center justify-start flex h-full w-full">
              {selected.option}
            </p>
            <BsCopy />
          </div>
        </div>
        <div className="col-span-2">
          <p>Resume / Application letter</p>
          <div
            onClick={() => downloadFile(selected.fileURL)}
            className="w-auto px-2 flex items-center justify-center rounded-md border border-primary bg-blue-200 h-[200px]"
          >
            <div className="px-2 flex-col gap-3 outline-none flex-1 items-center justify-center flex h-full w-full cursor-pointer">
              <FiDownload size={40} />
              <p>Click to Download Resume / Application letter</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Selected;
