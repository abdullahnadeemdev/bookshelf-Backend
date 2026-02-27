import { useNavigate } from "react-router";
import { ArrowIcon } from "../../../assets/icons/Index.js";
import { QuestionMarkIcon } from "../../../assets/icons/Index.js";

const CallToAction = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/books");
  };
  return (
    <div className="bg-grayBg rounded-[20px] relative z-0 sm:max-h-60 p-6 overflow-hidden flex flex-col sm:flex-row justify-between max-w-[1404px] px-4 mx-auto">
      <QuestionMarkIcon classname="w-30 h-30 md:h-65  md:w-80 lg:h-65 lg:w-85 absolute top-0 right-35 -z-10" />
      <div className="flex flex-col gap-8 ">
        <h1 className="text-xl md:text-2xl lg:text-4xl">
          DECIDING WHAT TO READ NEXT?
        </h1>
        <p className="md:text-lg font-extralight lg:text-lg text-wrap min-w-20 max-w-125 mb-4 sm:mb-10">
          You're in the right place. Tell us what titles or genres you've
          enjoyed in the past, and we'll give you surprisingly insightful
          recommendations.
        </p>
      </div>
      <div
        className="bg-yellow w-fit cursor-pointer flex items-center justify-center rounded-lg self-end sm:rounded-[20px] relative z-20"
        onClick={handleClick}
      >
        <ArrowIcon classname="w-10 h-10 sm:h-20 sm:w-30 md:h-30 md:w-40 lg:h-45 lg:w-45" />
      </div>
    </div>
  );
};

export default CallToAction;
