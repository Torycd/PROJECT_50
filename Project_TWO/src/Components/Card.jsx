import PropTypes from "prop-types";
import { usePost } from "../Store/DesertProvider";
import { FaCartShopping } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Card = ({ item }) => {
  const { name, title, price, image } = item;
  const { deserts, addDesert, reduceItem } = usePost();

  const currentItem = deserts.find((d) => d.id === item.id);
  const quantity = currentItem ? currentItem.quantity : 0;
  const [status, setStatus] = useState(false);
  function handleAdd(item) {
    setStatus(true);
    addDesert(item);
  }
  // updating status
  useEffect(() => {
    if (quantity === 0) {
      setStatus(false); // reset back to "Add to Cart"
    } else {
      setStatus(true); // show quantity controls
    }
  }, [quantity]);

  return (
    <div
      className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 `}
    >
      <div className="relative mb-8">
        <img
          src={image}
          alt=""
          className={`w-[320px] h-[320px] rounded-md object-cover ${
            status ? "border-2 border-orange-500" : ""
          }`}
        />
        <div
          className={`${
            status ? "bg-orange-500 text-white" : "bg-white"
          } w-[180px] absolute border-2 flex items-center justify-center gap-4 border-orange-500 top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-3 rounded-full`}
        >
          {!status && <FaCartShopping className="text-orange-500" size={20} />}
          {status ? (
            // our new buttons layout here
            <div className="flex items-center justify-between w-full text-sm font-semibold">
              <button className="px-2 py-1" onClick={() => reduceItem(item.id)}>
                <FaMinusCircle size={20} />
              </button>
              <span>{quantity}</span>
              <button className="px-2 py-1" onClick={() => addDesert(item)}>
                <FaPlusCircle size={20} />
              </button>
            </div>
          ) : (
            <div
              className="text-sm font-semibold text-nowrap w-full text-center cursor-pointer"
              onClick={() => handleAdd(item)}
            >
              Add to Cart
            </div>
          )}
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
  item: PropTypes.array,
};
