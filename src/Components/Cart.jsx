import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./ FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const HandleCartClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="main-header-btn">
      <div className="main-cart">
        Total Items - {cartItems.length}
        <button className="cart-btn" onClick={() => HandleCartClear()}>
          Clear Cart
        </button>
        <div className="cart-slices ">
          {cartItems.map((item) => (
            <FoodItem key={item.id} {...item?.info} className="food-items" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
