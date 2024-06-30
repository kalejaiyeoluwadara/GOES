import React from "react";

function Modal() {
  return (
    <div className="w-screen fixed top-3 flex-center">
      <div className="w-[300px] h-[60px] flex gap z-40 bg-white rounded-xl ">
        <FaCheckCircle size={20} />
        <p>Message Submitted</p>
      </div>
    </div>
  );
}

export default Modal;
