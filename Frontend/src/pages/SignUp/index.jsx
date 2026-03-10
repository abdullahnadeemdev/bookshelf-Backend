import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import Button from "../../components/shared/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/features/loginSlice";
import { Logo } from "../../assets/icons/Logo";
import axios from "axios";

const SignUp = (props) => {
  const navigate = useNavigate();
  const dataArr = useSelector((state) => state?.auth?.userList) || [];

  const [values, setValues] = useState({
    name: "",
    isLogin: false,
    email: "",
    password: "",
    petName: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    petName: "",
  });

  const validation = () => {
    let errors = {
      name: "",
      email: "",
      password: "",
      petName: "",
    };
    // ^[a-zA-Z0-9_.±]+@+[a-zA-Z0-9-]+.+[a-zA-Z0-9-.]+$
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passwordSyntax = /^(?=.*[A-Z]).{4,}$/;
    if (!values.name) {
      setError((prev) => ({
        ...prev,
        name: "Name is empty",
      }));
      errors.name = "Name is empty";
    }

    if (!values.email) {
      setError((prev) => ({
        ...prev,
        email: "Email is empty",
      }));
      errors.email = "Email is empty";
    }

    const valueEmail = values.email;
    const valuePassword = values.password;

    if (!valueEmail.match(pattern)) {
      setError((prev) => ({
        ...prev,
        email: "Invalid email",
      }));
      errors.email = "Invalid email";
    }

    const user = dataArr.some((item) => {
      if (item.email === values.email) {
        return true;
      } else {
        return false;
      }
    });
    if (user) {
      setError((prev) => ({
        ...prev,
        email: "Email already taken",
      }));
      errors.email = "Email already taken";
    }
    if (!values.password) {
      setError((prev) => ({
        ...prev,
        password: "Password is empty",
      }));
      errors.password = "Password is empty";
    }

    if (!valuePassword.match(passwordSyntax)) {
      setError((prev) => ({
        ...prev,
        password: "Weak password",
      }));
      errors.password = "Weak password";
    }
    if (!values.petName) {
      setError((prev) => ({
        ...prev,
        petName: "PetName is empty",
      }));
      errors.petName = "PetName is empty";
    }

    if (
      errors.name ||
      errors.email ||
      errors.password ||
      errors.petName ||
      !values.name ||
      !values.email ||
      !values.petName ||
      !values.password
    ) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      try {
        const response = await axios.post(
          "http://localhost:8000/user/signup",
          values,
        );
        console.log("data sent", response);
        navigate("/login", { replace: true });
      } catch (err) {
        console.log("error adding users", err);
      }
    } else {
      console.log("error", error);
      console.log("singup error", values);
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
    <div className="w-full flex items-center h-screen">
      <div className=" sm:max-w-[500px] m-4 border rounded-[20px] relative flex  justify-center  bg-blackC p-4 xs:p-6 sm:p-10 md:p-16 mx-auto">
        <NavLink
          to="/"
          className="absolute -top-10 w-max  lg:-top-10 xl:-top-12  lg:ml-2  "
        >
          <div className="flex items-center gap-2 ">
            <Logo className="h-7 w-8 lg:h-9 lg:w-12" />
            <p className="font-semibold text-base text-black sm:text-lg lg:text-xl xl:text-2xl">
              BIG BOOKSHELF
            </p>
          </div>
        </NavLink>
        <div className="text-center w-full p-2  ">
          <h1 className="mb-8 xl:mb-10 text-chineseViolet font-semibold text-xl sm:text-2xl xl:text-4xl">
            SignUp
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                type="text"
                className="border block indent-2 pl-1 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {error?.name && (
                <p className="text-red text-start">{error.name}</p>
              )}
            </div>
            <div className="mb-2">
              <input
                type="email"
                className="border block indent-2 pl-1 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {error?.email && (
                <p className="text-red text-start">{error.email}</p>
              )}
            </div>
            <div className="mb-2">
              <input
                type="password"
                className="border block pl-1 indent-2 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg"
                placeholder="Should contain 4 characters"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {error?.password && (
                <p className="text-red text-start">{error.password}</p>
              )}
            </div>
            <div className="mb-8 ">
              <input
                type="text"
                className="border block pl-1 indent-2 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg"
                placeholder="Name of pet"
                name="petName"
                value={values.petName}
                onChange={handleChange}
              />
              {error?.petName && (
                <p className="text-red text-start">{error.petName}</p>
              )}
            </div>
            <Button type="submit" className="w-full px-15 mb-2">
              Register
            </Button>
          </form>
          <NavLink to="/login">
            <Button className="w-full mb-2">Log In</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
