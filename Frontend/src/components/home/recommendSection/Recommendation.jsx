import React from "react";
import { ModuloIcon, StarIcon } from "../../../assets/icons/Index.js";
import { Navigate, useNavigate } from "react-router";

const Recommendation = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/books");
  };
  return (
    <div className="mx-auto max-w-[1440px] flex flex-col sm:flex-row gap-4">
      <div className="bg-grayBg flex  items-center min-h-[180px] p-4 text-center sm:h-[24vh] justify-center relative flex-1 rounded-2xl overflow-hidden">
        <ModuloIcon classname="h-24 w-18 sm:h-34 sm:w-28 absolute -top-8 -left-4 " />
        <ModuloIcon classname="h-8 w-8 sm:h-18 sm:w-18 absolute bottom-0 sm:-bottom-3 left-16 " />
        <p className="sm:text-xl lg:text-2xl xl:text-4xl">DISCOUNTS</p>
      </div>

      <div
        onClick={handleClick}
        className="bg-grayBg flex flex-2 items-center justify-center min-h-[180px] p-4 text-center sm:h-[24vh] rounded-2xl relative overflow-hidden"
      >
        <StarIcon classname="absolute w-18 h-24 sm:w-28 sm:h-34 top-1 left-32" />
        <StarIcon classname="absolute w-12 h-18 sm:w-22 sm:h-28 bottom-0 left-22" />
        <p className="sm:text-2xl lg:text-3xl xl:text-4xl">
          THE BEST BOOKS FOR A GIFT
        </p>
      </div>
    </div>
  );
};

export default Recommendation;
