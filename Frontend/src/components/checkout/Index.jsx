import { useState, createContext, useContext } from "react";
import OrderSummay from "./OrderSummay";
import ContactInfo from "./checkout1/ContactInfo";
import CloseCard from "./CloseCard";
import Shipping from "./checkout2/Shipping";
import Payment from "./checkout3/Payment";
import { Link } from "react-router";
import { DropArrowIcon } from "../../assets/icons/Index.js";

const Index = () => {
  const [orderState, setOrderState] = useState({
    contactBtn: true,
    shipBtn: false,
    paymentBtn: false,
  });

  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    time: "",
    address: "",
    note: "",
    cardNum: "",
    expiry: "",
    cvv: "",
  });

  const [disc, setDisc] = useState("");

  const handleNavigate = () => {};

  return (
    <div className="w-full max-w-[1404px] mx-auto rounded-[20px]  m-5 h-[70vh] text-white ">
      <div className="p-8 rounded-[20px] bg-grayBg  ">
        <div className="flex gap-2 items-center  font-light mb-10">
          <span className="flex gap-2 items-center">
            <DropArrowIcon classname="rotate-90 md:h-4 md:w-4 fill-white" />
            <Link to="/cart">
              <p>BACK |</p>
            </Link>
            <p className={orderState.contactBtn ? "text-yellow" : ""}>
              CONTACT INFORMATION
            </p>
            <DropArrowIcon classname="rotate-270 md:h-4 stroke-1 md:w-4 fill-white" />
          </span>

          <span
            className={`flex gap-2 items-center ${
              orderState.shipBtn && "text-yellow"
            }`}
          >
            SHIPPING METHOD
            <DropArrowIcon classname="rotate-270 md:h-4 stroke-1 md:w-4 fill-white" />
          </span>

          <span
            className={`flex gap-2 items-center ${
              orderState.paymentBtn && "text-yellow"
            }`}
          >
            PAYMENT
            <DropArrowIcon classname="rotate-270 md:h-4 stroke-1 md:w-4 fill-white" />
          </span>
        </div>

        <div className="flex flex-col xl:flex-row justify-between ">
          <div>
            <ContactInfo
              var={orderState}
              fun={setOrderState}
              user={userInfo}
              setUser={setUserInfo}
            />
            {!orderState.contactBtn && (
              <div>
                <Shipping
                  var={orderState}
                  fun={setOrderState}
                  user={userInfo}
                  setUser={setUserInfo}
                />
                <Payment
                  var={orderState}
                  fun={setOrderState}
                  user={userInfo}
                  setUser={setUserInfo}
                />
              </div>
            )}
          </div>
          <div className="mt-10 xl:mt-0 max-w-[400px]">
            <OrderSummay setDisc={setDisc} disc={disc} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
