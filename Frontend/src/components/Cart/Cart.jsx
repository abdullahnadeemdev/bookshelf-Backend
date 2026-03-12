import { NavLink, useNavigate } from "react-router";
import Button from "../shared/button/Button";
import CartRow from "./CartRow";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { id } from "../../utils/utils";

const Cart = () => {
  const cartArray = useSelector((state) => state?.cart?.cartItems) || [];
  let user = useSelector((state) => state?.auth?.user) || undefined;

  if (user === undefined) {
    user = { email: "guest" };
  }

  console.log("user cart", user.email);

  const [grandTotal, setGrandTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isVisible, setisVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setCartItems(() => {
      return cartArray?.filter((item) => item.email === user.email);
    });
  }, [cartArray]);

  useEffect(() => {
    const grandTotal = cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return acc + price * item.quantity;
    }, 0);
    setGrandTotal(grandTotal);
  }, [cartItems]);

  const handleClick = () => {
    if (cartItems.length > 0) {
      if (user !== "") {
        navigate("/checkout");
      } else {
        setisVisible(true);
      }
    } else {
      alert("cart is empty");
    }
  };
  console.log("cartItems above func", cartItems);
  console.log("cartArray above func", cartArray);

  return (
    <div className="text-black h-[74vh] relative max-w-[1404px] mx-auto">
      <div className="flex border-b p-4 mx-4 font-bold">
        <div className="flex-3">PRODUCT DETAILS</div>
        <div className="flex-3">PRICE FOR EACH</div>
        <div className="flex-1 text-center mr-11">QUANTITY</div>
        <div className="flex-1 text-right">PRICE</div>
        {/* {console.log("cartItems", cartItems)} */}
      </div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartRow
            cartItems={cartItems}
            setCartItems={setCartItems}
            key={id()}
            id={item.id}
            image={item.image}
            title={item.title}
            price={parseFloat(item.price.replace("$", ""))}
            author={item.author}
            quantity={item.quantity}
          />
        ))
      ) : (
        <p className="p-10 text-center font-semibold text-2xl text-red">
          Your cart is empty.
        </p>
      )}
      <div className="flex flex-col items-end p-4 mx-4  ">
        <div className="flex gap-10  absolute bottom-27 ">
          <p className="font-bold">TOTAL</p>
          <p className="font-bold text-xl">${grandTotal}</p>
        </div>
        <Button className="mt-4 absolute bottom-10" onClick={handleClick}>
          PROCEED TO CHECKOUT
        </Button>
      </div>
      {isVisible ? (
        <div className="h-[80vh]  absolute backdrop-blur-xs -top-20 w-full flex items-center justify-center">
          <div className="bg-blackC flex flex-col items-center justify-between p-3 max-w-90 rounded-2xl min-h-45 mx-auto">
            <h1 className="text-white text-3xl font-semibold">
              User Not Logged In
            </h1>
            <div className=" flex w-full justify-evenly">
              <Button
                className="w-30! border-red border-2 text-red"
                variant="outline"
                onClick={() => {
                  setisVisible(false);
                }}
              >
                Cancel
              </Button>
              <Button
                className="w-30!"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Cart;
