import { Link } from "react-router";
import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  TwitterIcon,
} from "../../../assets/icons/Index.js";

const Footer = () => {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="flex items-center justify-between w-full py-5 px-5">
        <Link to="/">
          <div className="flex items-center gap-2 ">
            <span className="w-[4vw]">
              <Logo />
            </span>
            <h3 className="font-bold  md:text-xl lg:text-2xl">BIG BOOKSHELF</h3>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="https://www.instagram.com/">
            <InstagramIcon />
          </Link>

          <Link to="https://www.facebook.com/">
            <FacebookIcon />
          </Link>

          <Link to="https://x.com/">
            <TwitterIcon />
          </Link>
        </div>
      </div>

      <div className="bg-darkGrey font-light flex justify-between items-center py-2 text-sm px-2 xs:px-5 w-full">
        <div className="flex flex-col sm:flex-row gap-4 ">
          <p>Terms and conditions</p>
          <p>Privacy policy</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <p>+44 1332 412251</p>
          <p>support@bbookshelf.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
