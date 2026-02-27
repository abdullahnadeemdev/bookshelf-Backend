import FilterBar from "./filterBar";
import SideBar from "./SideBar";
import { ArrayProducts } from "../../../utils/utils";
import Card from "./Card";
import { useState } from "react";

const Main = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const [filter, setFilter] = useState({
    categoryInput: "",
    yearsInput: "",
    language: "",
    price: "",
    publishH: "",
    coverType: "",
    ratingCheck: "",
  });

  const array = ArrayProducts.filter((item) => {
    const queryCheck = item.title.toLowerCase().includes(query.toLowerCase());

    const language =
      filter.language === "" ? true : item.language.includes(filter.language);

    const year =
      !filter.yearsInput || filter.yearsInput === "none"
        ? true
        : item.publishDate.includes(filter.yearsInput);

    const publishH =
      filter.publishH === "" ? true : item.publisher.includes(filter.publishH);

    const cover =
      filter.coverType === "" ? true : item.cover.includes(filter.coverType);
    const star =
      filter.ratingCheck === "" ? true : item.star > filter.ratingCheck;

    const itemPrice = parseFloat(item?.salePrice?.replace("$", ""));
    const [minPrice, maxPrice] = filter.price || [0, 120];
    const matchesPrice = itemPrice >= minPrice && itemPrice <= maxPrice;

    return (
      queryCheck &&
      language &&
      year &&
      publishH &&
      cover &&
      star &&
      matchesPrice
    );
  });

  const renderData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = array.slice(startIndex, endIndex);

    return (
      <div className="flex justify-around gap-2 md:gap-3 flex-wrap ">
        {currentItems.map((item, index) => (
          <Card
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
            type={item.type}
            publishDate={item.publishDate}
            language={item.language}
            pages={item.pages}
            readTime={item.readTime}
            cover={item.cover}
            publisher={item.publisher}
          />
        ))}
      </div>
    );
  };

  const NextPage = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
    setCurrentPage((prev) => prev + 1);
  };

  const PrevPage = () => {
    if (currentPage - 1 === 0) {
      return;
    }
    window.scrollTo({ top: 0, behaviour: "smooth" });

    setCurrentPage((prev) => prev - 1);
  };

  const goToSpecificPage = (pageNumber) => {
    window.scrollTo({ top: 0, behaviour: "smooth" });

    setCurrentPage(pageNumber);
  };

  const renderControls = () => {
    const totalPages = Math.ceil(array.length / itemsPerPage);
    return (
      <div className="flex items-center justify-center gap-4">
        <button
          className="rounded-full bg-searchIcon py-2 px-3"
          onClick={PrevPage}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            className="rounded-full bg-searchIcon py-2 px-3"
            key={i}
            style={{
              backgroundColor: currentPage - 1 === i ? "#1A1B1D" : "#3b3d3f",
            }}
            onClick={() => goToSpecificPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="rounded-full bg-searchIcon py-2 px-3"
          onClick={NextPage}
          disabled={currentPage + 1 > totalPages ? true : false}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-10">
      <div className="">
        <FilterBar
          queryFunc={setQuery}
          setFilter={setFilter}
          filterObj={filter}
          arrayNum={array.length}
        />
      </div>

      <div className="bg-grayBg mt-10 flex  gap-2">
        <div className="hidden md:block">
          <SideBar setFilter={setFilter} filter={filter} />
        </div>

        <div className="md:w-[80vw] w-full">
          {renderData()}
          <div className="bg-blackC mx-auto mt-2">{renderControls()}</div>
        </div>
      </div>
    </div>
  );
};

export default Main;

//  {array.length > 0 ? (
//             array.map((item, index) => (
//               <Card
//                 key={index}
//                 id={item.id}
//                 image={item.image}
//                 author={item.author}
//                 title={item.title}
//                 comments={item.comments}
//                 star={item.star}
//                 people={item.people}
//                 price={item.price}
//                 saleP={item.saleP}
//                 type={item.type}
//                 publishDate={item.publishDate}
//                 lang={item.lang}
//                 pages={item.pages}
//                 readTime={item.readTime}
//                 cover={item.cover}
//                 publisher={item.publisher}
//               />
//             ))
//           ) : (
//             <p className="text-red text-4xl  w-full text-center font-bold pt-[20%]">
//               No books found
//             </p>
//           )}
