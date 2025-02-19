import { FaCartShopping } from "react-icons/fa6";
// import image from "../assets/images/image-cake-desktop.jpg";
// import React from 'react'

const Card = ({name, title, price, image}) => {
  return (
    <div className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative mb-8">
        <img
          src={image}
          alt=""
          className="w-[320px] h-[320px] rounded-md object-cover"
        />
        <div className="absolute border-2 flex justify-between items-center gap-4 border-orange-500   top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5 py-4 rounded-full">
          <FaCartShopping className="text-orange-500" size={22} />
          <div className="text-sm font-semibold  ">Add to Cart</div>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-1">
          <span className="text-sm text-gray-500">{title}</span>
        </div>
        <h3 className="text-lg font-semibold line-clamp-2">{name}</h3>
        <h3 className="text-lg font-semibold line-clamp-2">{`$${price}`}</h3>
      </div>
    </div>
  );
};

export default Card;
