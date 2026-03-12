import SuggestCard from "./SuggestCard";
import { suggestionArray } from "../../../utils/utils";

const Suggestion = () => {
  return (
    <div className="text-black mt-5">
      <h1 className="font-semibold text-2xl">YOU MAY ALSO LIKE</h1>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-6 justify-around">
        {suggestionArray.map((item, index) => (
          <SuggestCard
            key={index}
            author={item.author}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
