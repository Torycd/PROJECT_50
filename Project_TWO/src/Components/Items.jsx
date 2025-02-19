// import React from 'react'
import image from "../assets/images/image-cake-desktop.jpg";

const Items = () => {
  const DUMMY_ITEMS = [
    {
      type: "Waffle",
      name: "Waffle with Berries",
      price: 6.5,
      image: "",
    },
    {
      type: "Crème Brûlée",
      name: "Vanilla Bean Crème Brûlée",
      price: 7.0,
      image: "",
    },
    {
      type: "Macaron",
      name: "Macaron Mix of Five",
      price: 8.0,
      image: "",
    },
    {
      type: "Tiramisu",
      name: "Classic Tiramisu",
      price: 5.5,
      image: "",
    },
    {
      type: "Tiramisu",
      name: "Classic Tiramisu",
      price: 5.5,
      image: "",
    },
    {
      type: "Baklava",
      name: "Pistachio Baklava",
      price: 4.0,
      image: "",
    },
    {
      type: "Pie",
      name: "Lemon Meringue Pie",
      price: 5.0,
      image: "",
    },
    {
      type: "Cake",
      name: "Red Velvet Cake",
      price: 4.5,
      image: "",
    },
    {
      type: "Brownie",
      name: "Salted Caramel Brownie",
      price: 4.5,
      image: "",
    },
    {
      type: "Panna Cotta",
      name: "Vanilla Panna Cotta",
      price: 6.5,
      image: "",
    },
  ];
  return (
    <div className="grid grid-cols-4">
      {/* card */}
      <div className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <div className="relative h-48">
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-md object-cover"
          />
          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full">
            <span className="text-sm font-semibold">
              5.00
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-1">
            <span className="text-sm text-gray-500">htht</span>
          </div>
          <h3 className="text-lg font-semibold line-clamp-2">hh</h3>
        </div>
      </div>
    </div>
  );
};

export default Items;
