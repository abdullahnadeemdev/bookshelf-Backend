import HeroImg from "../../../assets/images/tipo.jpg";
import Button from "../../shared/button/Button";
import { SearchIcon } from "../../../assets/icons/Index.js";
import { Stamp } from "../../../assets/icons/Index.js";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();

  const handleBrowse = () => {
    navigate("/books");
  };
  return (
    <div
      className="
      min-w-[320px]
        max-w-[1440px]
        mb-10 px-4
        text-center
      "
    >
      <p
        className="
        text-blackC
        font-bold
          heroHeading 
          hidden md:block
          
        "
      >
        READING MAKES THE WORLD HUGE
      </p>

      <div
        className="
          flex flex-col
          sm:max-w-[1400px] max-w-auto max-h-auto sm:max-h-[348px] h-auto
          justify-evenly sm:flex-row gap-2
        "
      >
        <div
          className="
            overflow-hidden
            p-7
            max-h-[300px]
            sm:min-h-[380px]
            sm:flex-1
           
            text-start
            bg-grayBg
            rounded-[19px]
            relative
          "
        >
          <div className="relative z-20 min-w-65 xs:min-h-66 flex flex-col justify-between h-full gap-8 xs:gap-0">
            <p className="text-wrap text-lg xl:text-4xl xl:max-w-80 lg:text-2xl lg:max-w-50 md:max-w-40">
              FIND SOMETHING TO READ
            </p>

            <p className="text-wrap font-extralight text-sm mb-2 xl:text-lg xl:max-w-92 lg:text-base lg:max-w-66 md:max-w-55">
              Fancy something unusual and unpredictable? Funny or exciting? No
              problem. Check out the collections we have prepared for you.
            </p>

            <Button
              variant="outline"
              className="text-yellow hover:bg-yellow mt-5 hover:text-blackC"
              onClick={handleBrowse}
            >
              BROWSE NOW
            </Button>
          </div>

          <SearchIcon
            className="
              z-10
              min-h-30 min-w-40 max-h-160 max-w-130 h-full
              absolute -right-17 top-10 rotate-85 stroke-1!
              xl:min-h-110 xl:min-w-100 xl:-right-18 xl:-top-5
            "
          />
        </div>

        <div
          className=" sm:flex-1 overflow-hidden
           max-h-[300px]
            sm:min-h-[380px]
            relative"
        >
          <img
            src={HeroImg}
            alt="bookImage"
            className="
              object-fill
              sm:object-cover
              max-h-[300px]
              sm:max-h-none
              w-full sm:h-full
              rounded-[20px]
            "
          />
          <Stamp
            className="
              h-10 w-10
              absolute top-5 left-5
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
