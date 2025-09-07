import PropTypes from "prop-types";
import { usePost } from "../../Store/DesertProvider";
import { FaTimesCircle } from "react-icons/fa";

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
        className="self-center border-2 rounded-full px-2 py-1 cursor-pointer"
        onClick={() => removeItem(desert.id)}
      >
        <FaTimesCircle size={20} />
      </div>
    </div>
  );
}

export default CartItem;

CartItem.propTypes = {
  desert: PropTypes.object,
};
