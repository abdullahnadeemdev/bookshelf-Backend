import { NavLink, useLocation, useNavigate } from "react-router";
import { Bookmark, RightArrowIcon, Star } from "../../../assets/icons/Index.js";
import Button from "../../shared/button/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  updateBookQuantity,
} from "../../../redux/features/cartSlice";
import {
  addBookmark,
  removeBookmark,
} from "../../../redux/features/bookMarkSlice";

const Description = () => {
  const cartArray = useSelector((state) => state?.cart?.cartItems) || [];
  let user = useSelector((state) => state?.auth?.user) || undefined;
  const currentBookmarks = useSelector((state) => state?.book?.items);

  if (user === undefined) {
    user = { email: "guest" };
  }
  console.log("user in dex", user);
  // console.log("currentBookmarks", currentBookmarks);

  const dispatch = useDispatch();

  const { state } = useLocation();
  // console.log("state", state);

  const [num, setNum] = useState(1);

  const [isBookmarked, setIsBookmarked] = useState(() =>
    currentBookmarks.some((b) => b.title === state.title && b.email === user),
  );

  // console.log("isBookmarked", isBookmarked);
  const [isClicked, setIsClicked] = useState(false);

  const productQuantity =
    cartArray.length > 0
      ? cartArray.find((item) => item.id === state.id)
      : null;

  const productInfo = {
    id: state.id,
    title: state.title,
    author: state.author,
    salePrice: state.salePrice || "",
    price: state.price || state.salePrice,
    quantity: num,
    image: state.image,
  };

  // console.log("productInfo desc of products", productInfo);
  // console.log("state desc of products", state);

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isBookmarked) {
      const updated = { ...state, email: user.email };
      dispatch(addBookmark(updated));
      setIsBookmarked(true);
    } else {
      dispatch(removeBookmark(state.id));
      setIsBookmarked(false);
    }
  };

  const handleCart = () => {
    setIsClicked(true);
    const updatedCart = { ...productInfo, email: user.email };

    dispatch(addToCart(updatedCart));

    // }
  };

  const handleQuantity = (e) => {
    const { name } = e.target;
    dispatch(updateBookQuantity({ id: state.id, type: name }));
  };
  return (
    <div className="p-8 bg-grayBg rounded-[20px]">
      <span className="flex gap-1 mb-5">
        <p>Home | Books | All Books |</p>
        <p className="text-greyText">
          {state.title}, {state.author}
        </p>
      </span>

      <div className="flex justify-between ">
        <div className="flex-2 flex flex-col xs:flex-row gap-5">
          <div className="xs:w-60 sm:w-80 sm:h-125 relative">
            <img
              src={state.image}
              alt={state.title}
              className="h-full w-full object-cover rounded-[20px]"
            />
            <Bookmark
              fill={isBookmarked ? "white" : "#2a2c2e"}
              classname="absolute top-3 right-3"
              onClick={handleBookmark}
            />
          </div>

          <div>
            <p className="text-xl font-light">{state.author}</p>
            <p className="text-3xl font-semibold my-5">{state.title}</p>

            <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
              <span className="flex gap-1 items-center text-lg">
                <Star />
                <p>
                  {state.star} ({state.people})
                </p>
              </span>
              <p className="underline">{state.comments} reviews</p>
            </div>

            <div className="hidden sm:flex gap-5 list-none">
              <span className="font-semibold my-5">
                <li className="mt-1">Category</li>
                <li className="mt-1">Publish date</li>
                <li className="mt-1">Language</li>
                <li className="mt-1">Pages</li>
                <li className="mt-1">Cover</li>
                <li className="mt-1">Publisher</li>
              </span>

              <span className="my-5 font-light">
                <li className="mt-1">{state.type}</li>
                <li className="mt-1">{state.publishDate}</li>
                <li className="mt-1">{state.language}</li>
                <li className="mt-1">{state.pages}</li>
                <li className="mt-1">{state.cover}</li>
                <li className="mt-1">{state.publisher}</li>
              </span>
            </div>

            <span className="flex gap-4 my-5 font-semibold text-3xl sm:text-4xl">
              <p className="text-greyText line-through">{state.salePrice}</p>
              <p className="">{state.price}</p>
            </span>

            <div className="flex items-center">
              <NavLink
                to="/checkout"
                className="min-w-29 xs:mt-2 text-white p-2 lg:p-4 h-fit rounded-xl md:mt-4"
                state={{
                  image: state.image,
                  id: state.id,
                  author: state.author,
                  title: state.title,
                  comments: state.comments,
                  star: state.star,
                  people: state.people,
                  price: state.price,
                  salePrice: state.salePrice,
                  type: state.type,
                  publishDate: state.publishDate,
                  language: state.language,
                  pages: state.pages,
                  readTime: state.readTime,
                  cover: state.cover,
                  publisher: state.publisher,
                }}
              >
                <Button className="mr-2 min-w-39">BUY NOW</Button>
              </NavLink>

              {productQuantity ? (
                <span className="flex  items-center justify-between  text-white mt-3">
                  <button
                    className=" min-w-6 border-2 border-yellow px-4 py-3.5 rounded-l-2xl "
                    onClick={
                      productQuantity.quantity > 1 ? handleQuantity : () => {}
                    }
                    name="-"
                  >
                    -
                  </button>
                  <p className="min-w-6 border-2 border-yellow px-4 py-3.5 text-center">
                    {productQuantity.quantity}
                  </p>
                  <button
                    className="min-w-6 border-2 border-yellow px-4 py-3.5 rounded-r-2xl"
                    onClick={
                      productQuantity.quantity >= 1 ? handleQuantity : () => {}
                    }
                    name="+"
                  >
                    +
                  </button>
                </span>
              ) : (
                <Button
                  variant="outline"
                  className="max-w-39 max-h-14 xs:mt-3  text-white"
                  onClick={handleCart}
                >
                  ADD TO CART
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 rounded-[20px] hidden lg:block">
          <div className="bg-whiteBg text-black font-light rounded-[20px] p-6 mb-3">
            <span className="flex justify-between ">
              <p className="text-xl font-normal">PLOT SUMMARY</p>

              <RightArrowIcon />
            </span>

            <p className="text-wrap my-3 max-h-72 overflow-hidden">
              In a hard-boiled city of crooks, grifts and rackets lurk a pair of
              toughs: Box and _____. They're the kind of men capable of
              extracting apologies and reparations, of teaching you a chilling
              lesson. They seldom think twice, and ask very few questions.Until
              one night over the poker table, they encounter a pulp writer with
              wild ideas and an unscrupulous private detective, leading them
              into what is either a classic mystery, a senseless maze of
              corpses, or an inextricable fever dream . . . Drunk on cinematic
              and literary influence, Muscle is a slice of noir fiction in
              collapse, a ceaselessly imaginative story of violence, boredom and
              madness.
            </p>
          </div>

          <div className="bg-whiteBg text-black font-light rounded-[20px] p-5 w-full ">
            <span className="flex justify-between items-center">
              <p className="text-xl font-normal">Novel</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
