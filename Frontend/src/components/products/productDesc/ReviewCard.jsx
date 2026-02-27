import { Star } from "../../../assets/icons/Index.js";

const ReviewCard = (props) => {
  return (
    <div className="bg-white rounded-[20px] max-w-174 p-4 text-black ">
      <div className="flex justify-between text-black items-center">
        <div className=" flex items-center gap-2">
          <div className="h-10 w-10">
            <img
              src={props.image}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="text-xl text-black">{props.name}</p>
        </div>
        <p className="hidden xs:block">{props.date}</p>
      </div>
      <span className="flex gap-1 items-center my-6">
        <Star classname="h-6 w-6" />
        <p className="text-lg">{props.rating}</p>
      </span>
      <p className="text-sm mb-6 h-30 overflow-hidden">{props.review}</p>
    </div>
  );
};

export default ReviewCard;
