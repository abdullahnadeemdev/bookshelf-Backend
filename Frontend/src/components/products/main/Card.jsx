import { NavLink } from "react-router";
import { Bookmark, Comment, Star } from "../../../assets/icons/Index.js";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addBookmark,
  removeBookmark,
} from "../../../redux/features/bookMarkSlice";

const Card = (props) => {
  let user = useSelector((state) => state?.auth?.user) || undefined;

  if (user === undefined) {
    user = { email: "guest" };
  }

  const bookTitle = props.title;
  const dispatch = useDispatch();

  const currentBookmarks = useSelector((state) => state?.book?.items);

  const book = {
    id: props.id,
    image: props.image,
    author: props.author,
    title: bookTitle,
    comments: props.comments,
    star: props.star,
    people: props.people,
    price: props.price,
    salePrice: props.salePrice,
    type: props.type,
    publishDate: props.publishDate,
    language: props.language,
    pages: props.pages,
    readTime: props.readTime,
    cover: props.cover,
    publisher: props.publisher,
  };

  const [isBookmarked, setIsBookmarked] = useState(() =>
    currentBookmarks.some(
      (b) => b.title === props.title && b.email === user.email,
    ),
  );

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isBookmarked) {
      const updated = { ...book, email: user.email };
      dispatch(addBookmark(updated));
      setIsBookmarked(true);
    } else {
      dispatch(removeBookmark(book.id));
      setIsBookmarked(false);
    }
  };

  return (
    <NavLink
      to={`/books/${bookTitle.replace(/\s+/g, "-")}`}
      className="bg-whiteBg p-2 lg:p-4 h-fit rounded-xl md:mt-4 max-w-[334px] max-h-[618px]"
      state={{
        image: props.image,
        id: props.id,
        author: props.author,
        title: bookTitle,
        comments: props.comments,
        star: props.star,
        people: props.people,
        price: props.price,
        salePrice: props.salePrice,
        type: props.type,
        publishDate: props.publishDate,
        language: props.language,
        pages: props.pages,
        readTime: props.readTime,
        cover: props.cover,
        publisher: props.publisher,
      }}
    >
      <div className="h-60 w-60 xs:h-40 xs:w-44 sm:h-40 sm:w-45 md:h-40 md:w-41.5 lg:h-[45vh] lg:w-[21vw] max-w-[302px] max-h-[429px] relative">
        <img
          src={props.image}
          className="h-full w-full object-fit lg:object-fit rounded-xl"
          alt=""
        />
        <div onClick={(e) => handleBookmark(e)}>
          <Bookmark
            fill={isBookmarked ? "white" : "#2a2c2e"}
            classname="absolute z-30 top-2 right-2"
            onChange={handleBookmark}
          />
        </div>
      </div>

      <div className="text-black">
        <div
          className="
              flex justify-between"
        >
          <span className="pr-2">
            <p className="text-xs text-darkGreyText md:text-sm mt-2">
              {props.author}
            </p>
          </span>
        </div>

        <div className="flex flex-col justify-between gap-0">
          <p
            className="
                              text-wrap text-xs
                              
                              w-30 h-8
                              md:text-base
                              md:w-40 md:h-12
                              lg:w-50 
                              
                            "
          >
            {bookTitle}
          </p>
          <div className="flex gap-2 mb-5">
            <span
              className="flex w-fit px-1 text-sm border rounded-full items-center gap-0.5 md:gap-1
                          md:p-1 md:px-3 md:text-base"
            >
              <p>{props.comments}</p>
              <Comment />
            </span>

            <span
              className="flex w-fit px-1 text-sm border rounded-full items-center gap-0.5 md:gap-1
                          md:p-1 md:px-3 md:text-base "
            >
              <p>{props.star}</p>
              <Star />
              <p>{props.people}</p>
            </span>
          </div>

          <span className="flex gap-1">
            <p className="text-greyText md:text-lg line-through">
              {props.price}
            </p>
            <p className="md:text-lg ml-1">{props.salePrice}</p>
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
