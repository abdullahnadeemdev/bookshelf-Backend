import { useState } from "react";
import Button from "../shared/button/Button";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { changePw } from "../../redux/features/loginSlice";

const PetName = (prop) => {
  const [password, setPassword] = useState(false);
  const [values, setValues] = useState({
    petName: "",
    pw: "",
  });
  const navigate = useNavigate();

  const [error, setError] = useState({
    petName: "",
    pw: "",
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
    if (!values.petName) {
      setError((prev) => ({
        ...prev,
        petName: "Pet name is empty",
      }));
    }

    if (!values.petName) {
      return false;
    } else {
      return true;
    }
  };

  const validationPw = () => {
    let errors = {
      pw: "",
    };
    const pwSyntax = /^(?=.*[A-Z]).{4,}$/;

    if (!values.pw) {
      setError((prev) => ({
        ...prev,
        pw: "Password is empty",
      }));
      errors.pw = "Password is empty";
    }

    if (!errors.pw) {
      if (!values.pw.match(pwSyntax)) {
        setError((prev) => ({
          ...prev,
          pw: "Weak password",
        }));
        errors.pw = "Weak password";
      }
    }

    if (!values.pw || errors.pw) {
      return false;
    } else {
      return true;
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      const checkPetName = prop?.next?.data?.petName;
      // const isTrue = checkPetName.find((ele) => ele.petName === values.petName);

      // console.log("checkPetName", prop?.next?.data.petName);
      // console.log("isTrue", isTrue);
      if (checkPetName === values.petName) {
        console.log("I am clicked", checkPetName);
        setPassword(true);

        // <PetName />;
      } else {
        console.log("I am notttt  clicked");
        setError((prev) => ({
          ...prev,
          petName: "No pet found",
        }));
      }
    }
  };

  const handleSubmit2 = () => {
    if (validationPw()) {
      const user = dataArr.find((item) => item?.petName === values?.petName);
      console.log("user", user);
      if (user.pw === values.pw) {
        setError((prev) => ({
          ...prev,
          pw: "same as old password",
        }));
        return;
      }
      dispatch(
        changePw({ pet: values?.petName?.toLowerCase(), userPw: values.pw }),
      );

      navigate("/");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setError({
      ...error,
      [name]: "",
    });
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div className="w-screen flex items-center h-screen z-20">
      <div className=" sm:max-w-[500px] m-4 bg-blackC p-4 xs:p-6 sm:p-10 md:p-16 mx-auto">
        <div className="text-center w-full p-2 ">
          <h1 className="mb-8 xl:mb-10  font-semibold text-2xl xl:text-4xl">
            Enter Pet Name
          </h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                type="text"
                className={`border indent-2 block pl-1  mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg
                     ${error.petName ? "border-red" : "border-chineseViolet"}
                    `}
                placeholder="Pet name"
                name="petName"
                value={values.petName}
                onChange={handleChange}
              />
              {error?.petName && (
                <p className="text-red text-start">{error.petName}</p>
              )}
            </div>
            {password ? (
              <>
                <p className="text-start">Enter new Password</p>
                <input
                  type="text"
                  className={`border block pl-1 indent-2 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg
                     ${error.pw ? "border-red" : "border-chineseViolet"}
                    `}
                  placeholder="Password"
                  name="pw"
                  value={values.pw}
                  onChange={handleChange}
                />
                {error?.pw && <p className="text-red text-start">{error.pw}</p>}
              </>
            ) : (
              //
              ""
            )}

            {password ? (
              <Button className="w-full mb-2  mt-4" onClick={handleSubmit2}>
                Add Password
              </Button>
            ) : (
              <Button className="w-full mb-2  mt-4" type="submit">
                Verify
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PetName;
