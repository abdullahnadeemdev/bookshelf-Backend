import { NavLink } from "react-router";
import Button from "../../components/shared/button/Button";

const Index = () => {
  return (
    <div className="relative max-w-[1440px] rounded-[20px] h-[74vh]">
      <div className="flex items-center z-20 absolute h-full bg-white w-full max-w-[1404px] ml-5 justify-center ">
        <div className="bg-blackC flex flex-col  w-100 p-3 z-20 h-50 rounded-2xl items-center justify-evenly">
          <p className="font-semibold text-2xl">Thank You for Shopping here</p>
          <NavLink to="/">
            <Button>Continue Shopping</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Index;
