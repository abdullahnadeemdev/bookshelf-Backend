import Button from "../../shared/button/Button";
import CloseCard from "../CloseCard";
// import { PageContext } from "./Index";
import { useState, useContext } from "react";

const ContactInfo = (props) => {
  const { contactBtn } = props.var;
  const setOrder = props.fun;
  // console.log("props", props.fun);
  const prevInfo = JSON.parse(sessionStorage.getItem("contactInfo")) || [];

  const [inputData, setInputData] = useState({
    nameIN: "",
    phoneIN: "",
  });

  const [error, setError] = useState({
    nameError: "",
    phoneError: "",
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
    const regex = /^03\d{11}$/;
    let errorVal = { nameE: false, phoneE: false };
    if (!inputData.nameIN) {
      setError((prev) => ({
        ...prev,
        nameError: "name is empty",
      }));
      errorVal.nameE = true;
    }
    if (!inputData.phoneIN) {
      setError((prev) => ({
        ...prev,
        phoneError: "phone number is empty",
      }));
      errorVal.phoneE = true;
    }
    if (!regex.test(inputData.phoneIN)) {
      setError((prev) => ({
        ...prev,
        phoneError: "phone starts with 03 of 11 digits",
      }));
      errorVal.phoneE = true;
    }

    if (errorVal.nameE || errorVal.phoneE) {
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
        name: inputData.nameIN,
        phone: inputData.phoneIN,
      }));
      // console.log("data uploaded", props.user);
      setOrder((prev) => ({ ...prev, contactBtn: false, shipBtn: true }));
    } else {
      console.log("the error ");
    }
  };

  return (
    <div className="w-150">
      {contactBtn ? (
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-light">CONTACT INFORMATION</h2>
          </div>
          <form id="contactForm">
            <input
              type="text"
              name="nameIN"
              id="nameIN"
              onChange={handleChange}
              value={inputData.nameIN}
              className="border h-13 p-3 mt-5 bg-white rounded-[20px] w-full text-grayBg"
              placeholder="Name Surname "
            />
            {error?.nameError && (
              <p className="text-red text-start">{error.nameError}</p>
            )}
            <input
              type="text"
              name="phoneIN"
              id="phoneIN"
              onChange={handleChange}
              value={inputData.phoneIN}
              className="border h-13 p-3 mt-5 bg-white rounded-[20px] w-full text-grayBg"
              placeholder="Mobile"
            />
            {error?.phoneError && (
              <p className="text-red text-start">{error.phoneError}</p>
            )}
          </form>
          <Button
            className="mt-5 w-full"
            form="contactForm"
            onClick={handleClick}
          >
            CONTINUE TO SHIPPING METHOD
          </Button>
        </div>
      ) : (
        <CloseCard
          var={props.var}
          btn="contactBtn"
          fBtn="shipBtn"
          fun={props.fun}
          head="CONTACT INFORMATION"
          title="Name"
          info={inputData.nameIN}
          title2="Contact"
          info2={inputData.phoneIN}
        />
      )}
    </div>
  );
};

export default ContactInfo;
