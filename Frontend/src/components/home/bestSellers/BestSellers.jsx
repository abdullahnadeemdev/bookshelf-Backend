import { useMemo } from "react";
import { useNavigate } from "react-router";
import Card from "./Card";
import { ArrayProducts as array } from "../../../utils/utils";

const BestSellers = () => {
  const navigate = useNavigate();

  const booksToDisplay = useMemo(() => {
    return array.slice(0, 8);
  }, []);

  return (
    <div className="h-fit py-10 max-w-[1430px] w-full px-4">
      <h1 className="font-semibold text-xl sm:text-2xl lg:text-4xl mb-6">
        BESTSELLERS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {booksToDisplay.map((item) => (
          <Card key={item.id} {...item} />
        ))}

        <div
          onClick={() => navigate("/books")}
          className="h-full min-h-[220px] bg-yellow rounded-2xl text-black 
                     flex items-center justify-center text-2xl font-semibold 
                     cursor-pointer hover:scale-[1.02] transition"
        >
          <h1 className="font-semibold md:text-2xl">SEE ALL</h1>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;

// <Card
//  key={item.id}
//             id={item.id}
//             image={item.image}
//             author={item.author}
//             title={item.title}
//             comments={item.comments}
//             star={item.star}
//             people={item.people}
//             price={item.price}
//             salePrice={item.salePrice}
//             type={item.type}
//             publishDate={item.publishDate}
//             language={item.language}
//             pages={item.pages}
//             readTime={item.readTime}
//             cover={item.cover}
//             publisher={item.publisher}
//           />
