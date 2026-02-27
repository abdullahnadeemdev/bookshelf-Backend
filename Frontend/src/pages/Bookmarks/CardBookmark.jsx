import { useState } from "react";
import { Bookmark } from "../../assets/icons/Index.js";
import { Comment, Star } from "../../assets/icons/Index.js";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeBookmark } from "../../redux/features/bookMarkSlice";

const CardBookmark = (props) => {
  const [clr, setClr] = useState("white");

  console.log("props in cardBoookmark", props);

  const array = useSelector((state) => state?.book?.items) || [];
  console.log("array in cardBoookmark", array);
  let user = useSelector((state) => state?.auth?.user) || undefined;
  if (user === undefined) {
    user = { email: "guest" };
  }

  const dispatch = useDispatch();

  const handleBookmark = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // clr === "white" ? setClr("#1a1b1d") : setClr("white");
    if (array.length > 0) {
      dispatch(removeBookmark(props.id));
    } else {
      console.log("array is not found");
    }
  };

  return (
    <NavLink
      to={`/books/${props.title}`}
      state={{
        id: props.id,
        image: props.image,
        author: props.author,
        title: props.title,
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
      <div
        className="
            flex
            flex-1
            p-4
            bg-white
            rounded-[20px]
            xs:max-w-104 gap-3
            sm:max-w-74
            md:min-w-90
            lg:min-w-113.5
          "
      >
        <div
          className="
              overflow-hidden
              h-40 w-25
              rounded-[20px]
              md:h-50 md:w-35
              lg:h-59 lg:w-60
            "
        >
          <img
            src={props.image}
            alt="AfterDark book"
            className="
                object-cover
                h-full w-full
              "
          />
        </div>
        <div
          className="
              text-black
            "
        >
          <div
            className="
                flex
                justify-between
                md:w-45 md:mb-4
                lg:w-60 lg:mb-6
              "
          >
            <span
              className="
                  pr-2
                "
            >
              <p
                className="
                    text-sm
                    md:text-base
                  "
              >
                {props.author}
              </p>
              <p
                className="
                    overflow-hidden
                    w-26 h-7
                    mb-1
                    font-semibold text-wrap text-xs
                    sm:max-w-46
                    md:text-base
                    lg:overflow-visible lg:h-10
                  "
              >
                {props.title}
              </p>
            </span>
            <div onClick={handleBookmark}>
              <Bookmark fillClr={clr} />
            </div>
          </div>

          <span
            className="
                flex
                w-fit
                mt-2 px-1.5 mb-2
                text-sm
                border rounded-full
                items-center gap-1
                md:mt-0 md:p-1 md:px-3 md:text-base
              "
          >
            <p>{props.comments}</p>
            <Comment />
          </span>

          <span
            className="
                flex
                w-fit
                mb-4 px-1
                text-sm
                border rounded-full
                items-center gap-1
                md:p-1 md:px-3 md:mb-6 md:text-base
                lg:mb-8
              "
          >
            <p>{props.star}</p>
            <Star />
            <p>({props.people})</p>
          </span>

          <span
            className="
                flex
                gap-1
              "
          >
            <p
              className="
                  text-greyText text-lg
                  line-through
                "
            >
              {props.price}
            </p>
            <p
              className="
                  text-lg
                "
            >
              {props.salePrice}
            </p>
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default CardBookmark;
