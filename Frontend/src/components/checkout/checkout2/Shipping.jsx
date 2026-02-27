import React, { useState } from "react";
import Button from "../../shared/button/Button";
import CloseCard from "../CloseCard";
// import { TimePicker } from "react-time-picker/src/TimePicker.js";

const Shipping = (props) => {
  const { shipBtn } = props.var;
  const setOrder = props.fun;

  const [inputData, setInputData] = useState({
    address: "",
    note: "",
    time: "",
  });

  const [error, setError] = useState({
    addressError: true,
    time: true,
  });

  const handleChange = (e) => {
    let { value, name } = e.target;
    setError({ [name]: "" });

    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const validate = () => {
    let errorV = { address: false, time: false };
    if (!inputData.address) {
      setError((prev) => ({
        ...prev,
        addressError: "address is empty",
      }));
      errorV.address = true;
    }

    if (errorV.address) {
      return false;
    } else {
      return true;
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (validate()) {
      props.setUser((prev) => ({
        ...prev,
        address: inputData.address,
        note: inputData.note,
        time: inputData.time,
      }));
      console.log("data uploaded", props.user);
      setOrder((prev) => ({ ...prev, shipBtn: false, paymentBtn: true }));
    } else {
      console.log("the error ");
    }
  };

  return (
    <div className="w-150 mt-5">
      {shipBtn ? (
        <div>
          <h2 className="text-2xl font-light">SHIPPING METHOD</h2>
          <form action="">
            <div id="shipForm" className="flex items-center gap-4">
              <input
                type="date"
                name="date"
                id="date"
                className="border h-13 p-3 my-5 bg-white rounded-[20px] w-full text-grayBg"
                placeholder="Today "
              />
              <input
                type="time"
                name="time"
                id="time"
                className="border h-13 p-3 bg-white rounded-[20px] w-full text-grayBg"
                placeholder="Time"
              />
            </div>
            <input
              type="text"
              name="address"
              id="address"
              onChange={handleChange}
              value={inputData.address}
              className="border h-13 p-3 bg-white rounded-[20px] w-full text-grayBg"
              placeholder="Address"
            />
            {error.addressError && (
              <p className="text-red text-start">{error.addressError}</p>
            )}
            <textarea
              name="note"
              id="note"
              onChange={handleChange}
              value={inputData.note}
              className="border mt-2 p-3 bg-white rounded-[20px] w-full text-grayBg"
              placeholder="note"
            ></textarea>
          </form>

          <Button className="mt-5 w-full" form="shipForm" onClick={handleClick}>
            CONTINUE TO PAYMENT
          </Button>
        </div>
      ) : (
        <CloseCard
          var={props.var}
          fun={props.fun}
          btn="shipBtn"
          fBtn="paymentBtn"
          head="SHIPPING METHOD"
          title="Date"
          info={inputData.address}
          title2="Address"
          info2={inputData.note}
        />
      )}
    </div>
  );
};

export default Shipping;
