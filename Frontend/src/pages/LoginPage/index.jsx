import { Link, NavLink, useNavigate } from "react-router";
import { useState } from "react";
import Button from "../../components/shared/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/features/loginSlice";
import { addEmailCart } from "../../redux/features/cartSlice";
import { addEmailBookmark } from "../../redux/features/bookMarkSlice";
import { Logo } from "../../assets/icons/Logo";

const Login = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state?.cart?.cartItems) || [];
  const books = useSelector((state) => state?.book?.items) || [];
  const userList = useSelector((state) => state?.auth?.userList) || [];

  // console.log("cartItems", cartItems);

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    pw: "",
  });

  const [error, setError] = useState({
    email: "",
    pw: "",
    user: "",
  });

  const validation = () => {
    let tempErrors = { email: "", pw: "", user: "" };
    let isValid = true;

    if (!values.email) {
      tempErrors.email = "Email is empty";
      isValid = false;
    }

    if (!values.pw) {
      tempErrors.pw = "Password is empty";
      isValid = false;
    }

    if (values.email && values.pw) {
      const userCheck = userList.some(
        (item) => item.email === values.email && item.pw === values.pw,
      );

      if (!userCheck) {
        tempErrors.user = "User not found or wrong password";
        isValid = false;
      }
    }

    setError(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validation()) {
      if (cartItems?.length > 0) {
        dispatch(addEmailCart(values.email));
      }

      if (books?.length > 0) {
        dispatch(addEmailBookmark(values.email));
      }
      dispatch(login({ email: values.email, pw: values.pw }));

      // navigate("/books");
      // setError({
      //   ...error,
      //   pw: "Wrong user password",
      // });
    } else {
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
    <div className="w-full flex items-center h-screen ">
      <div className=" sm:max-w-[500px] m-4 border rounded-[20px] flex  justify-center  bg-blackC p-4 xs:p-6 sm:p-10 md:p-16 mx-auto">
        <div className="text-center w-full p-2 relative flex flex-col">
          <NavLink
            to="/"
            className="absolute -top-15 w-fit ml-10 sm:-top-25  mx-auto lg:-top-30  lg:ml-2  "
          >
            <div className="flex items-center gap-2 ">
              <Logo className="h-7 w-8 lg:h-9 lg:w-12" />
              <p className="font-semibold text-base text-black sm:text-lg lg:text-xl xl:text-2xl">
                BIG BOOKSHELF
              </p>
            </div>
          </NavLink>
          <NavLink to="/">
            <h1 className="mb-8 xl:mb-10 text-chineseViolet font-semibold text-2xl xl:text-4xl">
              Login
            </h1>
          </NavLink>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                type="email"
                className={`border block pl-1 indent-2 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg ${
                  error.email ? "border-red" : "border-chineseViolet"
                }`}
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {error?.email && (
                <p className="text-red text-start">{error.email}</p>
              )}
              {error?.user && (
                <p className="text-red text-start">{error.user}</p>
              )}
            </div>
            <div className="mb-1">
              <input
                type="password"
                className={`border block pl-1 indent-2 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg ${
                  error.pw ? "border-red" : "border-chineseViolet"
                }`}
                placeholder="Password"
                name="pw"
                value={values.pw}
                onChange={handleChange}
              />
              {error?.pw && <p className="text-red text-start ">{error.pw}</p>}
            </div>

            <NavLink
              to="/forgot-password"
              className="text-start text-sm hover:underline hover:text-blue-500 block"
            >
              Forgot password?
            </NavLink>

            <Button className="w-full mb-2 mt-8" type="submit">
              Log In
            </Button>
          </form>

          <NavLink to="/sign-up">
            <Button className="w-full mb-2">Sign Up</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
