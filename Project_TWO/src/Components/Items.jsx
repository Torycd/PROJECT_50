import Card from "./Card";

import Waffle from "../assets/images/image-cake-desktop.jpg";
import Vanilla from "../assets/images/image-creme-brulee-desktop.jpg";
import Macaron from "../assets/images/image-macaron-desktop.jpg";
import Tiramisu from "../assets/images/image-tiramisu-desktop.jpg";
import Baklava from "../assets/images/image-baklava-desktop.jpg";
import Pie from "../assets/images/image-meringue-desktop.jpg";
import Cake from "../assets/images/image-cake-desktop.jpg";
import Brownie from "../assets/images/image-brownie-desktop.jpg";



const Items = () => {
  const DUMMY_ITEMS = [
    {
      type: "Waffle",
      name: "Waffle with Berries",
      price: 6.5,
      image: Waffle,
    },
    {
      type: "Crème Brûlée",
      name: "Vanilla Bean Crème Brûlée",
      price: 7.0,
      image: Vanilla,
    },
    {
      type: "Macaron",
      name: "Macaron Mix of Five",
      price: 8.0,
      image: Macaron,
    },
    {
      type: "Tiramisu",
      name: "Classic Tiramisu",
      price: 5.5,
      image: Tiramisu,
    },
    {
      type: "Baklava",
      name: "Pistachio Baklava",
      price: 4.0,
      image: Baklava,
    },
    {
      type: "Pie",
      name: "Lemon Meringue Pie",
      price: 5.0,
      image: Pie,
    },
    {
      type: "Cake",
      name: "Red Velvet Cake",
      price: 4.5,
      image: Cake,
    },
    {
      type: "Brownie",
      name: "Salted Caramel Brownie",
      price: 4.5,
      image: Brownie,
    },
    {
      type: "Panna Cotta",
      name: "Vanilla Panna Cotta",
      price: 6.5,
      image: "",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-8">
      {/* card */}

     {DUMMY_ITEMS.map((item) => (
        <Card key={item.name} name={item.name} title={item.type} price={item.price} image={item.image} />
     ))}
    </div>
  );
};

export default Items;
