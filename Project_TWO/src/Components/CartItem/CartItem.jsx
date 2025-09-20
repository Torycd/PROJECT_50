import PropTypes from "prop-types";
import { usePost } from "../../Store/DesertProvider";

import svg from "../../assets/images/icon-remove-item.svg";

function CartItem({ desert }) {
  const { removeItem } = usePost();
  const { type, quantity, price } = desert;
  const cost = quantity * price;
  return (
    <div className="flex justify-between py-5 border-b-2 border-b-gray-200">
      <div>
        <h1 className="font-bold">{type}</h1>
        <div className="flex space-x-6">
          <span className="text-orange-500 font-bold">{quantity}x</span>
          <div className="text-gray-500 space-x-3 font-semibold">
            <span>{`@$${price.toFixed(2)}`}</span>
            <span>{`$${cost.toFixed(2)}`}</span>
          </div>
        </div>
      </div>
      <div
        className="self-center p-2 cursor-pointer border rounded-full"
        onClick={() => removeItem(desert.id)}
      >
        <img src={svg} />
      </div>
    </div>
  );
}

export default CartItem;

CartItem.propTypes = {
  desert: PropTypes.object,
};
