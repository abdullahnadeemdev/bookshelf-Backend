import React, { useState } from "react";
import Button from "../shared/button/Button";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

const OrderSummay = (props) => {
  const { state } = useLocation();

  let array = [];

  if (!state) {
    array = useSelector((state) => state.cart?.cartItems) || [];
  } else {
    array = [
      {
        title: state.title,
        quantity: 1,
        price: state.salePrice || "$0",
      },
    ];
  }

  const [click, setClick] = useState(false);

  let totalQuantity = array.reduce((acc, item) => acc + item.quantity, 0) || 1;

  let totalPrice = array?.reduce((acc, item) => {
    const price = parseFloat(item?.price?.slice(1));
    return acc + price * item.quantity;
  }, 0.0);

  const handleDisc = (e) => {
    props.setDisc(e.target.value);
    console.log(props.disc);
  };

  const handleClick = () => {
    return props.disc === "books123" ? totalPrice - 3 : totalPrice;
  };

  return (
    <div className="hidden md:block">
      <div className="bg-black rounded-[20px] p-6 w-100 ">
        <div className="justify-between items-center mb-2">
          <h2 className="text-2xl font-normal text-center">ORDER SUMMARY</h2>
        </div>

        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="text-left font-normal ">
              <th className="py-1.5">BOOKS</th>
              <th className="py-1.5 text-center">QTY</th>
              <th className="py-1.5 text-right">PRICE</th>
            </tr>
          </thead>

          <tbody>
            {array.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="py-1.5">{item.title}</td>
                  <td className="py-1.5 text-center ">{item.quantity}</td>
                  <td className="py-1.5 text-right ">{item.price}</td>
                </tr>
              );
            })}

            <tr className="text-base">
              <td className="py-1.5 font-semibold">Subtotal</td>
              <td className="py-1.5 text-center ">{totalQuantity}</td>
              <td className="py-1.5 text-right ">${totalPrice}</td>
            </tr>

            <tr>
              <td className="py-1.5 font-semibold">Shipping</td>
              <td className="py-1.5"></td>
              <td className="py-1.5 text-right">FREE</td>
            </tr>

            <tr>
              <td className="pt-2 pb-2 text-xl  font-medium">TOTAL</td>
              <td className="pt-2 pb-2"></td>
              <td className="pt-2 pb-2 text-xl text-right font-medium">
                ${handleClick()}
              </td>
            </tr>
          </tbody>
        </table>
        <span></span>
      </div>
      <span className="">
        <input
          type="text"
          className="border rounded-[20px] text-lightGrayBg p-4 bg-white h-13 mt-5 w-[70%] mr-2"
          placeholder="Promocode"
          name="disCount"
          value={props.disc}
          onChange={handleDisc}
        />
        <Button className="font-bold! bg-darkGreyText!" onClick={handleClick}>
          Apply
        </Button>
      </span>
    </div>
  );
};

export default OrderSummay;
