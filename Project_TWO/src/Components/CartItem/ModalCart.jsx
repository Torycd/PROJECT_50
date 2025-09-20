import PropTypes from "prop-types";

function ModalCart({ desert }) {
  const { type, quantity, price, image } = desert;
  const cost = quantity * price;
  return (
    <div className="flex justify-between border-b py-2 items-center text-gray-700">
      <div className="flex space-x-1">
        <span>
          <img src={image} className="w-12 rounded-md" />
        </span>
        <div>
          <p className="font-semibold">{type}</p>
          <div className="space-x-3">
            <span className="text-orange-500 font-semibold">{quantity}×</span>
            <span>${price.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div>
        <span className="text-sm">${cost.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default ModalCart;

ModalCart.propTypes = {
  desert: PropTypes.object,
};
