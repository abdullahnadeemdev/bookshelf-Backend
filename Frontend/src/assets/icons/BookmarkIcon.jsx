import React from "react";

export const BookmarkIcon = ({ className, ...props }) => {
  return (
    <svg
      width={22}
      height={25}
      viewBox="0 0 17 20"
      className={`xl:h-6 xl:w-6 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.8433 1.07241C14.9439 1.20014 15.75 2.149 15.75 3.25699V18.75L8.25 15L0.75 18.75V3.25699C0.75 2.149 1.55608 1.20014 2.65668 1.07241C4.49156 0.859466 6.358 0.75 8.25 0.75C10.142 0.75 12.0084 0.859466 13.8433 1.07241Z"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
