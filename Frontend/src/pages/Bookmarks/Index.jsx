import { useSelector } from "react-redux";
import CardBookmark from "./CardBookmark";

const Index = () => {
  const booksArray = useSelector((state) => state?.book?.items) || [];
  console.log("booksArray in index Bookmark", booksArray);

  return (
    <div className="bg-blackC">
      <div className=" pb-10 my-5 h-[84vh] mx-auto rounded-[20px] max-w-[1440px] px-4 ">
        <h1 className="font-semibold text-4xl py-10">Bookmarks</h1>
        <div className="flex justify-evenly gap-3 flex-wrap">
          {booksArray.length > 0 ? (
            booksArray?.map((item, index) => (
              <CardBookmark
                key={index}
                id={item.id}
                image={item.image}
                author={item.author}
                title={item.title}
                comments={item.comments}
                star={item.star}
                people={item.people}
                price={item.price}
                salePrice={item.salePrice}
              />
            ))
          ) : (
            <p className="text-red text-4xl font-semibold">
              There are no books added
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
