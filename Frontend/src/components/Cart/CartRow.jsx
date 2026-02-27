import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateBookQuantity } from "../../redux/features/cartSlice";

const CartRow = (props) => {
  const cartItems = useSelector((state) => state?.cart?.cartItems);
  const dispatch = useDispatch();

  const productQuantity = cartItems?.find((item) => item.id === props.id);

  const removeItem = () => {
    dispatch(updateBookQuantity({ id: props.id, type: "delt" }));
  };

  const handleQuantity = (e) => {
    const { name } = e.target;
    dispatch(updateBookQuantity({ id: props.id, type: name }));
  };

  const price = props.price;
  const quantity = productQuantity?.quantity;

  return (
    <div className="p-4 text-black">
      <div className="flex items-center border-b py-4 ">
        <div className="flex-2 ">
          <div className="flex gap-4 items-center">
            <img src={props.image} alt="" className="w-20 h-20 object-cover" />
            <div>
              <p className="font-semibold">{props.title}</p>
              <p className="text-gray-500">{props.author}</p>
              <button className="text-red-500 text-sm" onClick={removeItem}>
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="flex-2 ">
          <p className="pl-10">${props.price}</p>
        </div>
        <span className="flex  items-center justify-between ">
          <button
            className=" min-w-6 border-2 border-yellow sm:px-3 sm:py-2.5 rounded-l-2xl "
            onClick={quantity > 1 ? handleQuantity : () => {}}
            name="-"
          >
            -
          </button>
          <p className="min-w-6 border-2 border-yellow sm:px-3 sm:py-2.5 text-center">
            {quantity}
          </p>
          <button
            className="min-w-6 border-2 border-yellow sm:px-3 sm:py-2.5 rounded-r-2xl"
            onClick={quantity >= 1 ? handleQuantity : () => {}}
            name="+"
          >
            +
          </button>
        </span>
        <div className="flex-1 text-right ">${price * quantity}</div>
      </div>
    </div>
  );
};

export default CartRow;
