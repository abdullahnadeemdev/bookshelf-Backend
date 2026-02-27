import { BookmarkIcon } from "../../assets/icons/Index.js";

const CardAuthor = (props) => {
  return (
    <>
      {props.author !== "SEE ALL" ? (
        <div
          className="
            flex 
            h-[25vh]
            md:h-[20vh]
            2xl:max-h-[191px]
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
            lg:min-w-10 lg:max-w-40 lg:max-h-59
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
                mb-3
                xs:mb-8
              "
            >
              <p
                className="
                  w-20
                "
              >
                {props.book}
              </p>
              {props.book ? <BookmarkIcon fillClr="#2a2c2e" /> : ""}
            </div>
            <p
              className="
                text-wrap
                sm:text-base
                lg:max-w-30 lg:text-xl
              "
            >
              {props.author}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CardAuthor;
