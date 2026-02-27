import Footer from "../footer/Footer";
import NavBar from "../navBar/navBar";
import { useLocation } from "react-router";

const Layout = ({ children }) => {
  const loc = useLocation().pathname;

  const handleNavbar = () => {
    if (
      loc === "/login" ||
      loc === "/sign-up" ||
      loc === "/forgot-password" ||
      loc === "/thank-you"
    ) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      <div className="font-Inter flex flex-col items-center w-full text-white bg-whiteBg pt-6">
        {handleNavbar() ? <NavBar /> : ""}

        {/* Childerns */}
        <div className="w-full">
          <main>{children}</main>
        </div>
        {handleNavbar() ? (
          <div className="bg-grayBg w-full">
            <Footer />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Layout;
