import React from "react";

function Button({ title, otherStyles }) {
  return (
    <button
      className={`px-4 border-[1px]   border-primary rounded-md ${otherStyles} py-2`}
    >
      {title}
    </button>
  );
}

export default Button;
