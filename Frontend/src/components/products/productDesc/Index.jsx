import Description from "./Description.jsx";
import Suggestion from "./Suggestion.jsx";
import Review from "./Review.jsx";
import { useLocation } from "react-router";

const Index = () => {
  // const { state } = useLocation();

  // console.log("state in productdesc", state);
  return (
    <div className="">
      <div className=" my-5 px-4 max-w-[1440px] mx-auto rounded-[20px]">
        <Description />
        <Suggestion />
        <Review />
      </div>
    </div>
  );
};

export default Index;
