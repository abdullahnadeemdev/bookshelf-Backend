import { useEffect, useMemo, useState } from "react";
import CardAuthor from "./CardAuthor";
import axios from "axios";

const PopularAuthor = () => {
  const [author, setAuthor] = useState([]);

  const getAuthors = async () => {
    const authors = await axios
      .get("http://localhost:8000/author/")
      .then((res) => setAuthor(res.data))
      .catch((err) => console.log("I occured at popularAuthor Home", err));
  };

  useEffect(() => {
    getAuthors();
  }, []);
  const array = useMemo(() => author.slice(1, 9), [author]);
  console.log("i am autroirs array", author);
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
