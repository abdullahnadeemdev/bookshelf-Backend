import { useMemo } from "react";
import { useNavigate } from "react-router";
import Card from "./Card";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const BestSellers = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const getBooks = async () => {
    await axios
      .get("http://localhost:8000/products/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log("I occured at bestsellers home", err));
  };

  useEffect(() => {
    getBooks();
  }, []);
  const booksToDisplay = useMemo(() => {
    return books.slice(0, 8);
  }, [books]);

  return (
    <div className="h-fit py-10 max-w-357.5 w-full px-4">
      <h1 className="font-semibold text-xl sm:text-2xl lg:text-4xl mb-6">
        BESTSELLERS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {booksToDisplay.map((item) => (
          <Card key={item._id} {...item} />
        ))}

        <div
          onClick={() => navigate("/books")}
          className="h-full min-h-55 bg-yellow rounded-2xl text-black 
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
