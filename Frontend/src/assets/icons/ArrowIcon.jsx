import React from "react";

export const ArrowIcon = ({ classname, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-6 w-6 ${classname}`}
      //   className=""
      {...props}
    >
      <path d="m7 7 10 10" />
      <path d="M17 7v10H7" />
    </svg>
  );
};
