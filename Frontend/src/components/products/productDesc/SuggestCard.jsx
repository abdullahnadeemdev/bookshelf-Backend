import { Bookmark } from "../../../assets/icons/Index.js";

const SuggestCard = (props) => {
  return (
    <div className="bg-white p-1 xs:p-4 rounded-[20px] w-fit">
      <div className="xs:h-60 xs:w-fit md:w-50 xl:w-45 relative">
        <img
          src={props.image}
          alt=""
          className="h-full w-full object-cover rounded-[20px]"
        />
        <Bookmark
          fillClr={"#2a2c2e"}
          classname="absolute top-3 right-2 lg:w-8! lg:h-8!"
        />
      </div>
      <div>
        <p className="text-sm text-darkGreyText mt-2">{props.author}</p>
        <p className="font-medium mt-1 xs:w-38 xs:h-12">{props.title} </p>
      </div>
    </div>
  );
};

export default SuggestCard;
