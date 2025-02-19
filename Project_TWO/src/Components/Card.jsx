import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../Store/DessertContext";

import { FaCartShopping } from "react-icons/fa6";

const Card = ({ name, title, price, image, id }) => {
  const { addDesert } = useContext(CartContext);
  return (
    <div className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative mb-8">
        <img
          src={image}
          alt=""
          className="w-[320px] h-[320px] rounded-md object-cover"
        />
        <div
          className="absolute border-2 flex justify-between cursor-pointer items-center gap-4 border-orange-500   top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5 py-4 rounded-full"
          onClick={() => addDesert(id)}
        >
          <FaCartShopping className="text-orange-500" size={22} />
          <div className="text-sm font-semibold  ">Add to Cart</div>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-1">
          <h2 className="text-gray-500 font-bold">{title}</h2>
        </div>
        <h3 className="text-lg font-semibold line-clamp-2">{name}</h3>
        <h3 className="text-lg font-bold line-clamp-2 text-orange-500">{`$${price.toFixed(
          2
        )}`}</h3>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
  price: PropTypes.number,
};
