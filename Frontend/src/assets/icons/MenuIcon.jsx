import React from "react";

const MenuIcon = ({ height, width, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      stroke="black"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h8m-8 6h16"
      ></path>
    </svg>
  );
};
export { MenuIcon };
