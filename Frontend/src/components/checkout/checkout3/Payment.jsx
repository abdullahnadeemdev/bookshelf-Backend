import { useState } from "react";
import { CautionIcon } from "../../../assets/icons/Index.js";
import Button from "../../shared/button/Button";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "../../../redux/features/paymentSlice";
import { removeFromCart } from "../../../redux/features/cartSlice";

const Payment = (props) => {
  const array = useSelector((state) => state?.payment?.userInfo) || [];
  let user = useSelector((state) => state?.auth?.user) || undefined;

  if (user === undefined) {
    user = { email: "guest" };
  }

  const dispatch = useDispatch();

  const { paymentBtn } = props.var;
  const setOrder = props.fun;
  const navigate = useNavigate();

  const [inputInfo, setInputInfo] = useState({
    methodCheck: "card",
    cardnum: "",
    expiry: "",
    cvv: "",
  });

  const [error, setError] = useState({
    methodCheck: "",
    cardnum: "",
    expiry: "",
    cvv: "",
  });

  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (e) => {
    let { value, name } = e.target;

    if (name === "cardnum" || name === "cvv") {
      value = value.replace(/\D/g, "");
    }

    setError((prev) => ({ ...prev, [name]: "" }));
    console.log("INPUT INFO,", value + "-----" + name);
    setInputInfo({ ...inputInfo, [name]: value });
  };

  const validate = () => {
    let error2 = { methodE: false, cardE: false, cvvE: false, expiryE: false };

    const cardNumRegex =
      /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
    let cardNum = inputInfo.cardnum;

    // const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    // let expiryD = inputInfo.expiry;

    const cvvRegex = /^[0-9]{3,4}$/;
    let cvvNum = inputInfo.cvv;

    if (!inputInfo.methodCheck) {
      setError((prev) => ({
        ...prev,
        methodCheck: "delivery type not selected",
      }));
      error2.methodE = true;
    }
    if (inputInfo.methodCheck === "cod") {
      return true;
    }

    if (!inputInfo.cardnum) {
      setError((prev) => ({
        ...prev,
        cardnum: "empty card number",
      }));
      error2.cardE = true;
    }
    if (!cardNum.match(cardNumRegex)) {
      setError((prev) => ({
        ...prev,
        cardnum: "invalid card number",
      }));
      error2.cardE = true;
    }

    if (!inputInfo.expiry) {
      setError((prev) => ({
        ...prev,
        expiry: "empty card expiry",
      }));
      error2.expiryE = true;
    }
    // if (!expiryD.match(expiryRegex)) {
    //   setError((prev) => ({
    //     ...prev,
    //     expiry: "invalid card expiry date",
    //   }));
    //   error2.expiryE = true;
    // }

    if (!inputInfo.cvv) {
      setError((prev) => ({
        ...prev,
        cvv: "empty card cvv",
      }));

      error2.cvvE = true;
    }

    if (!inputInfo.cvv.match(cvvRegex)) {
      setError((prev) => ({ ...prev, cvv: "Invalid CVV" }));

      error2.cvvE = true;
    }

    if (error2.methodE || error2.cardE || error2.cvvE || error2.expiryE) {
      return false;
    } else {
      return true;
    }
  };

  const handleClick = () => {
    if (validate()) {
      const updatedData = {
        ...props.user.email,
        cardNum: inputInfo.cardnum,
        expiry: inputInfo.expiry,
        cvv: inputInfo.cvv,
      };
      dispatch(addInfo(updatedData));
      dispatch(removeFromCart(user.email));
      navigate("/");
      props.fun((prev) => ({ ...prev, paymentBtn: false }));
    } else {
      console.log("error running");
    }
  };

  return (
    <div className="w-150 mt-5">
      {paymentBtn ? (
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-light">PAYMENT</h2>
            <span className="flex gap-1 items-center">
              <label>
                <input
                  type="radio"
                  className="bg-blackC mr-1"
                  name="methodCheck"
                  value="card"
                  checked={inputInfo.methodCheck === "card"}
                  onChange={handleChange}
                />
                By card
              </label>

              <label>
                <input
                  type="radio"
                  className="bg-blackC mr-1"
                  name="methodCheck"
                  value="cod"
                  checked={inputInfo.methodCheck === "cod"}
                  onChange={handleChange}
                />
                Payment upon delivery
              </label>
            </span>
            {error.methodCheck && (
              <p className="text-red text-start">{error.methodCheck}</p>
            )}
          </div>

          {inputInfo.methodCheck !== "cod" ? (
            <div>
              <input
                type="text"
                name="cardnum"
                id="cardnum"
                value={inputInfo.cardnum}
                onChange={handleChange}
                className="border mt-2 h-13 p-3 bg-white rounded-[20px] w-full text-grayBg"
                placeholder="Card Number"
              />
              {error.cardnum && (
                <p className="text-red text-start">{error.cardnum}</p>
              )}
              <div className="flex items-center gap-4">
                <input
                  type="date"
                  name="expiry"
                  value={inputInfo.expiry}
                  onChange={handleChange}
                  id="expiry"
                  className="border h-13 p-3 my-5 bg-white rounded-[20px] w-full text-grayBg"
                  placeholder="Expiration  (MM/YY)"
                />
                {error.expiry && (
                  <p className="text-red text-start">{error.expiry}</p>
                )}
                <span className="relative">
                  <input
                    type="text"
                    name="cvv"
                    id="cvv"
                    maxLength="4"
                    value={inputInfo.cvv}
                    onChange={handleChange}
                    className="border h-13 p-3 bg-white rounded-[20px] w-full text-grayBg"
                    placeholder="CVV"
                  />
                  {error.cvv && (
                    <p className="text-red text-start">{error.cvv}</p>
                  )}
                  <CautionIcon className="absolute top-4 right-4" />
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
          <Button className="mt-5 w-full" onClick={handleClick}>
            Order
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Payment;
