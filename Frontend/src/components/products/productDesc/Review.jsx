import Button from "../../shared/button/Button";
import { customerReviewArray as array } from "../../../utils/utils";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <div className="pb-10">
      <div className="flex justify-between items-center my-3 ">
        <h1 className="font-semibold text-xl xs:text-2xl text-black">
          READERS REVIEWS
        </h1>
        {/* <Button variant="outline" className="border-black ">
          ADD REVIEW
        </Button> */}
      </div>
      <div className="flex flex-wrap justify-around gap-4">
        {array.map((item, index) => (
          <ReviewCard
            key={index}
            name={item.name}
            review={item.review}
            rating={item.rating}
            date={item.date}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;
