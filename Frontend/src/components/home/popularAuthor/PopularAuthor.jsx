import { authorsArray } from "../../../utils/utils";
import { useMemo } from "react";
import CardAuthor from "./CardAuthor";
const PopularAuthor = () => {
  const array = useMemo(() => authorsArray.slice(1, 9));
  return (
    <div className="h-fit  max-w-[1440px] px-0.5 mx-auto" id="authors">
      <h1 className="font-base text-xl sm:text-2xl lg:text-4xl py-10 pl-6">
        POPULAR AUTHORS
      </h1>
      <div className="grid grid-cols-1 cursor-pointer xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center p-5 md:pb-10 w-full gap-3 ">
        {array.map((item, index) => (
          <CardAuthor key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PopularAuthor;
