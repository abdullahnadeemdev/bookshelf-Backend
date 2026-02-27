import React from "react";

export const CautionIcon = ({ className, ...props }) => {
  return (
    <svg
      className={`xl:h-5 xl:w-5 ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 9L9.04149 8.97926C9.61461 8.6927 10.2599 9.21034 10.1045 9.83198L9.39549 12.668C9.24009 13.2897 9.88539 13.8073 10.4585 13.5207L10.5 13.5M18.75 9.75C18.75 14.7206 14.7206 18.75 9.75 18.75C4.77944 18.75 0.75 14.7206 0.75 9.75C0.75 4.77944 4.77944 0.75 9.75 0.75C14.7206 0.75 18.75 4.77944 18.75 9.75ZM9.75 6H9.7575V6.0075H9.75V6Z"
        stroke="black"
        strokeOpacity={0.87}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
