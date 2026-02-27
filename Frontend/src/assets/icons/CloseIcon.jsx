import React from "react";

export const CloseIcon = ({ classname, ...props }) => {
  return (
    <svg
      width={24}
      height={24}
      className={`h-6 w-6 ${classname}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={24} height={24} rx={12} fill="black" fillOpacity={0.38} />
      <path
        d="M8 8L12.25 12.25M12.25 12.25L16.5 16.5M12.25 12.25L16.5 8M12.25 12.25L8 16.5"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8L12.25 12.25M12.25 12.25L16.5 16.5M12.25 12.25L16.5 8M12.25 12.25L8 16.5"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
