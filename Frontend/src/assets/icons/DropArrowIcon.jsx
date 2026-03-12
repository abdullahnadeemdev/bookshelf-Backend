import React from "react";

export const DropArrowIcon = ({ fill, classname, ...props }) => {
  return (
    <svg
      className={`h-1 w-2 md:h-2 md:w-3   ${classname}`}
      viewBox="0 0 12 8"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.276203 0.251251C0.634498 -0.0932626 1.20424 -0.0820914 1.54875 0.276203L6 5.0015L10.4513 0.276203C10.7958 -0.0820913 11.3655 -0.0932626 11.7238 0.251251C12.0821 0.595765 12.0933 1.1655 11.7487 1.5238L6.64875 6.9238C6.47907 7.10027 6.24482 7.2 6 7.2C5.75519 7.2 5.52093 7.10027 5.35125 6.9238L0.251251 1.5238C-0.0932627 1.1655 -0.0820913 0.595765 0.276203 0.251251Z"
        fill={`${fill}`}
      />
    </svg>
  );
};
