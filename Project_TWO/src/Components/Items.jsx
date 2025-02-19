// import React from 'react'

import Card from "./Card";


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
    <div className="grid grid-cols-3">
      {/* card */}
     <Card/>
    </div>
  );
};

export default Items;
