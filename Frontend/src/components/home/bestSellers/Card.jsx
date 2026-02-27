import { useMemo, useCallback } from "react";
import { Bookmark, Comment, Star } from "../../../assets/icons/Index.js";
import { NavLink } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addBookmark,
  removeBookmark,
} from "../../../redux/features/bookMarkSlice";

const Card = (props) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state?.auth?.user) || { email: "guest" };

  const isBookmarked = useSelector((state) =>
    state?.book?.items?.some(
      (b) => b.id === props.id && b.email === user.email,
    ),
  );

  const handleBookmark = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (!isBookmarked) {
        const updated = { ...props, email: user.email };
        dispatch(addBookmark(updated));
      } else {
        dispatch(removeBookmark(props.id));
      }
    },
    [dispatch, isBookmarked, props, user.email],
  );

  return (
    <NavLink to={`/books/${props.title.replace(/\s+/g, "-")}`} state={props}>
      <div
        className="
      bg-white
        rounded-2xl
        p-4
        h-full
        min-h-[210px]
        "
      >
        <div
          className="
            flex gap-4 h-full
          "
        >
          <div
            className="
            w-28
            aspect-3/4
            overflow-hidden
            rounded-2xl
            shrink-0
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
              flex flex-col justify-between flex-1
              w-full max-w-full
              lg:max-h-full
            "
          >
            <div
              className="
                flex mt-auto
                gap-2
                justify-between
                md:w-full md:mb-4
                lg:max-w-[150px]
                xl:min-w-53 xl:max-w-full  lg:mb-0
                max-w-[260px]
              "
            >
              <span
                className="
                  xl:pr-2
                "
              >
                <p
                  className="
                    text-[11px] xl:text-sm
                    truncate
                  "
                >
                  {props.author}
                </p>
                <p className="text-sm font-semibold line-clamp-2">
                  {props.title}
                </p>
              </span>
              <div onClick={(e) => handleBookmark(e)}>
                <Bookmark
                  fill={isBookmarked ? "white" : "#2a2c2e"}
                  classname="xl:h-10  xl:w-10 "
                />
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
                md:mt-auto md:p-1 md:px-3 md:text-base
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
                text-xs
                border rounded-full
                items-center gap-1
                md:p-1 md:px-3 md:mb-6 md:text-sm lg:text-base
                xl:mb-8
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
              <p className="text-sm md:text-lg text-gray-400 line-through">
                {props.price}
              </p>
              <p className="text-sm md:text-lg font-semibold">
                {props.salePrice}
              </p>
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
