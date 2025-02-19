// import React from 'react'

import NoCart from "./CartItem/NoCart";

const Cart = () => {
  return (
    <div className="p-7 bg-white w-full rounded-md shadow-md">
      <h2 className="text-[24px] font-bold text-orange-500">Your Cart(0)</h2>
      <NoCart />
    </div>
  );
};

export default Cart;
