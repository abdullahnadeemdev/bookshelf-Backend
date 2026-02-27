import { useNavigate } from "react-router";
import { Bookmark } from "../../../assets/icons/Index.js";
import { useState } from "react";

const CardAuthor = (props) => {
  const navigate = useNavigate();
  const [clr, setClr] = useState("#2a2c2e");

  const handleBookmark = () => {
    clr === "#2a2c2e" ? setClr("white") : setClr("#2a2c2e");
  };

  return (
    <>
      {props.author === "SEE ALL" ? (
        <div
          onClick={() => navigate("/authors-popular")}
          className="
            flex
            w-full  
            h-[18vh]
            text-black
            bg-yellow
            rounded-[20px]
            items-center justify-center
            max-w-100
          "
        >
          <h1 className="font-semibold md:text-2xl">SEE ALL</h1>
        </div>
      ) : (
        <div
          className="
            flex 
            h-[18vh]
            max-w-[400px]
            text-black
            bg-white
            rounded-[20px]
          "
        >
          <div
            className="
            flex
            justify-center
            h-full
            lg:min-w-10 lg:max-w-40 lg:h-[18vh]
            flex-4
            "
          >
            <img
              src={props.image}
              alt=""
              className="
              object-cover
               xs:object-cover
                h-full w-full
                rounded-l-2xl
                grayscale-100
              "
            />
          </div>
          <div
            className="
              w-full
              px-2
              flex-5
            "
          >
            <div
              className="
                flex
                mt-2
                justify-between items-center
                mb-5
                xs:mb-3
              "
            >
              <p
                className="
                  w-20
                  text-base
                "
              >
                {props.book}
              </p>
              {props.book ? (
                <Bookmark fill={clr} onClick={handleBookmark} />
              ) : (
                ""
              )}
            </div>
            <p
              className="
                text-wrap
                sm:text-base md:text-xl
                lg:max-w-40 lg:text-2xl
                mb-10
              "
            >
              {props.author}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardAuthor;
