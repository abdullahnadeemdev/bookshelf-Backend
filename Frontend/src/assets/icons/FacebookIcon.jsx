import React from "react";

export const FacebookIcon = ({ classname, ...props }) => {
  return (
    <svg
      width={9}
      height={18}
      className={`h-5 w-3 ${classname}`}
      viewBox="0 0 9 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.88679 17.9931H5.50854V8.91344H8.03872L8.30619 5.87723H5.50854V4.14948C5.50854 3.43381 5.65313 3.15187 6.34712 3.15187H8.30619V0H5.7977C3.10126 0 1.88679 1.18557 1.88679 3.46272V5.88446H0V8.96404H1.88679V18.0004V17.9931Z"
        fill="white"
      />
    </svg>
  );
};
