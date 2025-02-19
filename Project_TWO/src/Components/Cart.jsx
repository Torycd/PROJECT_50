import { useContext } from "react";
import { CartContext } from "../Store/DessertContext";

import NoCart from "./CartItem/NoCart";

const Cart = () => {
  const { items } = useContext(CartContext);
  const totalQuantity = Array.isArray(items)
    ? items.reduce((sum, item) => sum + item.quantity, 0)
    : 0;
  return (
    <div className="p-7 bg-white w-full rounded-md shadow-md">
      <h2 className="text-[24px] font-bold text-orange-500">
        {`Your Cart (${totalQuantity})`}
      </h2>
      <NoCart />
    </div>
  );
};

export default Cart;
