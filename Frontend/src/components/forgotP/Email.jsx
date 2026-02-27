import { useState } from "react";
import Button from "../shared/button/Button";
import { useSelector } from "react-redux";

const Email = (prop) => {
  console.log("prop", prop);
  const [values, setValues] = useState({
    email: "",
  });

  const [error, setError] = useState({
    email: "",
  });

  // const getItem = () => {
  //   let val = [];
  //   const arr = localStorage.getItem("signIn");
  //   if (arr) {
  //     val = JSON.parse(arr);
  //   }
  //   return val;
  // };

  const dataArr = useSelector((state) => state?.auth?.userList) || [];

  const validation = () => {
    if (!values.email) {
      setError((prev) => ({
        ...prev,
        email: "email is empty",
      }));
    }

    if (!values.email) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validation()) {
      const checkEmail = dataArr.find((ele) => ele.email === values.email);
      if (checkEmail) {
        // console.log("prop", prop);
        // console.log("I am clicked", checkEmail);
        prop?.setNext((prev) => ({
          ...prev,
          data: checkEmail,
          show: true,
        }));
      } else {
        setError((prev) => ({
          ...prev,
          email: "No email found",
        }));
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setError((prev) => ({
      ...prev,
      email: "",
    }));
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full flex items-center h-screen">
      <div className=" sm:max-w-[500px] m-4 bg-blackC p-4 xs:p-6 sm:p-10 md:p-16 mx-auto">
        <div className="text-center w-full p-2 ">
          <h1 className="mb-8 xl:mb-10 text-chineseViolet font-semibold text-2xl xl:text-4xl">
            Enter Email
          </h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                type="text"
                className={`border block pl-1 indent-2 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg 
                    ${error.email ? "border-red" : "border-chineseViolet"}
                `}
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {error?.email && (
                <p className="text-red text-start">{error.email}</p>
              )}
            </div>
            <Button className="w-full mb-2  mt-4" type="submit">
              Verify
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
