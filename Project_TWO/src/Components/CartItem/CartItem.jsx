function CartItem({ desert }) {
  const { type, quantity, price } = desert;
  const cost = quantity * price;
  return (
    <div className="flex justify-between py-5 border-b-2 border-b-gray-200">
      <div>
        <h1 className="font-bold">{type}</h1>
        <div className="flex space-x-6">
          <span className="text-orange-500 font-bold">{quantity}x</span>
          <div className="text-gray-500 space-x-3 font-semibold">
            <span>{`@$${price}`}</span>
            <span>{`$${cost}`}</span>
          </div>
        </div>
      </div>
      <div className="self-center">x</div>
    </div>
  );
}

export default CartItem;
